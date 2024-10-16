"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import FelixHeroImage from "@public/img/felix/hero.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

/* SECTIONS DATA */
const SECTIONS_DATA = [
  {
    title: "¿Quién es?",
    description:
      "Descubre la historia de Félix, el maestro de la electricidad, aprende sobre la energía y descubre cómo ser un héroe eléctrico.",
    href: "/felix/quien",
    icon: "library",
  },
  {
    title: "¿Qué atiende?",
    description:
      "Diviértete mientras aprendes a evitar accidentes eléctricos en casa. Descubre los riesgos y cómo prevenirlos.",
    href: "/felix/atiende",
    icon: "plug",
  },
  {
    title: "Aprende",
    description:
      "Explora el mundo de la eficiencia energética, descubre los vatios y calcula tu consumo para convertirte en un héroe eléctrico.",
    href: "/felix/calculadora",
    icon: "keyboard",
  },
  {
    title: "Uso eficiente",
    description:
      "Juega y supera la trivia de Uso Eficiente para convertirte en un auténtico héroe eléctrico.",
    href: "/felix/uso-eficiente",
    icon: "power",
  },
  {
    title: "Riesgo eléctrico",
    description:
      "Aprueba la trivia de Riesgo Eléctrico para convertirte en un héroe y obtener una certificación.",
    href: "/felix/riesgo-electrico",
    icon: "thunder",
  },
];

export default function Felix() {
  const [currentSection, setCurrentSection] = useState<{
    index: number;
    top: number;
  }>({ index: 0, top: 0 });

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
            text: "¡Explora y aprende",
            resalted: "con Félix!",
          }}
          description="Descubre cómo ser un héroe de la energía eléctrica y usarla de manera inteligente. ¡Aprende y diviértete!"
        />
        <div className="relative grid w-full grid-cols-6 px-16">
          {/* HERO IMAGE */}
          <div className="col-span-2">
            <Image
              src={FelixHeroImage}
              className="w-full animate-levitating"
              alt="Imagen de Felix volando"
            />
          </div>
          <div className="col-span-4 flex">
            {/* CONTENT */}
            <div className="grid w-full place-content-center">
              <Link
                href={SECTIONS_DATA[currentSection.index].href}
                className="transition-transform hover:-rotate-3 hover:scale-110"
              >
                <div className="realtive group flex w-full max-w-sm animate-spinHighlight flex-col gap-4">
                  <h4 className="relative border-b-2 border-b-felix text-3xl font-semibold text-felix mobile-land:text-2xl">
                    {SECTIONS_DATA[currentSection.index].title}

                    <div className="absolute bottom-0 right-4 top-0 my-auto flex scale-0 items-center gap-1 text-sm font-normal text-stone-600 opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100">
                      Conocer más <LinkIcon className="h-5 mobile-land:h-4" />
                    </div>
                  </h4>
                  <p className="pr-24 text-justify text-lg text-stone-500 mobile-land:text-[1rem] mobile-land:leading-snug">
                    {SECTIONS_DATA[currentSection.index].description}
                  </p>
                </div>
              </Link>
            </div>
            {/* SECTION SELECTION */}
            <div className="relative flex h-full min-w-[80px] flex-col items-center justify-center gap-10 border-l-2 border-dashed border-l-stone-900 pl-12">
              {/* SPOT */}
              <span
                className={clsx([
                  "absolute -left-4 top-0 grid h-8 w-8 place-content-center rounded-full bg-felix text-white transition-transform",
                ])}
                style={{
                  transform: `translateY(${currentSection.top - 16}px)`,
                }}
              >
                {currentSection.index + 1}
              </span>

              {/* SECTION SELECTOR */}
              {SECTIONS_DATA.map((section, index) => {
                return (
                  <button
                    key={section.href}
                    className={clsx([
                      "section__selector__btn grid h-10 w-10 place-content-center rounded-full bg-felix transition-all hover:brightness-75",
                      {
                        "scale-[1.2] bg-[#C01F1F] filter-none":
                          currentSection.index === index,
                      },
                    ])}
                    onClick={(e) => {
                      const top = calcTop(e.currentTarget);

                      setCurrentSection({ index, top });
                    }}
                  >
                    <Image
                      src={`/icons/felix/${section.icon}.svg`}
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
