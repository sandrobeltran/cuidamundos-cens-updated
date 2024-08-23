import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import adminRequired from "@/middlewares/adminRequired";
import Evidence from "@/models/Evidence";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  adminRequired(req);
  await mongodbConnect();

  try {
    const evidences = await Evidence.find();

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Actividades obtenidas con éxito",
      data: evidences,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json<ICustomResponse>(
      {
        status: "error",
        message: getCustomError(error).message,
      },
      { status: 400 },
    );
  }
}

export async function POST(req: NextRequest) {
  adminRequired(req);
  await mongodbConnect();
  const body = await req.json();

  try {
    //? In this point the middleware has validated the admin key
    const evidence = new Evidence(body);
    await evidence.save();

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Evidencia creada con éxito",
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
