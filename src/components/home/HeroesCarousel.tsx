"use client";

import Image from "next/image";
import React, { useState } from "react";
import FlyingCapitan from "../../../public/img/flying_capitan.png";
import FlyingPurita from "../../../public/img/flying_purita.png";
import FlyingFelix from "../../../public/img/flying_felix.png";
import CustomSection from "../layout/CustomSection";

const HeroesCarousel = () => {
  return (
    <CustomSection>
      <div className="relative mt-20 flex items-center justify-between overflow-x-auto max-sm:justify-start">
        {/* CAROUSEL CARDS */}
        <div className="relative flex aspect-square min-w-[40%] flex-col items-center justify-end overflow-hidden rounded-bl-3xl rounded-tl-3xl bg-[url(/img/capitan_triangle.png)] bg-contain bg-center bg-no-repeat p-8 text-white max-sm:w-64 max-sm:min-w-[95%] max-sm:p-5">
          <div className="relative z-10 flex flex-col items-center gap-1 px-2 text-center">
            <h4 className="text-2xl font-medium max-sm:text-xl">Capitán</h4>
            <p className="text-sm font-normal">
              Juega nuestro emocionante videojuego &quot;Ecoaventura en la
              Ciudad&quot; con nuestra heroína acuática, protege el agua de su
              planeta con poder y pasión.
            </p>
          </div>
        </div>
        <div className="relative ml-[-15%] flex aspect-square min-w-[40%] flex-col items-center justify-end overflow-hidden rounded-bl-3xl rounded-tl-3xl bg-[url(/img/felix_triangle.png)] bg-contain bg-center bg-no-repeat p-8 text-white max-sm:ml-[-30%] max-sm:w-64 max-sm:min-w-[95%] max-sm:p-5">
          <div className="relative z-10 flex h-full w-1/2 flex-col items-center justify-center gap-1 text-center">
            <h4 className="text-2xl font-medium max-sm:text-xl">Félix</h4>
            <p className="text-sm font-normal">
              Juega nuestro emocionante videojuego &quot;Ecoaventura en la
              Ciudad&quot; con nuestra heroína acuática, protege el agua de su
              planeta con poder y pasión.
            </p>
          </div>
        </div>
        <div className="relative ml-[-15%] flex aspect-square min-w-[40%] flex-col items-center justify-end overflow-hidden rounded-bl-3xl rounded-tl-3xl bg-[url(/img/purita_triangle.png)] bg-contain bg-center bg-no-repeat p-8 text-white max-sm:ml-[-30%] max-sm:w-64 max-sm:min-w-[95%] max-sm:p-5">
          <div className="relative z-10 flex flex-col items-center gap-1 px-2 text-center">
            <h4 className="text-2xl font-medium max-sm:text-xl">Purita</h4>
            <p className="text-sm font-normal">
              Juega nuestro emocionante videojuego &quot;Ecoaventura en la
              Ciudad&quot; con nuestra heroína acuática, protege el agua de su
              planeta con poder y pasión.
            </p>
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default HeroesCarousel;
