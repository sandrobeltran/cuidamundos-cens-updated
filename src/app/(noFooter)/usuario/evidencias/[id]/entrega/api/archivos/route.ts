import mongodbConnect from "@/db/mongodbConnect";
import { ICustomResponse } from "@/middleware";
import getCustomError from "@/utils/getCustomError";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { filesIds, authorId } = await req.json();

  if (!filesIds || !filesIds?.length) {
    return NextResponse.json<ICustomResponse>(
      {
        message: "Petición mal formada",
        status: "error",
      },
      {
        status: 400,
      },
    );
  }

  try {
    const { bucket, client } = (await mongodbConnect())!;

    const db = client.connection.db;
    const filesCollection = db.collection("fs.files");

    const chunks = await Promise.all(
      filesIds.map(
        async (id: string) =>
          await new Promise(async (res, rej) => {
            const downloadStream = bucket.openDownloadStream(
              new Types.ObjectId(id),
            );

            const fileMetadata = await filesCollection.findOne({
              _id: new Types.ObjectId(id),
            });

            if (!fileMetadata) {
              return NextResponse.json(
                { error: "File not found" },
                { status: 404 },
              );
            }

            const type =
              (fileMetadata.filename as string).split(".").pop() || "";

            let chunksData: any = [];

            downloadStream.on("data", (chunk: Buffer) => {
              chunksData.push(chunk);
            });

            downloadStream.on("end", () => {
              let final = Buffer.concat(chunksData);
              res({
                _id: fileMetadata._id,
                chunk: final,
                type: type,
                filename: fileMetadata.filename,
              });
            });
          }),
      ),
    );

    return NextResponse.json<ICustomResponse>(
      {
        message: "Archivos obtenidos con éxito",
        status: "success",
        data: chunks,
      },
      {
        headers: {
          "Content-Type": "application/octet-stream",
          "Content-Disposition": 'attachment; filename="example.txt"',
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: getCustomError(error).message },
      { status: 400 },
    );
  }
}
