"use client";

import ResultsScreen from "@/components/usoEficienteTrivia/ResultsScreen";
import TriviaContainer from "@/components/juegos/triviaGame/TriviaContainer";
import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import { useGamesStore } from "@/store/useGamesStore";
import { usePathname } from "next/navigation";
import { ITrivia } from "@/utils/customTypes";
import MainScreen from "@/components/usoEficienteTrivia/MainScreen";
import SpinLoader from "@/components/SpinLoader";
import GamesHero from "@/components/juega/GamesHero";

export default function UsoEficienteTrivia() {
  const { games } = useGamesStore();
  const pathname = usePathname();

  const trivia = games.find((game) => game.href === pathname) as ITrivia;

  if (!trivia) return <SpinLoader />;

  return (
    <CustomMain>
      <GamesHero
        title={{
          text: "Uso Eficiente de",
          resalted: "la Energía Eléctrica",
        }}
        description="¡Diviértete mientras conquistas la Trivia del Uso Eficiente y conviértete en un auténtico héroe eléctrico, al igual que Félix! ¡Obtén tu certificado de héroe y demuestra que eres un maestro en el manejo eficiente de la energía!"
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
