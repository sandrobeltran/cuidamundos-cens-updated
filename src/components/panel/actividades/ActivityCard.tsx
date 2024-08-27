import Button from "@/components/Button";
import { IEvidence } from "@/utils/customTypes";
import dateToString from "@/utils/dateToString";
import Link from "next/link";
import React from "react";

type TProps = {
  evidence: IEvidence;
};

const ActivityCard = ({ evidence }: TProps) => {
  return (
    <div className="relative flex w-full items-center gap-16 overflow-hidden rounded-3xl bg-white/80 px-16 py-8 shadow-md backdrop-blur-sm">
      <div
        className="absolute left-0 top-0 h-full w-8 bg-stone-500"
        style={{
          backgroundColor: evidence.active ? "#39A935" : "#78716c",
        }}
      ></div>
      <div className="flex h-full flex-1 flex-col justify-center gap-4">
        <Link href={`/usuario/evidencias/${evidence._id}`}>
          <h4 className="text-lg font-medium text-cens-medium underline">
            {evidence.title}
          </h4>
        </Link>
        {/* FADE DESCRIPTION EFFECT */}
        {/* <div className="absolute bottom-0 hidden h-16 w-full bg-gradient-to-b from-white/50 to-white max-sm:block"></div> */}

        {/* max-sm:max-h-[100px] */}
        <p className="pl-4 text-stone-500">{evidence.description}</p>
      </div>
      <div className="flex flex-col items-stretch justify-center gap-2">
        <div className="flex flex-col gap-0">
          <p className="text-xs">Ult. Modificación</p>
          <p>{dateToString(evidence.updatedAt)}</p>
        </div>
        <Button
          href={`/panel/actividades/${evidence._id}/evidencias`}
          size="sm"
          hierarchy="primary"
        >
          Evidencias
        </Button>
        <Button
          href={`/panel/actividades/${evidence._id}/editar`}
          size="sm"
          hierarchy="primary"
        >
          Editar
        </Button>
      </div>
    </div>
  );
};

export default ActivityCard;
