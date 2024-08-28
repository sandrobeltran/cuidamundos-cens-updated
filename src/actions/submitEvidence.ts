"use server";

import mongodbConnect from "@/db/mongodbConnect";
import Evidence from "@/models/Evidence";
import { IAdminAuthor, IEvidence } from "@/utils/customTypes";
import { validateUserToken } from "@/utils/validateUserToken";
import { Types } from "mongoose";
import { headers } from "next/headers";

export async function submitEvidence(
  formData: FormData,
  evidenceId: string,
  token: string,
) {
  const { bucket } = (await mongodbConnect())!;

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  const { uid } = validateUserToken(headers);

  const evidence: IEvidence | null = await Evidence.findById(evidenceId);
  if (!evidence) {
    return {
      status: "error",
      message: "La evidencia no existe o ha sido eliminada",
    };
  }

  const submission = evidence.submissions.find((submission) =>
    new Types.ObjectId(uid!).equals(submission.author as string),
  );

  let updatedEvidence;
  const body = Object.fromEntries(formData.entries());

  console.log(body);
  // Validate if there is a submission yet
  if (submission) {
    // Modify the current submission
    //? Construct the submission object
    const newSubmission = {
      content: body, //answer and link
      lastUpdatedAt: new Date(),
      state: 1,
    };

    //? In this point the middleware has validated the admin key
    updatedEvidence = await Evidence.findOneAndUpdate(
      { "submissions.author": new Types.ObjectId(uid) },
      {
        $set: {
          "submissions.$.content": body,
          "submissions.$.lastUpdatedAt": new Date(),
          "submissions.$.state": 1,
        },
      },
      { new: true },
    );
  } else {
    // Is a new submission
    //? Construct the submission object
    const newSubmission = {
      content: body, //answer and link
      author: new Types.ObjectId(uid),
      lastUpdatedAt: new Date(),
      state: 1,
      submitedAt: new Date(),
    };

    //? In this point the middleware has validated the admin key
    updatedEvidence = await Evidence.findByIdAndUpdate(
      evidenceId,
      { $push: { submissions: newSubmission } },
      { new: true },
    );
  }
}
