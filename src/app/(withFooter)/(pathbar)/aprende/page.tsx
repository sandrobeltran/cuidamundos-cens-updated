"use client";

import CustomMain from "@/components/layout/CustomMain";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PuritaImage from "@public/img/aprende/purita-hero.png";
import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import Image from "next/image";
import { RiFilePdf2Fill } from "react-icons/ri";
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
        <div className="mobile-land:px-16 mobile-land:gap-x-16 relative grid w-full grid-cols-6 gap-x-32 px-20">
          <div className="mobile-land:col-span-4 col-span-4 flex">
            <div className="mobile-land:max-w-full flex h-full w-full max-w-2xl flex-col items-start justify-start gap-8">
              <Link
                href={"/aprende/historia"}
                className="mobile-land:pl-10 flex h-32 w-full flex-col justify-center gap-1 rounded-3xl bg-white/90 p-2 pl-16 shadow-md"
              >
                <h3 className="text-lg font-bold text-cens-medium">Historia</h3>
                <p className="font-normal text-stone-500">
                  El estratega de la eficiencia energética, te guiará hacia un
                  futuro sostenible
                </p>
              </Link>
              <div className="mobile-land:pl-10 flex h-32 w-full flex-col justify-center gap-1 rounded-3xl bg-white/90 p-2 pl-16 shadow-md">
                <h3 className="text-lg font-bold text-cens-medium">
                  Evidencias
                </h3>
                <p className="font-normal text-stone-500">
                  El estratega de la eficiencia energética, te guiará hacia un
                  futuro sostenible
                </p>
              </div>
              {/* DOWNLOADS SECTION */}
              <div className="mobile-land:flex-wrap flex w-full items-center justify-start gap-8">
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
              src={PuritaImage}
              className="h-full w-full animate-levitating object-contain"
              alt="Imagen de Purita con pose de victoria"
            />
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
