import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import React from "react";
import { SwiperSlide, useSwiper } from "swiper/react";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import QuestionHeader from "../triviaGame/QuestionHeader";
import OptionCard from "../triviaGame/OptionCard";
import { ITestQuestion } from "@/utils/customTypes";
import { useHuellaEcologica } from "@/store/useHuellaEcologica";

type TProps = {
  question: ITestQuestion;
  index: number;
};

const TestQuestion = ({ question, index }: TProps) => {
  const swiper = useSwiper();

  const { addResult, questions, setStage } = useHuellaEcologica();

  function handleNext(option: { percent: number; value: number }) {
    addResult({ question: question, selection: option });
    swiper.slideNext();
    if (index === questions.length - 1) {
      /* GAME HAS ENDED */
      setStage(2);
    }
  }

  return (
    <div className="relative flex h-fit flex-col items-center gap-4 rounded-3xl p-6">
      {/* HEADER */}
      <QuestionHeader image={question.image} title={question.title} />
      <div className="h-1.5 w-full rounded-3xl bg-cens-brand" />
      {/* OPTIONS / BODY */}
      <div className="grid w-full grid-cols-2 flex-wrap items-center justify-center gap-[20px_32px] max-sm:grid-cols-1">
        {question.options.map((option) => (
          <OptionCard
            option={option.title}
            value={{ percent: option.percent, value: option.value }}
            key={option.title}
            nextPage={handleNext}
          />
        ))}
      </div>
    </div>
  );
};

export default TestQuestion;
