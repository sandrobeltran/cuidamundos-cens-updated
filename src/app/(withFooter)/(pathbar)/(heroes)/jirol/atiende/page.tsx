"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import SliderController from "@/components/heroes/jirol/atiende/SliderController";
import CustomMain from "@/components/layout/CustomMain";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import FlyingJirolImage from "@public/img/jirol/atiende/flying.png";

const SLIDER_DATA = [
  {
    name: "Eólica",
    icon: "eolica",
    description:
      "¿Te gustaría ser un viento poderoso? ¡Con la energía eólica, el viento hace girar aspas gigantes como molinos de viento modernos! Estas aspas hacen que un generador convierta el movimiento en energía elétrica, ¡Como un juguete que gira y brilla!",
    index: 1,
  },
  {
    name: "Geotérmica",
    icon: "geotermica",
    description:
      "Aquí, ¿Calentamos el agua como una olla mágica! El vapor que se forma empuja turbinas especiales, como un viento fuerte. Estas turbinas hacen girar un generador que crea energía eléctrica. Es como una máquina de vapor moderna.",
    index: 2,
  },
  {
    name: "Hidroeléctrica",
    icon: "hidroelectrica",
    description:
      "En las hidroelétricas, usamos presas para detener el agua de un río y convertirla en energía. Cuando abrimos las compuertas, el agua fluye con fuerza y hace girar turbinas súper rápidas. Estas turbinas generan energía mecánica, que se convierte en energía eléctrica y viaja por cables gigantes",
    index: 3,
  },
  {
    name: "Solar",
    icon: "solar",
    description:
      '¿Alguna vez atrapaste rayos de sol en una caja? Con la energía solar, utilizamos paneles mágicos llamados "paneles fotovoltaicos". Estos paneles capturan las luz del sol y la convierten en electricidad. Es como magia con luz solar.',
    index: 4,
  },
];

export default function AtiendeJirol() {
  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "Proceso de la", resalted: "energía elétrica" }}
          description="Únete a nosotros para conocer la historia de Purita, la heroína del Medio Ambiente. Descubre sus poderes y aprende cómo puedes unirte a su misión o convertirte en un héroe en el mundo."
        />
        <div className="flex w-full justify-center px-28">
          <div className="pr aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl bg-white/80 shadow-md backdrop-blur-md">
            <Swiper
              direction="vertical"
              className="h-full w-full !pr-24"
              allowTouchMove={false}
            >
              <SliderController sliderData={SLIDER_DATA} />
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-10 text-center">
                  <h3 className="text-3xl font-medium text-stone-500">
                    Proceso de la{" "}
                    <span className="text-cens-medium">Energía Eléctrica</span>
                  </h3>
                  <p className="text-xl text-stone-500 max-w-2xl">
                    ¡Hola, niños curiosos! ¿Están listos para descubrir cómo se
                    genera la energía elétrica? Vamos a explorar cuatro
                    emocionantes formas de hacerlo:
                  </p>
                  <Image
                    src={FlyingJirolImage}
                    width={300}
                    className="max-w-xs animate-levitating object-contain"
                    alt="Imagen de Jirol volando"
                  />
                </div>
              </SwiperSlide>
              {SLIDER_DATA.map((item) => (
                <SwiperSlide className="" key={item.index}>
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-10 px-40 text-center">
                    <h3 className="text-3xl font-medium text-stone-500">
                      Energía{" "}
                      <span className="text-cens-medium">{item.name}</span>
                    </h3>
                    <Image
                      src={`/img/jirol/atiende/${item.icon}.png`}
                      width={300}
                      height={200}
                      className="mt-4 w-full max-w-md"
                      alt={`Imagen de la Energía ${item.name}`}
                    />
                    <p className="text-lg text-stone-500">{item.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
