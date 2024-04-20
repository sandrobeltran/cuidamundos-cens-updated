"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import { useEffect, useRef, useState } from "react";
import { RiFullscreenExitFill, RiFullscreenFill } from "react-icons/ri";

export default function Juega() {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{
            text: "¡Videojuego",
            resalted: "CuidaMundos!",
          }}
        />
        <div className="flex w-full justify-center gap-0 px-16 mobile-land:gap-20">
          <div
            className="relative aspect-video w-full max-w-5xl rounded-3xl bg-white/80 p-4 shadow-md backdrop-blur-md"
            style={isFullscreen ? { padding: "0" } : {}}
          >
            <button
              onClick={async (e) => {
                if (document.fullscreenElement) {
                  document.exitFullscreen();
                } else {
                  await e.currentTarget.parentElement!.requestFullscreen();
                }

                setIsFullscreen(!isFullscreen);
              }}
              className="absolute bottom-5 left-5 z-50 grid h-12 w-12 place-content-center rounded-xl bg-white/60 transition-colors hover:bg-white"
            >
              {isFullscreen ? <RiFullscreenExitFill /> : <RiFullscreenFill />}
            </button>
            <iframe
              src="/juega/cuidamundos/index.html"
              allowFullScreen={true}
              className="h-full w-full rounded-2xl"
            ></iframe>
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
