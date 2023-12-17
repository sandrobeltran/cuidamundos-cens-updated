import {
  BackwardIcon,
  ForwardIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useSwiper } from "swiper/react";

const AnimationControls = () => {
  const swiper = useSwiper();
  return (
    <div className="bottom-0 left-0 z-10 flex h-12 w-full items-center justify-center gap-4 bg-cens-brand text-white">
      <button onClick={() => swiper.slidePrev()}>
        <BackwardIcon className="h-10 fill-transparent transition-colors hover:fill-white" />
      </button>
      {/*  <button onClick={() => {}}>
        <PlayIcon className="h-10 fill-transparent transition-colors hover:fill-white" />
      </button> */}
      <button onClick={() => swiper.slideNext()}>
        <ForwardIcon className="h-10 fill-transparent transition-colors hover:fill-white" />
      </button>
    </div>
  );
};

export default AnimationControls;
