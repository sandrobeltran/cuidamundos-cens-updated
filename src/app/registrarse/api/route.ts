import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import User from "@/models/User";
import { TSignupUser } from "@/utils/customTypes";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  await mongodbConnect();
  const body = (await req.json()) as TSignupUser;

  if (!body.email || !body.fullName || !body.passwordHash) {
    return NextResponse.json<ICustomResponse>(
      { status: "error", message: "La solicitud contiene datos incorrectos o está incompleta." },
      { status: 400 },
    );
  }

  try {
    const user = new User({
      ...body,
      triviaCompleted: false,
    });

    user.save();

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
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
