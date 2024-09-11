"use server";

import mongodbConnect from "@/db/mongodbConnect";
import Evidence from "@/models/Evidence";
import { IEvidence } from "@/utils/customTypes";
import { validateUserToken } from "@/utils/validateUserToken";
import { Types } from "mongoose";
import { Readable } from "stream";

interface IProps {
  formData: FormData;
  evidenceId: string;
  token: string;
  deletedFilesIds?: string[];
}

export async function submitEvidence({
  formData,
  evidenceId,
  token,
  deletedFilesIds,
}: IProps) {
  const { bucket } = (await mongodbConnect())!;

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);

  const { uid } = validateUserToken(headers);

  const evidence: IEvidence | null = await Evidence.findById(evidenceId);
  if (!evidence) {
    return {
      status: "error",
      message: "La evidencia no existe o ha sido eliminada",
    };
  }

  const answer = formData.get("answer");
  const link = formData.get("link");

  const files = Array.from(formData.values()).filter(
    (e) => e instanceof File,
  ) as File[];

  /* if (deletedFilesIds) {
    await Promise.all(
      deletedFilesIds.map(async (id) => {
        await bucket.delete(new Types.ObjectId(id));
      }),
    );
  } */

  const submission = evidence.submissions.find((submission) =>
    new Types.ObjectId(uid!).equals(submission.author as string),
  );

  const currentFilesIds = submission
    ? submission?.content.files.filter(
        (file) => !deletedFilesIds?.includes(file.toString()),
      )
    : [];

  const filesIds = await Promise.all(
    files.map(async (file) => {
      let splittedName = file.name.split(".");
      let type = splittedName.pop();
      let filename = splittedName.join();

      // let fileRef = Date.now() + file.name;
      let fileRef = `${filename}_${Date.now()}.${type}`;

      const buffer = Buffer.from(await file.arrayBuffer());
      const stream = Readable.from(buffer);
      const uploadStream = bucket.openUploadStream(fileRef, {});
      await stream.pipe(uploadStream);

      return uploadStream.id;
    }),
  );

  let content = {
    answer,
    link,
    files: [...filesIds, ...currentFilesIds],
  };

  let updatedEvidence;

  // Validate if there is a submission yet
  if (submission) {
    // Modify the current submission
    //? Construct the submission object
    const newSubmission = {
      content: content, //answer and link
      lastUpdatedAt: new Date(),
      state: 1,
    };

    //? In this point the middleware has validated the admin key
    updatedEvidence = await Evidence.findOneAndUpdate(
      { _id: evidenceId, "submissions.author": new Types.ObjectId(uid) },
      {
        $set: {
          "submissions.$.content": content,
          "submissions.$.lastUpdatedAt": new Date(),
          "submissions.$.state": 1,
        },
      },
      { new: true },
    );
  } else {
    // Is a new submission
    //? Construct the submission object
    const newSubmission = {
      content: content, //answer and link
      author: new Types.ObjectId(uid),
      lastUpdatedAt: new Date(),
      state: 1,
      submitedAt: new Date(),
    };

    //? In this point the middleware has validated the admin key
    updatedEvidence = await Evidence.findByIdAndUpdate(
      evidenceId,
      { $push: { submissions: newSubmission } },
      { new: true },
    );
  }

  return {
    status: "success",
    message: "Evidencia subida con éxito",
  };
}
