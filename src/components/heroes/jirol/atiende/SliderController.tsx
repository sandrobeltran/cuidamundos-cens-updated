import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import clsx from "clsx";

type TProps = {
  sliderData: {
    name: string;
    icon: string;
    description: string;
    index: number;
  }[];
};

const SliderController = ({ sliderData }: TProps) => {
  const swiper = useSwiper();
  const [currentIndex, setCurrentIndex] = useState<number>(swiper.activeIndex);

  function handleSelect(index: number) {
    swiper.slideTo(index);
    setCurrentIndex(index);
  }

  return (
    <div className="absolute bottom-0 right-5 top-0 z-10 my-auto h-[80%] w-24 border-l-2 border-dashed border-l-cens-brand pl-5">
      <span className="absolute -left-4 -top-4 h-8 w-8 text-cens-brand">
        <ChevronUpIcon />
      </span>
      <span className="absolute -bottom-4 -left-4 h-8 w-8 text-cens-brand">
        <ChevronDownIcon />
      </span>
      <div className="flex h-full w-full flex-col items-center justify-center gap-8">
        {sliderData.map((item) => (
          <button
            key={item.index}
            onClick={() => handleSelect(item.index)}
            className={clsx([
              "hover:scale-1010 transition-all",
              { "brightness-[0.25]": currentIndex !== item.index },
            ])}
          >
            <Image
              src={`/img/jirol/atiende/${item.icon}.svg`}
              width={56}
              height={56}
              alt={`Imagen de ${item.name} de Jirol`}
              className="aspect-square w-14 mobile-land:w-11"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SliderController;
