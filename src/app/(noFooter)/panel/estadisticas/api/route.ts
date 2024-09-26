import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse, IPaginatedResponse } from "@/middleware";
import adminRequired from "@/middlewares/adminRequired";
import Evidence from "@/models/Evidence";
import User from "@/models/User";
import getCustomError from "@/utils/getCustomError";
import { baseUserPipeline } from "@/utils/userUtils";
import { validateUserToken } from "@/utils/validateUserToken";
import { PipelineStage, Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: any }) {
  adminRequired(req);
  await mongodbConnect();
  const { headers } = req;

  //? Search params
  const limit = req.nextUrl.searchParams.get("limit");
  const page = req.nextUrl.searchParams.get("page");
  const sort_by = req.nextUrl.searchParams?.get("sort_by") ?? "";
  const sort = req.nextUrl.searchParams?.get("sort") ?? "";

  try {
    const { uid } = validateUserToken(headers);

    const limittedPipeline: any[] = [
      { $match: { role: "USER" } },
      ...baseUserPipeline,
      {
        $lookup: {
          from: "games",
          let: { userId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: ["$$userId", "$winners"], // Check if the user_id is in the submissions.author array
                },
              },
            },
            {
              $project: {
                _id: 1,
                title: 1,
              },
            },
          ],
          as: "userGamesWon",
        },
      },
      {
        $addFields: {
          activitiesAmount: {
            $size: { $ifNull: ["$userSubmissions.submissions", []] },
          },
          certificatesAmount: { $size: { $ifNull: ["$userGamesWon", []] } },
        },
      },
      {
        $project: {
          name: 1,
          lastname: 1,
          avatar: 1,
          points: 1,
          role: 1,
          "institutionData.name": 1,
          "institutionData.city": 1,
          "institutionData._id": 1,
          "institutionData.classCode": 1,
          activitiesAmount: 1,
          certificatesAmount: 1,
          userGamesWon: 1,
        },
      },
    ];

    if (sort_by && sort) {
      const sort_temp: any = {};
      sort_temp[sort_by] = sort === "asc" ? 1 : -1;
      limittedPipeline.push({ $sort: sort_temp });
    } else {
      limittedPipeline.push({ $sort: { points: -1 } });
    }

    // Add pagination to the aggregation pipeline
    if (limit && page) {
      const skip = (parseInt(page) - 1) * parseInt(limit);
      limittedPipeline.push({ $skip: skip });
      limittedPipeline.push({ $limit: parseInt(limit) });
    }

    const aggregationPipeline: PipelineStage[] = [
      {
        $facet: {
          results: limittedPipeline,
          totalCount: [
            { $match: { role: "USER" } },
            ...(baseUserPipeline as any),
            { $count: "total" },
          ],
        },
      },
    ];

    const users = await User.aggregate(aggregationPipeline);

    const results = users[0].results;
    const totalCount =
      users[0].totalCount.length > 0 ? users[0].totalCount[0].total : 0;

    return NextResponse.json<IPaginatedResponse>(
      {
        status: "success",
        message: "Estadísticas obtenidas con éxito.",
        data: {
          results,
          metadata: {
            total: totalCount,
            currentPage: page ? parseInt(page) : 1,
            totalPages: limit ? Math.ceil(totalCount / parseInt(limit)) : 1,
          },
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
