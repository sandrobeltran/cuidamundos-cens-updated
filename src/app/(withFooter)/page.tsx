import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import HeroesCarousel from "@/components/home/HeroesCarousel";
import CardsSection from "@/components/home/CardsSection";
import CuidaMundosSection from "@/components/home/CuidaMundosSection";
import NewsSection from "@/components/home/NewsSection";
import TeamSection from "@/components/home/TeamSection";
import TrailerSection from "@/components/home/TrailerSection";
import TriviaSection from "@/components/home/TriviaSection";
import Hero from "@/components/Hero";
import MiniSection from "@/components/cards/MiniSection";

export default function Home() {
  return (
    <CustomMain>
      {/* HERO SECTION */}
      <Hero
        image={"/img/hero_capitan.png"}
        title={{
          text: "¡Explora y aprende cómo ser un",
          resalted: "héroe sostenible!",
        }}
        description="En Ecoaventura Sostenible, puedes unirte a nuestra misión para
            ayudar a cuidar el planeta y promover la energía sostenible."
        buttonLabel="¡Aprende!"
        href="/aprende"
      />
      <PaddingWrapper>
        <CardsSection />
        <MiniSection
          title={{
            text: "Descubre el universo de CuidaMundos:",
            resalted: " ¡Un juego para cuidar y explorar!",
          }}
          description={
            <>
              Sumérgete en un mundo lleno de maravillas y desafíos en
              <b> CuidaMundos</b>. Embárcate en una emocionante travesía
              mientras salvas al planeta. Con gráficos impresionantes, mecánicas
              de juego sencillas y una historia cautivadora.
            </>
          }
          image={"/img/cuidamundos_01.jpg"}
          button={{ url: "/", label: "Leer más" }}
        />
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
