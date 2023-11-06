import { IEvidence, ISubmission } from "@/utils/customTypes";
import { LinkIcon } from "@heroicons/react/24/outline";
import React from "react";

type TProps = {
  submission: ISubmission;
};

const CurrentEvidence = ({ submission }: TProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-8">
        <h4 className="font-semibold text-cens-brand text-lg">Tu entrega actual</h4>
      <div className="w-full rounded-lg border-2 bg-stone-200/80 px-4 py-3 font-normal backdrop-blur-sm">
        {submission.content.answer}
      </div>
      <div className="flex w-full flex-col justify-start gap-3 px-4">
        <label className="flex items-center gap-2 font-medium text-stone-500">
          <LinkIcon className="h-6" /> Adjunta un vínculo
        </label>
        <div className="w-full max-w-2xl rounded-lg border-2 bg-stone-200/80 px-4 py-2 font-normal backdrop-blur-sm">
          {submission.content.link}
        </div>
      </div>
    </div>
  );
};

export default CurrentEvidence;
