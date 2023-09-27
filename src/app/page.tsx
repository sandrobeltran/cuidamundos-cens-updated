import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Image from "next/image";
import HeroCapitanImage from "../../public/img/hero_capitan.png";

import FlyingCapitan from "../../public/img/flying_capitan.png";
import Button from "@/components/Button";
import HeroesCarousel from "@/components/home/HeroesCarousel";
import CardsSection from "@/components/home/CardsSection";
import CuidaMundosSection from "@/components/home/CuidaMundosSection";
import NewsSection from "@/components/home/NewsSection";
import TeamSection from "@/components/home/TeamSection";
import TrailerSection from "@/components/home/TrailerSection";
import TriviaSection from "@/components/home/TriviaSection";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <CustomMain>
      {/* HERO SECTION */}
      <Hero
        image={HeroCapitanImage}
        title={{
          text: "¡Explora y aprende cómo ser un",
          resalted: "héroe sostenible!",
        }}
        description="En Ecoaventura Sostenible, puedes unirte a nuestra misión para
            ayudar a cuidar el planeta y promover la energía sostenible."
        buttonLabel="¡Aprende!"
      />
      <PaddingWrapper>
        <CardsSection />
        <CuidaMundosSection />
        <NewsSection />
        <TeamSection />
        <TrailerSection />
        <HeroesCarousel />
        <TriviaSection
          title={
            <>
              ¡Demuestra tu conocimiento en{" "}
              <span className="text-cens-medium">CuidaMundos!</span>
            </>
          }
          description="Pon a prueba tu sabiduría ambiental en nuestra emocionante trivia.
          Responde preguntas sobre la conservación del medio ambiente, la
          sostenibilidad y más. ¡Aprende mientras juegas y gana recompensas
          exclusivas!"
          href="/juega/cuidamundos-trivia"
          cover="/img/hero_sky.jpg"
        />
      </PaddingWrapper>
    </CustomMain>
  );
}
