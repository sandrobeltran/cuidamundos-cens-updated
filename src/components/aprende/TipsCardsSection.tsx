import React from "react";
import CustomSection from "../layout/CustomSection";
import Image from "next/image";
import EarthImage from "../../../public/img/earth.svg";
import LightImage from "../../../public/img/light.svg";
import WaterImage from "../../../public/img/water.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SectionTitle from "../SectionTitle";

const TipsCards = () => {
  return (
    <CustomSection>
      <SectionTitle
        title={{
          text: "Consejos para el Cuidado de los",
          resalted: "Recursos Naturales",
        }}
      />
      <Swiper
        slidesPerView={1.4}
        spaceBetween={15}
        wrapperClass="swipper-wrapper items-center py-5 justify-center"
        breakpoints={{
          670: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1080: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <div className="relative flex h-full w-80 flex-col items-center justify-center gap-4 p-6 max-sm:w-56">
            <div className="absolute bottom-0 left-0 h-4/6 w-full rounded-3xl border bg-white/80 backdrop-blur-sm p-6 shadow-lg shadow-stone-200" />
            <div className="relative object-contain">
              <Image
                src={EarthImage}
                alt="Earth Image - CENS"
                className="w-full object-contain object-bottom"
              />
            </div>
            <div className="relative flex w-5/6 flex-col items-center gap-3 text-center">
              <h6 className="text-xl font-medium leading-5">
                Reducir, Reutilizar, Reciclar
              </h6>
              <p className="text-sm">
                Adopta la regla de las &quot;3 R&quot; en tu vida diaria. Reduce
                el consumo de productos desechables, reutiliza lo que puedas y
                recicla materiales como papel, cartón, vidrio y plástico.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex h-full w-80 flex-col items-center justify-center gap-4 p-6 max-sm:w-56">
            <div className="absolute bottom-0 left-0 h-4/6 w-full rounded-3xl border bg-white/80 backdrop-blur-sm p-6 shadow-lg shadow-stone-200" />
            <div className="relative object-contain">
              <Image
                src={LightImage}
                alt="Light Image - CENS"
                className="w-full object-contain object-bottom"
              />
            </div>
            <div className="relative flex w-5/6 flex-col items-center gap-3 text-center">
              <h6 className="text-xl font-medium leading-5">
                Conservación de Energía
              </h6>
              <p className="text-sm">
                Apaga luces y aparatos electrónicos cuando no los uses. Utiliza
                bombillas LED de bajo consumo energético y considera la
                posibilidad de utilizar energía solar si es viable.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex h-full w-80 flex-col items-center justify-center gap-4 p-6 max-sm:w-56">
            <div className="absolute bottom-0 left-0 h-4/6 w-full rounded-3xl border bg-white/80 backdrop-blur-sm p-6 shadow-lg shadow-stone-200" />
            <div className="relative object-contain">
              <Image
                src={WaterImage}
                alt="Water Image - CENS"
                className="w-full object-contain object-bottom"
              />
            </div>
            <div className="relative flex w-5/6 flex-col items-center gap-3 text-center">
              <h6 className="text-xl font-medium leading-5">Ahorro de Agua</h6>
              <p className="text-sm">
                Instala dispositivos de ahorro de agua en tu hogar, como grifos
                y duchas de bajo flujo. Evita dejar correr el agua mientras no
                la necesitas y repara las fugas de agua de inmediato.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </CustomSection>
  );
};

export default TipsCards;
