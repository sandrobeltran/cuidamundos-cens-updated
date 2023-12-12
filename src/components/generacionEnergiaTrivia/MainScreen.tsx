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
            ¡SÉ UN HÉROE!
            <br />
            <span className="text-cens-light">ENERGÍAS EN ACCIÓN</span>
          </h6>
          <p className="leading-tight">
            La dinámica es simple; responde preguntas sobre las distintas
            fuentes de energía y la generación de energía eléctrica, desde la
            hidroeléctrica hasta la solar. Cada respuesta correcta te acercará
            más al título de “Héroe de las Fuentes de Energía”. ¡Pero cuidado
            con las respuestas incorrectas, tendrás que volver a empezar! Listo
            para desatar tu potencial y convertirte en un experto en fuentes de
            energía. ¡Juega ya!
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
