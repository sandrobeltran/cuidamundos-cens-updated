import InteractiveVideo from "@/components/aprende/historia/InteractiveVideo";
import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import "./HistoriaStyles.css";

export default function HistoriaAprende() {
  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{
            text: "Nuestra Historia:",
            resalted: "CuidaMundos y su Impacto",
          }}
          description="Acompáñanos para descubrir su historia, sus aventuras y cómo puedes unirte a su misión en nuestro mundo virtual y en la vida real."
        />
        <div className="relative flex w-full justify-center px-20 mobile-land:px-16">
          <div className="w-full max-w-5xl rounded-3xl bg-white/80 p-8 shadow-md backdrop-blur-md mobile-land:p-4">
            <InteractiveVideo />
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
