import Button from "@/components/Button";
import React, { Dispatch, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { useSwiper } from "swiper/react";

const CALCULATOR_DATA = [
  {
    name: "TV",
    w: 75,
    days: 30,
  },
  {
    name: "Nevera",
    w: 300,
    days: 30,
  },
  {
    name: "Ventilador",
    w: 80,
    days: 30,
  },
  {
    name: "Bombillo LED",
    w: 13,
    days: 30,
  },
  {
    name: "Computador",
    w: 250,
    days: 30,
  },
  {
    name: "Aire acondicionado",
    w: 1200,
    days: 30,
  },
  {
    name: "Equipo de Sonido",
    w: 100,
    days: 30,
  },
];

type TProps = {
  set: Dispatch<SetStateAction<{ kw: number }>>;
  kw: number;
};

const Calculator = ({ set }: TProps) => {
  const swiper = useSwiper();
  const [kws, setKws] = useState<{ name: string; kw: number }[]>([]);

  function handleChangeValue(hours: number, name: string) {
    console.log(hours)
    if (!hours) return;

    const days = 30;
    const index = kws.findIndex((e) => e.name === name);
    const kw =
      hours * days * (CALCULATOR_DATA.find((e) => e.name === name)!.w / 1000);

    if (index < 0) {
      setKws([...kws, { name, kw }]);
    } else {
      const newKws = [...kws];
      newKws[index].kw = kw;
      setKws(newKws);
    }
  }

  function handleNext() {
    /* VALIDATE AT LEAST ONE FIELD ARE FILLED */
    if (kws.length < 1) {
      toast.error("Ingresa el número de horas que usas en cada equipo");
      return;
    }

    const { kw } = kws.reduce((a, b) => ({ ...a, kw: a.kw + b.kw }));
    set({ kw });
    swiper.slideNext();

    document
      .getElementById("devicesTable")
      ?.querySelectorAll("input")
      .forEach((e) => (e.value = ""));

    kws.length = 0;
  }

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white/80 p-10 pt-24 text-lg text-stone-500 shadow-md backdrop-blur-md">
      <div className="absolute left-0 top-0 z-10 grid h-16 w-full place-content-center bg-cens-brand text-white mobile-land:h-10 mobile-land:text-[1rem] text-xl">
        Coloca la cantidad de horas que dedicas diariamente a tus equipos
      </div>
      <div
        className="flex w-full flex-col items-center gap-4 text-center"
        id="devicesTable"
      >
        <div className="grid w-full grid-cols-6 rounded-3xl bg-cens-medium px-6 py-7 text-white">
          <h6 className="col-span-2">EQUIPO</h6>
          <h6 className="w-full">W</h6>
          <h6 className="w-full">kW</h6>
          <h6 className="w-full">HORAS</h6>
          <h6 className="w-full">DÍAS</h6>
        </div>
        {/* DEVICES TABLE */}
        {CALCULATOR_DATA.map((device) => (
          <div
            key={device.name}
            className="min-h-12 grid w-full grid-cols-6 items-center rounded-3xl bg-white px-6 py-2 text-stone-500 shadow-md"
          >
            <p className="col-span-2 max-w-full">{device.name}</p>
            <p className="max-w-full">{device.w}</p>
            <p className="max-w-full">{device.w / 1000}</p>
            {/* CALC KW */}
            <div className="h-full max-h-[24px] max-w-full">
              <input
                type="number"
                id={`${device.name.split(" ")[0]}DeviceInput`}
                className="h-full w-full max-w-[100px] bg-transparent px-2 text-center shadow-[inset_0px_0px_8px_#12121240]"
                max={24}
                maxLength={2}
                onChange={(e) =>
                  handleChangeValue(parseInt(e.target.value), device.name)
                }
                onInput={(e) => {
                  if (e.currentTarget.value.length > 2) {
                    e.currentTarget.value = e.currentTarget.value.slice(0, 2);
                  }
                  if (parseFloat(e.currentTarget.value) > 24) {
                    e.currentTarget.value = "24";
                  }
                }}
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
