"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import Book, { TBookPage } from "@/components/heroes/purita/Book";
import CustomMain from "@/components/layout/CustomMain";
import MarkImage from "../../../../../../public/img/purita/poderes/mark.svg";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/Button";
import FelixImage1 from "../../../../../../public/img/felix/atiende/felix_1.png";

/* GAME DATA */
const GAME_DATA = [
  {
    coors: {
      x: 90,
      y: 76,
      correct: 1,
    },
    content: {
      title:
        "Para apagar los aparatos, siempre usa el enchufe, ¡nunca tires del cable!",
      value: 1,
    },
  },
  {
    coors: {
      x: 14,
      y: 81,
      correct: 1,
    },
    content: {
      title: "¡Evita poner cosas extrañas en los enchufes, es muy riesgoso!",
      value: 2,
    },
  },
  {
    coors: {
      x: 10,
      y: 55,
      correct: 1,
    },
    content: {
      title:
        "¡Si encuentras un tomacorriente en mal estado, corre y avísale a un adulto de inmediato!",
      value: 3,
    },
  },
  {
    coors: {
      x: 54,
      y: 38,
      correct: 1,
    },
    content: {
      title: "¡Avisa a los adultos si encuentras cables sin protección!",
      value: 4,
    },
  },
  {
    coors: {
      x: 36,
      y: 79,
      correct: 1,
    },
    content: {
      title:
        "Evita conectar muchos aparatos en un solo tomacorriente. ¡Puede calentarse demasiado y causar un cortocircuito!",
      value: 5,
    },
  },
  {
    coors: {
      x: 61,
      y: 69,
      correct: 1,
    },
    content: {
      title:
        "Nunca toques enchufes o aparatos eléctricos con las manos mojadas. ¡Es muy peligroso!",
      value: 6,
    },
  },
];

type TProps = {
  size: number;
  x: number;
  y: number;
};

const Mark = ({ size, x, y }: TProps) => {
  return (
    <div
      className="felix__mark group absolute aspect-square rounded-full shadow-md"
      style={{
        width: `${size}px`,
        left: `calc(${x}% - ${size / 2}px)`,
        top: `calc(${y}% - ${size / 2}px)`,
      }}
    >
      <input
        type="number"
        placeholder=" "
        className="h-full w-full rounded-full bg-felix p-2 text-center text-3xl font-bold text-white transition-all placeholder-shown:bg-amber-400 focus:outline-none"
        max={GAME_DATA.length}
      />
    </div>
  );
};

export default function AtiendeFelix() {
  const [stage, setStage] = useState<number>(0);
  const markSize = 50;

  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "¡Juega y", resalted: "aprende!" }}
          description="¡Diviértete aprendiendo a evitar accidentes eléctricos en casa! Descubre los riesgos y cómo prevenirlos. ¡Hora de jugar! Coloca en el círculo el número correcto para cada situación mencionada."
        />

        {/* MINIGAME SECTION */}
        <div className="px-28 flex flex-col gap-10">
          <div className="relative aspect-[1.5/1] w-full overflow-hidden rounded-3xl bg-[url(/img/felix/atiende/living_room.jpg)] bg-cover bg-center shadow-md backdrop-blur-md">
            {stage === 0 ? (
              <div className="modalWrapper absolute left-0 top-0 z-10 grid h-full w-full place-content-center backdrop-blur-md">
                {/* MAIN SCREEN 1 */}
                <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-center shadow-md shadow-stone-500/20">
                  <h4 className="text-xl font-semibold text-cens-dark">
                    ¡Saludos, héroes!
                  </h4>
                  <p>
                    Soy Félix, el héroe de la energía eléctrica. Aprendamos
                    juntos cómo evitar accidentes eléctricos con nuestros
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
                  src={FelixImage1}
                  alt="Imagen de Purita con pose de victoria"
                  className="absolute bottom-0 right-10 w-5/12"
                />
              </div>
            ) : stage === 1 ? (
              /* MAIN SCREEN 2 */
              <div className="modalWrapper absolute left-0 top-0 z-10 grid h-full w-full place-content-center backdrop-blur-md">
                <div className="relative flex w-full max-w-lg flex-col items-center gap-2 rounded-3xl border-stone-300 bg-white p-10 text-left shadow-md shadow-stone-500/20">
                  <p>
                    ¡Para evitar accidentes eléctricos, es súper importante que
                    identifiquemos y corrijamos todo lo que pueda ser peligroso
                    con la electricidad. ¡Vamos a descubrir dos ideas clave!
                    <br />
                    <br />
                    <b>1.</b> Condiciones Inseguras: Aquí nos referimos a cosas
                    como herramientas, equipos o instalaciones que NO están en
                    buenas condiciones para ser utilizadas de manera segura para
                    lo que fueron creadas.
                    <br />
                    <br />
                    <b>2.</b> Acciones Inseguras: Son errores que cometemos al
                    hacer una tarea y que pueden poner en peligro a todos.
                    También pueden ocurrir cuando no sabemos cómo hacer algo de
                    manera segura. ¡Es súper importante conocer y seguir las
                    prácticas y procedimientos de seguridad para estar siempre
                    protegidos!
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
              </div>
            ) : (
              GAME_DATA.map((mark, index) => (
                <Mark
                  key={mark.content.title}
                  size={markSize}
                  {...mark.coors}
                />
              ))
            )}

            {/* NUBES MÁGIAS */}

            {/* TIERRA MILAGROSA */}

            {/* AGUA SABIA */}

            {/* PODER ACUÁTICO */}

            {/* PODER VERDE */}
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-14 gap-y-6">
            {GAME_DATA.map((mark) => (
              <div
                key={mark.content.title}
                className="flex items-center gap-2"
              >
                <h6 className="text-6xl font-bold text-felix">
                  {mark.content.value}
                </h6>
                <p className="text-stone-600">{mark.content.title}</p>
              </div>
            ))}
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
