"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroesArrowImage from "../../../public/icons/heroes_arrow.svg";
import { usePathname } from "next/navigation";
import AVATARS_DATA from "@/utils/avatarsData";

const names = {
  "/": "Inicio",
  purita: "Purita",
  quien: "¿Quién es?",
  atiende: "¿Qué atiende?",
  poderes: "Poderes",
  felix: "Félix",
  aprende: "Ignis",
  jirol: "Jirol",
  juega: "Juega",
  historia: "Historia",
  /* GAMES */
  "uso-eficiente": "Uso Eficiente",
  "huella-ecologica": "Huella Ecológica",
  "riesgo-electrico": "Riesgo Eléctrico",
  "fuentes-energia": "Fuentes de Energía",
  "energias-renovables": "Energías Renovables",
};

const PathBar = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  const routesHistory = [
    { path: "/", name: "Inicio" },
    ...paths.map((path) => ({
      path: `/${path}`,
      name: names[path as keyof typeof names],
    })),
  ];

  return (
    <nav className="fixed left-0 top-20 z-40 h-16 w-full px-16 mobile-land:absolute mobile-land:top-16 mobile-land:h-12 mobile-land:px-6">
      <div className="flex h-full w-full items-center justify-between bg-cyan-950/70 px-6 backdrop-blur-md">
        {/* ROUTE */}
        <ul className="flex items-center justify-start gap-4 text-2xl text-white mobile-land:gap-2 mobile-land:text-lg">
          {routesHistory.map((route, index) => (
            <div key={index} className="flex gap-4 mobile-land:gap-2">
              {index === routesHistory.length - 1 ? (
                <p>{route.name}</p>
              ) : (
                <Link
                  href={route.path}
                  className="w-fit underline-offset-2 hover:underline"
                >
                  {route.name}
                </Link>
              )}
              {index < routesHistory.length - 1 ? (
                <Image
                  src={HeroesArrowImage}
                  className="w-20 mobile-land:w-12"
                  alt="Flecha hacia la derecha"
                />
              ) : null}
            </div>
          ))}
        </ul>

        {/* HEROES */}
        <div className="flex h-full gap-4 py-2 mobile-land:gap-2">
          <Link href={"/jirol"}>
            <div
              className="aspect-square h-full rounded-full"
              style={{
                filter: paths.includes("jirol")
                  ? "brightness(1)"
                  : "brightness(.5)",
              }}
            >
              <Image
                src={AVATARS_DATA.jirol}
                width={64}
                height={64}
                alt="Imagen de Jirol"
              />
            </div>
          </Link>
          <Link href={"/felix"}>
            <div
              className="aspect-square h-full rounded-full"
              style={{
                filter: paths.includes("felix")
                  ? "brightness(1)"
                  : "brightness(.5)",
              }}
            >
              <Image
                src={AVATARS_DATA.felix}
                width={64}
                height={64}
                alt="Imagen de Félix"
              />
            </div>
          </Link>
          <Link href={"/purita"}>
            <div
              className="aspect-square h-full rounded-full"
              style={{
                filter: paths.includes("purita")
                  ? "brightness(1)"
                  : "brightness(.5)",
              }}
            >
              <Image
                src={AVATARS_DATA.purita}
                width={64}
                height={64}
                alt="Imagen de Purita"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default PathBar;
