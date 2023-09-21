"use client";

import { INavbarProps } from "@/utils/navbarData";
import Link from "next/link";
import React from "react";

const NavbarLink = ({ title, href, items, selected }: INavbarProps) => {
  return (
    <li className="group relative flex h-full items-center">
      <Link
        href={href}
        className="font-medium text-white/50 transition-all hover:scale-105 hover:text-white"
        style={
          selected
            ? {
                transform: "scale(1.05)",
                color: "#fff",
              }
            : {}
        }
      >
        {title}
      </Link>
      {items ? (
        <div className="absolute left-0 top-full z-50 hidden h-fit w-32 flex-col items-stretch rounded-bl-lg rounded-br-lg bg-black/30 text-white shadow-lg  backdrop-blur-md group-hover:flex ">
          <ul className="py-4">
            {items.map((item) => (
              <li
                key={item.title}
                className="w-full bg-cens-medium/0 font-medium transition-colors hover:bg-cens-brand/60 hover:font-semibold"
              >
                <Link href={item.href} className="inline-block w-full px-3">
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
