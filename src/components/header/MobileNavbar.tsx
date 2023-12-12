"use client";

import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import CENSLogo from "../../../public/logos/cens_white.svg";
import Link from "next/link";
import React from "react";
import Button from "../Button";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { navbarData } from "@/utils/navbarData";
import NavbarLink from "./NavbarLink";
import { usePathname } from "next/navigation";

type TProps = {
  toggleMenu: () => void;
};

const MobileNavbar = ({ toggleMenu }: TProps) => {
  const { user, loading } = useUserStore((state) => state);

  const pathname = usePathname();

  return (
    <nav className="before relative top-0 z-10 hidden h-16 w-full items-center justify-between bg-black/30 px-6 text-white shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-full before:backdrop-blur-lg mobile-land:flex">
      <div className="flex items-center gap-8">
        <Link href={"/"}>
          <Image
            src={CENSLogo}
            alt="CENS Grupo EPM Logo"
            className="relative w-20 mobile-land:w-16"
          />
        </Link>
        <ul className="flex h-full gap-5">
          {navbarData.map((link) => (
            <NavbarLink
              key={link.title}
              {...link}
              selected={link.href == pathname}
            />
          ))}
        </ul>
      </div>
      {!loading ? (
        user ? (
          <div className="group relative z-20 flex items-center gap-3">
            <button onClick={() => toggleMenu()}>
              <div className="flex items-center gap-2 text-white">
                <Image
                  src={user!.avatar}
                  alt="User avatar"
                  width={44}
                  height={44}
                  className="aspect-square w-11 rounded-full mobile-land:w-9"
                />
                <div className="flex flex-col items-start">
                  <h4 className="text-lg leading-tight mobile-land:text-sm mobile-land:font-medium">
                    {user.name.split(" ")[0]} {user.lastname.split(" ")[0]}
                  </h4>
                  <p className="text-sm leading-tight mobile-land:text-xs">
                    {user.username}
                  </p>
                </div>
                <ChevronDownIcon className="h-6 mobile-land:h-5" />
              </div>
            </button>
          </div>
        ) : (
          <div className="z-20 flex items-center gap-3">
            <div>
              <Button
                hierarchy="tertiary"
                size="md"
                onClick={() =>
                  (document.getElementById("loginModalWrapper")!.style.display =
                    "flex")
                }
              >
                Iniciar Sesión
              </Button>
            </div>
            <div>
              <Button
                hierarchy="primary"
                size="md"
                onClick={() =>
                  (document.getElementById(
                    "registerModalWrapper",
                  )!.style.display = "flex")
                }
              >
                Registrarse
              </Button>
            </div>
          </div>
        )
      ) : null}
    </nav>
  );
};

export default MobileNavbar;
