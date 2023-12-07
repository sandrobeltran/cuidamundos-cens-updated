import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import {
  AtiendeIcon,
  EnergiasRenovablesIcon,
  GeneracionEnergiaIcon,
  QuienIcon,
} from "@/components/jirol/JirolHeroIcons";
import CustomMain from "@/components/layout/CustomMain";
import HeroImage from "@public/img/jirol/hero-image.png";
import Image from "next/image";
import Link from "next/link";

export default function Jirol() {
  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{
            text: "¡Explora y aprende",
            resalted: "con Jirol!",
          }}
          description="Acompáñanos para descubrir su historia, sus aventuras y cómo puedes unirte a su misión en nuestro mundo virtual y en la vida real."
        />
        {/* MAIN CONTAINER */}
        <div className="relative w-full px-16">
          <div className="absolute inset-0 m-auto h-full w-fit">
            <Image
              src={HeroImage}
              alt="Imagen de Jirol volando"
              className="h-full w-full animate-levitating object-contain"
            />
          </div>
          <div className="relative grid grid-cols-2 grid-rows-2 gap-x-80">
            <div className="flex aspect-[4/2.5] items-start justify-start">
              <Link
                href={"/jirol/quien"}
                className="group flex h-fit min-h-[75%] w-full flex-col gap-2 rounded-3xl bg-white/80 p-7 text-stone-600 shadow-md transition-all hover:scale-105 hover:bg-cens-light hover:text-white"
              >
                <h2 className="flex items-center justify-center gap-2 stroke-cens-light text-center text-2xl font-bold text-cens-light transition-colors group-hover:stroke-white group-hover:text-white">
                  <QuienIcon />
                  ¿Quién es?
                </h2>
                <p className="text-lg">
                  El maestro de la electricidad, te revelará los secretos de la
                  energía eléctrica
                </p>
              </Link>
            </div>
            <div className="flex aspect-[4/2.5] items-start justify-end">
              <Link
                href={"/jirol/atiende"}
                className="group flex h-fit min-h-[75%] w-full flex-col gap-2 rounded-3xl bg-white/80 p-7 text-stone-600 shadow-md transition-all hover:scale-105 hover:bg-cens-light hover:text-white"
              >
                <h2 className="flex items-center justify-center gap-2 stroke-cens-light text-center text-2xl font-bold text-cens-light transition-colors group-hover:stroke-white group-hover:text-white">
                  <AtiendeIcon />
                  ¿Qué atiende?
                </h2>
                <p className="text-lg">
                  Aprende Todo Sobre Jirol el héroe de CuidaMundos
                </p>
              </Link>
            </div>
            <div className="flex aspect-[4/2.5] items-end justify-start">
              <Link
                href={"/juega/energias-renovables"}
                className="group flex h-fit min-h-[75%] w-full flex-col gap-2 rounded-3xl bg-white/80 p-7 text-stone-600 shadow-md transition-all hover:scale-105 hover:bg-cens-light hover:text-white"
              >
                <h2 className="flex items-center justify-center gap-2 stroke-cens-light text-center text-2xl font-bold text-cens-light transition-colors group-hover:stroke-white group-hover:text-white">
                  <EnergiasRenovablesIcon />
                  Energías Renovables
                </h2>
                <p className="text-lg">
                  Juega la trivia de Energías Renovables
                </p>
              </Link>
            </div>
            <div className="flex aspect-[4/2.5] items-end justify-end">
              <Link
                href={"/juega/generacion-energia"}
                className="group flex h-fit min-h-[75%] w-full  flex-col gap-2 rounded-3xl bg-white/80 p-7 text-stone-600 shadow-md transition-all hover:scale-105 hover:bg-cens-light hover:text-white"
              >
                <h2 className="flex items-center justify-center gap-2 stroke-cens-light text-center text-2xl font-bold text-cens-light transition-colors group-hover:stroke-white group-hover:text-white">
                  <GeneracionEnergiaIcon />
                  Generación de Energía Eléctrica
                </h2>
                <p className="text-lg">
                  Juega la trivia de Generación de Energia Eléctrica
                </p>
              </Link>
            </div>
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
