"use client";

import Button from "@/components/Button";
import Image from "next/image";
import React, { useState } from "react";
import FelixImage from "@public/img/felix/atiende/felix_1.png";
import { Mark } from "@/app/(withFooter)/(pathbar)/(heroes)/purita/poderes/page";
import { useSwiper } from "swiper/react";

/* MARKERS DATA */
const MARKERS_DATA = [
  {
    x: 25,
    y: 8.5,
    content: {
      title: "Aire acondicionado",
      description:
        "Estas artistas del cielo crean patrones y sombra, pero también son esenciales en el ciclo del agua, soltando gotas de lluvia como pócimas refrescantes.",
    },
  },
  {
    x: 58,
    y: 12,
    content: {
      title: "Televisión",
      description:
        "Nuestro planeta es un lugar mágico lleno de maravillas. Proporciona hogar a todos, con suelos fértiles para cultivar deliciosa comida",
    },
  },
  {
    x: 82,
    y: 45,
    content: {
      title: "Nevera",
      description:
        "Aunque la Tierra está cubierta de agua, solo un poquito es dulce y aún menos está en ríos y lagos. El agua es un tesoro vital para beber, cocinar y proteger la naturaleza. ¡Úsala sabiamente y cuida este recurso mágico!",
    },
  },
  {
    x: 18.5,
    y: 44,
    content: {
      title: "Laptop",
      description:
        "Proteger ríos, lagos y humedales es como activar un escudo mágico para garantizar que siempre tengamos agua fresca. ¡El agua es como un tesoro para la naturaleza y para nosotros!",
    },
  },
  {
    x: 41.5,
    y: 53.5,
    content: {
      title: "Equipo de sonido",
      description:
        "Plantar árboles es como lanzar hechizos mágicos que hacen que el aire respire feliz. Los árboles atrapan el dióxido de carbono y nos ayudan a mantener la Tierra fresca y contenta.",
    },
  },
  {
    x: 25,
    y: 81,
    content: {
      title: "Plancha de ropa",
      description:
        "Plantar árboles es como lanzar hechizos mágicos que hacen que el aire respire feliz. Los árboles atrapan el dióxido de carbono y nos ayudan a mantener la Tierra fresca y contenta.",
    },
  },
  {
    x: 95,
    y: 73,
    content: {
      title: "Ventilador",
      description:
        "Plantar árboles es como lanzar hechizos mágicos que hacen que el aire respire feliz. Los árboles atrapan el dióxido de carbono y nos ayudan a mantener la Tierra fresca y contenta.",
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
