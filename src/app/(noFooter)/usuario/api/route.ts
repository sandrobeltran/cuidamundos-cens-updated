import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import User from "@/models/User";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";
import { PipelineStage, Types } from "mongoose";
import { validateUserToken } from "@/utils/validateUserToken";
import { baseUserPipeline, baseUserProjection } from "@/utils/userUtils";

export async function GET(req: NextRequest) {
  await mongodbConnect();
  const { headers } = req;

  try {
    const { uid } = validateUserToken(headers);

    const aggregationPipeline: PipelineStage[] = [
      {
        $match: { _id: new Types.ObjectId(uid) },
      },
      ...baseUserPipeline,
      {
        $project: baseUserProjection,
      },
    ];

    const user = (await User.aggregate(aggregationPipeline))[0];

    /* const user = await User.findById(uid, {
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
    }); */

    console.log(user);

    if (!user) {
      return NextResponse.json<ICustomResponse>(
        { status: "error", message: "El usuario no existe." },
        { status: 404 },
      );
    }

    // get user data

    return NextResponse.json<ICustomResponse>(
      {
        status: "success",
        message: "Datos del usuario obtenidos con éxito.",
        data: user,
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

export async function PUT(req: NextRequest) {
  await mongodbConnect();
  const { headers } = req;
  const body = await req.json();

  try {
    const { uid } = validateUserToken(headers);

    console.log(body);

    await User.findByIdAndUpdate(uid, body);

    const aggregationPipeline: PipelineStage[] = [
      {
        $match: { _id: new Types.ObjectId(uid) },
      },
      ...baseUserPipeline,
      {
        $project: baseUserProjection,
      },
    ];

    const user = (await User.aggregate(aggregationPipeline))[0];

    return NextResponse.json<ICustomResponse>(
      {
        status: "success",
        message: "Usuario actualizado con éxito.",
        data: user,
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
