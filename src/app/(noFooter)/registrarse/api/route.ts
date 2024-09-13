import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import User from "@/models/User";
import { TSignupUser } from "@/utils/customTypes";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getRandomAvatar } from "@/utils/avatarsData";
import { Types } from "mongoose";

export async function POST(req: NextRequest) {
  await mongodbConnect();
  const body = (await req.json()) as TSignupUser;

  if (
    !body.name ||
    !body.username ||
    !body.city ||
    !body.passwordHash ||
    !body.lastname
  ) {
    return NextResponse.json<ICustomResponse>(
      {
        status: "error",
        message: "La solicitud contiene datos incorrectos o está incompleta.",
      },
      { status: 400 },
    );
  }

  const avatar = getRandomAvatar();

  try {
    const user = new User({
      ...body,
      avatar,
      securityQuestions: [],
      institutionId: body.institutionId
        ? new Types.ObjectId(body.institutionId)
        : null,
      role: "USER",
      points: 0,
    });

    console.log(user);

    await user.save();

    const token = jwt.sign(
      { _id: user._id },
      process.env.APP_SECRET as string,
      {
        expiresIn: 60 * 60 * 24,
      },
    );

    return NextResponse.json<ICustomResponse>(
      {
        status: "success",
        message: "Usuario creado con éxito.",
        data: { token },
      },
      { status: 200 },
    );
  } catch (error) {
    if ((error as any).code === 11000) {
      // Username already taken
      return NextResponse.json(
        { status: "error", message: "Este nombre de usuario ya está ocupado" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
