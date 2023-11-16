"use client";

import React from "react";
import CustomSection from "../layout/CustomSection";
import Image from "next/image";
import EarthImage from "../../../public/img/earth.svg";
import LightImage from "../../../public/img/light.svg";
import WaterImage from "../../../public/img/water.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Button from "../Button";

const CardsSection = () => {
  return (
    <CustomSection>
      <Swiper
        slidesPerView={1.4}
        spaceBetween={15}
        wrapperClass="swipper-wrapper items-center py-5 justify-start sm:justify-start"
        breakpoints={{
          670: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        lazyPreloadPrevNext={10}
      >
        <SwiperSlide>
          <div className="relative flex h-full w-80 flex-col items-center justify-center p-6 max-sm:w-56">
            <div className="absolute bottom-0 left-0 h-4/6 w-full rounded-3xl border bg-white/80 p-6 shadow-lg shadow-stone-200 backdrop-blur-sm" />
            <div className="relative object-contain">
              <Image
                src={EarthImage}
                alt="Earth Image - CENS"
                className="w-full object-contain object-bottom"
              />
            </div>
            <div className="relative flex w-5/6 flex-col items-center gap-3 text-center">
              <h6 className="text-xl font-medium leading-5">
                Uso responsable de la energía
              </h6>
              <p className="text-sm">
                Aprende sobre el uso responsable de la energía en CuidaMundos.
                Descubre prácticas eficientes para reducir el consumo de energía
              </p>
              <Button hierarchy="primary" size="md">
                ¡Aprende!
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex h-full w-80 flex-col items-center justify-center p-6 max-sm:w-56">
            <div className="absolute bottom-0 left-0 h-4/6 w-full rounded-3xl border bg-white/80 p-6 shadow-lg shadow-stone-200 backdrop-blur-sm" />
            <div className="relative object-contain">
              <Image
                src={LightImage}
                alt="Light Image - CENS"
                className="w-full object-contain object-bottom"
              />
            </div>
            <div className="relative flex w-5/6 flex-col items-center gap-3 text-center">
              <h6 className="text-xl font-medium leading-5">
                Energía segura y sostenible
              </h6>
              <p className="text-sm">
                Descubre la importancia de una energía segura y sostenible en
                CuidaMundos. Aprende sobre fuentes de energía...
              </p>
              <Button hierarchy="primary" size="md">
                ¡Aprende!
              </Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex h-full w-80 flex-col items-center justify-center p-6 max-sm:w-56">
            <div className="absolute bottom-0 left-0 h-4/6 w-full rounded-3xl border bg-white/80 p-6 shadow-lg shadow-stone-200 backdrop-blur-sm" />
            <div className="relative object-contain">
              <Image
                src={WaterImage}
                alt="Water Image - CENS"
                className="w-64 object-contain object-bottom"
              />
            </div>
            <div className="relative flex w-5/6 flex-col items-center gap-3 text-center">
              <h6 className="text-xl font-medium leading-5">
                Conservación del medio ambiente
              </h6>
              <p className="text-sm">
                umérgete en la belleza y fragilidad de los ecosistemas en
                CuidaMundos. Explora paisajes naturales asombrosos y aprende...
              </p>
              <Button hierarchy="primary" size="md">
                ¡Aprende!
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </CustomSection>
  );
};

export default CardsSection;
