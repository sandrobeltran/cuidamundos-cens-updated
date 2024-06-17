"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Button from "./Button";
import Image, { StaticImageData } from "next/image";
import SkyBackground from "./heroes/SkyBackground";

type TProps = {
  image: StaticImageData | string;
  title: {
    text: string;
    resalted?: string;
  };
  description: string;
  buttonLabel?: string;
  href?: string;
};

const Hero = ({ image, title, description, buttonLabel, href }: TProps) => {
  return (
    <section
      // style={{ backgroundSize: "115%" }}
      className="relative col-span-12 flex h-fit min-h-[70vh] items-start justify-start px-24 py-28 text-sm text-stone-700 mobile-land:px-4 max-sm:h-fit max-sm:flex-col max-sm:bg-[cover] max-sm:px-4 max-sm:py-0 max-sm:pt-36
      "
    >
      {/* <div className="absolute left-0 top-0 h-full w-full bg-[url(/img/hero_leafs.png)] bg-cover bg-bottom bg-no-repeat max-sm:bg-contain max-sm:bg-repeat-space" /> */}
      <div className="relative z-20 flex w-1/2 flex-col gap-5 mobile-land:gap-3 max-sm:w-full max-sm:items-center max-sm:text-center pt-16">
        <h1 className="text-6xl font-bold text-stone-100 mobile-land:text-4xl max-sm:text-4xl">
          {title.text} <span className="text-cens-brand">{title.resalted}</span>
        </h1>
        <p className="w-5/6 text-lg font-normal text-stone-600 mobile-land:text-[1rem] max-sm:w-full">
          {description}
        </p>{" "}
        {buttonLabel ? (
          <div className="w-fit">
            <Button hierarchy="primary" size="lg" href={href}>
              {buttonLabel}
            </Button>
          </div>
        ) : null}
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-5/6 w-3/6 overflow-x-hidden max-sm:relative max-sm:-bottom-5 max-sm:w-full">
        <Image
          src={image}
          alt="Logo de CuidaMundos"
          width={300}
          height={300}
          className="relative h-full w-full object-contain max-sm:right-0 "
        />
      </div>
    </section>
  );
};

export default Hero;
