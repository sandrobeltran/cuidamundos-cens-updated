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
    const authorsId = req.nextUrl.searchParams.get("authorsId")?.split(",")

    try {
        validateUserToken(headers)

        const user = await User.find({ $or: authorsId?.map(id => ({ _id: id })) }, {
            name: 1,
            lastname: 1,
            avatar: 1,
            _id: 1
        });

        if (!user) {
            return NextResponse.json<ICustomResponse>(
                { status: "error", message: "El usuario no existe." },
                { status: 404 },
            );
        }

        return NextResponse.json<ICustomResponse>(
            {
                status: "success",
                message: "Datos del autor obtenidos con éxito.",
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