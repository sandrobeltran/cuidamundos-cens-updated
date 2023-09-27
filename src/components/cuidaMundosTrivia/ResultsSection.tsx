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

type TProps = {
  questions: TTriviaQuestion[];
};

const ResultsSection = ({ questions }: TProps) => {
  const { results } = useCuidaMundosTrivia();
  const corrects = results.filter((e) => e.correct);
  const incorrects = results.filter((e) => !e.correct);

  const minCorrects = 1;

  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-10">
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-xl border-2 border-cens-medium bg-cens-medium/30 px-5 py-3 font-semibold text-cens-medium">
            Aciertos: {corrects.length}
          </div>
          <div className="rounded-xl border-2 border-red-500 bg-red-500/30 px-5 py-3 font-semibold text-red-500">
            Errores: {incorrects.length}
          </div>
        </div>

        {corrects.length >= minCorrects ? <Congrats /> : <Retry />}
      </div>
    </CustomSection>
  );
};

export default ResultsSection;
