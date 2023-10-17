"use client";

import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Image from "next/image";
import NewsImage from "../../../../public/img/news_01.jpeg";
import HeroesImage from "../../../../public/img/heroes.png";
import MiniSection from "@/components/cards/MiniSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import InteractiveCard from "@/components/aprende/InteractiveCard";
import CustomSection from "@/components/layout/CustomSection";
import HeroMiniSection from "@/components/aprende/HeroMiniSection";
import HeroCapitanImage from "../../../../public/img/hero_capitan.png";
import HeroFelixImage from "../../../../public/img/flying_felix.png";
import HeroPuritaImage from "../../../../public/img/flying_purita.png";
import TipsCardsSection from "@/components/aprende/TipsCardsSection";
import ClickerGameSection from "@/components/aprende/ClickerGameSection";
import Hero from "@/components/Hero";
import { Navigation, Pagination } from "swiper/modules";

export default function Aprende() {
  return (
    <CustomMain>
      <Hero
        image={HeroesImage}
        title={{ text: "¡Aprende y Actúa con", resalted: "CuidaMundos!" }}
        description="Te invitamos a explorar recursos educativos y actividades diseñadas para aprender sobre la conservación del medio ambiente mientras te diviertes."
      />
      <PaddingWrapper>
        <MiniSection
          image={NewsImage}
          title={{
            text: "CuidaMundos en Acción:",
            resalted: "Consejos para la Sostenibilidad",
          }}
          description={
            <>
              Explora nuestro video interactivo y descubre consejos prácticos de
              CuidaMundos. Sumérgete en una experiencia educativa y
              participativa que te guiará hacia un estilo de vida más
              sostenible. Aprende y actúa para cuidar nuestro planeta.
            </>
          }
        />
        <CustomSection>
          <Swiper
            slidesPerView={1.4}
            spaceBetween={15}
            breakpoints={{
              670: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1080: {
                slidesPerView: 3.5,
                spaceBetween: 40,
              },
            }}
          >
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
        <CustomSection>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            pagination={{ dynamicBullets: true, clickable: true }}
            navigation={true}
            breakpoints={{
              0: {
                navigation: { enabled: false },
              },
              670: {
                navigation: { enabled: true },
              },
            }}
          >
            <SwiperSlide>
              <HeroMiniSection
                href="/aprende/capitan"
                cover={NewsImage}
                description={
                  <>
                    Breve introducción: Comienza con una breve introducción que
                    capture la esencia del personaje. Puedes resumir su
                    historia, personalidad o papel en el juego en una oración o
                    dos.
                    <br />
                    <br />
                    Descripción de habilidades y fortalezas: Destaca las
                    habilidades especiales, fortalezas o poderes únicos que
                    posee el personaje. Explica cómo estas habilidades pueden
                    ayudar al jugador en el juego y qué los hace destacar entre
                    los demás personajes.
                  </>
                }
                title="Capitán"
                image={HeroCapitanImage}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HeroMiniSection
                href="/aprende/felix"
                cover={NewsImage}
                description={
                  <>
                    Breve introducción: Comienza con una breve introducción que
                    capture la esencia del personaje. Puedes resumir su
                    historia, personalidad o papel en el juego en una oración o
                    dos.
                    <br />
                    <br />
                    Descripción de habilidades y fortalezas: Destaca las
                    habilidades especiales, fortalezas o poderes únicos que
                    posee el personaje. Explica cómo estas habilidades pueden
                    ayudar al jugador en el juego y qué los hace destacar entre
                    los demás personajes.
                  </>
                }
                title="Félix"
                image={HeroFelixImage}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HeroMiniSection
                href="/aprende/purita"
                cover={NewsImage}
                description={
                  <>
                    Breve introducción: Comienza con una breve introducción que
                    capture la esencia del personaje. Puedes resumir su
                    historia, personalidad o papel en el juego en una oración o
                    dos.
                    <br />
                    <br />
                    Descripción de habilidades y fortalezas: Destaca las
                    habilidades especiales, fortalezas o poderes únicos que
                    posee el personaje. Explica cómo estas habilidades pueden
                    ayudar al jugador en el juego y qué los hace destacar entre
                    los demás personajes.
                  </>
                }
                title="Purita"
                image={HeroPuritaImage}
              />
            </SwiperSlide>
          </Swiper>
        </CustomSection>
        <TipsCardsSection />
        <ClickerGameSection />
      </PaddingWrapper>
    </CustomMain>
  );
}
