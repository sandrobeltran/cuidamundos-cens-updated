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
    <div className="flex h-full w-full items-center justify-center bg-[url(/img/jirol/energias-renovables/background.jpg)] bg-cover bg-center bg-no-repeat p-8 text-white backdrop-blur-sm">
      <div className="p-4t relative flex h-fit w-full max-w-md flex-col items-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h6 className="text-xl font-bold">
            TÚ Y LAS FUENTES DE ENERGÍAS: <br />
            <span className="text-cens-light">ENERGÍAS RENOVABLES</span>
          </h6>
          <p className="leading-tight">
            ¡Saludos, amigos! nuestra nueva misión es explorar los secretos del
            mundo de las fuentes de energía y convertinos en verdaderos Héroes
            de las fuentes de Energía. ¿Su objetivo? Descifrar los enigmas sobre
            las fuentes de energía y su misterio, deberán responder preguntas
            clave sobre la energía renovable, las no renovables y las diferentes
            formas de generar electricidad. ¡Prepárate para la aventura! ¿Listo
            para comenzar?
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
