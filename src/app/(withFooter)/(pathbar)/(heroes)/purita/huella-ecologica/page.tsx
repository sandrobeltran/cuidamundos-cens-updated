"use client";

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
import GamesHero from "@/components/juega/GamesHero";
import ProductsTableModal from "@/components/huellaEcologicaTest/ProductsTableModal";

export default function HuellaEcologicaTest() {
  const { games } = useGamesStore();
  const pathname = usePathname();

  const test = games.find((game) => game.href === pathname) as ITest;

  if (!test) return <SpinLoader />;

  return (
    <CustomMain>
      <GamesHero
        title={{
          text: "¡Calcula Tu",
          resalted: "Huella Ecológica!",
        }}
        description="Descubre y reduce tu impacto en el planeta calculando tu huella ecológica con Purita. ¿Listo para ser un guardián del medio ambiente?"
      />
      <ProductsTableModal />
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
