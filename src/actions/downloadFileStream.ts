import mongodbConnect from "@/db/mongodbConnect";
import { Types } from "mongoose";

export async function downloadFileStream(filesIds: string[]): Promise<any> {
  const { bucket } = (await mongodbConnect())!;

  const urls = await Promise.all(
    filesIds.map(async (id) => {
      const downloadStream = bucket.openDownloadStream(new Types.ObjectId(id));

      downloadStream.on("data", (chunk) => {
        console.log(chunk);
      });

      return downloadStream;
    }),
  );

  return urls;
}
