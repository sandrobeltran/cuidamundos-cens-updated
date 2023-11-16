import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import React from "react";
import Button from "../Button";
import { useSwiper } from "swiper/react";

type TProps = {
  Percent: React.ElementType;
};

const Retry = ({ Percent }: TProps) => {
  const resetTrivia = useCuidaMundosTrivia((state) => state.resetTrivia);

  const swiper = useSwiper();

  function handleResetTrivia() {
    resetTrivia();
    swiper.slideTo(0);
  }

  return (
    <div className="flex flex-col items-center gap-10 text-center">
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-3xl font-bold">
          ¡Que lástima! <span className="text-cens-brand"></span>
        </h3>
        <p className="font-thin">
          No has alcanzado el puntaje mínimo en la trivia sobre riesgo eléctrico
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
