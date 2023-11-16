import { IEvidence } from "@/utils/customTypes";
import Link from "next/link";
import React from "react";

type TProps = {
  evidence: IEvidence;
};

const EvidenceCard = ({ evidence }: TProps) => {
  return (
    <div className="relative flex w-full flex-col gap-4 overflow-hidden rounded-3xl bg-white/80 px-16 py-8 backdrop-blur-sm max-sm:p-4 max-sm:pl-14">
      <span
        className="absolute left-0 top-0 h-full w-8 bg-stone-500"
        style={{
          backgroundColor: evidence.active ? "#39A935" : "#78716c",
        }}
      ></span>
      <h4 className="text-lg font-medium text-cens-medium underline">
        {evidence.title}
      </h4>
      {/* FADE DESCRIPTION EFFECT */}
      {/* <div className="absolute bottom-0 hidden h-16 w-full bg-gradient-to-b from-white/50 to-white max-sm:block"></div> */}

      {/* max-sm:max-h-[100px] */}
      <p className="pl-4 text-stone-500">{evidence.description}</p>
    </div>
  );
};

export default EvidenceCard;
