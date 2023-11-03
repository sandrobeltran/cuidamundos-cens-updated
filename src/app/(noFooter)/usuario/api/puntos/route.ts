import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import Game from "@/models/Game";
import User from "@/models/User";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
    await mongodbConnect();
    const { headers } = req;
    const body = await req.json()

    try {
        const uid = validateUserToken(headers)

        const user = await User.findByIdAndUpdate(uid, { $inc: { points: body.points } }, { new: true });

        await Game.findByIdAndUpdate(body.gameId, { $push: { winners: uid } })

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
