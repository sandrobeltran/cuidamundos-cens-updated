import mongodbConnect from "@/db/mongodbConnect"
import { ICustomResponse } from "@/middleware"
import Game from "@/models/Game"
import Message from "@/models/Message"
import getCustomError from "@/utils/getCustomError"
import { validateUserToken } from "@/utils/validateUserToken"
import { NextRequest, NextResponse } from "next/server"


export async function POST(req: NextRequest) {
    await mongodbConnect()
    const body = await req.json()

    try {
        // No token needed for send email message
        const { name, email, phone, message } = body

        if (!name || !email || !phone || !message) {
            return NextResponse.json<ICustomResponse>(
                { status: "error", message: "La solicitud contiene datos incorrectos o está incompleta." },
                { status: 400 },
            );
        }

        const newMessage = new Message(body)
        await newMessage.save()

        return NextResponse.json<ICustomResponse>({
            status: "success",
            message: "Mensaje enviado con éxito",
        })
    }
    catch (error) {
        return NextResponse.json(
            { status: "error", message: getCustomError(error).message },
            { status: 400 },
        );
    }
}