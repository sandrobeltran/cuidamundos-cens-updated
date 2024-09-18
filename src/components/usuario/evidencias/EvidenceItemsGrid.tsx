import { STATES_DICT } from "@/constants/evidencesConstants";
import { useUserStore } from "@/store/useUserStore";
import { IEvidence, ISubmission } from "@/utils/customTypes";
import dateToString, { getRemainingTime } from "@/utils/dateToString";
import { getSubmissionState } from "@/utils/evidenceUtils";
import clsx from "clsx";
import React from "react";

type TProps = {
  evidence: IEvidence;
};

const EvidenceItemsGrid = ({ evidence }: TProps) => {
  const user = useUserStore((state) => state.user);

  const submission = evidence.submissions.find(
    (submission) => submission.author === user!._id,
  );

  //? submission state: 0 = Not send | 1 = Send | 2: Overdue

  const remainingTime = getRemainingTime(evidence.deadline);

  return (
    <div className="grid w-full grid-cols-2 grid-rows-2 justify-between gap-4 max-sm:grid-cols-1">
      <div className="flex h-full justify-start">
        <div className="flex h-full min-h-[56px] w-full max-w-lg rounded-lg shadow-md shadow-stone-900/30">
          <div className="relative z-10 flex w-full items-center rounded-lg bg-cens-medium px-8 py-4 font-semibold text-white max-sm:px-4 max-sm:text-sm">
            Estado de la entrega
          </div>
          <div className="-ml-2 flex w-full items-center rounded-lg bg-white/80 px-8 py-4 text-stone-500 backdrop-blur-sm max-sm:px-4">
            {getSubmissionState(submission, remainingTime.d)}
          </div>
        </div>
      </div>
      <div className="flex h-full justify-end">
        <div className="flex h-full min-h-[56px] w-full max-w-lg rounded-lg shadow-md shadow-stone-900/30">
          <div className="relative z-10 flex w-full items-center rounded-lg bg-cens-medium px-8 py-4 font-semibold text-white max-sm:px-4 max-sm:text-sm">
            Fecha de entrega
          </div>
          <div className="-ml-2 flex w-full items-center rounded-lg bg-white/80 px-8 py-4 text-stone-500 backdrop-blur-sm max-sm:px-4">
            {dateToString(evidence.deadline)}
          </div>
        </div>
      </div>
      <div className="flex h-full justify-start">
        <div className="flex h-full min-h-[56px] w-full max-w-lg rounded-lg shadow-md shadow-stone-900/30">
          <div className="relative z-10 flex w-full items-center rounded-lg bg-cens-medium px-8 py-4 font-semibold text-white max-sm:px-4 max-sm:text-sm">
            Última modificación
          </div>
          <div className="-ml-2 flex w-full items-center rounded-lg bg-white/80 px-8 py-4 text-stone-500 backdrop-blur-sm max-sm:px-4">
            {submission ? dateToString(submission.lastUpdatedAt) : "Sin enviar"}
          </div>
        </div>
      </div>
      <div className="flex h-full justify-end">
        <div className="flex h-full min-h-[56px] w-full max-w-lg rounded-lg shadow-md shadow-stone-900/30">
          <div className="relative z-10 flex w-full items-center rounded-lg bg-cens-medium px-8 py-4 font-semibold text-white max-sm:px-4 max-sm:text-sm">
            Tiempo restante
          </div>
          <div
            className={clsx([
              "-ml-2 flex w-full items-center rounded-lg bg-white/80 px-8 py-4 backdrop-blur-sm max-sm:px-4",
              remainingTime.d < 0 && !submission ? "#ed5c5c" : "text-stone-500",
            ])}
          >
            {submission
              ? remainingTime.d > 0
                ? remainingTime.message
                : "Periodo finalizado"
              : remainingTime.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceItemsGrid;
