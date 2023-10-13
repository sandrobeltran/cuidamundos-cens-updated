import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import HeroCapitan from "../../../../public/img/hero_capitan.png";
import MisionVisionSection from "@/components/nosotros/MisionVisionSection";
import TeamSection from "@/components/home/TeamSection";
import FAQ from "@/components/nosotros/FAQ";
import Hero from "@/components/Hero";

export default function Nosotros() {
  return (
    <CustomMain>
      <Hero
        title={{
          text: "Descubre la historia y misión de",
          resalted: "CuidaMundos",
        }}
        description="En Ecoaventura Sostenible, puedes unirte a nuestra misión para
        ayudar a cuidar el planeta y promover la energía sostenible."
        image={HeroCapitan}
      />
      <PaddingWrapper>
        <MisionVisionSection />
        <TeamSection />
        <FAQ />
      </PaddingWrapper>
    </CustomMain>
  );
}
