import React, { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import { useUsoEficiente } from "@/store/useUsoEficiente";
import { useSwiper } from "swiper/react";
import BulbImage from "../../../public/img/bulb.png";
import SwitchImage from "../../../public/img/switch.jpg";
import HandImage from "../../../public/img/hand.png";

const MainScreen = () => {
  const { user } = useUserStore();
  const [lightState, setLightState] = useState<boolean>(false);
  const { setStage } = useUsoEficiente();
  const swiper = useSwiper();

  return (
    <div
      className="flex h-full w-full items-center justify-center p-8 backdrop-blur-sm"
      style={{
        backgroundColor: lightState ? "#fff0" : "#6a6a6a",
        color: lightState ? "#6a6a6a" : "#fff",
      }}
    >
      {/* BULB */}
      <Image
        src={BulbImage}
        alt="Imagen de un bombillo CENS"
        className={`bulb absolute left-14 -top-1 w-[13%] object-contain object-bottom`}
        style={{
          filter: lightState
            ? "brightness(1) drop-shadow(0 10px 100px #ff0)"
            : "brightness(0.3) drop-shadow(0 10px 20px #ff00)",
        }}
      />
      <div className="p-4t relative flex h-fit w-full max-w-md flex-col items-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h6 className="text-xl font-semibold">
            USO EFICIENTE: <br />
            <span className="text-cens-brand">¡BIENVENIDOS!</span>
          </h6>
          <p className="leading-tight opacity-70">
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
            if (lightState) {
              setStage(1);
              swiper.slideNext();
            }
            setLightState(true);
          }}
        >
          {lightState ? "Empezar" : "Encender"}
        </Button>
      </div>
      {/* HAND & SWITCH */}
      <div className="absolute -bottom-16 right-14 w-[13%]">
        <div>
          <Image
            src={HandImage}
            alt="Imagen mano CENS"
            className="relative z-10 object-contain object-bottom transition-all"
            style={{ bottom: lightState ? "60px" : "0px" }}
          />
          <div className="absolute inset-0 m-auto w-full">
            <Image
              src={SwitchImage}
              alt="Switch image CENS"
              className="absolute bottom-3/4 w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
