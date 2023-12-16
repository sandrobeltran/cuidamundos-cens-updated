import React, { useContext, useEffect, useRef } from "react";
import { AnimationContext } from "./InteractiveVideo";
import Image from "next/image";
import MillBaseImage from "@public/img/aprende/historia/mill-base.png";
import PropellerImage from "@public/img/aprende/historia/propeller.png";
import MillBaseBackImage from "@public/img/aprende/historia/mill-base-back.png";
import PropellerBackImage from "@public/img/aprende/historia/propeller-back.png";

const Page6 = () => {
  const {
    state: { play },
  } = useContext(AnimationContext)!;
  const pageRef = useRef<HTMLDivElement>(null);

  function initializeClouds() {
    const cloudsLenght = 8;

    for (let i = 0; i < cloudsLenght; i++) {
      const y = Math.random() * 80;
      const x = Math.random() * 40 - 30;
      const width = Math.random() * 60 + 60;
      const velocity = Math.random() * 30 + 20;
      const delay = Math.random();

      const left = Math.random() < 0.5;

      const baseSprite = "/img/aprende/historia/cloud-";
      const cloudEl = document.createElement("img");
      cloudEl.classList.add("storm-cloud");
      cloudEl.src = `${baseSprite}${Math.floor(Math.random() * 6) + 1}.png`;
      cloudEl.style.top = `${y}%`;
      cloudEl.style.right = `${x}%`;
      cloudEl.style.width = `${width}px`;
      cloudEl.style.animationDuration = `${velocity}s`;
      cloudEl.style.animationDelay = `${delay}s`;
      // cloudEl.style.animationDirection = left ? "reverse" : "normal";

      pageRef.current!.querySelector(".cloudsContainer")!.appendChild(cloudEl);
    }
  }

  useEffect(() => {
    initializeClouds();
  }, []);

  useEffect(() => {}, [play]);

  return (
    <div
      ref={pageRef}
      className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#ffbd42] to-[#A152081d]"
    >
      {/* FADE GRADIENT */}
      <div className="absolute left-0 top-0 h-full w-full bg-[url(/img/aprende/historia/paper-background.jpg)] bg-cover bg-center bg-no-repeat mix-blend-multiply" />
      {/* FOREGROUND */}
      <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col gap-8">
        {/* DIALOG */}
        <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto h-fit w-11/12 rounded-tl-3xl rounded-tr-3xl bg-slate-800/50 p-5 text-center text-xl text-white shadow-md backdrop-blur-md">
          <p>
            ¡Para evitar accidentes eléctricos, es súper importante que
            identifiquemos y corrijamos todo lo que pueda ser peligroso con la
            electricidad. ¡Vamos a descubrir dos ideas clave!
          </p>
        </div>

        {/* WINDMILLS */}
        <div className="absolute -left-16 bottom-0 flex h-[70%] w-72 justify-center">
          <Image
            src={PropellerImage}
            width={300}
            alt="Imagen de la hélice de un Molino de viento"
            className="absolute -top-[45%] w-full animate-spin"
          />
          <Image
            src={MillBaseImage}
            alt="Imagen de la base de un Molino de viento"
            className="h-full w-fit"
          />
        </div>
        <div className="absolute -bottom-12 left-[37%] flex h-[70%] w-72 justify-center">
          <Image
            src={PropellerImage}
            width={300}
            alt="Imagen de la hélice de un Molino de viento"
            className="absolute -top-[45%] w-full animate-spin"
          />
          <Image
            src={MillBaseImage}
            alt="Imagen de la base de un Molino de viento"
            className="h-full w-fit"
          />
        </div>
        <div className="absolute -bottom-4 -right-20 flex h-[70%] w-72 justify-center">
          <Image
            src={PropellerImage}
            width={300}
            alt="Imagen de la hélice de un Molino de viento"
            className="absolute -top-[45%] w-full animate-spin"
          />
          <Image
            src={MillBaseImage}
            alt="Imagen de la base de un Molino de viento"
            className="h-full w-fit"
          />
        </div>
      </div>

      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 z-10 h-full w-full opacity-50">
        {/* WINDMILLS */}
        <div className="absolute -bottom-32 left-[16%] flex h-[70%] w-60 justify-center">
          <Image
            src={PropellerBackImage}
            width={300}
            alt="Imagen de la hélice de un Molino de viento"
            className="absolute -top-[40%] w-full animate-spin"
            style={{ animationDuration: "2s" }}
          />
          <Image
            src={MillBaseBackImage}
            alt="Imagen de la base de un Molino de viento"
            className="h-full w-fit"
          />
        </div>
        <div className="absolute -bottom-32 right-[14%] flex h-[70%] w-60 justify-center">
          <Image
            src={PropellerBackImage}
            width={300}
            alt="Imagen de la hélice de un Molino de viento"
            className="absolute -top-[40%] w-full animate-spin"
            style={{ animationDuration: "2s" }}
          />
          <Image
            src={MillBaseBackImage}
            alt="Imagen de la base de un Molino de viento"
            className="h-full w-fit"
          />
        </div>
      </div>

      {/* CLOUDS */}
      <div className="cloudsContainer absolute left-0 top-0 z-0 h-full w-full opacity-70 mix-blend-lighten"></div>
    </div>
  );
};

export default Page6;
