import { IUserCertificate } from "@/utils/customTypes";
import React from "react";
import Button from "../Button";

type TProps = {
  certificate: IUserCertificate;
};

const CertificateCard = ({ certificate }: TProps) => {
  return (
    <div className="flex aspect-[1/1.3] flex-col overflow-hidden rounded-3xl border shadow-lg">
      <div className="bg-white/80 p-3 shadow-inner backdrop-blur-sm">
        <div className="aspect-video w-full rounded-3xl bg-white shadow-lg"></div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-between border-t bg-white py-8 text-center text-stone-500 shadow-[0_-2px_5px_#121212aa]">
        <h6 className="text-xl font-medium">Riesgo Eléctrico</h6>
        <p className="text-sm text-stone-400">Emitido el 03/10/2023</p>
        <div>
          <Button hierarchy="primary" size="md">
            Descargar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
