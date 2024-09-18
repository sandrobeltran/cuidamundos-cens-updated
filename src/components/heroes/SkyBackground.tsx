"use client";

import React, { useCallback, useEffect, useRef } from "react";

const SkyBackground = () => {
  const skyRef = useRef<HTMLDivElement>(null);
  const parallaxFactor = 2;

  const parallaxEffect = useCallback(function parallaxEffect(scroll: number) {
    if (!skyRef.current) return;
    const bgValue = scroll / parallaxFactor;
    // skyRef.current.querySelector("img")!.style.transform = `translateY(${bgValue}px)`;
    skyRef.current!.style.backgroundPositionY = `${bgValue}px`;
  }, []);

  useEffect(() => {
    // skyRef.current!.querySelector("img")!.style.transform = `translateY(${
    //   window.scrollY / parallaxFactor
    // }px)`;
    skyRef.current!.style.backgroundPositionY = `${
      window.scrollY / parallaxFactor
    }px`;

    window.addEventListener("scroll", () => {
      parallaxEffect(window.scrollY);
    });

    var bMobile = // will be true if running on a mobile device
      navigator.userAgent.indexOf("Mobile") !== -1 ||
      navigator.userAgent.indexOf("iPhone") !== -1 ||
      navigator.userAgent.indexOf("Android") !== -1 ||
      navigator.userAgent.indexOf("Windows Phone") !== -1;

    // if(document.)
  }, [parallaxEffect]);

  return (
    <div
      ref={skyRef}
      className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden bg-[url(/img/hero_sky.jpg)] bg-cover bg-center bg-no-repeat before:absolute before:bottom-0 before:left-0 before:z-20 before:h-1/2 before:w-full before:bg-gradient-to-t before:from-white before:to-transparent mobile-land:h-[200%]"
    >
      {/* <Image src={SkyBackgroundImage} alt="Fondo de cielo CENS" fill className="" /> */}
    </div>
  );
};

export default SkyBackground;
