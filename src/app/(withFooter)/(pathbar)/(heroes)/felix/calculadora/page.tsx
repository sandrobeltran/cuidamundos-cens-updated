"use client";

import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Guide from "@/components/heroes/felix/aprende/Guide";
import Calculator from "@/components/heroes/felix/aprende/Calculator";
import Result from "@/components/heroes/felix/aprende/Result";
import { useState } from "react";

export default function AprendeFelix() {
  const [state, setState] = useState<{ kw: number }>({ kw: 0 });

  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{
            text: "¡Conoce y",
            resalted: "aprende!",
          }}
          description="¡Explora con Félix cómo usar eficientemente tus electrodomésticos, entiende el consumo en vatios y sé un héroe!"
        />
        <div className="relative flex flex-col items-center justify-center gap-10 px-28 mobile-land:px-16">
          <Swiper allowTouchMove={false} className="w-full max-w-5xl">
            <SwiperSlide className="p-2">
              <Guide />
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <Calculator set={setState} kw={state.kw} />
            </SwiperSlide>
            <SwiperSlide className="p-2">
              <Result kw={state.kw} />
            </SwiperSlide>
          </Swiper>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
