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
    x: 49,
    y: 88,
    content: {
      title: "Agua Sabia",
      description:
        "Aunque la Tierra está cubierta de agua, solo un poquito es dulce y aún menos está en ríos y lagos. El agua es un tesoro vital para beber, cocinar y proteger la naturaleza. ¡Úsala sabiamente y cuida este recurso mágico!",
    },
  },
  {
    x: 58.5,
    y: 45,
    content: {
      title: "Poder Acuático",
      description:
        "Proteger ríos, lagos y humedales es como activar un escudo mágico para garantizar que siempre tengamos agua fresca. ¡El agua es como un tesoro para la naturaleza y para nosotros!",
    },
  },
  {
    x: 86,
    y: 32,
    content: {
      title: "Poder Verde",
      description:
        "Plantar árboles es como lanzar hechizos mágicos que hacen que el aire respire feliz. Los árboles atrapan el dióxido de carbono y nos ayudan a mantener la Tierra fresca y contenta.",
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
        <div className="px-28 flex justify-center">
          <div className="relative aspect-[1.5/1] max-w-5xl w-full overflow-hidden rounded-3xl bg-white/80 shadow-md backdrop-blur-md">
            <video
              src="/img/purita/poderes/background.mov"
              autoPlay
              muted
              loop
              className="h-full w-full"
            ></video>
            {stage === 0 ? (
              <div className="modalWrapper absolute left-0 top-0 z-10 grid h-full w-full place-content-center backdrop-blur-md">
                {/* MAIN SCREEN 1 */}
                <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-center shadow-md shadow-stone-500/20">
                  <h4 className="text-2xl font-bold text-cens-dark">
                    ¡Soy Purita!
                  </h4>
                  <p className="text-lg text-stone-500">
                    La protectora del medio ambiente, y estoy aquí para
                    enseñarte sobre nuestro hermoso planeta! ¿Estás listo para
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
                  className="absolute bottom-0 right-24 w-3/12"
                />
              </div>
            ) : stage === 1 ? (
              /* MAIN SCREEN 2 */
              <div className="modalWrapper absolute left-0 top-0 z-10 grid h-full w-full place-content-center backdrop-blur-md">
                <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-center shadow-md shadow-stone-500/20">
                  <h4 className="text-2xl font-bold text-cens-dark">
                    ¿Sabes qué es el medio ambiente?
                  </h4>
                  <p className="text-lg text-stone-500">
                    El medio ambiente es como el hogar de todos nosotros, y eso
                    incluye todo lo que nos rodea. Esto significa el agua, los
                    minerales, los bosques, los animales, la tierra, la energía
                    del sol y ¡muchas cosas más! ¡Todo es parte de este lugar
                    asombroso en el que vivimos!
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
                  className="absolute bottom-0 right-24 w-3/12"
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
