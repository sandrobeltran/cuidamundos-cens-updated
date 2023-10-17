"use client";

import React, { useCallback, useEffect, useRef } from "react";
import Button from "./Button";
import Image, { StaticImageData } from "next/image";

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
  const heroSection = useRef<HTMLElement>(null);

  const parallaxFactor = 2;

  const parallaxEffect = useCallback(function parallaxEffect(scroll: number) {
    if (!heroSection.current) return;
    const bgValue = scroll / parallaxFactor;
    heroSection.current.style.backgroundPositionY = `${bgValue}px`;
  }, []);

  useEffect(() => {
    heroSection.current!.style.backgroundPositionY = `${
      window.scrollY / parallaxFactor
    }px`;

    window.addEventListener("scroll", () => {
      parallaxEffect(window.scrollY);
    });
  }, [parallaxEffect]);

  return (
    <section
      ref={heroSection}
      // style={{ backgroundSize: "115%" }}
      className="relative col-span-12 flex h-screen items-start justify-start bg-[url(/img/hero_sky.jpg)] bg-center bg-cover bg-no-repeat px-24 py-28 text-sm before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-gradient-to-t before:from-white before:to-transparent after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:bg-gradient-to-b after:from-stone-900/50 after:to-stone-900/0 max-sm:h-fit max-sm:flex-col max-sm:px-4 max-sm:py-0 max-sm:pt-36 max-sm:bg-[cover] text-stone-500
      "
    >
      {/* <div className="absolute left-0 top-0 h-full w-full bg-[url(/img/hero_leafs.png)] bg-cover bg-bottom bg-no-repeat max-sm:bg-contain max-sm:bg-repeat-space" /> */}
      <div className="relative z-20 flex w-1/2 flex-col gap-5 max-sm:w-full max-sm:items-center max-sm:text-center">
        <h1 className="text-6xl font-bold text-stone-100 max-sm:text-4xl">
          {title.text} <span className="text-cens-brand">{title.resalted}</span>
        </h1>
        <p className="w-5/6 text-lg font-normal max-sm:w-full">{description}</p>{" "}
        {buttonLabel ? (
          <div className="w-fit">
            <Button hierarchy="primary" size="lg" href={href}>
              {buttonLabel}
            </Button>
          </div>
        ) : null}
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-5/6 w-4/6  overflow-x-hidden max-sm:relative max-sm:-bottom-5 max-sm:w-full">
        <Image
          src={image}
          alt="Capitan CENS"
          width={300}
          height={300}
          className="relative -right-20 h-full w-full object-contain max-sm:right-0 "
        />
      </div>
    </section>
  );
};

export default Hero;
