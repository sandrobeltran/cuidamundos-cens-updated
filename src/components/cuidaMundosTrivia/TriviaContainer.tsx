"use client";

import {
  TTriviaQuestion,
  cuidaMundosQuestions,
} from "@/trivias/cuidaMundosQuestions";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../Button";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import TriviaHeader from "./TriviaHeader";
import OptionCard from "./OptionCard";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";

type TProps = {
  questions: TTriviaQuestion[];
};

const TriviaContainer = ({ questions }: TProps) => {
  const {
    currentPage,
    initializeQuestion,
    mixedOptions,
    addResult,
    nextPage,
    setShowResults,
    resetTrivia,
  } = useCuidaMundosTrivia((state) => state);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentPage],
  );

  function handleNextPage(option: string) {
    if (currentPage < questions.length - 1) {
      const correct = currentQuestion.answer === option;
      addResult({ question: currentQuestion, selection: option, correct });
      nextPage();
    } else {
      setShowResults(true);
    }
  }

  function mixOptions(options: string[]): string[] {
    const mixedOptions: string[] = [];
    const optionsCopy: string[] = [...options];

    while (optionsCopy.length > 0) {
      const option =
        optionsCopy[Math.floor(Math.random() * optionsCopy.length)];
      optionsCopy.splice(
        optionsCopy.findIndex((e) => e === option),
        1,
      );
      mixedOptions.push(option);
    }
    return mixedOptions;
  }

  useEffect(() => {
    const options = mixOptions(currentQuestion.options);

    initializeQuestion(options);
  }, [currentQuestion.options, initializeQuestion]);

  useEffect(() => {
    setCurrentQuestion(questions[currentPage]);
  }, [currentPage, questions]);

  return (
    <div className="flex h-fit flex-col items-center gap-7 rounded-3xl bg-[url(/img/trivia_background.png)] p-6 shadow-lg">
      {/* HEADER */}
      <TriviaHeader
        image="/img/trivia_felix.png"
        title={currentQuestion.title}
        current={currentPage + 1}
        total={questions.length}
      />
      {/* OPTIONS / BODY */}
      <div className="grid w-full grid-cols-2 flex-wrap items-center justify-center gap-4 max-sm:grid-cols-1">
        {mixedOptions.map((option) => (
          <OptionCard option={option} key={option} nextPage={handleNextPage} />
        ))}
      </div>
    </div>
  );
};

export default TriviaContainer;
