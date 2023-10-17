import React from "react";
import MenuLinkCard from "./MenuLinkCard";
import { navbarData } from "@/utils/navbarData";

const MobileMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 hidden h-[calc(100%-64px)] w-full bg-black/30 backdrop-blur-lg max-lg:flex">
      <ul className="flex w-full flex-col gap-4">
        <li className="w-full">
          {navbarData.map((link) => (
            <MenuLinkCard key={link.title} {...link} />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
