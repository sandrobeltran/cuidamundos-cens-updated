"use client";

import { IEvidence, IInstitution } from "@/utils/customTypes";
import React from "react";
import InstitutionCard from "./InstitutionCard";

type TProps = {
  institutions: IInstitution[] | null;
};

const InstitutionsList = ({ institutions }: TProps) => {
  if (!institutions) {
    return <div>Cargando...</div>;
  }

  if (!institutions.length) {
    return <div>No hay evidencias aún</div>;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      {institutions.map((institution) => (
        <InstitutionCard key={institution._id} institution={institution} />
      ))}
    </div>
  );
};

export default InstitutionsList;
