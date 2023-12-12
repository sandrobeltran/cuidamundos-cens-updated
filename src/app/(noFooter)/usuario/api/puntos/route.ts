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
  const body = await req.json();

  try {
    const uid = validateUserToken(headers);

    let updatedUser;

    if (body.points) {
      updatedUser = await User.findByIdAndUpdate(
        uid,
        { $inc: { points: body.points } },
        {
          new: true,
          fields: {
            _id: 1,
            name: 1,
            lastname: 1,
            city: 1,
            username: 1,
            createdAt: 1,
            bio: 1,
            avatar: 1,
            points: 1
          }
        },
      )
    }

    const updatedGame = await Game.findByIdAndUpdate(body.gameId, { $push: { winners: uid } }, { new: true });

    return NextResponse.json<ICustomResponse>(
      {
        status: "success",
        message: "Usuario actualizado con éxito.",
        data: { updatedUser, updatedGame },
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
