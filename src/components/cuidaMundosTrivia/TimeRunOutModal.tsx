import React, { useEffect, useRef } from "react";
import Button from "../Button";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useUserStore } from "@/store/useUserStore";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { useSwiper } from "swiper/react";

const TimeRunOutModal = () => {
  const user = useUserStore((state) => state.user);
  const containerRef = useRef<HTMLDivElement>(null);
  const resetTrivia = useCuidaMundosTrivia((state) => state.resetTrivia);
  const swiper = useSwiper();

  function handleResetTrivia() {
      resetTrivia();
      swiper.slideTo(0);
      containerRef.current!.style.display = "none";
  }

  return (
    <div
      ref={containerRef}
      id="timeRunOutModalWrapper"
      className="absolute left-0 top-0 z-10 hidden h-full w-full items-center justify-center bg-cens-brand/50 backdrop-blur-sm"
    >
      <div className="flex w-full max-w-lg flex-col items-center gap-6 rounded-3xl bg-white px-20 py-16 text-center">
        <ClockIcon className="h-12 text-red-500" />
        <h3 className="text-3xl font-bold text-cens-dark">
          ¡Se ha acabado el tiempo!
        </h3>
        <p className="text-xl font-light text-stone-500">
          Siempre puedes intentarlo de nuevo
        </p>
        <div className="flex gap-5">
          <div>
            <Button hierarchy="secondary" size="lg" href="/usuario">
              Ir a mi perfil
            </Button>
          </div>
          <div>
            <Button
              hierarchy="primary"
              size="lg"
              onClick={() => handleResetTrivia()}
            >
              Volver a jugar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeRunOutModal;
