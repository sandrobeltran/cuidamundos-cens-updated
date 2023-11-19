import React from "react";
import SkyBackgroundImage from "../../../public/img/hero_sky.jpg";
import Image from "next/image";

const SkyBackground = () => {
  return (
    <Image
      src={SkyBackgroundImage}
      alt="Fondo de cielo CENS"
      fill
      className="z-0"
    />
  );
};

export default SkyBackground;
