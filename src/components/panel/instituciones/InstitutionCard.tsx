import Button from "@/components/Button";
import { IEvidence, IInstitution } from "@/utils/customTypes";
import dateToString from "@/utils/dateToString";
import Link from "next/link";
import React from "react";

type TProps = {
  institution: IInstitution;
};

const InstitutionCard = ({ institution }: TProps) => {
  return (
    <div className="relative flex w-full items-center gap-16 overflow-hidden rounded-3xl bg-white/80 px-16 py-8 shadow-md backdrop-blur-sm">
      <div className="flex h-full flex-1 flex-col justify-center gap-4">
        <Link href={`/usuario/evidencias/${institution._id}`}>
          <h4 className="text-lg font-medium text-cens-medium underline">
            {institution.name}
          </h4>
        </Link>
      </div>
      <div className="flex flex-col items-stretch justify-center gap-2">
        <div className="flex flex-col gap-0">
          <p className="text-xs">Ult. Modificación</p>
          <p>{dateToString(institution.updatedAt)}</p>
        </div>
        <Button
          href={`/panel/instituciones/${institution._id}/editar`}
          size="sm"
          hierarchy="primary"
        >
          Editar
        </Button>
      </div>
    </div>
  );
};

export default InstitutionCard;
