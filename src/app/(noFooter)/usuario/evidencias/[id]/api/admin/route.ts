import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import adminRequired from "@/middlewares/adminRequired";
import Evidence from "@/models/Evidence";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: { params: any }) {
  adminRequired(req);
  await mongodbConnect();
  const body = await req.json();
  const evidenceId = context.params.id;

  try {
    //? In this point the middleware has validated the admin key

    /* const evidence = await Evidence.findById(evidenceId);
    if (!evidence)
      return NextResponse.json<ICustomResponse>({
        status: "error",
        message: "Evidencia no encontrada",
      }); */

    const updatedEvidence = await Evidence.findByIdAndUpdate(evidenceId, body, {
      new: true,
    });

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Evidencia creada con éxito",
      data: updatedEvidence,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
