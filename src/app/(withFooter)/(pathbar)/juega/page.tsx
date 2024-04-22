"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import FelixRenderImage from "@public/img/juega/felix-render.png";
import PuritaRenderImage from "@public/img/juega/purita-render.png";
import JirolRenderImage from "@public/img/juega/jirol-render.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/Button";

/* SECTIONS DATA */
const SECTIONS_DATA = [
  {
    title: {
      text: "CuidaMundo",
      resalted: "Trofeos",
    },
    description:
      "Descubre la historia de Félix, el maestro de la electricidad, aprende sobre la energía y descubre cómo ser un héroe eléctrico.",
    href: "/juega/1",
    icon: "wand",
  },
  {
    title: {
      text: "CuidaMundos",
      resalted: "Juego",
    },
    description:
      "Videojuego 2D de aventura y educativo sobre los CuidaMundos de CENS. ¡Donde serás Purita, Jirol y Félix, y tendrás que ser un héroe para salvar nuestro planeta!",
    href: "/juega/cuidamundos",
    icon: "trophy",
  },
  {
    title: {
      text: "CuidaMundo",
      resalted: "Trofeos",
    },
    description:
      "Explora el mundo de la eficiencia energética, descubre los vatios y calcula tu consumo para convertirte en un héroe eléctrico.",
    href: "/juega/3",
    icon: "bookmark",
  },
];

export default function Juega() {
  const [currentSection, setCurrentSection] = useState<{
    index: number;
    top: number;
  }>({ index: 1, top: 0 });

  function calcTop(e: HTMLSpanElement): number {
    const offsetTop = e.offsetTop;
    const height = e.clientHeight;

    return offsetTop + height / 2;
  }

  useEffect(() => {
    const sectionSelectorButton = document.querySelector(
      ".section__selector__btn",
    );

    const top = calcTop(sectionSelectorButton as HTMLSpanElement);

    setCurrentSection((c) => ({ ...c, top }));
  }, []);

  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{
            text: "¡Videojuego",
            resalted: "CuidaMundos!",
          }}
        />
        <div className="relative grid w-full grid-cols-6 gap-0 px-16 mobile-land:gap-10">
          {/* HERO IMAGE */}
          <div className="col-span-3 flex mobile-land:col-span-3">
            <Image
              src={PuritaRenderImage}
              className="w-full max-w-[15vw] animate-levitating object-contain mobile-land:w-1/3"
              alt="Render de Purita"
            />
            <Image
              src={FelixRenderImage}
              className="w-full max-w-[15vw] animate-levitating object-contain mobile-land:w-1/3"
              alt="Render de Purita"
            />
            <Image
              src={JirolRenderImage}
              className="w-full max-w-[15vw] animate-levitating object-contain mobile-land:w-1/3"
              alt="Render de Purita"
            />
          </div>
          <div className="col-span-3 flex mobile-land:col-span-3">
            {/* CONTENT */}
            <div className="grid w-full place-content-center pr-10">
              <Link
                href={SECTIONS_DATA[currentSection.index].href}
                className="transition-transform hover:-rotate-3 hover:scale-110"
              >
                <div className="realtive group flex w-full max-w-sm animate-spinHighlight flex-col gap-4">
                  {/* <div className="absolute right-0 top-0 flex scale-0 gap-1 text-stone-600 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                    Conocer más <LinkIcon className="h-5" />
                  </div> */}
                  <h4 className="mobile-land:tex-2xl border-b-2 border-b-cens-brand text-3xl font-semibold text-white">
                    {SECTIONS_DATA[currentSection.index].title.text}{" "}
                    <span className="text-cens-brand">
                      {SECTIONS_DATA[currentSection.index].title.resalted}
                    </span>
                  </h4>
                  <p className="pr-24 text-justify text-lg text-stone-500 mobile-land:pr-0 mobile-land:text-[1rem] mobile-land:leading-snug">
                    {SECTIONS_DATA[currentSection.index].description}
                  </p>
                  <Button hierarchy="primary" size="md">
                    ¡Jugar!
                  </Button>
                </div>
              </Link>
            </div>
            {/* SECTION SELECTION */}
            <div className="relative flex h-full w-0 flex-col items-center justify-center gap-10 border-l-2 border-dashed border-l-stone-900">
              {/* SECTION SELECTOR */}
              {SECTIONS_DATA.map((section, index) => {
                return (
                  <button
                    key={section.href}
                    className="section__selector__btn grid h-10 w-10 place-content-center rounded-full bg-stone-600 transition-all hover:brightness-75"
                    style={
                      currentSection.index === index
                        ? {
                            scale: 1.2,
                            backgroundColor: "#005F24",
                            filter: "none",
                          }
                        : {}
                    }
                    onClick={(e) => {
                      if (index === 1) {
                        const top = calcTop(e.currentTarget);
                        setCurrentSection({ index, top });
                      }
                    }}
                  >
                    <Image
                      src={`/icons/juega/${section.icon}.svg`}
                      alt={`Ícono de ${section.icon}`}
                      width={22}
                      height={22}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
