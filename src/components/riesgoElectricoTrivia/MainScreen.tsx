import React, { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import { useUsoEficiente } from "@/store/useUsoEficiente";
import { useSwiper } from "swiper/react";
import BackgroundImage from "../../../public/img/felix/background.jpg";

const MainScreen = () => {
  const { user } = useUserStore();
  const { setStage } = useUsoEficiente();
  const swiper = useSwiper();

  return (
    <div className="flex h-full w-full items-center justify-center bg-[url(/img/felix/riesgo-electrico/background.jpg)] bg-cover bg-center bg-no-repeat p-8 text-white backdrop-blur-sm">
      <div className="p-4t relative flex h-fit w-full max-w-md flex-col items-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h6 className="text-xl font-semibold">
            RIESGO ELÉCTRICO: <br />
            <span className="text-cens-light">¡BIENVENIDOS!</span>
          </h6>
          <p className="leading-tight">
            ¡Listos para la acción! Iniciemos nuestra pequeña trivia para
            explorar el increíble universo de la energía eléctrica y cómo
            podemos usarla de manera eficiente. ¡Prepárate para divertirte
            mientras aprendemos a cuidar nuestro planeta! ¡Es hora de encender
            la luz del conocimiento!
          </p>
        </div>
        <Button
          hierarchy="primary"
          size="md"
          onClick={() => {
            setStage(1);
            swiper.slideNext();
          }}
        >
          Empezar
        </Button>
      </div>
    </div>
  );
};

export default MainScreen;
