"use client";

import ResultsScreen from "@/components/usoEficienteTrivia/ResultsScreen";
import TriviaContainer from "@/components/juegos/triviaGame/TriviaContainer";
import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import { useGamesStore } from "@/store/useGamesStore";
import { usePathname } from "next/navigation";
import { ITrivia } from "@/utils/customTypes";
import MainScreen from "@/components/generacionEnergiaTrivia/MainScreen";
import SpinLoader from "@/components/SpinLoader";
import GamesHero from "@/components/juega/GamesHero";

export default function GeneracionEnergiaTrivia() {
  const { games } = useGamesStore();
  const pathname = usePathname();

  const trivia = games.find((game) => game.href === pathname) as ITrivia;

  if (!trivia) return <SpinLoader />;

  return (
    <CustomMain>
      <GamesHero
        title={{
          text: "Aprende y",
          resalted: "Transforma",
        }}
        description="Descubre la generación de energía eléctrica y sus diversas fuentes. Prepárate para desatar tu potencial y convertirte en un experto en fuentes de energía. ¡Vamos a comenzar la aventura!"
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
