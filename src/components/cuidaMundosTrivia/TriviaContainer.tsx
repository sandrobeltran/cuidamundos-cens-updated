"use client";

import {
  TTriviaQuestion,
  cuidaMundosQuestions,
} from "@/trivias/cuidaMundosQuestions";
import Image from "next/image";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Button from "../Button";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import TriviaHeader from "./TriviaHeader";
import OptionCard from "./OptionCard";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { useUserStore } from "@/store/useUserStore";

type TProps = {
  questions: TTriviaQuestion[];
};

const TriviaContainer = ({ questions }: TProps) => {
  const user = useUserStore((state) => state.user);

  const tutorialRef = useRef<HTMLDivElement>(null);
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

  function hideTutorial() {
    tutorialRef.current?.remove();
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
    <div className="relative flex h-fit flex-col items-center gap-7 rounded-3xl bg-[url(/img/trivia_background.png)] p-6 shadow-lg">
      {/* TUTORIAL */}
      <div
        ref={tutorialRef}
        className="absolute left-0 top-0 z-10 flex h-full w-full justify-center rounded-3xl bg-black/60 p-8 backdrop-blur-sm"
      >
        <div className="relative flex h-fit w-full max-w-md flex-col items-center gap-4 rounded-2xl bg-white p-4 after:absolute after:-right-10 after:top-full after:h-12 after:w-28 after:bg-[url(/img/dialog_chip.svg)] after:bg-contain after:bg-bottom after:bg-no-repeat">
          <div className="text-center text-stone-600">
            <h6 className="text-lg font-semibold">
              Hola,{" "}
              <span className="text-cens-medium">
                {user?.fullName.split(" ")[0]}
              </span>
            </h6>
            <p className="leading-tight">
              Bienvenido a la primera trivia soy Felix y voy a guiarte, es
              momento de que desafies tus conocimientos y me ayudes a cumplir
              una importante mision
            </p>
          </div>
          <Button hierarchy="primary" size="sm" onClick={() => hideTutorial()}>
            Empezar
          </Button>
        </div>
        {/* CHARACTER */}
        <div className="relative h-3/4 w-1/3 self-end">
          <Image
            src={"/img/flying_felix.png"}
            alt="Personaje del tutorial"
            fill
            className="object-contain"
          />
        </div>
      </div>
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
