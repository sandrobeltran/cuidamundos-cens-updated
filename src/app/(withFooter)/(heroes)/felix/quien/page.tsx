import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";

export default function QuienFelix() {
  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "Historia de", resalted: "Félix" }}
          description="Descubre la historia de Félix, el héroe de la energía eléctrica. Aprende sobre el riesgo y la prevención con sus poderes asombrosos. ¡Únete a él para cambiar nuestro planeta juntos!"
        />
        <div className="px-28">
          <div className="aspect-[16/8.5] w-full rounded-3xl bg-white/80 shadow-md backdrop-blur-md"></div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
