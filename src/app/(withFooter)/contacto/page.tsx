import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import HeroCapitanImage from "../../../../public/img/hero_capitan.png";
import FormHeader from "@/components/contacto/FormHeader";
import FormSection from "@/components/contacto/FormSection";
import InfoSection from "@/components/contacto/InfoSection";
import Hero from "@/components/Hero";

export default function Contacto() {
  return (
    <CustomMain>
      <Hero
        title={{
          text: "Contáctate con el equipo de",
          resalted: "CuidaMundos",
        }}
        description="En Ecoaventura Sostenible, puedes unirte a nuestra misión para ayudar a cuidar el planeta y promover la energía sostenible.
        "
        image={HeroCapitanImage}
      />
      <PaddingWrapper>
        <FormHeader />
        <FormSection />
        <InfoSection />
      </PaddingWrapper>
    </CustomMain>
  );
}
