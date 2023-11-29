"use client";

import { usePathname } from "next/navigation";
import React from "react";

const LeavesFalling = () => {
  const pathname = usePathname();

  const HEROES_HUE = {
    purita: 90,
    felix: 310,
    jirol: 0,
  };

  const currentHue = pathname.includes("/purita")
    ? HEROES_HUE.purita
    : pathname.includes("/felix")
    ? HEROES_HUE.felix
    : HEROES_HUE.jirol;

  return (
    <div
      id="leaves-falling-container"
      style={{ filter: `hue-rotate(${currentHue}deg)` }}
    >
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  );
};

export default LeavesFalling;
