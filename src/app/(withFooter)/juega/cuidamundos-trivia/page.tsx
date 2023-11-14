"use client";

import Hero from "@/components/Hero";
import ResultsScreen from "@/components/cuidaMundosTrivia/ResultsScreen";
import TriviaContainer from "@/components/juegos/triviaGame/TriviaContainer";
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
import MainScreen from "@/components/cuidaMundosTrivia/MainScreen";
import SpinLoader from "@/components/SpinLoader";

export default function CuidaMundosTrivia() {
  const { games } = useGamesStore();
  const pathname = usePathname();

  const trivia = games.find((game) => game.href === pathname) as ITrivia;

  if (!trivia) return <SpinLoader />;

  return (
    <CustomMain>
      <Hero
        image={LogoCuidaMundos}
        title={{
          text: "¡Demuestra tu conocimiento en",
          resalted: "CuidaMundos!",
        }}
        description="Pon a prueba tu sabiduría ambiental en nuestra emocionante trivia. Responde preguntas sobre la conservación del medio ambiente, la sostenibilidad y más. ¡Aprende mientras juegas y gana recompensas exclusivas!"
      />
      <PaddingWrapper>
        <CustomSection>
          <TriviaContainer
            trivia={trivia}
            mainScreen={<MainScreen />}
            resultScreen={<ResultsScreen />}
          />
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
