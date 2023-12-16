"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import SliderController from "@/components/heroes/jirol/atiende/SliderController";
import CustomMain from "@/components/layout/CustomMain";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import FlyingJirolImage from "@public/img/jirol/atiende/flying.png";
import { PlayIcon } from "@heroicons/react/24/solid";
import JirolVideosModal from "@/components/jirol/JirolVideosModal";
import { useState } from "react";

const SLIDER_DATA = [
  {
    name: "Eólica",
    icon: "eolica",
    description:
      "¡Con la energía eólica, el viento hace girar aspas gigantes como molinos de viento modernos! Estas aspas impulsan un generador que convierte el movimiento en energía eléctrica.",
    index: 1,
  },
  {
    name: "Geotérmica",
    icon: "geotermica",
    description:
      "¡Se calienta el agua como en una olla mágica! El vapor resultante impulsa turbinas especiales, como un viento fuerte. Estas turbinas, a su vez, hacen girar un generador que crea energía eléctrica. Es como tener una máquina de vapor moderna en acción.",
    index: 2,
  },
  {
    name: "Hidroeléctrica",
    icon: "hidroelectrica",
    description:
      "¡Imagina controlar la fuerza del agua! En las hidroeléctricas, utilizamos presas para detener el agua de un río y convertirla en energía. Cuando abrimos las compuertas, el agua fluye con fuerza y hace girar turbinas súper rápidas. Estas turbinas generan energía mecánica, que se convierte en energía eléctrica y viaja por cables gigantes.",
    index: 3,
  },
  {
    name: "Solar",
    icon: "solar",
    description:
      '¡El poder de los rayos del sol! Con la energía solar, utilizamos paneles mágicos llamados "paneles fotovoltaicos". Estos paneles capturan la luz del sol y la transforman en electricidad.',
    index: 4,
  },
];

export default function AtiendeJirol() {
  const [video, setVideo] = useState<{
    src: string;
    poster: string;
    title: string;
  }>({
    src: "",
    poster: "",
    title: "",
  });

  function showVideosModal(video: {
    title: string;
    poster: string;
    src: string;
  }) {
    setVideo(video);
    document.getElementById("jirolVideosModalWrapper")!.style.display = "flex";
  }

  return (
    <CustomMain>
      <JirolVideosModal video={video} set={setVideo} />
      <HeroeSection>
        <HeroeTitle
          title={{
            text: "Energía Renovable y",
            resalted: "Suministro Eléctrico",
          }}
          description="Descubre las fuentes de energía renovable y aprende sobre la transmisión, distribución y comercialización de la energía eléctrica. ¡Desliza los íconos y conviértete en un héroe estratégico!"
        />
        <div className="flex w-full flex-col items-center gap-12 px-28 mobile-land:px-16">
          <div className="aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl bg-white/80 shadow-md backdrop-blur-md">
            <Swiper
              direction="vertical"
              className="h-full w-full !pr-24"
              allowTouchMove={false}
            >
              <SliderController sliderData={SLIDER_DATA} />
              <SwiperSlide>
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-10 text-center mobile-land:gap-2">
                  <h3 className="text-3xl font-medium text-stone-500 mobile-land:text-2xl">
                    Poderes <span className="text-cens-medium">Renovables</span>
                  </h3>
                  <p className="max-w-2xl text-xl text-stone-500 mobile-land:max-w-sm mobile-land:text-sm">
                    ¡Hola, soy Jirol! ¡Acompáñame para explorar juntos las
                    fuentes de energía renovable! ¿Listos para descubrir cómo se
                    genera la energía eléctrica? ¡Vamos a explorar cuatro
                    emocionantes formas de hacerlo!
                  </p>
                  <Image
                    src={FlyingJirolImage}
                    width={300}
                    className="max-w-xs animate-levitating object-contain mobile-land:max-w-[30%]"
                    alt="Imagen de Jirol volando"
                  />
                </div>
              </SwiperSlide>
              {SLIDER_DATA.map((item) => (
                <SwiperSlide className="" key={item.index}>
                  <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-10 px-40 text-center mobile-land:px-16">
                    <h3 className="text-3xl font-medium text-stone-500 mobile-land:text-2xl">
                      Energía{" "}
                      <span className="text-cens-medium">
                        {item.name.toLowerCase()}
                      </span>
                    </h3>
                    <Image
                      src={`/img/jirol/atiende/${item.icon}.png`}
                      width={300}
                      height={200}
                      className="mt-4 w-full max-w-md mobile-land:max-w-[50%]"
                      alt={`Imagen de la Energía ${item.name}`}
                    />
                    <p className="text-lg text-stone-500 mobile-land:text-sm">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <h4 className="text-3xl font-bold text-stone-700">
            Procesos de Generación{" "}
            <span className="text-cens-brand">de Energía</span>
          </h4>
          {/* VIDEOS SECTION */}
          <div className="grid w-full max-w-5xl grid-cols-[repeat(2,_minmax(300px,_450px))] items-start justify-center gap-16">
            <div className="flex flex-col items-center gap-2 rounded-3xl bg-white p-4 text-center shadow-lg">
              <button
                onClick={() =>
                  showVideosModal({
                    title: "Generación de energía solar",
                    src: "/video/jirol/generacion-solar.mp4",
                    poster: "/img/jirol/generacion-electrica/solar-cover.jpg",
                  })
                }
                className="group relative aspect-video w-full text-white"
              >
                <PlayIcon className="absolute inset-0 m-auto h-10 transition-transform group-hover:scale-125" />
                <Image
                  src={"/img/jirol/generacion-electrica/solar-cover.jpg"}
                  alt="Portada de video de Jirol 1"
                  width={300}
                  height={200}
                  className="h-full w-full rounded-3xl object-cover"
                />
              </button>
              <h4 className="text-lg font-medium text-cens-medium">
                Generación de energía solar
              </h4>
              <p className="text-stone-500">
                La energía solar es limpia, renovable y esencial para un futuro
                sostenible.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-3xl bg-white p-4 text-center shadow-lg">
              <button
                onClick={() =>
                  showVideosModal({
                    title: "Generación de energía hidroeléctrica",
                    src: "/video/jirol/generacion-hidroelectrica.mp4",
                    poster:
                      "/img/jirol/generacion-electrica/hidroelectrica-cover.jpg",
                  })
                }
                className="group relative aspect-video w-full text-white"
              >
                <PlayIcon className="absolute inset-0 m-auto h-10 transition-transform group-hover:scale-125" />
                <Image
                  src={
                    "/img/jirol/generacion-electrica/hidroelectrica-cover.jpg"
                  }
                  alt="Portada de video de Jirol 1"
                  width={300}
                  height={200}
                  className="h-full w-full rounded-3xl object-cover"
                />
              </button>
              <h4 className="text-lg font-medium text-cens-medium">
                Generación de energía hidroeléctrica
              </h4>
              <p className="text-stone-500">
                La energía hidroeléctrica es vital por ser renovable, confiable
                y amigable con el medio ambiente.
              </p>
            </div>
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
