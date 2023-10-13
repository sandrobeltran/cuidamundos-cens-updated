"use client";

import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Image from "next/image";
import NewsImage from "../../../../../public/img/news_01.jpeg";
import HeroPuritaImage from "../../../../../public/img/flying_purita.png";
import MiniSection from "@/components/cards/MiniSection";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import InteractiveCard from "@/components/aprende/InteractiveCard";
import CustomSection from "@/components/layout/CustomSection";
import HeroMiniSection from "@/components/aprende/HeroMiniSection";
import TriviaSection from "@/components/home/TriviaSection";
import Hero from "@/components/Hero";
import PhotoCard from "@/components/aprende/PhotoCard";

export default function Purita() {
  return (
    <CustomMain>
      <Hero
        image={HeroPuritaImage}
        title={{
          text: "Conoce a Purita:",
          resalted: "La Defensora de CuidaMundos!",
        }}
        description="Acompáñanos para descubrir su historia, sus aventuras y cómo puedes unirte a su misión en nuestro mundo virtual y en la vida real."
      />

      <PaddingWrapper>
        <CustomSection>
          <HeroMiniSection
            href="/"
            cover={NewsImage}
            title="El Origen de Purita: Un Viaje Épico"
            description={
              <>
                ¡Acompaña a Purita en un emocionante viaje a través de las
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
            image={HeroPuritaImage}
          />
        </CustomSection>
        <MiniSection
          image={NewsImage}
          title={{
            text: "Tráiler de Purita:",
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
          <Swiper
            slidesPerView={1.4}
            spaceBetween={15}
            breakpoints={{
              670: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
            }}
            className="mt-8"
          >
            <SwiperSlide>
              <PhotoCard cover={NewsImage} alt="Photo 1" />
            </SwiperSlide>
            <SwiperSlide>
              <PhotoCard cover={NewsImage} alt="Photo 1" />
            </SwiperSlide>
            <SwiperSlide>
              <PhotoCard cover={NewsImage} alt="Photo 1" />
            </SwiperSlide>
            <SwiperSlide>
              <PhotoCard cover={NewsImage} alt="Photo 1" />
            </SwiperSlide>
          </Swiper>
        </CustomSection>
        <TriviaSection
          cover="/img/hero_sky.jpg"
          title={
            <>
              ¡Demuestra tu conocimiento <br />
              <span className="text-cens-medium">sobre Purita</span>
            </>
          }
          description="Pon a prueba tu sabiduría ambiental en nuestra emocionante trivia. Responde preguntas sobre la conservación del medio ambiente, la sostenibilidad y más. ¡Aprende mientras juegas y gana recompensas exclusivas!"
          href="/"
        />
      </PaddingWrapper>
    </CustomMain>
  );
}
