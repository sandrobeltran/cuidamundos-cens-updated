import React, { useContext, useEffect, useRef } from "react";
import anime from "animejs";
import Image from "next/image";
import { AnimationContext } from "./InteractiveVideo";

const Page1 = () => {
  const {
    state: { play },
  } = useContext(AnimationContext)!;
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [play]);

  return (
    <div
      ref={pageRef}
      className="relative h-full w-full bg-[url(/img/aprende/historia/paper-background.jpg)] bg-cover bg-center bg-no-repeat"
    >
      <div
        id="daliaMask"
        className="absolute inset-0 m-auto flex aspect-square w-52 items-center justify-center overflow-hidden rounded-full bg-white"
      >
        <Image
          src={"/img/aprende/dalia-hero.png"}
          alt="Imagen de Dalia"
          width={100}
          height={100}
          className="h-52 w-44 object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Page1;
