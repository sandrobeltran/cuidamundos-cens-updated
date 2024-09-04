import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import Game from "@/models/Game";
import User from "@/models/User";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { ObjectId, PipelineStage, Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { PipelineTransform } from "stream";
import { baseUserPipeline, baseUserProjection } from "@/utils/userUtils";

export async function PUT(req: NextRequest) {
  await mongodbConnect();
  const { headers } = req;
  const body = await req.json();

  try {
    const { uid: userId } = validateUserToken(headers);

    const uid = new Types.ObjectId(userId);

    let updatedUser;

    if (body.points) {
      await User.findByIdAndUpdate(uid, { $inc: { points: body.points } });

      const aggregationPipeline: PipelineStage[] = [
        { $match: { _id: new Types.ObjectId(uid) } },
        ...baseUserPipeline,
        {
          $project: baseUserProjection,
        },
      ];

      updatedUser = (await User.aggregate(aggregationPipeline))[0];
    }

    let updatedGame;

    const game = await Game.findById(body.gameId);

    if (game.type === "mobile") {
      if (!body.time && !body.score)
        return NextResponse.json<ICustomResponse>(
          {
            status: "error",
            message: "Necesitas pasar un tiempo y puntaje.",
          },
          { status: 400 },
        );
      // mobile game
      const newMatch = {
        uid,
        time: body.time,
        score: body.score,
      };
      updatedGame = await Game.findByIdAndUpdate(
        body.gameId,
        {
          $push: game.winners.find((e: Types.ObjectId) => uid.equals(e))
            ? { matches: newMatch }
            : { matches: newMatch, winners: uid },
        },
        { new: true },
      );
    } else {
      // trivia
      updatedGame = await Game.findByIdAndUpdate(
        body.gameId,
        { $push: { winners: uid } },
        { new: true },
      );
    }

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
