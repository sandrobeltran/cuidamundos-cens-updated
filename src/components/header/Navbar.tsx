"use client";

import Image from "next/image";
import React from "react";
import CENSLogo from "../../../public/logos/cens.png";
import Button from "../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarLink from "./NavbarLink";
import { navbarData } from "@/utils/navbarData";
import { useUserStore } from "@/store/useUserStore";

const Navbar = () => {
  const user = useUserStore((state) => state.user);
  const pathName = usePathname();

  const inHome = true;

  return (
    <header
      className="left-0 top-0 z-50 w-full"
      style={{ position: inHome ? "fixed" : "sticky" }}
    >
      <nav className="before relative z-10 flex h-20 w-full justify-between bg-black/30 px-6 text-white shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-full before:backdrop-blur-md">
        <div className="flex items-center gap-8">
          <Link href={"/"}>
            <Image
              src={CENSLogo}
              alt="CENS Grupo EPM Logo"
              className="w-12 brightness-[10]"
            />
          </Link>
          <ul className="flex h-full gap-5">
            {navbarData.map((link) => (
              <NavbarLink
                key={link.title}
                {...link}
                selected={link.href == pathName}
              />
            ))}
          </ul>
        </div>
        {user ? (
          <div className="z-20 flex items-center gap-3">
            <Link href={"/usuario"}>
              <Button hierarchy="primary" size="md">
                Ir a mi perfil
              </Button>
            </Link>
          </div>
        ) : (
          <div className="z-20 flex items-center gap-3">
            <Link href={"/iniciar-sesion"}>
              <Button hierarchy="tertiary" size="md">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href={"/registrarse"}>
              <Button hierarchy="primary" size="md">
                Registrarse
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
