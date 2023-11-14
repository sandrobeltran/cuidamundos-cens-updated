"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import party from "party-js";
import Link from "next/link";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import CustomSection from "../layout/CustomSection";
import { toast } from "react-toastify";
import { useGamesStore } from "@/store/useGamesStore";
import { usePathname } from "next/navigation";
import { useHuellaEcologica } from "@/store/useHuellaEcologica";
import { ITest, TUserData } from "@/utils/customTypes";
import { useSwiper } from "swiper/react";
import generateCertificate from "@/utils/generateCertificate";
import { BellAlertIcon } from "@heroicons/react/24/outline";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "decimal",
  maximumFractionDigits: 0,
});

const ResultsScreen = () => {
  const { results, questions, stage, setHasWon, hasWon, resetGame } =
    useHuellaEcologica();
  const user = useUserStore((state) => state.user);
  const swiper = useSwiper();
  const { games } = useGamesStore();
  const pathname = usePathname();
  const test = games.find((game) => game.href === pathname) as ITest;
  const [testResult, setTestResult] = useState<{
    message: string;
    totalPoints: number;
  }>({
    message: "",
    totalPoints: 0,
  });
  let totalPoints = 0;

  const handleUploadPoints = useCallback(async () => {
    console.log("Trying to add points");
    if (test?.winners.includes(user?._id as string) || hasWon) return;

    const token = localStorage.getItem("session-token");

    if (!token) return toast("Acción inválida");

    const updateUserRequest = await fetch("/usuario/api/puntos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ points: test?.points, gameId: test?._id }),
    });
    const updateUserResponse = await updateUserRequest.json();

    if (!updateUserRequest.ok) {
      console.log(updateUserResponse);
      return toast.error(updateUserResponse.message);
    }

    setHasWon(true);
    console.log("Points added to user");
  }, [test, user, hasWon, setHasWon]);

  useEffect(() => {
    if (results.length === questions.length && stage === 2 && user) {
      handleUploadPoints();

      // user has won

      const ranges = test.data.ranges;

      /* CALC USER RESULT */
      results.forEach((result) => (totalPoints += result.selection));

      const sortedRanges = ranges.sort((a, b) => a.limit - b.limit);

      setTestResult({ totalPoints, message: test.data.maxMessage });

      for (const range of sortedRanges) {
        if (totalPoints <= range.limit) {
          setTestResult({ totalPoints, message: range.message });
          break;
        }
      }
    }
  }, [user, stage]);

  function handleResetTrivia() {
    resetGame();
    setTestResult({ message: "", totalPoints: 0 });
    swiper.slideTo(0);
  }
  function handleGenerateCertificate() {
    console.log(`Generating certificate for ${user?.name}...`);
    generateCertificate(user as TUserData, "Test Huella Ecológica")?.save();
  }

  const difference = 640 - 36;
  const colorValue = (100 / difference) * (testResult.totalPoints - 36) + 30;

  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-14 text-stone-500">
        {/* PERCENT CIRLCE */}
        <div className="flex w-full max-w-2xl flex-col items-center gap-14 text-center">
          <h4 className="text-3xl font-bold text-cens-brand">
            {testResult.message}
          </h4>
          <div
            className="flex h-40 w-40 flex-col items-center justify-center gap-0 rounded-full border-[12px] p-5"
            style={{
              borderColor: `hsl(${formatter.format(
                130 - colorValue,
              )}, 100%, 50%)`,
              backgroundColor: `hsla(${formatter.format(
                130 - colorValue,
              )}, 100%, 50%, .2)`,
            }}
          >
            <h6 className="flex flex-col text-5xl font-bold">
              {testResult.totalPoints} <br />
              <span className="text-lg">puntos</span>
            </h6>
          </div>
        </div>
        {results.length === questions.length && stage === 2 ? (
          user ? (
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
          ) : (
            <div className="flex w-full flex-col items-center justify-center gap-6">
              <p className="flex gap-2 text-amber-500">
                <BellAlertIcon className="h-6" /> Para guardar tu resultado,
                acceder a tu certificado y acumular puntos en tu cuenta
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
          )
        ) : null}
      </div>
    </CustomSection>
  );
};

export default ResultsScreen;
