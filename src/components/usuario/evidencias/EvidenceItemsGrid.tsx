import { useUserStore } from "@/store/useUserStore";
import { IEvidence } from "@/utils/customTypes";
import dateToString, { getRemainingTime } from "@/utils/dateToString";
import React from "react";

type TProps = {
  evidence: IEvidence;
};

const EvidenceItemsGrid = ({ evidence }: TProps) => {
  const user = useUserStore((state) => state.user);

  const submission = evidence.submissions.find(
    (submission) => submission.author === user!._id,
  );

  //? submission state: 0 = Not send | 1 = Send

  const statesDic = {
    0: "Sin enviar",
    1: "Enviado",
  };

  return (
    <div className="grid w-full grid-cols-2 grid-rows-2 justify-between gap-4">
      <div className="flex justify-start">
        <div className="flex h-14 w-full max-w-lg rounded-lg shadow-md shadow-stone-900/30">
          <div className="relative z-10 w-full rounded-lg bg-cens-medium px-8 py-4 font-semibold text-white">
            Estado de la entrega
          </div>
          <div className="-ml-2 w-2/3 rounded-lg bg-white/80 px-8 py-4 text-stone-500 backdrop-blur-sm">
            {submission
              ? statesDic[submission.state as keyof typeof statesDic]
              : "Sin enviar"}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex h-14 w-full max-w-lg rounded-lg shadow-md shadow-stone-900/30">
          <div className="relative z-10 w-full rounded-lg bg-cens-medium px-8 py-4 font-semibold text-white">
            Fecha de entrega
          </div>
          <div className="-ml-2 w-2/3 rounded-lg bg-white/80 px-8 py-4 text-stone-500 backdrop-blur-sm">
            {dateToString(evidence.deadline)}
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="flex h-14 w-full max-w-lg rounded-lg shadow-md shadow-stone-900/30">
          <div className="relative z-10 w-full rounded-lg bg-cens-medium px-8 py-4 font-semibold text-white">
            Última modificación
          </div>
          <div className="-ml-2 w-2/3 rounded-lg bg-white/80 px-8 py-4 text-stone-500 backdrop-blur-sm">
            {submission ? dateToString(submission.lastUpdatedAt) : "Sin enviar"}
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex h-14 w-full max-w-lg rounded-lg shadow-md shadow-stone-900/30">
          <div className="relative z-10 w-full rounded-lg bg-cens-medium px-8 py-4 font-semibold text-white">
            Tiempo restante
          </div>
          <div className="-ml-2 w-2/3 rounded-lg bg-white/80 px-8 py-4 text-stone-500 backdrop-blur-sm">
            {getRemainingTime(evidence.deadline)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceItemsGrid;
