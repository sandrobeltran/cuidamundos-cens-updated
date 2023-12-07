import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";

export default function QuienJirol() {
  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "Historia de", resalted: "Jirol" }}
          description="Únete a nosotros para conocer la historia de Jirol, la heroína del Medio Ambiente. Descubre sus poderes y aprende cómo puedes unirte a su misión o convertirte en un héroe en el mundo."
        />
        <div className="px-28">
          <div className="aspect-[16/8.5] w-full rounded-3xl bg-white/80 shadow-md backdrop-blur-md"></div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
