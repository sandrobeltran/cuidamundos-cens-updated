import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import adminRequired from "@/middlewares/adminRequired";
import Evidence from "@/models/Evidence";
import User from "@/models/User";
import getCustomError from "@/utils/getCustomError";
import { NextRequest, NextResponse } from "next/server";
import { object } from "yup";

export async function GET(req: NextRequest, context: { params: any }) {
  adminRequired(req);
  await mongodbConnect();
  const evidenceId = context.params.id;

  try {
    //? In this point the middleware has validated the admin key

    // Validate if activity exists
    const evidence = await Evidence.findById(evidenceId);

    if (!evidence)
      return NextResponse.json<ICustomResponse>({
        status: "error",
        message: "La actividad no existe o ha sido eliminada",
      });

    const rawSubmissions = evidence.submissions;

    let usersDataPool: {
      [key: string]: {
        name: string;
        lastname: string,
        avatar: string;
        role: string;
      } | null;
    } = {};

    const submissions = await Promise.all(
      rawSubmissions.map(async (submission: any) => {
        if (!Object.keys(usersDataPool).includes(submission.author)) {
          const userData = await User.findById(submission.author, {
            name: 1,
            lastname: 1,
            avatar: 1,
            role: 1,
          });

          if (userData) {
            usersDataPool[submission.author] = userData;
          } else {
            usersDataPool[submission.author] = null;
          }
        }

        return {
          ...submission,
          author: usersDataPool[submission.author],
        };
      }),
    );

    return NextResponse.json<ICustomResponse>({
      status: "success",
      message: "Evidencia creada con éxito",
      data: submissions,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
