"use client";

import Image from "next/image";
import React from "react";
import CENSLogo from "@public/logos/cens_white.svg";
import Button from "../Button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NavbarLink from "./NavbarLink";
import { navbarData } from "@/utils/navbarData";
import { useUserStore } from "@/store/useUserStore";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

const DesktopNavbar = () => {
  const { user, loading, logOut } = useUserStore((state) => state);
  const pathname = usePathname();
  const router = useRouter();

  function handleLogOut() {
    router.push("/");
    localStorage.removeItem("session-token");
    logOut();
  }

  const inHome = true;
  const inPanel = pathname.includes("/panel");

  return (
    <nav
      style={inPanel ? { backgroundColor: "#39A935" } : {}}
      className="before relative z-10 flex h-20 w-full justify-between bg-black/30 px-6 text-white shadow-lg before:absolute before:left-0 before:top-0 before:h-full before:w-full before:backdrop-blur-lg mobile-land:hidden mobile-land:h-16"
    >
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
            <Link href={"/usuario"}>
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
            </Link>
            <div className="absolute right-0 top-full z-50 hidden h-fit w-full flex-col items-stretch rounded-bl-lg rounded-br-lg bg-black/30 text-white shadow-lg  backdrop-blur-lg group-hover:flex ">
              <ul className="py-4">
                {user.role === "USER" ? (
                  <>
                    <li className="w-full bg-cens-medium/0 px-3 font-medium transition-colors hover:bg-stone-900/60 hover:font-semibold">
                      <p className="flex gap-1 font-semibold">
                        Puntos:{" "}
                        <span className="flex items-center gap-1 text-yellow-500">
                          {user.points} <StarIcon className="h-5" />
                        </span>
                      </p>
                    </li>
                    <div className="my-2 h-[1px] w-full bg-white"></div>
                  </>
                ) : null}

                {user.role === "ADMIN" ? (
                  <li className="w-full bg-cens-medium/0 font-medium transition-colors hover:bg-stone-900/60 hover:font-semibold">
                    <Link href={"/panel"} className="inline-block w-full px-3">
                      Panel
                    </Link>
                  </li>
                ) : null}
                <li className="w-full bg-cens-medium/0 font-medium transition-colors hover:bg-stone-900/60 hover:font-semibold">
                  <Link href={"/usuario"} className="inline-block w-full px-3">
                    Información
                  </Link>
                </li>
                <li className="w-full bg-cens-medium/0 font-medium transition-colors hover:bg-stone-900/60 hover:font-semibold">
                  <Link
                    href={"/usuario/certificados"}
                    className="inline-block w-full px-3"
                  >
                    Certificados
                  </Link>
                </li>
                <li className="w-full bg-cens-medium/0 font-medium transition-colors hover:bg-stone-900/60 hover:font-semibold">
                  <Link
                    href={"/usuario/juegos"}
                    className="inline-block w-full px-3"
                  >
                    Juegos
                  </Link>
                </li>
                <li className="w-full bg-cens-medium/0 font-medium transition-colors hover:bg-stone-900/60 hover:font-semibold">
                  <Link
                    href={"/usuario/evidencias"}
                    className="inline-block w-full px-3"
                  >
                    Evidencias
                  </Link>
                </li>

                <div className="my-2 h-[1px] w-full bg-white"></div>
                <li
                  onClick={() => handleLogOut()}
                  className="w-full bg-cens-medium/0 font-medium transition-colors hover:bg-stone-900/60 hover:font-semibold"
                >
                  <button className="inline-block w-full px-3 text-left">
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
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
