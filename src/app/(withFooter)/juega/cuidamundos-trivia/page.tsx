"use client";

import Hero from "@/components/Hero";
import ResultsSection from "@/components/cuidaMundosTrivia/ResultsSection";
import TriviaContainer from "@/components/cuidaMundosTrivia/TriviaContainer";
import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import UserRequired from "@/components/validations/UserRequired";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { cuidaMundosQuestions } from "@/trivias/cuidaMundosQuestions";
import { useState } from "react";
import LogoCuidaMundos from "../../../../../public/img/logo_cuidamundos.png";
import { useGamesStore } from "@/store/useGamesStore";
import { usePathname } from "next/navigation";
import { ITrivia } from "@/utils/customTypes";

export default function CuidaMundosTrivia() {
  const { games } = useGamesStore();
  const pathname = usePathname();

  const game = games.find((game) => game.href === pathname) as ITrivia;
  
  return (
    <CustomMain>
      <Hero
        image={LogoCuidaMundos}
        title={{
          text: "¡Demuestra tu conocimiento en",
          resalted: "CuidaMundos!",
        }}
        description="Pon a prueba tu sabiduría ambiental en nuestra emocionante trivia. Responde preguntas sobre la conservación del medio ambiente, la sostenibilidad y más. ¡Aprende mientras juegas y gana recompensas exclusivas!
        "
      />
      <PaddingWrapper>
        <CustomSection>
          <TriviaContainer trivia={game} />
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
