"use client";

import { PencilIcon } from "@heroicons/react/24/outline";
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
    <div className="w-full rounded-3xl bg-white/80 p-8">
      <div className="mb-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-40">
            <button
              onClick={() =>
                (document.getElementById(
                  "changeAvatarModalWrapper",
                )!.style.display = "flex")
              }
              className="absolute -bottom-10 h-40 w-40 rounded-full border-4 border-white"
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
          <h6 className="text-3xl font-bold text-cens-brand">
            {user?.name} {user?.lastname}
          </h6>
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
            Editar Perfil
          </Button>
        </div>
      </div>
      <div className="border-t-2 border-stone-300 pt-4">
        <ul className="flex gap-16 font-normal text-stone-400">
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
