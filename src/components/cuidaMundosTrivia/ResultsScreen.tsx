"use client";

import React, { useCallback, useEffect, useRef } from "react";
import party from "party-js";
import Link from "next/link";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
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

const ResultsScreen = () => {
  const { results, questions, stage, lose, setHasWon, hasWon } =
    useCuidaMundosTrivia();
  const corrects = results.filter((e) => e.correct);
  const incorrects = results.filter((e) => !e.correct);
  const user = useUserStore((state) => state.user);
  const { games } = useGamesStore();
  const pathname = usePathname();
  const trivia = games.find((game) => game.href === pathname);
  const minCorrects = 1;

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
      corrects.length > minCorrects &&
      user
    ) {
      // user has won
      handleUploadPoints();
    }
  }, [user]);

  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-14 text-stone-500">
        {/* PERCENT CIRLCE */}
        <div
          className="flex h-40 w-40 flex-col items-center justify-center gap-0 rounded-full border-[12px] p-5"
          style={{
            borderColor: `hsl(${formatter.format(
              (corrects.length / results.length) * 100,
            )}, 100%, 50%)`,
            backgroundColor: `hsla(${formatter.format(
              (corrects.length / results.length) * 100,
            )}, 100%, 50%, .2)`,
          }}
        >
          <h6 className="text-5xl font-bold">
            {formatter.format((corrects.length / results.length) * 100)}%
          </h6>
          <p className="text-sm font-medium leading-none">
            {corrects.length} / {results.length}
          </p>
        </div>
        {results.length === questions.length && stage === 2 ? (
          corrects.length >= minCorrects && !lose ? (
            <Congrats />
          ) : (
            <Retry />
          )
        ) : null}
      </div>
    </CustomSection>
  );
};

export default ResultsScreen;
