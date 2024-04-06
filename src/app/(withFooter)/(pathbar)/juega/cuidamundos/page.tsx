"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import { useEffect, useRef } from "react";
import { RiFullscreenFill } from "react-icons/ri";

export default function Juega() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{
            text: "¡Videojuego",
            resalted: "CuidaMundos!",
          }}
        />
        <div className="flex justify-center w-full gap-0 px-16 mobile-land:gap-20">
          <div className="max-w-5xl relative aspect-video w-full rounded-3xl bg-white/80 p-4 shadow-md backdrop-blur-md">
            <button
              onClick={async (e) => {
                await iframeRef.current?.requestFullscreen();
              }}
              className="absolute bottom-5 left-5 z-50 grid h-12 w-12 place-content-center rounded-xl bg-white/60 transition-colors hover:bg-white"
            >
              <RiFullscreenFill />
            </button>
            <iframe
              ref={iframeRef}
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
