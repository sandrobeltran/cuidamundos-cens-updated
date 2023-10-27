import { ICustomResponse } from "@/middleware";
import Evidence from "@/models/Evidence";
import { ISubmission } from "@/utils/customTypes";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: { params: any }) {
    const { headers } = req
    const body = await req.json()

    const evidenceId = context.params.id
    try {
        const uid = validateUserToken(headers)

        //? Construct the submission object
        const submission = {
            content: body,//answer and link
            author: uid,
            lastUpdatedAt: Date.now(),
            state: 1,
            submitedAt: Date.now()
        }

        //? In this point the middleware has validated the admin key
        const evidence = await Evidence.findByIdAndUpdate(evidenceId, { $push: { submissions: submission } }, { new: true })

        return NextResponse.json<ICustomResponse>({ status: "success", message: "Entrega añadida con éxito", data: evidence })
    }
    catch (error) {
        return NextResponse.json(
            { status: "error", message: getCustomError(error).message },
            { status: 400 },
        );
    }

}