"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-flip";
import AnimationControls from "./AnimationControls";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
import Page7 from "./Page7";

export const AnimationContext = createContext<{
  state: {
    play: boolean;
  };
  setState: Dispatch<SetStateAction<{ play: boolean }>>;
} | null>(null);

const InteractiveVideo = () => {
  const [state, setState] = useState<{
    play: boolean;
  }>({
    play: false,
  });

  return (
    <AnimationContext.Provider
      value={{
        state,
        setState,
      }}
    >
      <div className="relative flex aspect-[16/8.5] max-h-full w-full flex-col overflow-y-auto rounded-3xl shadow-md mobile-land:aspect-[16/7.5]">
        {/* ANIMATION PAGES */}
        <div className="h-full w-full flex-1 overflow-hidden">
          <Swiper
            modules={[EffectFlip]}
            effect={"flip"}
            className="h-full"
            wrapperClass="!h-[calc(100%-48px)]"
          >
            <SwiperSlide>
              <Page1 />
            </SwiperSlide>
            <SwiperSlide>
              <Page2 />
            </SwiperSlide>
            <SwiperSlide>
              <Page3 />
            </SwiperSlide>
            <SwiperSlide>
              <Page4 />
            </SwiperSlide>
            <SwiperSlide>
              <Page5 />
            </SwiperSlide>
            <SwiperSlide>
              <Page6 />
            </SwiperSlide>
            <SwiperSlide>
              <Page7 />
            </SwiperSlide>
            {/* NAVIGATION BAR */}
            <AnimationControls />
          </Swiper>
        </div>
      </div>
    </AnimationContext.Provider>
  );
};

export default InteractiveVideo;
