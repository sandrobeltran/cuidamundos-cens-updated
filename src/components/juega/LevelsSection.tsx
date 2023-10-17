"use client";

import React from "react";
import CustomSection from "../layout/CustomSection";
import Image from "next/image";
import PuritaBackground from "../../../public/img/purita_background.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "../SectionTitle";

const LevelsSection = () => {
  return (
    <CustomSection>
      <SectionTitle
        title={{
          text: "¡Adéntrate en el mundo de los",
          resalted: "desafiantes niveles!",
        }}
      />
      <Swiper
        slidesPerView={1.2}
        spaceBetween={10}
        wrapperClass="swipper-wrapper items-center py-5 justify-center"
        breakpoints={{
          670: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1080: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
        lazyPreloadPrevNext={10}
      >
        <SwiperSlide>
          <div className="relative flex h-full w-80 flex-col items-center justify-start gap-4 p-6 text-stone-600 max-sm:w-full">
            <div className="absolute bottom-0 left-0 h-[75%] w-full rounded-3xl border bg-white/80 p-6 shadow-lg shadow-stone-200 backdrop-blur-sm" />
            <div className="relative object-contain">
              <Image
                src={PuritaBackground}
                alt="Purita Background - CENS"
                className="w-full aspect-[15.5/9] rounded-3xl object-cover object-bottom"
              />
            </div>
            <div className="relative flex w-full flex-col items-center gap-3 text-center">
              <h6 className="w-3/4 text-xl font-semibold leading-5">
                Ahorro de energía en casa
              </h6>
              <p className="text-left text-sm">
                Sección que enseña a los niños cómo pueden ahorrar energía en
                casa de manera sencilla y práctica. Incluye niveles que enseñan
                sobre el uso de electrodomésticos eficientes, el apagado de
                luces y dispositivos que no están en uso, y la importancia de
                regular la temperatura de la casa, entre otros temas.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex h-full w-80 flex-col items-center justify-start gap-4 p-6 text-stone-600 max-sm:w-full">
            <div className="absolute bottom-0 left-0 h-[75%] w-full rounded-3xl border bg-white/80 p-6 shadow-lg shadow-stone-200 backdrop-blur-sm" />
            <div className="relative object-contain">
              <Image
                src={PuritaBackground}
                alt="Purita Background - CENS"
                className="w-full aspect-[15.5/9] rounded-3xl object-cover object-bottom"
              />
            </div>
            <div className="relative flex w-full flex-col items-center gap-3 text-center">
              <h6 className="w-3/4 text-xl font-semibold leading-5">
                Uso eficiente de los recursos naturales
              </h6>
              <p className="text-left text-sm">
                Sección que enseña a los niños cómo pueden aprovechar y cuidar
                mejor los recursos naturales. Incluye niveles que enseñan sobre
                la importancia del agua, el aire y la luz solar, así como el
                cuidado de plantas y animales, entre otros temas.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex h-full w-80 flex-col items-center justify-start gap-4 p-6 text-stone-600 max-sm:w-full">
            <div className="absolute bottom-0 left-0 h-[75%] w-full rounded-3xl border bg-white/80 p-6 shadow-lg shadow-stone-200 backdrop-blur-sm" />
            <div className="relative object-contain">
              <Image
                src={PuritaBackground}
                alt="Purita Background - CENS"
                className="w-full aspect-[15.5/9] rounded-3xl object-cover object-bottom"
              />
            </div>
            <div className="relative flex w-full flex-col items-center gap-3 text-center">
              <h6 className="w-3/4 text-xl font-semibold leading-5">
                Prevención de riesgos eléctricos
              </h6>
              <p className="text-left text-sm">
                Sección que enseña a los niños cómo evitar los riesgos
                eléctricos en casa y en la ciudad. Incluye niveles que enseñan
                sobre el uso seguro de enchufes, la identificación de cables de
                alta tensión y otros peligros eléctricos, y la importancia de no
                tocar equipos eléctricos con las manos mojadas, entre otros
                temas.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </CustomSection>
  );
};

export default LevelsSection;
