"use client";

import React, { useEffect, useRef } from "react";
import party from "party-js";
import Link from "next/link";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import Congrats from "./Congrats";
import Retry from "./Retry";
import CustomSection from "../layout/CustomSection";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "decimal",
  maximumFractionDigits: 0,
});

const ResultsSection = () => {
  const { results, questions, playing } = useCuidaMundosTrivia();
  const corrects = results.filter((e) => e.correct);
  const incorrects = results.filter((e) => !e.correct);

  const minCorrects = 1;

  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-14 text-stone-500">
        {/* <div className="grid grid-cols-2 gap-5">
          <div className="rounded-xl border-2 border-cens-medium bg-cens-medium/30 px-5 py-3 font-semibold text-cens-medium">
            Aciertos: {corrects.length}
          </div>
          <div className="rounded-xl border-2 border-red-500 bg-red-500/30 px-5 py-3 font-semibold text-red-500">
            Errores: {incorrects.length}
          </div>
        </div> */}
        {/* TITLE */}
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
        {results.length === questions.length && !playing ? (
          corrects.length >= minCorrects ? (
            <Congrats />
          ) : (
            <Retry />
          )
        ) : null}
      </div>
    </CustomSection>
  );
};

export default ResultsSection;
