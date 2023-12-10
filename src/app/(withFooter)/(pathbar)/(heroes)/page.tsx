import CustomMain from "@/components/layout/CustomMain";
import PuritaImage from "@public/img/home/purita.png";
import JirolImage from "@public/img/home/jirol.png";
import FelixImage from "@public/img/home/felix.png";
import Image from "next/image";
import Link from "next/link";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import HeroeSection from "@/components/heroes/HeroeSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import AVATARS_DATA from "@/utils/avatarsData";

export default function Home() {
  return (
    <CustomMain>
      <PaddingWrapper>
        <HeroeSection>
          <HeroeTitle
            title={{
              text: "¡Aprende a ser un",
              resalted: "héroe!",
            }}
          />
          <div className="flex justify-center">
            {/* HEROES GRID */}
            <div className="mt-6 grid w-full max-w-7xl grid-cols-3 justify-between gap-10 px-12 mobile-land:px-6 mobile-land:m-0">
              {/* PURITA */}
              <Link href={"/purita"}>
                <div className="group flex h-full cursor-pointer flex-col gap-2 transition-transform hover:-translate-y-10 hover:scale-110">
                  <div className="">
                    <Image
                      src={PuritaImage}
                      className="aspect-[3/3.2] w-full animate-levitating object-contain"
                      alt="Imagen de Purita"
                    />
                  </div>
                  <div className="flex h-full flex-col items-center gap-2 rounded-bl-3xl rounded-br-3xl bg-purita px-5 pb-7 pt-3 text-center text-white shadow-xl shadow-stone-950/20 transition-shadow group-hover:shadow-stone-950/10">
                    <h4 className="flex items-center gap-1 text-2xl font-semibold">
                      <Image
                        src={AVATARS_DATA["purita-badget"]}
                        alt="Ícono de Purita CuidaMundos"
                        width={28}
                        height={28}
                      />
                      Purita
                    </h4>
                    <p className="font-normal leading-tight">
                      La protectora de la naturaleza, te enseñará a cuidar
                      nuestro hogar.
                    </p>
                  </div>
                </div>
              </Link>
              {/* JIROL */}
              <Link href={"/jirol"}>
                <div className="group flex h-full cursor-pointer flex-col gap-2 transition-transform hover:-translate-y-10 hover:scale-110">
                  <div className="">
                    <Image
                      src={JirolImage}
                      style={{ animationDuration: "4.5s" }}
                      className="aspect-[3/3.2] w-full animate-levitating object-contain"
                      alt="Imagen de Purita"
                    />
                  </div>
                  <div className="flex h-full flex-col items-center gap-2 rounded-bl-3xl rounded-br-3xl bg-jirol px-5 pb-7 pt-3 text-center text-white shadow-xl shadow-stone-950/20 transition-shadow group-hover:shadow-stone-950/10">
                    <h4 className="flex items-center gap-1 text-2xl font-semibold">
                      <Image
                        src={AVATARS_DATA["jirol-badget"]}
                        alt="Ícono de Jirol CuidaMundos"
                        width={28}
                        height={28}
                      />
                      Jirol
                    </h4>
                    <p className="font-normal leading-tight">
                      El estratega de la eficiencia energética, te guiará hacia
                      un futuro sostenible.
                    </p>
                  </div>
                </div>
              </Link>
              {/* FELIX */}
              <Link href={"/felix"}>
                <div className="group flex h-full cursor-pointer flex-col gap-2 transition-transform hover:-translate-y-10 hover:scale-110">
                  <div className="">
                    <Image
                      src={FelixImage}
                      style={{ animationDuration: "3.5s" }}
                      className="aspect-[3/3.2] w-full animate-levitating object-contain"
                      alt="Imagen de Purita"
                    />
                  </div>
                  <div className="flex h-full flex-col items-center gap-2 rounded-bl-3xl rounded-br-3xl bg-felix px-5 pb-7 pt-3 text-center text-white shadow-xl shadow-stone-950/20 transition-shadow group-hover:shadow-stone-950/10">
                    <h4 className="flex items-center gap-1 text-2xl font-semibold">
                      <Image
                        src={AVATARS_DATA["felix-badget"]}
                        alt="Ícono de Félix CuidaMundos"
                        width={28}
                        height={28}
                      />
                      Félix
                    </h4>
                    <p className="font-normal leading-tight">
                      El maestro de la electricidad, te revelará los secretos de
                      la energía eléctrica.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </HeroeSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
