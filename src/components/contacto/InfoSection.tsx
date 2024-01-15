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
            <h5 className="font-semibold">Dirección</h5>
            <a target="_blank" className="underline" href="https://www.cens.com.co" >www.cens.com.co</a>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default InfoSection;
