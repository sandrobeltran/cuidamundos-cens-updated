import { useUserStore } from "@/store/useUserStore";
import { IEvidence } from "@/utils/customTypes";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

type TProps = {
  evidence: IEvidence;
};

const EvidenceCard = ({ evidence }: TProps) => {
  const user = useUserStore((state) => state.user);

  return (
    <div className="relative flex w-full flex-col gap-4 overflow-hidden rounded-3xl bg-white/80 px-16 py-8 shadow-md backdrop-blur-sm max-sm:p-4 max-sm:pl-14">
      <span
        className={clsx([
          "absolute left-0 top-0 h-full w-8 bg-stone-500",
          evidence.active ? "text-cens-brand" : "text-stone-500",
        ])}
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
