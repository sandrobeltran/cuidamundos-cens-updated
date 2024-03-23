import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import Game from "@/models/Game";
import { IGame } from "@/utils/customTypes";
import getCustomError from "@/utils/getCustomError";
import { validateUserToken } from "@/utils/validateUserToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await mongodbConnect();
  const { headers } = req;

  try {
    // No token needed for fetch games
    const uid = validateUserToken(headers);

    const games = (await Game.find()) as any[];

    console.log(games.filter((game) => game.winners.includes(uid)));

    const gamesWon = games
      .filter((game) => game.winners.includes(uid))
      .map(({ title, cover, type, matches, _id }) => {
        let game: {
          _id: string;
          title: string;
          cover: string;
          type: typeof type;
          matches?: typeof matches;
        } = { title, cover, type, _id };

        if (matches.length) {
          game.matches = matches
            ?.filter((match: any) => match.uid === uid)
            .map(({ time, score }: any) => ({ time, score }));
        }

        return game;
      });

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: `Juegos ganados por ${uid}`,
      data: gamesWon,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
