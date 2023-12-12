"use client";

import React, { useEffect } from "react";
import { useUsoEficiente } from "@/store/useUsoEficiente";
import { useUserStore } from "@/store/useUserStore";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import dynamic from "next/dynamic";
import TriviaQuestion from "./TriviaQuestion";
import TriviaHeader from "./TriviaHeader";
import GuestUser from "../../juega/GuestUser";
import { ITrivia } from "@/utils/customTypes";
import SpinLoader from "../../SpinLoader";
import TimeRunOutModal from "./TimeRunOutModal";
import { usePathname } from "next/navigation";

type TProps = {
  trivia: ITrivia | undefined;
  mainScreen: React.ReactNode;
  resultScreen: React.ReactNode;
};

const TriviaContainer = ({ trivia, mainScreen, resultScreen }: TProps) => {
  const user = useUserStore((state) => state.user);
  const pathname = usePathname();
  const { initializeTrivia, hasWon, setStage, setHasWon, resetTrivia } =
    useUsoEficiente((state) => state);

  useEffect(() => {
    if (trivia && user) {
      initializeTrivia(
        trivia.data.questions,
        trivia.winners.includes(user?._id as string),
      );
    }
  }, [initializeTrivia, trivia, user, hasWon, setHasWon]);

  useEffect(() => {
    // setStage(0);
    resetTrivia();
  }, [pathname, resetTrivia]);

  return (
    <div className="flex justify-center">
      <div className="relative h-fit max-w-5xl overflow-hidden rounded-3xl border border-stone-300 bg-white/80 shadow-md mobile-land:max-w-full">
        {trivia ? <TriviaHeader time={trivia.data.timeLimit} /> : null}
        {!user ? <GuestUser /> : null}
        <Swiper allowTouchMove={false}>
          {trivia ? <TimeRunOutModal /> : null}
          <SwiperSlide>{mainScreen}</SwiperSlide>
          {trivia
            ? trivia.data.questions.map((question, index) => (
                <SwiperSlide key={question.id}>
                  <TriviaQuestion question={question} index={index} />
                </SwiperSlide>
              ))
            : null}
          <SwiperSlide>{resultScreen}</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TriviaContainer), { ssr: false });
