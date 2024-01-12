import React, { useContext, useEffect, useRef } from "react";
import { AnimationContext } from "./InteractiveVideo";
import AutumnTreeImage from "@public/img/aprende/historia/autumn-tree.png";
import StormCloudImage from "@public/img/aprende/historia/storm-cloud.png";
import Image from "next/image";

const Page2 = () => {
  const {
    state: { play },
  } = useContext(AnimationContext)!;
  const pageRef = useRef<HTMLDivElement>(null);

  function initializeClouds() {
    const cloudsLenght = 12;

    for (let i = 0; i < cloudsLenght; i++) {
      const y = Math.random() * 60;
      const x = Math.random() * 40 - 20;
      const width = Math.random() * 60 + 60;
      const velocity = Math.random() * 30 + 30;
      const delay = Math.random();

      const left = Math.random() < 0.5;

      const cloudEl = document.createElement("img");
      cloudEl.classList.add("storm-cloud");
      cloudEl.src = StormCloudImage.src;
      cloudEl.style.top = `${y}%`;
      cloudEl.style.right = `${x}%`;
      cloudEl.style.width = `${width}px`;
      cloudEl.style.animationDuration = `${velocity}s`;
      cloudEl.style.animationDelay = `${delay}s`;
      // cloudEl.style.animationDirection = left ? "reverse" : "normal";

      if (width > 90) {
        // Is near
        pageRef.current!.querySelector(".fore-layer")!.appendChild(cloudEl);
      } else {
        // Is far
        pageRef.current!.querySelector(".back-layer")!.appendChild(cloudEl);
      }
    }
  }

  useEffect(() => {
    initializeClouds();
  }, []);

  useEffect(() => {}, [play]);

  return (
    <div
      ref={pageRef}
      className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#5f765e] to-[#48544721]"
    >
      {/* FADE GRADIENT */}
      <div className="absolute left-0 top-0 h-full w-full bg-[url(/img/aprende/historia/paper-background.jpg)] bg-cover bg-center bg-no-repeat mix-blend-multiply" />
      {/* FOREGROUND */}
      <div className="fore-layer absolute left-0 top-0 z-10 h-full w-full">
        <Image
          src={AutumnTreeImage}
          alt="Imagen de árbol seco"
          width={80}
          className="absolute -bottom-2 left-0 right-0 mx-auto"
        />
        <Image
          src={AutumnTreeImage}
          alt="Imagen de árbol seco"
          width={100}
          className="absolute -bottom-2 left-[60%]"
        />
      </div>
      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <div className="back-layer opacity-50"></div>
        <Image
          src={AutumnTreeImage}
          alt="Imagen de árbol seco"
          width={120}
          className="absolute -bottom-2 right-10"
        />
        <Image
          src={AutumnTreeImage}
          alt="Imagen de árbol seco"
          width={125}
          className="absolute -bottom-2 left-[25%]"
        />
        <Image
          src={AutumnTreeImage}
          alt="Imagen de árbol seco"
          width={100}
          className="absolute -bottom-2 left-5"
        />
      </div>
      {/* DIALOG */}
      <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto h-fit w-11/12 rounded-tl-3xl rounded-tr-3xl bg-white/80 p-5 text-center text-xl text-stone-500 shadow-md backdrop-blur-md">
        <p>
          Hay cosas que pueden dañar la naturaleza, como el humo de los carros,
          la basura que no tiramos en su lugar, o los químicos que van a los
          ríos. Esto se llama contaminación y puede hacer que el aire, el agua y
          el suelo estén sucios o enfermos. ¿Cómo podemos ayudar? ¡Aprendiendo a
          cuidar nuestro hogar y previniendo la contaminación!
        </p>
      </div>
    </div>
  );
};

export default Page2;
