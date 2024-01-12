"use client";

import CustomMain from "@/components/layout/CustomMain";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DaliaImage from "@public/img/aprende/dalia.png";
import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import Image from "next/image";
import PDFIcon from "@public/icons/pdf.svg";
import Link from "next/link";

export default function Aprende() {
  return (
    <CustomMain>
      <HeroeSection>
        <HeroeTitle
          title={{ text: "Protegiendo", resalted: "Nuestro Hogar" }}
          description="¡Hola! Soy Ignis, exploremos cómo cuidar nuestro planeta. ¿Están listos para convertirse en defensores del medio ambiente? ¡Vamos a aprender juntos explorando los siguientes conceptos!"
        />
        <div className="relative grid w-full grid-cols-6 gap-x-0 px-20 mobile-land:gap-x-16 mobile-land:px-10">
          <div className="col-span-4 flex mobile-land:col-span-4">
            <div className="flex h-full w-full max-w-2xl flex-col items-start justify-start gap-8 mobile-land:max-w-full">
              <Link
                href={"/aprende/historia"}
                className="group flex h-32 w-full flex-col justify-center gap-1 rounded-3xl bg-white/90 p-2 pl-16 shadow-md transition-all hover:rounded-e-4xl hover:bg-dalia mobile-land:pl-10"
              >
                <h3 className="text-lg font-bold text-cens-medium transition-colors group-hover:text-white">
                  Historia
                </h3>
                <p className="font-normal text-stone-500 transition-colors group-hover:text-white">
                  Conoce a Ignis, descubre sus poderes y conocimientos, y
                  acompáñala en su misión de proteger el planeta.
                </p>
              </Link>
              <Link
                href={"/usuario/evidencias"}
                className="group flex h-32 w-full flex-col justify-center gap-1 rounded-3xl bg-white/90 p-2 pl-16 shadow-md transition-all hover:rounded-e-4xl hover:bg-dalia mobile-land:pl-10"
              >
                <h3 className="text-lg font-bold text-cens-medium transition-colors group-hover:text-white">
                  Evidencias
                </h3>
                <p className="font-normal text-stone-500 transition-colors group-hover:text-white">
                  Sección de actividades ambientales y evidencias, orientada a
                  colegios.
                </p>
              </Link>
              {/* DOWNLOADS SECTION */}
              <div className="flex w-full items-center justify-center gap-8 mobile-land:flex-wrap">
                <a
                  href="/pdf/cartillas/purita.pdf"
                  download={"Cartilla de Purita.pdf"}
                  className="flex w-full max-w-[135px] flex-1 flex-col items-center gap-3 text-center transition-transform hover:scale-110"
                >
                  <div className="flex aspect-square w-full place-content-center items-center justify-center rounded-3xl bg-white/90 text-8xl shadow-md">
                    <Image
                      src={PDFIcon}
                      alt="Ícono de archivo PDF"
                      className="w-3/4"
                    />
                  </div>
                  <p className="text-lg font-bold text-cens-medium">Purita</p>
                </a>
                <a
                  href="/pdf/cartillas/jirol.pdf"
                  download={"Cartilla de Jirol.pdf"}
                  className="flex w-full max-w-[135px] flex-1 flex-col items-center gap-3 text-center transition-transform hover:scale-110"
                >
                  <div className="flex aspect-square w-full place-content-center items-center justify-center rounded-3xl bg-white/90 text-8xl shadow-md">
                    <Image
                      src={PDFIcon}
                      alt="Ícono de archivo PDF"
                      className="w-3/4"
                    />
                  </div>
                  <p className="text-lg font-bold text-cens-medium">Jirol</p>
                </a>
                <a
                  href="/pdf/cartillas/felix.pdf"
                  download={"Cartilla de Felix.pdf"}
                  className="flex w-full max-w-[135px] flex-1 flex-col items-center gap-3 text-center transition-transform hover:scale-110"
                >
                  <div className="flex aspect-square w-full place-content-center items-center justify-center rounded-3xl bg-white/90 text-8xl shadow-md">
                    <Image
                      src={PDFIcon}
                      alt="Ícono de archivo PDF"
                      className="w-3/4"
                    />
                  </div>
                  <p className="text-lg font-bold text-cens-medium">Félix</p>
                </a>
              </div>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="-rotate-10 col-span-2">
            <Image
              src={DaliaImage}
              className="h-full w-full animate-levitating object-contain"
              alt="Imagen de Purita con pose de victoria"
            />
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
