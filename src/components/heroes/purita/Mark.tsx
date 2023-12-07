import Image from "next/image";
import MarkImage from "@public/img/purita/poderes/mark.svg";

type TProps = {
  size: number;
  x: number;
  y: number;
  content?: {
    title: string;
    description: React.ReactNode;
  };
};

export const Mark = ({ size, x, y, content }: TProps) => {
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
        className="pointer-events-none absolute z-10 flex w-96 translate-y-4 rounded-3xl border border-stone-300 bg-white p-6 opacity-0 shadow-md shadow-stone-500/20 transition-all group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
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
          <span className="mr-1 text-lg font-semibold text-cens-brand">
            {content?.title}
          </span>
          {content?.description}
        </p>
      </div>
    </div>
  );
};
