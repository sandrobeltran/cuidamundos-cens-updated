import React, { useContext, useEffect, useRef } from "react";
import { AnimationContext } from "./InteractiveVideo";
import DaliaImage from "@public/img/aprende/dalia-hero.png";
import Image from "next/image";
import TreeImage1 from "@public/img/aprende/historia/tree-1.png";
import TreeImage2 from "@public/img/aprende/historia/tree-2.png";
import TreeImage3 from "@public/img/aprende/historia/tree-3.png";

const Page6 = () => {
  const {
    state: { play },
  } = useContext(AnimationContext)!;
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  useEffect(() => {}, [play]);

  return (
    <div
      ref={pageRef}
      className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#A15208] to-[#A152081d]"
    >
      {/* FADE GRADIENT */}
      <div className="absolute left-0 top-0 h-full w-full bg-[url(/img/aprende/historia/paper-background.jpg)] bg-cover bg-center bg-no-repeat mix-blend-multiply" />
      {/* FOREGROUND */}
      <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col gap-8">
        {/* DIALOG */}
        <div className="absolute bottom-0 left-0 right-0 z-20 mx-auto h-fit w-11/12 rounded-tl-3xl rounded-tr-3xl bg-slate-800/50 p-5 text-center text-xl text-white shadow-md backdrop-blur-md">
          <p>
            ¡Para evitar accidentes eléctricos, es súper importante que
            identifiquemos y corrijamos todo lo que pueda ser peligroso con la
            electricidad. ¡Vamos a descubrir dos ideas clave!
          </p>
        </div>
      </div>
      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 z-0 h-full w-full"></div>
    </div>
  );
};

export default Page6;
