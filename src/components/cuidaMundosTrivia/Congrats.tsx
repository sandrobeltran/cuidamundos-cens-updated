import React, { useEffect, useRef } from "react";
import party from "party-js";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import generateCertificate from "@/utils/generateCertificate";
import { TUserData } from "@/utils/customTypes";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { useSwiper } from "swiper/react";

const Congrats = () => {
  const partyRef = useRef<HTMLDivElement>(null);
  const user = useUserStore((state) => state.user);
  const resetTrivia = useCuidaMundosTrivia((state) => state.resetTrivia);
  const swiper = useSwiper();

  function handleResetTrivia() {
    resetTrivia();
    swiper.slideTo(0);
  }

  useEffect(() => {
    if (partyRef.current) {
      console.log("Confetti!!")
      party.confetti(partyRef.current, {
        count: party.variation.range(30, 50),
        size: party.variation.range(1.3, 2.8),
      });
    }
  }, []);

  function handleGenerateCertificate() {
    console.log(`Generating certificate for ${user?.name}...`);
    generateCertificate(user as TUserData, "Cuidamundos 01");
  }
  return (
    <div
      ref={partyRef}
      className="flex flex-col items-center gap-6 text-center"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-3xl font-bold">
          ¡Felicidades!, has{" "}
          <span className="text-cens-brand">culminado el test</span>
        </h3>
        <p className="font-thin">
          Has completado con éxito toda la trivia sobre riesgo eléctrico
        </p>
      </div>
      <div className="flex w-full justify-center gap-6">
        <div>
          <Button href={"/usuario"} hierarchy="primary" size="lg">
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
        <div>
          <Button
            hierarchy="primary"
            size="lg"
            onClick={handleGenerateCertificate}
          >
            Descargar certificado
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Congrats;
