import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import Evidence from "@/models/Evidence";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    await mongodbConnect()
    const { headers } = req

    try {
        validateUserToken(headers)

        const evidences = await Evidence.find()

        return NextResponse.json<ICustomResponse>({
            status: "success",
            message: "Evidencias obtenidas con éxito",
            data: evidences
        })
    }
    catch (error) {
        return NextResponse.json(
            { status: "error", message: getCustomError(error).message },
            { status: 400 },
        );
    }
}