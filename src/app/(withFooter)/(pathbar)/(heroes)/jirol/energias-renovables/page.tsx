"use client";

import ResultsScreen from "@/components/usoEficienteTrivia/ResultsScreen";
import TriviaContainer from "@/components/juegos/triviaGame/TriviaContainer";
import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import { useGamesStore } from "@/store/useGamesStore";
import { usePathname } from "next/navigation";
import { ITrivia } from "@/utils/customTypes";
import MainScreen from "@/components/energiasRenovablesTrivia/MainScreen";
import SpinLoader from "@/components/SpinLoader";
import GamesHero from "@/components/juega/GamesHero";

export default function EnergiasRenovablesTrivia() {
  const { games } = useGamesStore();
  const pathname = usePathname();

  const trivia = games.find((game) => game.href === pathname) as ITrivia;

  if (!trivia) return <SpinLoader />;

  return (
    <CustomMain>
      <GamesHero
        title={{
          text: "Energías",
          resalted: "Renovables",
        }}
        description="Descubre las energías renovables, no renovables y formas de generar electricidad. Conviértete en un Héroe de las fuentes de energía, aprueba la trivia y obtén tu certificación."
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
