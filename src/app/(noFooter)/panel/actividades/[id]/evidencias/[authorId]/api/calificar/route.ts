import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import adminRequired from "@/middlewares/adminRequired";
import Evidence from "@/models/Evidence";
import User from "@/models/User";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { PipelineStage, Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: { params: any }) {
  adminRequired(req);
  await mongodbConnect();
  const { headers } = req;
  const body = await req.json(); // { grade: string }
  const authorId = context.params.authorId;

  try {
    const { uid } = validateUserToken(headers);

    const updatedEvidence = await Evidence.updateOne(
      { "submissions.author": new Types.ObjectId(authorId) },
      {
        $set: {
          "submissions.$.grade": parseFloat(body.grade),
        },
      },
      {
        new: true,
      },
    );

    return NextResponse.json<ICustomResponse>(
      {
        status: "success",
        message: "Usuario actualizado con éxito.",
        data: updatedEvidence,
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
