import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import Evidence from "@/models/Evidence";
import { IAdminAuthor, IEvidence, ISubmission } from "@/utils/customTypes";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import {  } from "next/server"

export async function PUT(req: NextRequest, context: { params: any }) {
  const { headers } = req;

  const evidenceId = context.params.id;
  try {
    const body = req.json();
    const { bucket } = (await mongodbConnect())!;
    const { uid } = validateUserToken(headers);

    const evidence: IEvidence | null = await Evidence.findById(evidenceId);
    if (!evidence) {
      return NextResponse.json(
        {
          status: "error",
          message: "La evidencia no existe o ha sido eliminada",
        },
        { status: 404 },
      );
    }
    const submission = evidence.submissions.find(
      (submission) => (submission.author as IAdminAuthor)._id === uid,
    );

    let updatedEvidence;

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
    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Entrega añadida con éxito",
      data: updatedEvidence,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
