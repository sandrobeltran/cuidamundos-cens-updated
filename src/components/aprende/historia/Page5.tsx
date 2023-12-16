import React, { useContext, useEffect, useRef } from "react";
import { AnimationContext } from "./InteractiveVideo";
import DaliaImage from "@public/img/aprende/dalia-hero.png";
import Image from "next/image";
import BottomDeskImage from "@public/img/aprende/historia/bottom-desk.svg";
import TopDeskImage from "@public/img/aprende/historia/top-desk.svg";
import {
  PauseIcon,
  PlayIcon,
  SpeakerWaveIcon,
  StopIcon,
} from "@heroicons/react/24/solid";

const Page5 = () => {
  const {
    state: { play },
  } = useContext(AnimationContext)!;
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  useEffect(() => {}, [play]);

  return (
    <div
      ref={pageRef}
      className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#562A47] to-[#562A471d]"
    >
      {/* FADE GRADIENT */}
      <div className="absolute left-0 top-0 h-full w-full bg-[url(/img/aprende/historia/paper-background.jpg)] bg-cover bg-center bg-no-repeat mix-blend-multiply" />
      {/* FOREGROUND */}
      <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col gap-8">
        {/* DIALOG */}
        <div className="left-0 right-0 z-20 mx-auto h-fit w-11/12 rounded-bl-3xl rounded-br-3xl bg-slate-800/50 p-5 text-center text-xl text-white shadow-md backdrop-blur-md">
          <p>
            ¡Para evitar accidentes eléctricos, es súper importante que
            identifiquemos y corrijamos todo lo que pueda ser peligroso con la
            electricidad. ¡Vamos a descubrir dos ideas clave!
          </p>
        </div>

        {/* DALIA IMAGE */}
        <div className="absolute bottom-32 left-0 right-0 mx-auto h-[44%] w-[43%] overflow-hidden bg-red-500/30">
          <Image
            src={DaliaImage}
            alt="Imagen de Dalia"
            className="dalia absolute bottom-0 left-0 right-0 top-0 mx-auto w-40 object-cover object-top"
          />

          {/* MEDIA CONTROLS */}
          <div className="progressBar absolute bottom-0 flex w-full items-center gap-1 px-6 pb-2 text-white">
            <StopIcon className="h-7" />
            <PauseIcon className="h-7" />
            <PlayIcon className="h-7" />
            {/* PROGRESS BAR */}
            <div className="relative h-2 flex-1 overflow-hidden rounded-s-full bg-stone-500">
              <span className="bar absolute left-0 top-0 h-full w-1/2 bg-white"></span>
            </div>
            <SpeakerWaveIcon className="h-7" />
            <div className="relative h-2 w-10 rounded-e-full bg-stone-500" />
          </div>
        </div>

        <Image
          src={BottomDeskImage}
          alt="Imagen inferior de la mesa"
          className="absolute bottom-0 left-0 right-0 z-10 mx-auto w-3/4"
        />
      </div>
      {/* BACKGROUND */}
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <Image
          src={TopDeskImage}
          alt="Imagen inferior de la mesa"
          className="absolute bottom-32 left-0 right-0 mx-auto w-3/4"
        />
      </div>
    </div>
  );
};

export default Page5;
