import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import Institution from "@/models/Institution";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await mongodbConnect();

  const id = req.nextUrl.searchParams.get("id") || "";

  try {
    const institutions = await Institution.find(id ? { _id: id } : {}, {
      createdAt: 0,
      updatedAt: 0,
    });

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Instituciones obtenidas con éxito",
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
