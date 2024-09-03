import { baseUserPipeline } from "@/app/(noFooter)/usuario/api/route";
import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import adminRequired from "@/middlewares/adminRequired";
import Evidence from "@/models/Evidence";
import User from "@/models/User";
import getCustomError from "@/utils/getCustomError";
import { PipelineStage, Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: any }) {
  adminRequired(req);
  const { client, bucket } = (await mongodbConnect())!;
  const authorId = req.nextUrl.searchParams.get("authorId") || "";
  const evidenceId = context.params.id;

  const db = client.connection.db;
  const filesCollection = db.collection("fs.files");

  try {
    //? In this point the middleware has validated the admin key

    // Validate if activity exists
    const evidence = await Evidence.findById(evidenceId);

    if (!evidence)
      return NextResponse.json<ICustomResponse>({
        status: "error",
        message: "La actividad no existe o ha sido eliminada",
      });

    let rawSubmissions = evidence.submissions;

    if (authorId) {
      rawSubmissions = rawSubmissions.filter((e: any) =>
        new Types.ObjectId(authorId).equals(e.author),
      );
    }

    let usersDataPool: {
      [key: string]: {
        name: string;
        lastname: string;
        avatar: string;
        role: string;
      } | null;
    } = {};

    const submissions = await Promise.all(
      rawSubmissions.map(async (submission: any) => {
        if (!Object.keys(usersDataPool).includes(submission.author)) {
          // first time fetching author data

          const aggregationPipeline: PipelineStage[] = [
            {
              $match: { _id: submission.author },
            },
            ...baseUserPipeline,
            {
              $project: {
                name: 1,
                lastname: 1,
                avatar: 1,
                role: 1,
                points: 1,
                "institutionData.name": 1,
                "institutionData.city": 1,
                "institutionData._id": 1,
                "institutionData.classCode": 1,
              },
            },
          ];

          /* const userData = await User.findById(submission.author, {
            name: 1,
            lastname: 1,
            avatar: 1,
            role: 1,
          }); */

          const userData = (await User.aggregate(aggregationPipeline))[0];

          if (userData) {
            usersDataPool[submission.author] = userData;
          } else {
            usersDataPool[submission.author] = null;
          }
        }

        /* const files = await Promise.all(
          submission.content.files.map(
            async (e: string) =>
              await new Promise(async (res, rej) => {
                const downloadStream = bucket.openDownloadStream(
                  new Types.ObjectId(e),
                );

                const fileMetadata = await filesCollection.findOne({
                  _id: new Types.ObjectId(e),
                });

                if (!fileMetadata) {
                  return NextResponse.json(
                    { error: "File not found" },
                    { status: 404 },
                  );
                }

                console.log(fileMetadata);

                const type =
                  (fileMetadata.filename as string).split(".").pop() || "";

                downloadStream.on("data", (chunk: Buffer) => {
                  res({ chunk, type: type });
                });
              }),
          ),
        ); */

        return {
          ...submission,
          author: usersDataPool[submission.author],
          /*  content: {
            ...submission.content,
            files,
          }, */
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
