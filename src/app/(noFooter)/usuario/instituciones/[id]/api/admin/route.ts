import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import adminRequired from "@/middlewares/adminRequired";
import Evidence from "@/models/Evidence";
import Institution from "@/models/Institution";
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

    const updatedInstitution = await Institution.findByIdAndUpdate(
      evidenceId,
      body,
      {
        new: true,
      },
    );

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Institución creada con éxito",
      data: updatedInstitution,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
