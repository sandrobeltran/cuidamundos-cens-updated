"use client";

import React, { useEffect } from "react";
import { useUserStore } from "@/store/useUserStore";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import dynamic from "next/dynamic";
import GuestUser from "../../juega/GuestUser";
import { ITest } from "@/utils/customTypes";
import SpinLoader from "../../SpinLoader";
import TestHeader from "./TestHeader";
import { useHuellaEcologica } from "@/store/useHuellaEcologica";
import TestQuestion from "./TestQuestion";

type TProps = {
  test: ITest | undefined;
  mainScreen: React.ReactNode;
  resultScreen: React.ReactNode;
};

const TestContainer = ({ test, mainScreen, resultScreen }: TProps) => {
  const user = useUserStore((state) => state.user);

  const { initializeGame, hasWon } = useHuellaEcologica((state) => state);

  useEffect(() => {
    if (test) {
      initializeGame(
        test.data.questions,
        test.winners.includes(user?._id as string),
      );
    }
  }, [initializeGame, test, user]);

  return (
    <div className="flex justify-center">
      <div className="mobile-land:max-w-full relative h-fit max-w-5xl overflow-hidden rounded-3xl border border-stone-300 bg-white/80 shadow-md">
        {test ? <TestHeader /> : null}
        <Swiper className="h-[calc(100%-64px)]" allowTouchMove={false}>
          <SwiperSlide>{mainScreen}</SwiperSlide>
          {test
            ? test.data.questions.map((question, index) => (
                <SwiperSlide key={question.id}>
                  <TestQuestion question={question} index={index} />
                </SwiperSlide>
              ))
            : null}
          <SwiperSlide>{resultScreen}</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TestContainer), { ssr: false });
