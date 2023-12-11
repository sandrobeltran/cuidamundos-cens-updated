import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import CuidaMundosLogo from "@public/img/logo_cuidamundos.png";
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
        image={CuidaMundosLogo}
      />
      <PaddingWrapper>
        <div className="col-span-12 flex justify-center z-10">
          <section className="max-w-5xl">
            <FormHeader />
            <FormSection />
            <InfoSection />
          </section>
        </div>
      </PaddingWrapper>
    </CustomMain>
  );
}
