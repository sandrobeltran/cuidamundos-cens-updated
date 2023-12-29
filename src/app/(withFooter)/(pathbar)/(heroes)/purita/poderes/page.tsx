"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import Image from "next/image";
import PuritaImage1 from "@public/img/purita/poderes/purita_1.png";
import PuritaImage2 from "@public/img/purita/poderes/purita_2.png";
import Button from "@/components/Button";
import { useState } from "react";
import { Mark } from "@/components/heroes/purita/Mark";

/* MARKERS DATA */
const MARKERS_DATA = [
  {
    x: 23.5,
    y: 8.5,
    content: {
      title: "Nubes Mágicas",
      description:
        "Estas artistas del cielo crean patrones y sombra, pero también son esenciales en el ciclo del agua, soltando gotas de lluvia como pócimas refrescantes.",
    },
  },
  {
    x: 18,
    y: 61,
    content: {
      title: "Tierra Milagrosa",
      description:
        "Nuestro planeta es un lugar mágico lleno de maravillas. Proporciona hogar a todos, con suelos fértiles para cultivar deliciosa comida",
    },
  },
  {
    x: 55,
    y: 88,
    content: {
      title: "Agua Sabia",
      description:
        "Aunque la tierra está cubierta de agua, solo una pequeña cantidad se puede consumir. ¡Úsala sabiamente y cuida este recurso mágico! Aquí algunas prácticas: Cierra la llave cuando no lo estés usando, toma duchas o baños cortos, no desperdicie en juegos innecesarios.",
    },
  },
  {
    x: 65,
    y: 44,
    content: {
      title: "Poder Acuático",
      description:
        "Proteger ríos, lagos y humedales es como activar un escudo mágico para garantizar que siempre tengamos agua fresca. ¡El agua es un tesoro para los seres humanos y para el planeta!",
    },
  },
  {
    x: 96,
    y: 32,
    content: {
      title: "Poder Verde",
      description:
        "Plantar árboles es como lanzar hechizos mágicos que hacen que el aire respire feliz. Los árboles atrapan el dióxido de carbono y nos ayudan a reducir el calentamiento global.",
    },
  },
  {
    x: 50,
    y: 50,
    content: {
      title: "Poder 3R",
      description:
        "Usa menos cosas de las que necesitas ¡reduce!, usa las cosas varias veces antes de tirarlas ¡reutiliza!, convierte cosas viejas en cosas nuevas ¡recicla! ¡Haciendo estas cosas, ayudamos a cuidar nuestro hogar, la Tierra!",
    },
  },
];

export default function PoderesPurita() {
  const [stage, setStage] = useState<number>(0);
  const markSize = 65;

  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "Poderes de", resalted: "Purita" }}
          description="Descubre y usa los superpoderes de Purita para proteger nuestro medio ambiente."
        />
        <div className="flex justify-center px-28 mobile-land:px-16">
          <div className="relative aspect-[1.5/1] w-full max-w-5xl overflow-hidden rounded-3xl bg-white/80 shadow-md backdrop-blur-md">
            <video
              src="/img/purita/poderes/background.mp4"
              autoPlay
              muted
              loop
              className="h-full min-w-[101%] -translate-x-2 object-cover"
            ></video>
            {stage === 0 ? (
              <div className="modalWrapper absolute left-0 top-0 z-10 grid h-full w-full place-content-center backdrop-blur-md">
                {/* MAIN SCREEN 1 */}
                <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-center shadow-md shadow-stone-500/20">
                  <h4 className="text-2xl font-bold text-cens-dark mobile-land:text-xl">
                    ¡Soy Purita!
                  </h4>
                  <p className="text-lg text-stone-500 mobile-land:text-sm">
                    La &quot;guardiana del agua&quot; y estoy aquí para
                    enseñarte sobre nuestro hermoso planeta ¿estás listo para
                    empezar?
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
                  src={PuritaImage1}
                  alt="Imagen de Purita con pose de victoria"
                  className="absolute bottom-0 right-24 w-3/12 mobile-land:right-10"
                />
              </div>
            ) : stage === 1 ? (
              /* MAIN SCREEN 2 */
              <div className="modalWrapper absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center backdrop-blur-md">
                <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-center shadow-md shadow-stone-500/20">
                  <h4 className="text-2xl font-bold text-cens-dark mobile-land:text-xl">
                    ¿Sabes qué es el medio ambiente?
                  </h4>
                  <p className="text-lg text-stone-500 mobile-land:text-sm">
                    El medio ambiente es el hogar donde vivimos, incluyendo todo
                    lo que nos rodea, como el agua, Ios minerales, los bosques,
                    la fauna, los suelos, la energía solar, entre otros. ¡Todo
                    es parte de este lugar asombroso en el que habitamos!
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
                  src={PuritaImage2}
                  alt="Imagen de Purita con pose de victoria"
                  className="absolute bottom-0 right-24 w-3/12 mobile-land:right-10"
                />
              </div>
            ) : (
              MARKERS_DATA.map((mark) => (
                <Mark key={mark.content.title} size={markSize} {...mark} />
              ))
            )}

            {/* NUBES MÁGIAS */}

            {/* TIERRA MILAGROSA */}

            {/* AGUA SABIA */}

            {/* PODER ACUÁTICO */}

            {/* PODER VERDE */}
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
