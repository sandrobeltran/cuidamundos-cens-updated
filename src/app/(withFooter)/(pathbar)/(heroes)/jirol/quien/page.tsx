import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";

export default function QuienJirol() {
  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "Historia de", resalted: "Jirol" }}
          description="Explora la historia de Jirol, el héroe de la eficiencia y sostenibilidad. Aprende cómo optimizar el uso de energías y contribuir a salvar nuestro planeta con sus conocimientos."
        />
        <div className="px-28">
          <div className="aspect-[16/8.5] w-full rounded-3xl bg-white/80 shadow-md backdrop-blur-md"></div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
