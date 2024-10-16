import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import adminRequired from "@/middlewares/adminRequired";
import Evidence from "@/models/Evidence";
import getCustomError from "@/utils/getCustomError";
import { PipelineStage } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { Types } from "mongoose";
import Institution from "@/models/Institution";

export async function GET(req: NextRequest) {
  adminRequired(req);
  await mongodbConnect();

  const id = req.nextUrl.searchParams.get("id") || "";

  try {
    const institutions = await Institution.find(id ? { _id: id } : {}, {
      submissions: 0,
    });

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Actividades obtenidas con éxito",
      data: institutions,
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
    const evidence = new Institution(body);
    await evidence.save();

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Institución creada con éxito",
      data: evidence,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
