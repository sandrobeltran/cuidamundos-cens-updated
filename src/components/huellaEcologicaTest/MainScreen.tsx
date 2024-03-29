import React, { useState } from "react";
import Button from "../Button";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import { useUsoEficiente } from "@/store/useUsoEficiente";
import { useSwiper } from "swiper/react";
import { useHuellaEcologica } from "@/store/useHuellaEcologica";
import FoodImage from "../../../public/img/purita/huella-ecologica/main_screen_food.png";

const MainScreen = () => {
  const { user } = useUserStore();
  const { setStage } = useHuellaEcologica();
  const swiper = useSwiper();

  return (
    <div className="flex h-full w-full items-center justify-center bg-white p-8 text-stone-500 backdrop-blur-sm">
      <div className="relative z-10 flex h-fit w-full max-w-2xl flex-col items-center gap-8 p-4">
        <div className="flex flex-col gap-6 text-center">
          <h6 className="font-bold">
            TÚ Y EL MEDIO AMBIENTE <br />
            <span className="text-2xl text-cens-brand">HUELLA ECOLÓGICA</span>
          </h6>
          <p className="text-lg leading-tight opacity-70">
            La huella ecológica es como una marca que dejamos en el planeta con
            nuestras acciones diarias. Contesta las siguientes preguntas y
            descubre cómo podemos tomar decisiones más amigables con la Tierra.
            ¿Estás listo para convertirte en un guardián Cuidamundos y ayudar a
            reducir nuestra huella de carbono? ¡Vamos a empezar!
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
          Siguiente
        </Button>
      </div>
      <Image
        src={FoodImage}
        alt="Imagen de alimentos de la Huella Ecológica"
        className="absolute bottom-0 left-0 z-0 w-full"
      />
    </div>
  );
};

export default MainScreen;
