"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import party from "party-js";
import Link from "next/link";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import { useUsoEficiente } from "@/store/useUsoEficiente";
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
    totalPercent: number;
    totalValue: number;
  }>({
    message: "",
    totalPercent: 0,
    totalValue: 0,
  });

  useEffect(() => {
    if (results.length === questions.length && stage === 2) {
      // user has won

      const ranges = test.data.ranges;

      /* CALC USER RESULT */
      const {
        selection: { percent: totalPercent, value: totalValue },
      } = results.reduce((a, b) => ({
        ...a,
        selection: {
          percent: a.selection.percent + b.selection.percent,
          value: a.selection.value + b.selection.value,
        },
      }));

      const sortedRanges = ranges.sort((a, b) => a.limit - b.limit);

      setTestResult({
        totalPercent: totalPercent,
        totalValue: totalValue,
        message: test.data.maxMessage,
      });

      for (const range of sortedRanges) {
        if (totalPercent <= range.limit) {
          setTestResult({ totalPercent, totalValue, message: range.message });
          break;
        }
      }
    }
  }, [
    stage,
    questions.length,
    results,
    test.data.maxMessage,
    test.data.ranges,
  ]);

  function handleResetTest() {
    resetGame();
    setTestResult({ message: "", totalPercent: 0, totalValue: 0 });
    swiper.slideTo(0);
  }

  const numerator = testResult.totalPercent - 20;
  const denominator = 300 - 20;
  const colorValue = (numerator / denominator) * (120 - 0) + 0;

  function handleOpenLearnModal() {
    document.getElementById("productsTableModalWrapper")!.style.display =
      "flex";
  }

  return (
    <div className="flex h-full items-center justify-center p-6 py-10">
      <div className="flex flex-col items-center gap-12 text-stone-500">
        <div className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold text-stone-500">
              {testResult.totalPercent <= 75
                ? "¡Eres un héroe"
                : "¡La tierra te"}{" "}
              <span className="text-cens-brand ">
                {testResult.totalPercent <= 75 ? "del planeta!" : "necesita!"}
              </span>
            </h4>
            <p className="mt-2 font-normal">{testResult.message}</p>
          </div>
          {/* PERCENT CIRLCE */}
          <div
            className="flex h-44 w-44 flex-col items-center justify-center gap-0 rounded-full border-[12px] p-5 mobile-land:h-36 mobile-land:w-36"
            style={{
              borderColor: `hsl(${formatter.format(
                130 - colorValue,
              )}, 100%, 50%)`,
            }}
          >
            <h6 className="flex flex-col text-5xl font-bold mobile-land:text-4xl">
              {testResult.totalPercent}%
            </h6>
          </div>
          {/* CO2 */}
          <p>
            <b>CO2</b> {testResult.totalValue}
          </p>
        </div>

        <div className="flex w-full justify-center gap-6">
          <div>
            <Button
              hierarchy="primary"
              onClick={() => handleOpenLearnModal()}
              size="lg"
            >
              Aprende
            </Button>
          </div>
          <div>
            <Button
              hierarchy="primary"
              size="lg"
              onClick={() => handleResetTest()}
            >
              Volver a calcular
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsScreen;
