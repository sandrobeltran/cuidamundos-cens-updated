import React, { useContext, useEffect, useRef } from "react";
import { AnimationContext } from "./InteractiveVideo";
import DaliaImage from "@public/img/aprende/dalia-hero.png";
import Image from "next/image";

const Page3 = () => {
  const {
    state: { play },
  } = useContext(AnimationContext)!;
  const pageRef = useRef<HTMLDivElement>(null);

  function initializeClouds() {
    const cloudsLenght = 15;

    for (let i = 0; i < cloudsLenght; i++) {
      const y = Math.random() * 80;
      const x = Math.random() * 40 - 30;
      const width = Math.random() * 80 + 100;
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

      pageRef.current?.appendChild(cloudEl);
    }
  }

  useEffect(() => {
    initializeClouds();
  }, []);

  useEffect(() => {}, [play]);

  return (
    <div
      ref={pageRef}
      className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#74abfd] to-[#3577da1d]"
    >
      {/* FADE GRADIENT */}
      <div className="absolute left-0 top-0 h-full w-full bg-[url(/img/aprende/historia/paper-background.jpg)] bg-cover bg-center bg-no-repeat mix-blend-multiply" />
      {/* FOREGROUND */}
      <div className="absolute flex flex-col gap-8 left-0 top-0 z-10 h-full w-full">
        {/* DIALOG */}
        <div className="bottom-0 left-0 right-0 z-20 mx-auto h-fit w-11/12 rounded-bl-3xl rounded-br-3xl bg-slate-800/50 p-5 text-center text-xl text-white shadow-md backdrop-blur-md">
          <p>
            ¡Para evitar accidentes eléctricos, es súper importante que
            identifiquemos y corrijamos todo lo que pueda ser peligroso con la
            electricidad. ¡Vamos a descubrir dos ideas clave!
          </p>
        </div>

        {/* DALIA IMAGE */}
        <Image
          src={DaliaImage}
          alt="Imagen de Dalia CuidaMundos"
          width={150}
          className="left-0 right-0 mx-auto animate-levitating"
        />
      </div>
      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 z-0 h-full w-full"></div>
    </div>
  );
};

export default Page3;
