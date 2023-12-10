import { useUsoEficiente } from "@/store/useUsoEficiente";
import React from "react";
import Button from "../Button";
import { useSwiper } from "swiper/react";

type TProps = {
  Percent: React.ElementType;
};

const Retry = ({ Percent }: TProps) => {
  const resetTrivia = useUsoEficiente((state) => state.resetTrivia);

  const swiper = useSwiper();

  function handleResetTrivia() {
    resetTrivia();
    swiper.slideTo(0);
  }

  return (
    <div className="flex max-w-xl flex-col items-center gap-10 mobile-land:gap-6 text-center">
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-3xl font-bold">
          ¡Ups! <span className="text-cens-brand">¡No te desanimes!</span>
        </h3>
        <p className="font-thin">
          Aprende de tus errores y prepárate para la próxima ronda. Tienes más
          oportunidades para demostrar tus conocimientos sobre el Uso Eficiente
          y convertirte en un héroe eléctrico. ¡Ánimo!
        </p>
      </div>
      {<Percent />}
      <Button hierarchy="primary" size="lg" onClick={() => handleResetTrivia()}>
        Reintentar
      </Button>
    </div>
  );
};

export default Retry;
