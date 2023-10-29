import { ICustomResponse } from "@/middleware";
import Evidence from "@/models/Evidence";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, context: { params: any }) {
    const { headers } = req
    const evidenceId = context.params.id
    const body = await req.json()

    try {
        const uid = validateUserToken(headers)


        //? In this point the middleware has validated the admin key
        const evidence = await Evidence.findById(evidenceId)
        if (!evidence) {
            return NextResponse.json(
                { status: "error", message: "La evidencia no existe o ha sido eliminada" },
                { status: 404 },
            );
        }

        const newComment = {
            _id: new Date().getTime(),
            author: uid,
            content: body.content
        }

        const updatedEvidence = await Evidence.findByIdAndUpdate(evidenceId, { $push: { comments: newComment } }, { new: true })

        return NextResponse.json<ICustomResponse>({ status: "success", message: "Comentario publicado con éxito", data: updatedEvidence.comments })
    }
    catch (error) {
        return NextResponse.json(
            { status: "error", message: getCustomError(error).message },
            { status: 400 },
        );
    }
}