"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroesArrowImage from "../../../public/icons/heroes_arrow.svg";
import { usePathname } from "next/navigation";

const names = {
  "/": "Inicio",
  purita: "Purita",
  quien: "¿Quién es?",
  atiende: "¿Qué atiende?",
  poderes: "Poderes",
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
    <nav className="fixed left-0 top-20 z-10 h-16 w-full px-16">
      <div className="flex h-full w-full items-center justify-between bg-cyan-950/70 px-6 backdrop-blur-md">
        {/* ROUTE */}
        <ul className="flex items-center justify-start gap-4 text-2xl text-white">
          {routesHistory.map((route, index) => (
            <div key={index} className="flex gap-4">
              {index === routesHistory.length - 1 ? (
                <p>{route.name}</p>
              ) : (
                <Link href={route.path} className="w-fit hover:underline underline-offset-2">
                  {route.name}
                </Link>
              )}
              {index < routesHistory.length - 1 ? (
                <Image
                  src={HeroesArrowImage}
                  className="w-20"
                  alt="Flecha hacia la derecha"
                />
              ) : null}
            </div>
          ))}
        </ul>

        {/* HEROES */}
        <div className="flex gap-4"></div>
      </div>
    </nav>
  );
};

export default PathBar;
