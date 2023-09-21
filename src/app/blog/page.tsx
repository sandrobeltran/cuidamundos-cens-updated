import Button from "@/components/Button";
import CustomMain from "@/components/layout/CustomMain";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Image from "next/image";
import HeroesFlying from "../../../public/img/heroes_flying.png";

export default function Blog() {
  return (
    <CustomMain>
      {/* HERO SECTION */}
      <section
        className="col-span-12 flex h-screen items-start justify-start bg-[url(/img/hero_leafs.png),_url(/img/hero_sky.jpg)] bg-cover bg-center bg-no-repeat px-24 py-28 text-sm before:absolute before:bottom-0 before:left-0 before:h-1/2 before:w-full before:bg-gradient-to-t before:from-white before:to-transparent after:absolute after:left-0 after:top-0 after:h-1/2 after:w-full after:bg-gradient-to-b after:from-stone-900/50 after:to-stone-900/0 max-sm:h-fit max-sm:px-4 max-sm:py-0 max-sm:pt-36
        "
      >
        <div className="relative z-20 flex w-1/2 flex-col gap-5 max-sm:w-full max-sm:text-center">
          <h1 className="text-6xl font-bold text-stone-100 max-sm:text-4xl">
            El Blog de
            <br />
            CuidaMundos: <br />{" "}
            <span className="text-cens-brand">Tu Fuente de Noticias y Más</span>
          </h1>
          <p className="w-5/6 text-lg font-normal max-sm:w-full">
            Explora noticias emocionantes, actualizaciones y consejos en nuestro
            blog. Sumérgete en el mundo de CuidaMundos y la conservación.
            ¡Bienvenido a la aventura!
          </p>{" "}
        </div>
        <div className="absolute bottom-0 right-0 z-10 h-5/6 w-4/6 overflow-x-hidden max-sm:hidden">
          <Image
            src={HeroesFlying}
            alt="Capitan CENS"
            className="relative -right-20 h-full w-full object-contain"
          />
        </div>
      </section>
      <PaddingWrapper>
        <p>Content</p>
      </PaddingWrapper>
    </CustomMain>
  );
}

// ! REVIEW THE CONNECTIONS TO THE DATABASE, THERE COULD BE A MEMORY LEAK, VERIFY CONN VARIABLE IS WORKING CORRECTLY !!!! 🚧