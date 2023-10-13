import Button from "@/components/Button";
import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Image from "next/image";
import HeroCapitanImage from "../../../../public/img/hero_capitan.png";
import Hero from "@/components/Hero";

export default function Blog() {
  return (
    <CustomMain>
      {/* HERO SECTION */}
      <Hero
        title={{
          text: "El Blog de CuidaMundos:",
          resalted: "Tu Fuente de Noticias y Más",
        }}
        description="Explora noticias emocionantes, actualizaciones y consejos en nuestro
        blog. Sumérgete en el mundo de CuidaMundos y la conservación.
        ¡Bienvenido a la aventura!"
        image={HeroCapitanImage}
      />
      <PaddingWrapper>
        <p>Content</p>
      </PaddingWrapper>
    </CustomMain>
  );
}

// ! REVIEW THE CONNECTIONS TO THE DATABASE, THERE COULD BE A MEMORY LEAK, VERIFY CONN VARIABLE IS WORKING CORRECTLY !!!! 🚧
