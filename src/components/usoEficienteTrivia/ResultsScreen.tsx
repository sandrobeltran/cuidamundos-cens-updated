"use client";

import React, { useCallback, useEffect, useRef } from "react";
import party from "party-js";
import Link from "next/link";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import { useUsoEficiente } from "@/store/useUsoEficiente";
import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import Congrats from "./Congrats";
import Retry from "./Retry";
import CustomSection from "../layout/CustomSection";
import { toast } from "react-toastify";
import { useGamesStore } from "@/store/useGamesStore";
import { usePathname } from "next/navigation";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "decimal",
  maximumFractionDigits: 0,
});

const PercentCirle = () => {
  const { results } = useUsoEficiente();
  const corrects = results.filter((e) => e.correct);

  return (
    <div
      className="flex aspect-square mobile-land:w-36 w-40 flex-col items-center justify-center gap-0 rounded-full border-[12px] p-5 max-sm:w-52 max-sm:border-[18px]"
      style={{
        borderColor: `hsl(${formatter.format(
          (corrects.length / results.length) * 100,
        )}, 100%, 50%)`,
      }}
    >
      <h6 className="text-5xl mobile-land:text-4xl font-bold">
        {formatter.format((corrects.length / results.length) * 100)}%
      </h6>
      <p className="text-sm font-medium leading-none max-sm:text-lg">
        {corrects.length} / {results.length}
      </p>
    </div>
  );
};

const ResultsScreen = () => {
  const { results, questions, stage, lose, setHasWon, hasWon } =
    useUsoEficiente();
  const corrects = results.filter((e) => e.correct);
  const incorrects = results.filter((e) => !e.correct);
  const user = useUserStore((state) => state.user);
  const { games } = useGamesStore();
  const pathname = usePathname();
  const trivia = games.find((game) => game.href === pathname);

  // ? REPLACE WITH THE REAL THRESHOLD WHEN FINISHED
  const minCorrects = 4;

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
      body: JSON.stringify({ points: trivia?.points, gameId: trivia?._id }),
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
    if (
      results.length === questions.length &&
      stage === 2 &&
      !lose &&
      corrects.length >= minCorrects &&
      user
    ) {
      // user has won
      handleUploadPoints();
    }
  }, [
    user,
    corrects.length,
    handleUploadPoints,
    lose,
    questions.length,
    results.length,
    stage,
  ]);

  return (
    <div className="flex h-full flex-col items-center justify-center text-stone-500 p-6">
      {results.length === questions.length && stage === 2 ? (
        corrects.length >= minCorrects && !lose ? (
          <Congrats Percent={PercentCirle} />
        ) : (
          <Retry Percent={PercentCirle} />
        )
      ) : null}
    </div>
  );
};

export default ResultsScreen;
