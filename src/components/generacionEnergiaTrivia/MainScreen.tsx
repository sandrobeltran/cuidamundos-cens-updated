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
    <div className="flex h-full w-full items-center justify-center bg-[url(/img/jirol/generacion-electrica/background.jpg)] bg-cover bg-center bg-no-repeat p-8 text-white backdrop-blur-sm">
      <div className="p-4t relative flex h-fit w-full max-w-md flex-col items-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h6 className="text-xl font-bold">
            TÚ Y LAS FUENTES DE ENERGÍAS: <br />
            <span className="text-cens-light">
              GENERACIÓN DE ENERGÍA ELÉCTRICA
            </span>
          </h6>
          <p className="leading-tight">
            La dinámica es simple: responderán preguntas sobre las distintas
            fuentes de energía, desde la hidroeléctrica hasta la solar. Cada
            respuesta correcta los acercará más al título de &quot;Héroes de las
            fuentes de energía&quot;. ¡Pero ojo!¡Cuidado con las respuestas
            incorrectas, podrían enfrentar desafíos inesperados! Listos para
            desatar su potencial y convertirse en expertos en fuentes de
            energía. ¡Vamos a comenzar la aventura!
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
