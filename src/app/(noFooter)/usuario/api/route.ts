import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import User from "@/models/User";
import { TLoginUser, TSignupUser } from "@/utils/customTypes";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { validateUserToken } from "@/utils/validateUserToken";

export async function GET(req: NextRequest) {
  await mongodbConnect();
  const { headers } = req;

  try {
    const uid = validateUserToken(headers)

    const user = await User.findById(uid, {
      _id: 1,
      name: 1,
      lastname: 1,
      email: 1,
      createdAt: 1,
      birthdate: 1,
      address: 1,
      phone: 1,
      school: 1,
      bio: 1,
      avatar: 1
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

export async function PUT(req: NextRequest) {
  await mongodbConnect();
  const { headers } = req;
  const body = await req.json()

  try {
    const uid = validateUserToken(headers)

    const user = await User.findByIdAndUpdate(uid, body, { new: true });

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
