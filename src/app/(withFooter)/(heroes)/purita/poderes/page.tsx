import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import MarkImage from "../../../../../../public/img/purita/poderes/mark.svg";
import Image from "next/image";

type TProps = {
  size: number;
  x: number;
  y: number;
  content?: {
    title: string;
    description: React.ReactNode;
  };
};

const Mark = ({ size, x, y, content }: TProps) => {
  return (
    <div
      className="group absolute cursor-pointer"
      style={{
        width: `${size}px`,
        left: `calc(${x}% - ${size / 2}px)`,
        top: `calc(${y}% - ${size / 2}px)`,
      }}
    >
      <Image src={MarkImage} alt="Ícono de marcador" />

      {/* CONTENT */}
      <div
        className="pointer-events-none absolute flex w-96 translate-y-4 rounded-3xl border border-stone-300 bg-white p-6 opacity-0 shadow-md shadow-stone-500/20 transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
        style={{
          left: x < 50 ? 20 : "unset",
          right: x > 50 ? 20 : "unset",
          top: y < 50 ? "100%" : "unset",
          bottom: y > 50 ? "100%" : "unset",
          borderTopLeftRadius: y < 50 && x < 50 ? 0 : 24,
          borderTopRightRadius: y < 50 && x > 50 ? 0 : 24,
          borderBottomLeftRadius: y > 50 && x < 50 ? 0 : 24,
          borderBottomRightRadius: y > 50 && x > 50 ? 0 : 24,
        }}
      >
        <p className="text-stone-500">
          <span className="text-lg font-semibold text-cens-brand mr-1">
            {content?.title}
          </span>
          {content?.description}
        </p>
      </div>
    </div>
  );
};

/* MARKERS DATA */
const MARKERS_DATA = [
  {
    x: 23.5,
    y: 8.5,
    content: {
      title: "Nubes Mágicas",
      description:
        "Estas artistas del cielo crean patrones y sombra, pero también son esenciales en el ciclo del agua, soltando gotas de lluvia como pócimas refrescantes.",
    },
  },
  {
    x: 18,
    y: 61,
    content: {
      title: "Tierra Milagrosa",
      description:
        "Nuestro planeta es un lugar mágico lleno de maravillas. Proporciona hogar a todos, con suelos fértiles para cultivar deliciosa comida",
    },
  },
  {
    x: 49,
    y: 88,
    content: {
      title: "Agua Sabia",
      description:
        "Aunque la Tierra está cubierta de agua, solo un poquito es dulce y aún menos está en ríos y lagos. El agua es un tesoro vital para beber, cocinar y proteger la naturaleza. ¡Úsala sabiamente y cuida este recurso mágico!",
    },
  },
  {
    x: 58.5,
    y: 45,
    content: {
      title: "Poder Acuático",
      description:
        "Proteger ríos, lagos y humedales es como activar un escudo mágico para garantizar que siempre tengamos agua fresca. ¡El agua es como un tesoro para la naturaleza y para nosotros!",
    },
  },
  {
    x: 86,
    y: 32,
    content: {
      title: "Poder Verde",
      description:
        "Plantar árboles es como lanzar hechizos mágicos que hacen que el aire respire feliz. Los árboles atrapan el dióxido de carbono y nos ayudan a mantener la Tierra fresca y contenta.",
    },
  },
];

export default function PoderesPurita() {
  const markSize = 65;

  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "Poderes de", resalted: "Purita" }}
          description="Descubre y usa los superpoderes de Purita para proteger nuestro medio ambiente."
        />
        <div className="px-28">
          <div className="relative aspect-[1.5/1] w-full rounded-3xl bg-[url(/img/purita/poderes/background.png)] bg-contain bg-center shadow-md backdrop-blur-md">
            {/* NUBES MÁGIAS */}

            {/* TIERRA MILAGROSA */}

            {/* AGUA SABIA */}

            {/* PODER ACUÁTICO */}

            {/* PODER VERDE */}

            {MARKERS_DATA.map((mark) => (
              <Mark key={mark.content.title} size={markSize} {...mark} />
            ))}
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
