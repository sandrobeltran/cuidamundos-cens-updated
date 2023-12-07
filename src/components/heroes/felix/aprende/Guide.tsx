"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React, { useState } from "react";
import FelixImage from "@public/img/felix/atiende/felix_1.png";
import { useSwiper } from "swiper/react";
import { Mark } from "../../purita/Mark";

/* MARKERS DATA */
const MARKERS_DATA = [
  {
    x: 25,
    y: 8.5,
    content: {
      title: "Aire acondicionado",
      description: "Consumo de 1.2 kW.",
    },
  },
  {
    x: 58,
    y: 12,
    content: {
      title: "Televisión",
      description: "Consumo de 0.075 kW.",
    },
  },
  {
    x: 82,
    y: 45,
    content: {
      title: "Nevera",
      description: "Consumo de 0.3 kW.",
    },
  },
  {
    x: 18.5,
    y: 44,
    content: {
      title: "Computador",
      description: "Consumo de 0.25 kW.",
    },
  },
  {
    x: 41.5,
    y: 53.5,
    content: {
      title: "Equipo de sonido",
      description: "Consumo de 0.1 kW.",
    },
  },
  {
    x: 25,
    y: 81,
    content: {
      title: "Plancha",
      description: "Consumo de 1 kW.",
    },
  },
  {
    x: 95,
    y: 73,
    content: {
      title: "Ventilador",
      description: "Consumo de 0.08 kW.",
    },
  },
];

const Guide = () => {
  const swiper = useSwiper();
  const [stage, setStage] = useState<number>(0);
  const markSize = 65;
  return (
    <>
      <div className="relative aspect-[1.6/1] w-full overflow-hidden rounded-3xl bg-[url(/img/felix/aprende/living_room.jpg)] bg-cover bg-center backdrop-blur-md">
        {stage === 0 ? (
          <div className="modalWrapper absolute left-0 top-0 z-10 grid h-full w-full place-content-center backdrop-blur-md">
            {/* MAIN SCREEN 1 */}
            <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-center shadow-md shadow-stone-500/20">
              <h4 className="text-xl font-semibold text-cens-dark">Ahora</h4>
              <p>
                Soy Félix, el héroe de la energía eléctrica. Aprendamos juntos
                cómo evitar accidentes eléctricos con nuestros
                electrodomésticos. ¡Listos para la acción!
              </p>
              <div className="mt-4">
                <Button
                  hierarchy="primary"
                  size="lg"
                  onClick={() => setStage(1)}
                >
                  Siguiente
                </Button>
              </div>
            </div>

            <Image
              src={FelixImage}
              alt="Imagen de Felix con pose de victoria"
              className="absolute bottom-0  right-5 w-5/12"
            />
          </div>
        ) : stage === 1 ? (
          /* MAIN SCREEN 2 */
          <div className="modalWrapper absolute left-0 top-0 z-10 grid h-full w-full place-content-center backdrop-blur-md">
            <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-center shadow-md shadow-stone-500/20">
              <p>
                1. Potencia: Es la cantidad de energía eléctrica que necesita un
                electrodoméstico para funcionar. Se mide en Vatios (W).
                <br />
                <br />
                2. Tiempo de uso: Es cuánto tiempo están encendidos los
                aparatos.
                <br />
                <br />
                3. Hábitos de uso: Son las cosas que haces con tus
                electrodomésticos.
              </p>
              <div className="mt-4">
                <Button
                  hierarchy="primary"
                  size="lg"
                  onClick={() => setStage(2)}
                >
                  Empezar
                </Button>
              </div>
            </div>

            <Image
              src={FelixImage}
              alt="Imagen de Felix con pose de victoria"
              className="absolute bottom-0 right-5 w-5/12"
            />
          </div>
        ) : (
          MARKERS_DATA.map((mark) => (
            <Mark key={mark.content.title} size={markSize} {...mark} />
          ))
        )}
      </div>
      {stage === 2 ? (
        <div className="mt-6 flex justify-center">
          <div>
            <Button
              hierarchy="primary"
              size="lg"
              onClick={() => swiper.slideNext()}
            >
              Siguiente
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Guide;
