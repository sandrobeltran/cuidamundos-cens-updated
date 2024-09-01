import { FILES_DICT } from "@/constants/evidencesConstants";
import { IEvidenceFile } from "@/utils/customTypes";
import React from "react";

interface IProps {
  filename: string;
  type: string;
}

const FileCard = ({ filename, type }: IProps) => {
  const extension = type || "default";
  const details =
    FILES_DICT[extension as keyof typeof FILES_DICT] || FILES_DICT["default"];

  return (
    <div className="flex aspect-square h-28 w-28 min-w-[7rem] flex-col items-center justify-center gap-2 rounded-lg p-2 text-center shadow-md shadow-stone-300">
      <details.Icon className="text-5xl text-cens-brand" />
      <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs text-stone-500">
        {filename}
      </p>
    </div>
  );
};

export default FileCard;
