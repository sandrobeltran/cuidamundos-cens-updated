import Button from "@/components/Button";
import React, { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { useSwiper } from "swiper/react";

const CALCULATOR_DATA = [
  {
    name: "TV",
    w: 2,
    kw: 0.1,
    days: 31,
  },
  {
    name: "Nevera",
    w: 2,
    kw: 523,
    days: 31,
  },
  {
    name: "Ventilador",
    w: 2,
    kw: 1906,
    days: 31,
  },
  {
    name: "Plancha",
    w: 2,
    kw: 375,
    days: 31,
  },
  {
    name: "Portátil",
    w: 2,
    kw: 2558,
    days: 31,
  },
  {
    name: "Aire acondicionado",
    w: 2,
    kw: 150,
    days: 31,
  },
  {
    name: "Parlantes",
    w: 2,
    kw: 396,
    days: 31,
  },
];

type TProps = {
  set: Dispatch<SetStateAction<{ kw: number }>>;
  kw: number;
};

const Calculator = ({ set }: TProps) => {
  const swiper = useSwiper();
  let kws: { name: string; kw: number }[] = [];

  function handleChangeValue(hours: number, name: string) {
    if (!hours) return;

    const index = kws.findIndex((e) => e.name === name);
    const kw = hours * 1; //! replace with formula

    if (index < 0) {
      kws.push({ name, kw });
    } else {
      kws[index].kw = kw;
    }
  }

  function handleNext() {
    if (kws.length < 7) {
      toast.error("Ingresa el número de horas que usas cada equipo");
      return;
    }
    const { kw } = kws.reduce((a, b) => ({ ...a, kw: a.kw + b.kw }));
    set({ kw });
    swiper.slideNext();

    document
      .getElementById("devicesTable")
      ?.querySelectorAll("input")
      .forEach((e) => (e.value = ""));
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white/80 p-10 pt-24 text-lg text-stone-500 backdrop-blur-md after:absolute after:left-0 after:top-0 after:h-16 after:w-full after:bg-cens-brand">
      <div
        className="flex w-full flex-col items-center gap-4 text-center"
        id="devicesTable"
      >
        <div className="grid w-full grid-cols-6 rounded-3xl bg-cens-medium px-6 py-7 text-white">
          <h6 className="col-span-2">EQUIPO</h6>
          <h6 className="w-full">W</h6>
          <h6 className="w-full">KW</h6>
          <h6 className="w-full">HORAS</h6>
          <h6 className="w-full">DÍAS</h6>
        </div>
        {/* DEVICES TABLE */}
        {CALCULATOR_DATA.map((device) => (
          <div
            key={device.name}
            className="min-h-12 grid w-full grid-cols-6 items-center rounded-3xl bg-white px-6 py-2 shadow-md"
          >
            <p className="col-span-2 max-w-full">{device.name}</p>
            <p className="max-w-full">{device.w}</p>
            <p className="max-w-full">{device.kw}</p>
            <div className="h-full max-h-[24px] max-w-full">
              <input
                type="number"
                id={`${device.name.split(" ")[0]}DeviceInput`}
                className="h-full w-full max-w-[100px] bg-transparent px-2 text-center shadow-[inset_0px_0px_8px_#12121240]"
                onChange={(e) =>
                  handleChangeValue(parseInt(e.target.value), device.name)
                }
              />
            </div>
            <p className="max-w-full">{device.days}</p>
          </div>
        ))}
        <div className="mt-4">
          <Button hierarchy="primary" size="lg" onClick={() => handleNext()}>
            Calcular consumo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
