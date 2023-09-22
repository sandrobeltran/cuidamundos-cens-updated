"use client";

import { INavbarProps } from "@/utils/navbarData";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { useRef, useState } from "react";

const MenuLinkCard = ({ title, href, items }: INavbarProps) => {
  const [height, setHeight] = useState<number>(64);
  const bodyRef = useRef<HTMLUListElement>(null);

  function handleToggle() {
    if (height === 64) {
      setHeight((bodyRef.current?.clientHeight as number) + 64);
    } else {
      setHeight(64);
    }
  }

  return (
    <div
      className="w-full overflow-hidden transition-all"
      style={{ maxHeight: `${height}px` }}
    >
      {/* CARD HEADER */}
      <div className="flex h-16 cursor-pointer items-center justify-between border-b border-b-stone-300 px-5 text-white">
        <Link href={href} className="w-full">
          <h4 className="flex items-center text-left text-lg font-normal">
            {title}
          </h4>
        </Link>
        {items ? (
          <button
            className="flex w-full items-center justify-end"
            onClick={() => handleToggle()}
          >
            <ChevronDownIcon className="w-6" />
          </button>
        ) : null}
      </div>

      {/* SUB MENU LINKS */}
      {items ? (
        <ul
          ref={bodyRef}
          className="bg-cens-brand/50 p-5 font-medium text-white"
        >
          {items?.map((item) => (
            <Link key={item.title} href={item.href}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default MenuLinkCard;
