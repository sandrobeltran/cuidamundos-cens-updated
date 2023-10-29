import mongodbConnect from "@/db/mongodbConnect"
import { ICustomResponse } from "@/middleware"
import Game from "@/models/Game"
import getCustomError from "@/utils/getCustomError"
import { validateUserToken } from "@/utils/validateUserToken"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: NextRequest) {
    await mongodbConnect()
    const { headers } = req

    try {
        validateUserToken(headers)

        const games = await Game.find()

        return NextResponse.json<ICustomResponse>({
            status: "success",
            message: "Juegos obtenidos con éxito",
            data: games
        })
    }
    catch (error) {
        return NextResponse.json(
            { status: "error", message: getCustomError(error).message },
            { status: 400 },
        );
    }
}