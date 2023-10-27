import { ICustomResponse } from "@/middleware";
import Evidence from "@/models/Evidence";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: any }) {
    const { headers } = req
    const evidenceId = context.params.id

    try {

        validateUserToken(headers)

        //? In this point the middleware has validated the admin key
        const evidence = await Evidence.findById(evidenceId)

        return NextResponse.json<ICustomResponse>({ status: "success", message: "Evidencia obtenida con éxito", data: evidence })
    }
    catch (error) {
        return NextResponse.json(
            { status: "error", message: getCustomError(error).message },
            { status: 400 },
        );
    }
}