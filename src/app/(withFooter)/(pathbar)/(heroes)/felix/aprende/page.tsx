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
            text: "¡Juega y",
            resalted: "aprende!",
          }}
          description="¡Diviértete aprendiendo a evitar accidentes eléctricos en casa! Descubre los riesgos y cómo prevenirlos. ¡Hora de jugar! Coloca en el círculo el número correcto para cada situación mencionada."
        />
        <div className="justify-center relative flex flex-col items-center gap-10 px-28 mobile-land:px-16">
          <Swiper allowTouchMove={false} className="max-w-5xl w-full">
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
