"use client";

import Hero from "@/components/Hero";
import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import LogoCuidaMundos from "../../../../../public/img/logo_cuidamundos.png";
import { useGamesStore } from "@/store/useGamesStore";
import { usePathname } from "next/navigation";
import { ITest, ITrivia } from "@/utils/customTypes";
import TestContainer from "@/components/juegos/testGame/TestContainer";
import MainScreen from "@/components/huellaEcologicaTest/MainScreen";
import ResultsScreen from "@/components/huellaEcologicaTest/ResultsScreen";
import SpinLoader from "@/components/SpinLoader";

export default function HuellaEcologicaTest() {
  const { games } = useGamesStore();
  const pathname = usePathname();

  const test = games.find((game) => game.href === pathname) as ITest;

  if (!test) return <SpinLoader />;

  return (
    <CustomMain>
      <Hero
        image={LogoCuidaMundos}
        title={{
          text: "¡Descubre tu impacto en el ambiente con",
          resalted: "Huella Ecológica!",
        }}
        description="Completa el test de Huella Ecológica y descubre cómo tus acciones influyen en tu entorno"
      />
      <PaddingWrapper>
        <CustomSection>
          <TestContainer
            test={test}
            mainScreen={<MainScreen />}
            resultScreen={<ResultsScreen />}
          />
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
