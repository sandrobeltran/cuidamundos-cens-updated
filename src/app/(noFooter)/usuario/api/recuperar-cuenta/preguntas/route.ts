import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import User from "@/models/User";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";
import { PipelineStage, Types } from "mongoose";
import { validateUserToken } from "@/utils/validateUserToken";
import {
  baseUserPipeline,
  baseUserProjection,
  hashUserPassword,
  normalizeAnswer,
} from "@/utils/userUtils";
import { ISecurityQuestion, TUserData } from "@/utils/customTypes";
import bcrypt from "bcrypt";

export async function PUT(req: NextRequest) {
  await mongodbConnect();
  const { headers } = req;

  try {
    const { username, questions, newPassword } = await req.json();
    // Don't need user token for restorePassword
    //const { uid } = validateUserToken(headers);

    if (!username || !questions || !questions?.length || !newPassword) {
      return NextResponse.json<ICustomResponse>(
        {
          status: "error",
          message: "No se recibieron algunos campos",
        },
        {
          status: 400,
        },
      );
    }
    const user = (await User.findOne(
      { username },
      { securityQuestions: 1, passwordHash: 1 },
    )) as { securityQuestions: ISecurityQuestion[]; passwordHash: string };

    if (!user)
      return NextResponse.json<ICustomResponse>(
        {
          status: "error",
          message: "El usuario no existe",
        },
        {
          status: 404,
        },
      );

    let error = 0;

    user.securityQuestions.forEach((userQuestion, index) => {
      if (
        normalizeAnswer(userQuestion.answer) !==
        normalizeAnswer(questions[index].answer)
      ) {
        error++;
      }
    });

    if (error)
      return NextResponse.json<ICustomResponse>(
        {
          status: "error",
          message: "Respuestas inválidas",
        },
        {
          status: 401,
        },
      );

    const passwordMatch = await bcrypt.compare(newPassword, user.passwordHash);
    if (passwordMatch) {
      return NextResponse.json<ICustomResponse>(
        {
          message: "La nueva contraseña no puede ser igual a la anterior",
          status: "success",
        },
        {
          status: 400,
        },
      );
    }

    const hash = await hashUserPassword(newPassword);

    await User.updateOne(
      { username },
      {
        passwordHash: hash,
      },
    );

    return NextResponse.json<ICustomResponse>(
      {
        status: "success",
        message: "Contraseña restaurada con éxito. Inicia sesión",
        data: user,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
