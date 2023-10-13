import React, { useEffect, useRef } from "react";
import party from "party-js";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import generateCertificate from "@/utils/generateCertificate";
import { TUserData } from "@/utils/customTypes";

const Congrats = () => {
  const partyRef = useRef<HTMLDivElement>(null);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (partyRef.current) {
      party.confetti(partyRef.current, {
        count: party.variation.range(30, 50),
        size: party.variation.range(1.3, 2.8),
      });
    }
  }, []);

  function handleGenerateCertificate() {
    console.log(`Generating certificate for ${user?.fullName}...`);
    generateCertificate(user as TUserData, "Cuidamundos 01");
  }
  return (
    <div
      ref={partyRef}
      className="flex flex-col items-center gap-6 text-center"
    >
      {/* <h1 className="text-6xl font-bold text-cens-brand">¡Felicidades!</h1>
      <p className="max-w-3xl text-xl font-medium">
        Has compleado la trivia de CuidaMundos exitósamente, esperamos que ahora
        pongas en práctica todo lo aprendido y cuidemos juntos nuestro mundo
      </p> */}
      <div className="flex w-full justify-center gap-6">
        <div>
          <Button href={"/usuario"} hierarchy="secondary" size="lg">
            Ir a mi perfil
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
