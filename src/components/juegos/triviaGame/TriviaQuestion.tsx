import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import React from "react";
import { SwiperSlide, useSwiper } from "swiper/react";
import QuestionHeader from "./QuestionHeader";
import OptionCard from "./OptionCard";
import { useUsoEficiente } from "@/store/useUsoEficiente";
import { StaticImageData } from "next/image";

type TProps = {
  question: TTriviaQuestion;
  index: number;
  cover: StaticImageData;
};

const TriviaQuestion = ({ question, index, cover }: TProps) => {
  const swiper = useSwiper();

  const { addResult, questions, setPlaying, setStage } = useUsoEficiente();

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

  const mixedOptions = mixOptions(question.options);

  function handleNext(option: string) {
    const isCorrect = option === question.answer;
    addResult({ question: question, selection: option, correct: isCorrect });
    swiper.slideNext();
    if (index === questions.length - 1) {
      setPlaying(false);
      setStage(2);
    }
  }

  return (
    <div className="relative flex h-fit flex-col items-center gap-4 rounded-3xl p-6 mobile-land:gap-2 max-sm:mt-4">
      {/* HEADER */}
      <QuestionHeader image={cover} title={question.title} />
      <div className="h-1.5 w-full rounded-3xl bg-cens-brand mobile-land:h-1" />
      {/* OPTIONS / BODY */}
      <div className="flex w-full flex-wrap items-stretch justify-center gap-[20px_32px] mobile-land:gap-[12px_18px]">
        {mixedOptions.map((option) => {
          let normalizedOption = option.trim();

          if (option[option.length - 1] !== ".") {
            normalizedOption += ".";
          }

          return (
            <OptionCard
              option={normalizedOption}
              key={normalizedOption}
              nextPage={handleNext}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TriviaQuestion;
