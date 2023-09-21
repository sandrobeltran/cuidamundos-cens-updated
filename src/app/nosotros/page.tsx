import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import Link from "next/link";
import HeroCapitan from "../../../public/img/hero_capitan.png";
import { ToastContainer } from "react-toastify";
import MisionVisionSection from "@/components/nosotros/MisionVisionSection";
import TeamSection from "@/components/home/TeamSection";
import FAQ from "@/components/nosotros/FAQ";

export default function Nosotros() {
  return (
    <CustomMain>
      <section
        className="col-span-12 flex h-screen items-start justify-start bg-[url(/img/hero_leafs.png),_url(/img/hero_sky.jpg)] bg-cover bg-center bg-no-repeat px-24 py-28 text-sm before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-gradient-to-t before:from-white before:to-transparent after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:bg-gradient-to-b after:from-stone-900/50 after:to-stone-900/0 max-sm:h-fit max-sm:px-4 max-sm:py-0 max-sm:pt-36
      "
      >
        <div className="relative z-20 flex w-1/2 flex-col gap-5 max-sm:w-full max-sm:text-center">
          <h1 className="text-6xl font-bold text-stone-100 max-sm:text-4xl">
            Descubre la <br />
            historia y misión <br /> de{" "}
            <span className="text-cens-brand">CuidaMundos</span>
          </h1>
          <p className="w-5/6 text-lg font-normal max-sm:w-full">
            En Ecoaventura Sostenible, puedes unirte a nuestra misión para
            ayudar a cuidar el planeta y promover la energía sostenible.
          </p>{" "}
        </div>
        <div className="absolute bottom-0 right-0 z-10 h-5/6 w-4/6 overflow-x-hidden max-sm:hidden">
          <Image
            src={HeroCapitan}
            alt="Capitan CENS"
            className="relative -right-20 h-full w-full object-contain"
          />
        </div>
      </section>
      <PaddingWrapper>
        <MisionVisionSection />
        <TeamSection />
        <FAQ />
      </PaddingWrapper>
    </CustomMain>
  );
}
