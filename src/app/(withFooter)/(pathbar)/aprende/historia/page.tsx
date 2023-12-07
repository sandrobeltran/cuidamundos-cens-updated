import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";

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
        <div className="relative w-full px-20">
          <div className="w-full rounded-3xl bg-white/80 p-8 backdrop-blur-md shadow-md">
            <div className="aspect-[16/8.5] w-full rounded-3xl bg-cens-medium/50"></div>
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
