import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import Game from "@/models/Game";
import getCustomError from "@/utils/getCustomError";
import { NextResponse } from "next/server";

export async function GET() {
    await mongodbConnect()

    try {

        const games = await Game.find()

        return NextResponse.json<ICustomResponse>({
            status: "success",
            message: "Evidencias obtenidas con éxito",
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