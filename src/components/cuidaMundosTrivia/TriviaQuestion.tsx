import { TTriviaQuestion } from "@/trivias/cuidaMundosQuestions";
import React from "react";
import { SwiperSlide, useSwiper } from "swiper/react";
import QuestionHeader from "./QuestionHeader";
import OptionCard from "./OptionCard";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";

type TProps = {
  question: TTriviaQuestion;
  index: number;
};

const TriviaQuestion = ({ question, index }: TProps) => {
  const swiper = useSwiper();

  const { addResult, questions, setPlaying } = useCuidaMundosTrivia();

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
      console.log("uploading result...")
    }
  }

  return (
    <div className="relative flex h-fit flex-col items-center gap-4 rounded-3xl p-6">
      {/* HEADER */}
      <QuestionHeader image="/img/clicker_game.jpg" title={question.title} />
      <div className="h-1.5 w-full rounded-3xl bg-cens-brand" />
      {/* OPTIONS / BODY */}
      <div className="grid w-full grid-cols-2 flex-wrap items-center justify-center gap-[20px_32px] max-sm:grid-cols-1">
        {mixedOptions.map((option) => (
          <OptionCard option={option} key={option} nextPage={handleNext} />
        ))}
      </div>
    </div>
  );
};

export default TriviaQuestion;
