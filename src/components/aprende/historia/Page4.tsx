import React, { useContext, useEffect, useRef } from "react";
import { AnimationContext } from "./InteractiveVideo";
import DaliaImage from "@public/img/aprende/dalia-hero.png";
import Image from "next/image";
import TreeImage1 from "@public/img/aprende/historia/tree-1.png";
import TreeImage2 from "@public/img/aprende/historia/tree-2.png";
import TreeImage3 from "@public/img/aprende/historia/tree-3.png";

const Page4 = () => {
  const {
    state: { play },
  } = useContext(AnimationContext)!;
  const pageRef = useRef<HTMLDivElement>(null);

  function initializeBirds() {
    const cloudsLenght = 4;

    for (let i = 0; i < cloudsLenght; i++) {
      const y = Math.random() * 50;
      const x = Math.random() * 50 + 80;
      const width = Math.random() * 80 + 100;
      const velocity = Math.random() * 5 + 5;
      const delay = Math.random();

      const baseSprite = "/img/aprende/historia/cloud-";
      const cloudEl = document.createElement("img");
      cloudEl.classList.add("bird");
      cloudEl.src = `/img/aprende/historia/bird.gif`;
      cloudEl.style.top = `${y}%`;
      cloudEl.style.left = `-${x}px`;
      cloudEl.style.width = `${width}px`;
      cloudEl.style.animationDuration = `${velocity}s`;
      cloudEl.style.animationDelay = `${delay}s`;
      // cloudEl.style.animationDirection = left ? "reverse" : "normal";

      pageRef.current!.querySelector(".birdsContainer")!.appendChild(cloudEl);
    }
  }

  useEffect(() => {
    initializeBirds();
  }, []);

  // useEffect(() => {}, [play]);

  return (
    <div
      ref={pageRef}
      className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#F1A636] to-[#F1A6361d]"
    >
      {/* FADE GRADIENT */}
      <div className="absolute left-0 top-0 h-full w-full bg-[url(/img/aprende/historia/paper-background.jpg)] bg-cover bg-center bg-no-repeat mix-blend-multiply" />
      {/* FOREGROUND */}
      <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col gap-8">
        {/* DIALOG */}
        <div className="birdsContainer"></div>
        <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto h-fit w-11/12 rounded-tl-3xl rounded-tr-3xl bg-white/80 p-5 text-center text-xl text-stone-500 shadow-md backdrop-blur-md">
          <p>
            La biodiversidad es como la magia que llena nuestro mundo. ¿Saben
            que en un bosque hay muchos tipos de plantas, animales, insectos y
            microorganismos? Todos estos seres vivos juntos hacen que el bosque
            esté equilibrado y saludable. Cada uno tiene un papel importante,
            ¡como piezas de un rompecabezas!
          </p>
        </div>
      </div>
      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <Image
          src={TreeImage3}
          alt="Imagen de Árbol"
          width={160}
          className="absolute -left-28 bottom-0 mx-auto h-[80%] w-fit object-contain"
        />
        <Image
          src={TreeImage1}
          alt="Imagen de Árbol"
          className="absolute bottom-0 left-28 h-[95%] w-fit object-contain"
        />
        <Image
          src={TreeImage2}
          alt="Imagen de Árbol"
          className="absolute bottom-0 left-0 right-0 z-10 mx-auto h-[98%] w-fit object-contain"
        />
        <Image
          src={TreeImage3}
          alt="Imagen de Árbol"
          className="absolute bottom-0 right-4 mx-auto h-[80%] w-fit object-contain"
        />
      </div>
    </div>
  );
};

export default Page4;
