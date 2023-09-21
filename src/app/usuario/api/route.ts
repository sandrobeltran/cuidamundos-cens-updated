import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import User from "@/models/User";
import { TLoginUser, TSignupUser } from "@/utils/customTypes";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  await mongodbConnect();
  const { headers } = req;
  const token = headers.get("Authorization")?.substring(7) as string;

  try {
    // verify token signature
    const tokenPayload = jwt.verify(
      token,
      process.env.APP_SECRET as string,
    ) as jwt.JwtPayload;

    const user = await User.findById(tokenPayload._id, {
      fullName: 1,
      email: 1,
      triviaCompleted: 1,
      createdAt: 1,
    });
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
