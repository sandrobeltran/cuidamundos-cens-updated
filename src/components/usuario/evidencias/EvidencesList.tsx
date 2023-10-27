"use client";

import { IEvidence } from "@/utils/customTypes";
import React from "react";
import EvidenceCard from "./EvidenceCard";
import Link from "next/link";

type TProps = {
  evidences: IEvidence[] | null;
  links?: boolean;
};

const EvidencesList = ({ evidences, links = false }: TProps) => {
  if (!evidences) {
    return <div>Loading...</div>;
  }

  if (!evidences.length) {
    return <div>No evidences</div>;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      {evidences.map((evidence) =>
        links ? (
          <Link className="w-full" href={`/usuario/evidencias/${evidence._id}`} key={evidence._id}>
            <EvidenceCard evidence={evidence} />
          </Link>
        ) : (
          <EvidenceCard key={evidence._id} evidence={evidence} />
        ),
      )}
    </div>
  );
};

export default EvidencesList;
