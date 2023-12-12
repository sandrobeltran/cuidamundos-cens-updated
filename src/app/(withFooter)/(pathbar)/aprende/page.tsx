"use client";

import CustomMain from "@/components/layout/CustomMain";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import DaliaImage from "@public/img/aprende/dalia-hero.png";
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
          title={{ text: "Explora y aprende", resalted: "con Purita" }}
          description="Acompáñanos para descubrir su historia, sus aventuras y cómo puedes unirte a su misión en nuestro mundo virtual y en la vida real"
        />
        <div className="relative grid w-full grid-cols-6 gap-x-32 px-20 mobile-land:gap-x-16 mobile-land:px-10">
          <div className="col-span-4 flex mobile-land:col-span-4">
            <div className="flex h-full w-full max-w-2xl flex-col items-start justify-start gap-8 mobile-land:max-w-full">
              <Link
                href={"/aprende/historia"}
                className="hover:bg-dalia group flex h-32 w-full flex-col justify-center gap-1 rounded-3xl bg-white/90 p-2 pl-16 shadow-md transition-colors mobile-land:pl-10"
              >
                <h3 className="text-lg font-bold text-cens-medium transition-colors group-hover:text-white">
                  Historia
                </h3>
                <p className="font-normal text-stone-500 transition-colors group-hover:text-white">
                  El estratega de la eficiencia energética, te guiará hacia un
                  futuro sostenible
                </p>
              </Link>
              <Link
                href={"/usuario/evidencias"}
                className="hover:bg-dalia group flex h-32 w-full flex-col justify-center gap-1 rounded-3xl bg-white/90 p-2 pl-16 shadow-md transition-colors mobile-land:pl-10"
              >
                <h3 className="text-lg font-bold text-cens-medium transition-colors group-hover:text-white">
                  Evidencias
                </h3>
                <p className="font-normal text-stone-500 transition-colors group-hover:text-white">
                  El estratega de la eficiencia energética, te guiará hacia un
                  futuro sostenible
                </p>
              </Link>
              {/* DOWNLOADS SECTION */}
              <div className="flex w-full items-center justify-start gap-8 mobile-land:flex-wrap">
                <a
                  href="/some/download/some.pdf"
                  download={"SomePDFile.pdf"}
                  className="flex w-full flex-1 flex-col items-center gap-3 text-center"
                >
                  <div className="flex aspect-square w-full place-content-center items-center justify-center rounded-3xl bg-white/90 text-8xl shadow-md">
                    <Image
                      src={PDFIcon}
                      alt="Ícono de archivo PDF"
                      className="w-3/4"
                    />
                  </div>
                  <p className="text-lg font-bold text-cens-medium">Título</p>
                </a>
                <a
                  href="/some/download/some.pdf"
                  download={"SomePDFile.pdf"}
                  className="flex w-full flex-1 flex-col items-center gap-3 text-center"
                >
                  <div className="flex aspect-square w-full place-content-center items-center justify-center rounded-3xl bg-white/90 text-8xl shadow-md">
                    <Image
                      src={PDFIcon}
                      alt="Ícono de archivo PDF"
                      className="w-3/4"
                    />
                  </div>
                  <p className="text-lg font-bold text-cens-medium">Título</p>
                </a>
                <a
                  href="/some/download/some.pdf"
                  download={"SomePDFile.pdf"}
                  className="flex w-full flex-1 flex-col items-center gap-3 text-center"
                >
                  <div className="flex aspect-square w-full place-content-center items-center justify-center rounded-3xl bg-white/90 text-8xl shadow-md">
                    <Image
                      src={PDFIcon}
                      alt="Ícono de archivo PDF"
                      className="w-3/4"
                    />
                  </div>
                  <p className="text-lg font-bold text-cens-medium">Título</p>
                </a>
                <a
                  href="/some/download/some.pdf"
                  download={"SomePDFile.pdf"}
                  className="flex w-full flex-1 flex-col items-center gap-3 text-center"
                >
                  <div className="flex aspect-square w-full place-content-center items-center justify-center rounded-3xl bg-white/90 text-8xl shadow-md">
                    <Image
                      src={PDFIcon}
                      alt="Ícono de archivo PDF"
                      className="w-3/4"
                    />
                  </div>
                  <p className="text-lg font-bold text-cens-medium">Título</p>
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
