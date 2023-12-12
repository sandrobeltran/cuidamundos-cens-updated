import React, { useCallback, useEffect, useRef } from "react";
import party from "party-js";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import generateCertificate from "@/utils/generateCertificate";
import { ITrivia, TUserData } from "@/utils/customTypes";
import { useUsoEficiente } from "@/store/useUsoEficiente";
import { useSwiper } from "swiper/react";
import { toast } from "react-toastify";
import { useGamesStore } from "@/store/useGamesStore";
import { usePathname } from "next/navigation";
import { BellAlertIcon } from "@heroicons/react/24/outline";

type TProps = {
  Percent: React.ElementType;
};

const Congrats = ({ Percent }: TProps) => {
  const partyRef = useRef<HTMLDivElement>(null);
  const user = useUserStore((state) => state.user);
  const { resetTrivia, stage } = useUsoEficiente();
  const swiper = useSwiper();
  const { games } = useGamesStore();
  const pathname = usePathname();

  const trivia = games.find((game) => game.href === pathname) as ITrivia;

  function handleResetTrivia() {
    resetTrivia();
    swiper.slideTo(0);
  }

  useEffect(() => {
    if (partyRef.current && stage === 2) {
      party.confetti(partyRef.current, {
        count: party.variation.range(30, 50),
        size: party.variation.range(1.3, 2.8),
      });
    }
  }, [stage]);

  function handleGenerateCertificate() {
    console.log(`Generating certificate for ${user?.name}...`);
    generateCertificate(user as TUserData, trivia.title)?.save();
  }

  return (
    <div
      ref={partyRef}
      className="mobile-land:gap-6 flex max-w-xl flex-col items-center gap-10 text-center"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-3xl font-bold">
          ¡Eres un héroe <span className="text-cens-brand">del planeta!</span>
        </h3>
        <p className="font-normal">
          Has superado la trivia con éxito. Tu conocimiento sobre{" "}
          <b>{trivia.title}</b> es impresionante. ¡Continúa cuidando nuestro
          planeta y aprendiendo más sobre la sostenibilidad! ¡Te has convertido
          en un auténtico héroe eléctrico! ¡Sigue así!
        </p>
      </div>
      <Percent />
      {user ? (
        <div className="flex w-full flex-wrap justify-center gap-6">
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
      ) : (
        <div className="flex w-full flex-col items-center justify-center gap-6">
          <p className="flex gap-2 text-amber-500">
            <BellAlertIcon className="h-6" /> Para guardar tu resultado, acceder
            a tu certificado y acumular puntos en tu cuenta
          </p>
          <button
            onClick={() =>
              (document.getElementById("loginModalWrapper")!.style.display =
                "flex")
            }
            className="rounded-xl border-2 border-amber-500 bg-amber-500/20 px-6 py-2 text-lg font-bold text-amber-500 underline"
          >
            Inicia sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default Congrats;
