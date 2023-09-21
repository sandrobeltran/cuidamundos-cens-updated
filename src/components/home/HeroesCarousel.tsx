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
      <div className="relative mt-20 flex items-center justify-between gap-5 overflow-x-auto max-sm:justify-start">
        {/* CAROUSEL CARDS */}
        <div className="relative flex aspect-[7/9] flex-col justify-end overflow-hidden rounded-bl-3xl rounded-tl-3xl bg-[url(/img/purita_background.jpg)] bg-cover bg-center bg-no-repeat p-8 text-white after:absolute after:inset-0 after:h-full after:w-full after:rounded-[inherit] after:bg-overlay-down max-sm:w-64 max-sm:min-w-[256px] max-sm:p-5">
          <div className="relative z-10 flex flex-col items-start gap-3 text-left">
            <h4 className="text-5xl font-medium max-sm:text-3xl">
              Purita
            </h4>
            <p className="max-sm:text-sm font-normal">
              Juega nuestro emocionante videojuego &quot;Ecoaventura en la
              Ciudad&quot; con nuestra heroína acuática, protege el agua de su
              planeta con poder y pasión.
            </p>
          </div>
          <div className="absolute left-0 top-0 z-0 aspect-square w-3/4">
            <Image
              src={FlyingPurita}
              alt="Capitán Volando CENS"
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative flex aspect-[7/9] flex-col justify-end overflow-hidden bg-[url(/img/felix_background.jpg)] bg-cover bg-center bg-no-repeat p-8 text-white after:absolute after:inset-0 after:h-full after:w-full after:rounded-[inherit] after:bg-overlay-down max-sm:w-64 max-sm:min-w-[256px] max-sm:p-5">
          <div className="relative z-10 flex flex-col items-start gap-3 text-left">
            <h4 className="text-5xl font-medium max-sm:text-3xl">
              Félix
            </h4>
            <p className="max-sm:text-sm font-normal">
              Juega nuestro emocionante videojuego &quot;Ecoaventura en la
              Ciudad&quot; con nuestra heroína acuática, protege el agua de su
              planeta con poder y pasión.
            </p>
          </div>
          <div className="absolute left-0 top-0 z-0 aspect-square w-3/4">
            <Image
              src={FlyingFelix}
              alt="Capitán Volando CENS"
              className="object-contain"
            />
          </div>
        </div>
        <div className="relative flex aspect-[7/9] flex-col justify-end overflow-hidden rounded-br-3xl rounded-tr-3xl bg-[url(/img/news_01.jpeg)] bg-cover bg-center bg-no-repeat p-8 text-white after:absolute after:inset-0 after:h-full after:w-full after:rounded-[inherit] after:bg-overlay-down max-sm:w-64 max-sm:min-w-[256px] max-sm:p-5">
          <div className="relative z-10 flex flex-col items-start gap-3 text-left">
            <h4 className="text-5xl font-medium max-sm:text-3xl">
              Capitán
            </h4>
            <p className="max-sm:text-sm font-normal">
              Juega nuestro emocionante videojuego &quot;Ecoaventura en la
              Ciudad&quot; con nuestra heroína acuática, protege el agua de su
              planeta con poder y pasión.
            </p>
          </div>
          <div className="absolute left-0 top-0 z-0 aspect-square w-3/4">
            <Image
              src={FlyingCapitan}
              alt="Capitán Volando CENS"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </CustomSection>
  );
};

export default HeroesCarousel;
