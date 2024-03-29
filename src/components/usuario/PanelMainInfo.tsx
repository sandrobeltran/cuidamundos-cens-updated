"use client";

import { PencilIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import { useUserStore } from "@/store/useUserStore";
import { usePathname } from "next/navigation";

const PanelMainInfo = () => {
  const { user } = useUserStore();
  const pathname = usePathname();
  const endpoint = pathname.split("/")[pathname.split.length];

  return (
    <div className="w-full rounded-3xl bg-white/80 p-8 max-sm:p-4">
      <div className="mb-14 flex items-center justify-between mobile-land:mb-8">
        <div className="flex items-center gap-4 max-sm:gap-2">
          <div className="relative w-40 max-sm:w-32">
            <button
              onClick={() =>
                (document.getElementById(
                  "changeAvatarModalWrapper",
                )!.style.display = "flex")
              }
              className="absolute -bottom-10 aspect-square w-40 rounded-full border-4 border-white max-sm:-bottom-4 max-sm:w-32"
            >
              <Image
                src={user!.avatar}
                alt="User avatar"
                fill
                className="rounded-full object-cover"
              />
              <div className="absolute bottom-2 right-2 rounded-full bg-white p-2">
                <PencilIcon className="h-4" />
              </div>
            </button>
          </div>
          <div className="flex flex-col">
            <h6 className="text-3xl font-bold text-cens-brand max-sm:text-xl">
              {user?.username}
            </h6>
            <div className="flex items-center justify-start gap-1 font-semibold max-sm:gap-0 max-sm:text-sm">
              Puntos:
              <StarIcon color="#ffb800" className="h-7" />
              <p className="text-xl font-semibold">{user?.points}</p>
            </div>
          </div>
        </div>
        <div>
          <Button
            onClick={() =>
              (document.getElementById(
                "editProfileModalWrapper",
              )!.style.display = "flex")
            }
            hierarchy="primary"
            size="md"
          >
            Editar
          </Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto border-t-2 border-stone-300 pt-4">
        <ul className="flex gap-16 font-normal text-stone-400 mobile-land:gap-8 mobile-land:text-sm">
          <li>
            <Link
              href={"/usuario"}
              className="underline-offset-4"
              style={
                !endpoint
                  ? {
                      fontWeight: 600,
                      color: "#005F24",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Información
            </Link>
          </li>
          <li>
            <Link
              href={"/usuario/certificados"}
              className="underline-offset-4"
              style={
                endpoint === "certificados"
                  ? {
                      fontWeight: 600,
                      color: "#005F24",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Certificados
            </Link>
          </li>
          <li>
            <Link
              href={"/usuario/juegos"}
              className="underline-offset-4"
              style={
                endpoint === "juegos"
                  ? {
                      fontWeight: 600,
                      color: "#005F24",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Juegos
            </Link>
          </li>
          <li>
            <Link
              href={"/usuario/evidencias"}
              className="underline-offset-4"
              style={
                endpoint === "evidencias"
                  ? {
                      fontWeight: 600,
                      color: "#005F24",
                      textDecoration: "underline",
                    }
                  : {}
              }
            >
              Evidencias
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PanelMainInfo;
