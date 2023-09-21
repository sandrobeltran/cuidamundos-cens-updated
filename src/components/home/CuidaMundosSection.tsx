import React from "react";
import CustomSection from "../layout/CustomSection";
import Image from "next/image";
import CuidaMundos01Image from "../../../public/img/cuidamundos_01.jpg";

const CuidaMundosSection = () => {
  return (
    <CustomSection>
      <div className="flex items-center gap-8 justify-center max-sm:flex-col">
        <div className="flex-1 h-full flex-col gap-6">
          <h3 className="text-stone-500 text-5xl font-medium max-sm:text-3xl">
            Descubre el universo de CuidaMundos:{" "}
            <span className="text-cens-medium">
              ¡Un juego para cuidar y explorar!
            </span>
          </h3>
          <p className="font-normal text-lg text-stone-500">
            Sumérgete en un mundo lleno de maravillas y desafíos en
            <b> CuidaMundos</b>. Embárcate en una emocionante travesía mientras
            salvas al planeta. Con gráficos impresionantes, mecánicas de juego
            sencillas y una historia cautivadora.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={CuidaMundos01Image}
            alt="CuidaMundos 01 Image - CENS"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default CuidaMundosSection;
