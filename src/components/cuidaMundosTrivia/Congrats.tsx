import React, { useCallback, useEffect, useRef } from "react";
import party from "party-js";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import generateCertificate from "@/utils/generateCertificate";
import { TUserData } from "@/utils/customTypes";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { useSwiper } from "swiper/react";
import { toast } from "react-toastify";
import { useGamesStore } from "@/store/useGamesStore";
import { usePathname } from "next/navigation";

const Congrats = () => {
  const partyRef = useRef<HTMLDivElement>(null);
  const user = useUserStore((state) => state.user);
  const { resetTrivia, results, questions, stage, setHasWon, hasWon } =
    useCuidaMundosTrivia();
  const swiper = useSwiper();
  const { games } = useGamesStore();
  const pathname = usePathname();
  const trivia = games.find((game) => game.href === pathname);

  function handleResetTrivia() {
    resetTrivia();
    swiper.slideTo(0);
  }

  useEffect(() => {
    if (partyRef.current) {
      console.log("Confetti!!");
      party.confetti(partyRef.current, {
        count: party.variation.range(30, 50),
        size: party.variation.range(1.3, 2.8),
      });
    }
  }, []);

  const handleUploadPoints = useCallback(async () => {
    console.log("Trying to add points");
    if (trivia?.winners.includes(user?._id as string) || hasWon) return;

    const token = localStorage.getItem("session-token");

    if (!token) return toast("Acción inválida");

    const updateUserRequest = await fetch("/usuario/api/puntos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ points: 25, gameId: trivia?._id }),
    });
    const updateUserResponse = await updateUserRequest.json();

    if (!updateUserRequest.ok) {
      console.log(updateUserResponse);
      return toast.error(updateUserResponse.message);
    }

    setHasWon(true);
    console.log("Points added to user");
  }, [trivia, user, hasWon, setHasWon]);

  useEffect(() => {
    if (results.length === questions.length && stage !== 1) {
      handleUploadPoints();
    }
  }, [stage, questions, results.length, handleUploadPoints]);

  function handleGenerateCertificate() {
    console.log(`Generating certificate for ${user?.name}...`);
    generateCertificate(user as TUserData, "Trivia Cuidamundos")?.save();
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
