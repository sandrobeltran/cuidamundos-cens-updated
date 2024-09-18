"use client";

import { PencilIcon, StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import { useUserStore } from "@/store/useUserStore";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const ROLES_DICT = {
  USER: "Usuario",
  ADMIN: "Administrador",
};

interface IProps {
  links: {
    href: string;
    endpoint?: string;
    title: string;
  }[];
}

const PanelMainInfo = ({ links }: IProps) => {
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
            {user?.role === "USER" ? (
              <div className="flex items-center justify-start gap-1 font-semibold max-sm:gap-0 max-sm:text-sm">
                Puntos:
                <p className="text-xl font-semibold">{user?.points}</p>
                <StarIcon color="#ffb800" className="h-7" />
              </div>
            ) : (
              <p className="mt-2 text-xl font-semibold">
                Rol: {ROLES_DICT[user!.role]}
              </p>
            )}
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
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx([
                  "underline-offset-4",
                  {
                    "font-semibold text-cens-brand underline":
                      pathname === link.href,
                  },
                ])}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PanelMainInfo;
