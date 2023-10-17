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
import OptionCard from "./OptionCard";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { useUserStore } from "@/store/useUserStore";
import MainScreen from "./MainScreen";
import { Swiper, SwiperClass, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import dynamic from "next/dynamic";
import TriviaQuestion from "./TriviaQuestion";
import TriviaHeader from "./TriviaHeader";
import ResultsSection from "./ResultsSection";
import GuestUser from "../juega/GuestUser";

type TProps = {
  questions: TTriviaQuestion[];
};

const TriviaContainer = ({ questions }: TProps) => {
  const user = useUserStore((state) => state.user);

  const {
    currentPage,
    initializeTrivia,
    addResult,
    nextPage,
    setShowResults,
    resetTrivia,
  } = useCuidaMundosTrivia((state) => state);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentPage],
  );

  /* function handleNextPage(option: string) {
    if (currentPage < questions.length - 1) {
      const correct = currentQuestion.answer === option;
      addResult({ question: currentQuestion, selection: option, correct });
      nextPage();
    } else {
      setShowResults(true);
    }
  } */

  useEffect(() => {
    initializeTrivia(questions);
  }, [initializeTrivia, questions]);

  /* useEffect(() => {
    setCurrentQuestion(questions[currentPage]);
  }, [currentPage, questions]); */

  return (
    <div className="relative overflow-hidden rounded-3xl border border-stone-300 bg-white/50 shadow-md">
      <TriviaHeader />
      {!user ? <GuestUser /> : null}
      <Swiper allowTouchMove={false}>
        <SwiperSlide>
          <MainScreen />
        </SwiperSlide>
        {questions.map((question, index) => (
          <SwiperSlide key={question.id}>
            <TriviaQuestion question={question} index={index} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <ResultsSection />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TriviaContainer), { ssr: false });
