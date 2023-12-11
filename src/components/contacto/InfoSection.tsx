import React from "react";
import CustomSection from "../layout/CustomSection";
import Link from "next/link";

const InfoSection = () => {
  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-12 text-stone-500">
        <div className="flex justify-center gap-10 max-sm:flex-col max-sm:items-center max-sm:text-center">
          <div className="flex flex-col">
            <h5 className="font-semibold">Correo Electrónico</h5>
            <p>info@cens.com</p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-semibold">Dirección de la Empresa</h5>
            <p>xxxxxxxxxxxx</p>
          </div>
          <div className="flex flex-col">
            <h5 className="font-semibold">Número de Contacto</h5>
            <p>+57 3XXXXX-XXXX</p>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default InfoSection;
