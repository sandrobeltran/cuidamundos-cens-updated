import Button from "@/components/Button";
import React from "react";
import { useSwiper } from "swiper/react";

const formatter = new Intl.NumberFormat("es-CO", {
  style: "decimal",
  maximumFractionDigits: 2,
});

const PercentCirle = ({ kw }: { kw: number }) => {
  return (
    <div
      className="flex aspect-square w-fit flex-col items-center justify-center gap-0 rounded-full border-[12px] p-5 max-sm:w-52 max-sm:border-[18px]"
      style={{
        borderColor: `#D4E13D`,
      }}
    >
      <h6 className="text-5xl font-bold">{formatter.format(kw)}</h6>
      <p className="text-3xl font-medium">kWh/mes</p>
    </div>
  );
};

type TProps = {
  kw: number;
};

const Result = ({ kw }: TProps) => {
  const swiper = useSwiper();

  return (
    <div className="relative flex h-fit w-full flex-col items-center gap-10 overflow-hidden rounded-3xl bg-white/80 p-10 pt-24 text-center text-lg text-stone-500 shadow-md backdrop-blur-md after:absolute after:left-0 after:top-0 after:h-16 after:w-full after:bg-cens-brand">
      <div className="flex max-w-2xl flex-col items-center gap-10 pt-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-3xl font-bold">
            ¡Tu <span className="text-cens-brand">consumo!</span>
          </h3>
          <PercentCirle kw={kw} />

          <p className="font-normal">
            <b>Recuerda:</b> Si vives en un municipio <b>caliente</b> o a menos
            de 1000 metros sobre el nivel del mar, te recomendamos usar menos de{" "}
            <b>173 kWh al mes</b>.
            <br />
            Si vives en un lugar <b>frío</b> o a más de 1000 metros sobre el
            nivel del mar, tu consumo debería ser menos de <b>130 kWh al mes</b>
            . <br />
            ¡Cuida la energía eléctrica y cuidarás nuestro planeta! 🌍💡
          </p>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-6">
          <div>
            <Button
              hierarchy="primary"
              size="lg"
              onClick={() => swiper.slideTo(0)}
            >
              Volver a jugar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
