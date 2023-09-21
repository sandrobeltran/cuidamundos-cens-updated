import React from "react";
import CustomSection from "../layout/CustomSection";

const MisionVisionSection = () => {
  return (
    <CustomSection>
      <div className="grid-cols-[repeat(auto-fill,_minmax(360px,_430px))] grid justify-center gap-8">
        <div className="rounded-3xl bg-white p-11 pb-24 text-stone-500 shadow-lg shadow-stone-200">
          <h5 className="text-center text-3xl font-bold text-stone-700">
            Misión
          </h5>
          <p className="mt-4 text-left">
            En este espacio se presentará la visión de la empresa, que
            representa nuestra aspiración a largo plazo y nuestra imagen ideal
            del futuro. Estamos trabajando en la formulación de una visión que
            inspire y guíe nuestros esfuerzos hacia la excelencia y la
            innovación constante. Pronto compartiremos nuestra visión completa,
            que nos servirá como brújula para alcanzar un futuro brillante y
            sostenible.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-11 pb-24 text-stone-500 shadow-lg shadow-stone-200">
          <h5 className="text-center text-3xl font-bold text-stone-700">
            Visión
          </h5>
          <p className="mt-4 text-left">
            En este espacio se incluirá la declaración de misión de la empresa,
            que representa nuestra visión a largo plazo, nuestros valores
            fundamentales y nuestro compromiso con la excelencia en todo lo que
            hacemos. Estamos trabajando en la formulación de una misión que
            refleje nuestro compromiso con la innovación, la calidad y el
            servicio excepcional a nuestros clientes. Pronto compartiremos
            nuestra declaración de misión completa, que guiará cada uno de
            nuestros esfuerzos para un futuro mejor.
          </p>
        </div>
      </div>
    </CustomSection>
  );
};

export default MisionVisionSection;
