import { ICustomResponse } from "@/middleware";
import { validateUserToken } from "@/utils/validateUserToken";
import { NextRequest, NextResponse } from "next/server";

export default function adminRequired(req: NextRequest) {
  try {
    const { role } = validateUserToken(req.headers);

    if (!role) {
      throw new Error();
    }

    if (role != "ADMIN") {
      return NextResponse.json<ICustomResponse>(
        {
          status: "error",
          message: "No autorizado",
        },
        { status: 403 },
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json<ICustomResponse>(
      {
        status: "error",
        message: "Token inválido",
      },
      { status: 400 },
    );
  }
}
