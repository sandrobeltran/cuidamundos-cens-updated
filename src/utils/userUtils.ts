import { PipelineStage } from "mongoose";
import bcrypt from "bcrypt";

// Exporting user pipeline for reusability
export const baseUserPipeline: PipelineStage[] = [
  {
    $lookup: {
      from: "institutions",
      localField: "institutionId",
      foreignField: "_id",
      as: "institutionData",
    },
  },
  {
    $unwind: { path: "$institutionData", preserveNullAndEmptyArrays: true },
  },
  {
    $lookup: {
      from: "evidences",
      let: { userId: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $in: ["$$userId", "$submissions.author"], // Check if the user_id is in the submissions.author array
            },
          },
        },
        {
          $project: {
            submissions: {
              $filter: {
                input: "$submissions",
                as: "submission",
                cond: { $eq: ["$$submission.author", "$$userId"] }, // Filter submissions to include only those with the matching author
              },
            },
          },
        },
      ],

      as: "userSubmissions",
    },
  },
  {
    $unwind: { path: "$userSubmissions", preserveNullAndEmptyArrays: true },
  },
  {
    $addFields: {
      "institutionData.classCode": "$classCode",
      hasSecurityQuestions: {
        $ne: [{ $size: { $ifNull: ["$securityQuestions", []] } }, 0],
      },
      points: {
        $add: ["$points", { $sum: "$userSubmissions.submissions.grade" }],
      },
    },
  },
];

export const baseUserProjection = {
  _id: 1,
  name: 1,
  lastname: 1,
  city: 1,
  username: 1,
  createdAt: 1,
  bio: 1,
  avatar: 1,
  points: 1,
  role: 1,
  "institutionData.name": 1,
  "institutionData.city": 1,
  "institutionData._id": 1,
  "institutionData.classCode": 1,
  hasSecurityQuestions: 1,
  totalPoints: 1,
};

export async function hashUserPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return hash;
}

export function normalizeAnswer(answer: string): string {
  console.log(answer.trim().toLowerCase());
  return answer.trim().toLowerCase();
}
