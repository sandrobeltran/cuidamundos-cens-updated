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
          text: "Contacta al equipo",
          resalted: "de CuidaMundos",
        }}
        description="Contáctanos para descubrir más sobre los Cuidamundos, resolver tus dudas o recibir ayuda y asesoría."
        image={CuidaMundosLogo}
      />
      <PaddingWrapper>
        <div className="z-10 col-span-12 flex justify-center">
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
