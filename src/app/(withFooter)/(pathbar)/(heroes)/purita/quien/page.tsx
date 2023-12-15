"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import { PlayIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

export default function QuienPurita() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "Historia de", resalted: "Purita" }}
          description="Únete a nosotros para conocer la historia de Purita, la heroína del Medio Ambiente. Descubre sus poderes y aprende cómo puedes unirte a su misión o convertirte en un héroe en el mundo."
        />
        <div className="flex justify-center px-28 mobile-land:px-16">
          <div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-3xl bg-white/80 shadow-md backdrop-blur-md">
            <video
              ref={videoRef}
              src="/video/purita/quien.mp4"
              className="h-full w-full object-cover object-center"
              controls
              poster="/img/purita/quien-cover.jpg"
            ></video>
            <button
              onClick={(e) => {
                videoRef.current!.play();
                e.currentTarget.style.display = "none";
              }}
              className="group absolute left-0 top-0 z-10 m-auto grid aspect-square h-full w-full place-content-center text-white"
            >
              <PlayIcon className="h-14 transition-transform group-hover:scale-125" />
            </button>
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
