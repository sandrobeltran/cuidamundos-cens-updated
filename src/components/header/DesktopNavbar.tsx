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
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const DesktopNavbar = () => {
  const { user, loading } = useUserStore((state) => state);
  const pathName = usePathname();

  const inHome = true;

  return (
    <nav className="before relative z-10 flex h-20 w-full justify-between bg-black/30 px-6 text-white shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-full before:backdrop-blur-lg max-lg:hidden">
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
      {!loading ? (
        user ? (
          <div className="z-20 flex items-center gap-3">
            <Link href={"/usuario"}>
              <div className="flex items-center gap-2 text-white">
                <Image
                  src={user!.avatar}
                  alt="User avatar"
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div className="flex flex-col items-start">
                  <h4 className="text-lg leading-tight">
                    {user.name.split(" ")[0]} {user.lastname.split(" ")[0]}
                  </h4>
                  <p className="text-sm leading-tight">{user.email}</p>
                </div>
                <ChevronDownIcon className="h-6" />
              </div>
            </Link>
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

export default DesktopNavbar;
