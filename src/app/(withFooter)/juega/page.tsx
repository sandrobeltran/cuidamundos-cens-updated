import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import HeroesCarousel from "@/components/home/HeroesCarousel";
import TriviaSection from "@/components/home/TriviaSection";
import Hero from "@/components/Hero";
import MiniSection from "@/components/cards/MiniSection";
import LevelsSection from "@/components/juega/LevelsSection";
import TrailerSection from "@/components/home/TrailerSection";

export default function Juega() {
  return (
    <CustomMain>
      {/* HERO SECTION */}
      <Hero
        image={"/img/flying_purita.png"}
        title={{
          text: "Descubre el Videojuego de",
          resalted: "CuidaMundos Cens",
        }}
        description="Breve descripción del juego: Aquí puedes incluir una introducción emocionante y persuasiva que capte el interés de los visitantes. Menciona la temática del juego y resalta sus características únicas.
        "
        buttonLabel="¡Descargar ahora!"
      />
      <PaddingWrapper>
        <MiniSection
          image={"/img/purita_background.jpg"}
          title={{
            text: "¡Aprende las mecánicas del",
            resalted: "juego con nuestro video tutorial!",
          }}
          description={
            <>
              En este video, te presentamos un tutorial detallado que te guiará
              a través de las principales mecánicas y características de nuestro
              juego. Desde los controles básicos hasta las estrategias
              avanzadas, aprenderás todo lo necesario para dominar el juego y
              alcanzar la victoria. ¡Prepárate para sumergirte en una
              experiencia de aprendizaje emocionante y descubre los secretos que
              te llevarán al éxito!
            </>
          }
        />
        <HeroesCarousel />
        <LevelsSection />
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
        <TrailerSection />
      </PaddingWrapper>
    </CustomMain>
  );
}
