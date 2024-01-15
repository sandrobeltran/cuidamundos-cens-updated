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
    x: 20.5,
    y: 82,
    content: {
      title: "Bombillo LED",
      description: "Consumo de 0.013 kW.",
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
    <div className="rounded-3xl bg-white/80 p-4 backdrop-blur-md shadow-md">
      <div className="relative aspect-[1.6/1] w-full overflow-hidden rounded-3xl bg-[url(/img/felix/aprende/living_room.jpg)] bg-cover bg-center backdrop-blur-md">
        {stage === 0 ? (
          <div className="modalWrapper absolute left-0 top-0 z-10 grid h-full w-full place-content-center backdrop-blur-md">
            {/* MAIN SCREEN 1 */}
            <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-center shadow-md shadow-stone-500/20">
              <h4 className="text-3xl font-bold text-cens-dark">¡Hola!</h4>
              <p className="mobile-land:text-sm text-lg text-stone-500">
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
                  Si
                </Button>
              </div>
            </div>

            <Image
              src={FelixImage}
              alt="Imagen de Felix con pose de victoria"
              className="absolute bottom-0  right-5 w-4/12"
            />
          </div>
        ) : stage === 1 ? (
          /* MAIN SCREEN 2 */
          <div className="modalWrapper absolute left-0 top-0 z-10 flex h-full w-full place-content-center items-center justify-center backdrop-blur-md">
            <div className="mobile-land:max-w-[95%] relative flex w-full max-w-3xl flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-left shadow-md shadow-stone-500/20">
              <p className="mobile-land:text-sm text-lg text-stone-500">
                <b>Potencia:</b> Es la cantidad de energía eléctrica que
                necesita un electrodoméstico para funcionar. Se mide en Vatios
                (W).
                <br />
                <b>Tiempo de uso:</b> Indica cuánto tiempo están encendidos los
                aparatos.
                <br />
                <b>Hábitos de uso:</b> Son las cosas que haces con tus
                electrodomésticos.
                <br />
                <br />
                Los Vatios <b>(W)</b> son como la medida de la fuerza que hace
                que los electrodomésticos funcionen. ¿Cuánta energía necesita
                una lámpara para brillar o una televisión para mostrarte tus
                programas favoritos? ¡Eso es lo que medimos en vatios!
              </p>
              <div className="mt-4">
                <Button
                  hierarchy="primary"
                  size="lg"
                  onClick={() => setStage(2)}
                >
                  Aprende
                </Button>
              </div>
            </div>

            <Image
              src={FelixImage}
              alt="Imagen de Felix con pose de victoria"
              className="pointer-events-none absolute bottom-0 right-5 w-4/12"
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
    </div>
  );
};

export default Guide;
