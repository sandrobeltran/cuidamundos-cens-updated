"use client";

import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Image from "next/image";
import NewsImage from "../../../../public/img/news_01.jpeg";
import HeroCapitanImage from "../../../../public/img/hero_capitan.png";
import MiniSection from "@/components/cards/MiniSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import InteractiveCard from "@/components/aprende/InteractiveCard";
import CustomSection from "@/components/layout/CustomSection";
import HeroMiniSection from "@/components/aprende/HeroMiniSection";
import TipsCardsSection from "@/components/aprende/TipsCardsSection";
import ClickerGameSection from "@/components/aprende/ClickerGameSection";
import TriviaSection from "@/components/home/TriviaSection";

export default function Capitan() {
  return (
    <CustomMain>
      {/* HERO SECTION */}
      <section
        className="col-span-12 flex h-screen items-start justify-start bg-[url(/img/hero_leafs.png),_url(/img/hero_sky.jpg)] bg-cover bg-center bg-no-repeat px-24 py-28 text-sm before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-gradient-to-t before:from-white before:to-transparent after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:bg-gradient-to-b after:from-stone-900/50 after:to-stone-900/0 max-sm:h-fit max-sm:px-4 max-sm:py-0 max-sm:pt-36
      "
      >
        <div className="relative z-20 flex w-1/2 flex-col gap-5 max-sm:w-full max-sm:text-center">
          <h1 className="text-6xl font-bold text-stone-100 max-sm:text-4xl">
            Conoce al
            <br />
            Capitán:{" "}
            <span className="text-cens-brand">
              El <br />
              Defensor de <br />
              CuidaMundos!
            </span>
          </h1>
          <p className="w-5/6 text-lg font-normal max-sm:w-full">
            Acompáñanos para descubrir su historia, sus aventuras y cómo puedes
            unirte a su misión en nuestro mundo virtual y en la vida real.
          </p>{" "}
          {/*  <div className="">
            <Button hierarchy="primary" size="lg">
              ¡Aprende!
            </Button>
          </div> */}
        </div>
        <div className="absolute bottom-0 right-0 z-10 h-5/6 w-4/6 overflow-x-hidden max-sm:hidden">
          <Image
            src={HeroCapitanImage}
            alt="Capitan CENS"
            className="relative -right-20 h-full w-full object-contain"
          />
        </div>
      </section>
      <PaddingWrapper>
        <CustomSection>
          <HeroMiniSection
            href="/"
            cover={NewsImage}
            description={
              <>
                ¡Acompaña al Capitán en un emocionante viaje a través de las
                maravillosas tierras de CuidaMundos! Desde que era un niño, el
                Capitán ha sentido una conexión especial con la naturaleza que
                lo rodea. Pasaba horas explorando los bosques, observando las
                estrellas y aprendiendo los secretos de la tierra.
                <br />
                <br />
                A medida que crecía, su amor por el medio ambiente se hizo más
                fuerte. Se convirtió en un apasionado defensor de la
                conservación y se dedicó a proteger la belleza natural de
                CuidaMundos. Aprendió a cuidar de los animales, a preservar los
                hábitats y a promover prácticas sostenibles.
                <br />
                <br />
                Acompaña al Capitán en sus primeras aventuras y descubre cómo se
                convierte en el líder de la misión para salvar a CuidaMundos. Su
                historia inspiradora te enseñará sobre la importancia de
                proteger nuestro hogar y cómo cada uno de nosotros puede marcar
                la diferencia. ¡Únete al Capitán y sé un héroe ecológico en tu
                propio camino!
              </>
            }
            title="El Origen del Capitán: Un Viaje Épico"
            image={HeroCapitanImage}
          />
        </CustomSection>
        <MiniSection
          image={NewsImage}
          title={{
            text: "Tráiler del Capitán:",
            resalted: "Guardianes de CuidaMundos",
          }}
          description={
            <>
              Sumérgete en un mundo lleno de maravillas y desafíos en{" "}
              <b>CuidaMundos</b>. Embárcate en una emocionante travesía mientras
              salvas al planeta. Con gráficos impresionantes, mecánicas de juego
              sencillas y una historia cautivadora.
            </>
          }
        />
        <CustomSection>
          <h2 className="text-center text-4xl font-medium text-stone-500">
            Galería de <span className="text-cens-medium">Fotos</span>
          </h2>
          <Swiper slidesPerView={2.2} spaceBetween={30} className="mt-8">
            <SwiperSlide>
              <InteractiveCard
                cover={NewsImage}
                href="https://blabla/intvideo"
                title="Tu Guía Interactiva de Cuidamundos"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InteractiveCard
                cover={NewsImage}
                href="https://blabla/intvideo"
                title="Cuidamundos: Tu Historia Interactiva"
              />
            </SwiperSlide>
            <SwiperSlide>
              <InteractiveCard
                cover={NewsImage}
                href="https://blabla/intvideo"
                title="Descubre y Actúa"
              />
            </SwiperSlide>
          </Swiper>
        </CustomSection>
        <TriviaSection
          cover="/img/hero_sky.jpg"
          title={
            <>
              ¡Demuestra tu conocimiento <br />
              <span className="text-cens-medium">sobre el capitán</span>
            </>
          }
          description="Pon a prueba tu sabiduría ambiental en nuestra emocionante trivia. Responde preguntas sobre la conservación del medio ambiente, la sostenibilidad y más. ¡Aprende mientras juegas y gana recompensas exclusivas!"
          href="/"
        />
      </PaddingWrapper>
    </CustomMain>
  );
}
