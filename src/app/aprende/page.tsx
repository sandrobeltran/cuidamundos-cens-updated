"use client";

import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Image from "next/image";
import NewsImage from "../../../public/img/news_01.jpeg";
import Heroes from "../../../public/img/heroes.png";
import MiniSection from "@/components/cards/MiniSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import InteractiveCard from "@/components/aprende/InteractiveCard";
import CustomSection from "@/components/layout/CustomSection";
import HeroMiniSection from "@/components/aprende/HeroMiniSection";
import HeroCapitanImage from "../../../public/img/hero_capitan.png";
import HeroFelixImage from "../../../public/img/flying_felix.png";
import HeroPuritaImage from "../../../public/img/flying_purita.png";
import TipsCardsSection from "@/components/aprende/TipsCardsSection";
import ClickerGameSection from "@/components/aprende/ClickerGameSection";

export default function Aprende() {
  return (
    <CustomMain>
      {/* HERO SECTION */}
      <section
        className="col-span-12 flex h-screen items-start justify-start bg-[url(/img/hero_leafs.png),_url(/img/hero_sky.jpg)] bg-cover bg-center bg-no-repeat px-24 py-28 text-sm before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-gradient-to-t before:from-white before:to-transparent after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:bg-gradient-to-b after:from-stone-900/50 after:to-stone-900/0 max-sm:h-fit max-sm:px-4 max-sm:py-0 max-sm:pt-36
      "
      >
        <div className="relative z-20 flex w-1/2 flex-col gap-5 max-sm:w-full max-sm:text-center">
          <h1 className="text-6xl font-bold text-stone-100 max-sm:text-4xl">
            ¡Aprende y
            <br />
            Actúa con
            <br /> <span className="text-cens-brand">CuidaMundos!</span>
          </h1>
          <p className="w-5/6 text-lg font-normal max-sm:w-full">
            Te invitamos a explorar recursos educativos y actividades diseñadas
            para aprender sobre la conservación del medio ambiente mientras te
            diviertes.
          </p>{" "}
          {/*  <div className="">
            <Button hierarchy="primary" size="lg">
              ¡Aprende!
            </Button>
          </div> */}
        </div>
        <div className="absolute bottom-0 right-0 z-10 h-5/6 w-4/6 overflow-x-hidden max-sm:hidden">
          <Image
            src={Heroes}
            alt="Capitan CENS"
            className="relative -right-20 h-full w-full object-contain"
          />
        </div>
      </section>
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
          <Swiper slidesPerView={2.2} spaceBetween={30}>
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
          <Swiper spaceBetween={50} slidesPerView={1}>
            <SwiperSlide>
              <HeroMiniSection
                href="/"
                cover={NewsImage}
                description={
                  <>
                    Breve introducción: Comienza con una breve introducción que
                    capture la esencia del personaje. Puedes resumir su
                    historia, personalidad o papel en el juego en una oración o
                    dos.
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
                href="/"
                cover={NewsImage}
                description={
                  <>
                    Breve introducción: Comienza con una breve introducción que
                    capture la esencia del personaje. Puedes resumir su
                    historia, personalidad o papel en el juego en una oración o
                    dos.
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
                href="/"
                cover={NewsImage}
                description={
                  <>
                    Breve introducción: Comienza con una breve introducción que
                    capture la esencia del personaje. Puedes resumir su
                    historia, personalidad o papel en el juego en una oración o
                    dos.
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
