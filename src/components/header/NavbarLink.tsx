"use client";

import { INavbarProps } from "@/utils/navbarData";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const NavbarLink = ({ title, href, items, selected }: INavbarProps) => {
  return (
    <li className="group relative flex h-full items-center">
      <Link
        href={href}
        className={clsx([
          "group relative font-medium text-white/80 transition-all hover:scale-105 hover:text-white mobile-land:text-sm",
          { "scale-[1.05]": selected },
        ])}
      >
        <div
          className={clsx([
            "absolute left-0 top-full h-[2.5px] w-full scale-x-0 rounded-full bg-white transition-transform group-hover:scale-x-100",
            { "scale-x-100": selected },
          ])}
        ></div>
        {title}
      </Link>
      {items ? (
        <div className="absolute left-0 top-full z-50 hidden h-fit w-32 flex-col items-stretch rounded-bl-lg rounded-br-lg bg-black/30 text-white shadow-lg backdrop-blur-lg group-hover:flex ">
          <ul className="flex flex-col gap-2 py-4">
            {items.map((item) => (
              <li
                key={item.title}
                className="w-full bg-cens-medium/0 font-medium leading-tight transition-colors hover:bg-stone-900/60 hover:font-semibold "
              >
                <Link
                  href={item.href}
                  className="inline-block w-full px-3 py-1 mobile-land:text-sm"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </li>
  );
};

export default NavbarLink;
