"use client";

import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import CENSLogo from "../../../public/logos/cens.png";
import Link from "next/link";
import React from "react";
import Button from "../Button";
import { Bars3Icon } from "@heroicons/react/24/solid";

const MobileNavbar = () => {
  const user = useUserStore((state) => state.user);

  return (
    <nav className="before relative z-10 hidden h-16 w-full items-center justify-between bg-black/30 px-6 text-white shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-full before:backdrop-blur-md max-lg:flex">
      <Link href={"/"}>
        <Image
          src={CENSLogo}
          alt="CENS Grupo EPM Logo"
          className="w-9 brightness-[10]"
        />
      </Link>
      {user ? (
        <div className="z-20 flex items-center gap-3">
          <Link href={"/usuario"}>
            <Button hierarchy="primary" size="sm">
              Ir a mi perfil
            </Button>
          </Link>
        </div>
      ) : (
        <div className="z-20 flex items-center gap-3">
          <Link href={"/iniciar-sesion"}>
            <Button hierarchy="tertiary" size="sm">
              Iniciar Sesión
            </Button>
          </Link>
          <Link href={"/registrarse"}>
            <Button hierarchy="primary" size="sm">
              Registrarse
            </Button>
          </Link>
        </div>
      )}
      <div className="relative">
        <Bars3Icon className="w-8" />
      </div>
    </nav>
  );
};

export default MobileNavbar;
