import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import User from "@/models/User";
import { TLoginUser, TSignupUser } from "@/utils/customTypes";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { MongooseError } from "mongoose";

export async function POST(req: NextRequest) {
  await mongodbConnect();
  const body = (await req.json()) as TLoginUser;

  if (!body.email || !body.password) {
    return NextResponse.json<ICustomResponse>(
      {
        status: "error",
        message: "La solicitud contiene datos incorrectos o está incompleta.",
      },
      { status: 400 },
    );
  }

  try {
    // validate user
    const user = await User.findOne({ email: body.email });

    if (!user) {
      return NextResponse.json<ICustomResponse>(
        { status: "error", message: "El usuario no existe." },
        { status: 404 },
      );
    }

    const passwordMatch = await user.comparePassword(body.password);

    if (!passwordMatch) {
      return NextResponse.json<ICustomResponse>(
        {
          status: "error",
          message:
            "La autenticación ha fallado. Verifica tu nombre de usuario y contraseña.",
        },
        { status: 401 },
      );
    }

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
        message: "Inicio de sesión con éxito.",
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
