import { IEvidenceFile, ISubmission } from "@/utils/customTypes";
import { LinkIcon } from "@heroicons/react/24/outline";
import React from "react";
import FileCard from "./FileCard";
import Link from "next/link";
import { getFileUrl } from "@/utils/evidenceUtils";
import { FaFolder } from "react-icons/fa6";

type TProps = {
  submission: ISubmission;
  files: IEvidenceFile[] | null;
};

const CurrentEvidence = ({ submission, files }: TProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <h4 className="text-lg font-semibold text-cens-brand">
        Tu entrega actual
      </h4>
      <div className="w-full rounded-lg border-2 bg-stone-200/80 px-4 py-3 font-normal backdrop-blur-sm">
        {submission.content.answer}
      </div>
      <div className="flex w-full flex-col justify-start gap-3">
        <label className="flex items-center gap-2 font-medium text-stone-500">
          <LinkIcon className="h-6" /> Adjunta un vínculo
        </label>
        <div className="w-full max-w-2xl rounded-lg border-2 bg-stone-200/80 px-4 py-2 font-normal backdrop-blur-sm">
          {submission.content.link}
        </div>
      </div>

      {/* FILES */}
      <div className="flex w-full flex-col items-start gap-3">
        <label className="flex w-full items-center gap-1">
          <FaFolder className="text-lg text-yellow-500" />
          <p className="font-medium">Archivos Adjuntos</p>
        </label>
        <div className="flex w-full justify-start gap-4">
          {files ? (
            files.length ? (
              files.map((file, index) => {
                const downloadLink = getFileUrl(file);

                return (
                  <a key={index} target="_blank" href={downloadLink}>
                    <FileCard filename={file.filename} type={file.type} />
                  </a>
                );
              })
            ) : (
              <p className="text-stone-500">Sin archivos</p>
            )
          ) : (
            <p>Cargando archivos...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrentEvidence;
