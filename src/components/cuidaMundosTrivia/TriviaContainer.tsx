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
import { IGame, ITrivia } from "@/utils/customTypes";
import SpinLoader from "../SpinLoader";
import TimeRunOutModal from "./TimeRunOutModal";

type TProps = {
  trivia: ITrivia | undefined;
};

const TriviaContainer = ({ trivia }: TProps) => {
  const user = useUserStore((state) => state.user);

  const { initializeTrivia, hasWon } = useCuidaMundosTrivia((state) => state);

  useEffect(() => {
    if (trivia) {
      initializeTrivia(
        trivia.data.questions,
        trivia.winners.includes(user?._id as string),
      );
    }
  }, [initializeTrivia, trivia, user]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-stone-300 bg-white/50 shadow-md">
      {!trivia ? <SpinLoader /> : null}
      {trivia ? <TriviaHeader time={trivia.data.timeLimit} /> : null}
      {!user ? <GuestUser /> : null}
      <Swiper allowTouchMove={false}>
        {trivia ? <TimeRunOutModal /> : null}
        <SwiperSlide>
          <MainScreen />
        </SwiperSlide>
        {trivia
          ? trivia.data.questions.map((question, index) => (
              <SwiperSlide key={question.id}>
                <TriviaQuestion question={question} index={index} />
              </SwiperSlide>
            ))
          : null}
        <SwiperSlide>
          <ResultsSection />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TriviaContainer), { ssr: false });
