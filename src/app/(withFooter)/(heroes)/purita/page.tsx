import HeroeSection from "@/components/heroes/HeroeSection";
import HeroeTitle from "@/components/heroes/HeroeTitle";
import SkyBackground from "@/components/heroes/SkyBackground";
import CustomMain from "@/components/layout/CustomMain";
import { IoPersonCircleOutline } from "react-icons/io5";
import { SlMagicWand } from "react-icons/sl";
import { RiFingerprintLine } from "react-icons/ri";
import { TiWaves } from "react-icons/ti";
import PuritaActionImage from "../../../../../public/img/purita/action.png";
import PuritaBadgetImage from "../../../../../public/img/purita/badget.png";
import Image from "next/image";

export default function Purita() {
  return (
    <CustomMain>
      <SkyBackground />
      <HeroeSection>
        <HeroeTitle
          title={{
            text: "¡Aprende a ser un héroe",
            resalted: "del medio ambiente!",
          }}
        />
        {/* MAIN CONTAINER */}
        <div className="flex flex-col">
          {/* FIRST ROW */}
          <div className="border-purita grid h-72 w-full grid-cols-8 grid-rows-3 border-2">
            <div className="bg-purita col-span-2 row-span-3">
              <Image
                src={PuritaActionImage}
                alt="Imagen de Purita"
                className="h-full w-full object-contain object-center"
              />
            </div>
            <div className="col-span-6 row-span-1 flex items-center justify-center border-b-2 border-inherit bg-transparent text-4xl uppercase ">
              <h4 className="text-purita font-bold tracking-[20px]">
                APRENDE SOBRE PURITA
              </h4>
            </div>
            <div className="hover:bg-purita group relative col-span-3 row-span-2 cursor-pointer border-r-2 border-inherit bg-transparent transition-colors">
              {/* BADGE */}
              <div className="bg-purita absolute -top-4 left-0 right-0 mx-auto flex h-8 w-[2px] flex-col place-content-center items-center justify-center text-center group-hover:bg-white">
                <div className="bg-purita group-hover:text-purita relative top-9 grid min-h-[44px] min-w-[44px] place-content-center rounded-full text-3xl text-white transition-colors group-hover:bg-white">
                  <IoPersonCircleOutline />
                </div>
              </div>
              <div className="h-20" />
              <div className="text-purita relative flex flex-col items-center gap-2 px-4 text-center transition-colors group-hover:text-white ">
                <h4 className="text-xl font-semibold">¿Quién es?</h4>
                <p className="leading-tight text-stone-800 transition-colors group-hover:text-white">
                  Explora la historia de Purita, la heroína del Medio Ambiente,
                  y descubre cómo puedes convertirte en un héroe o heroína.
                </p>
              </div>
            </div>
            <div className="hover:bg-purita group relative col-span-3 row-span-2 cursor-pointer border-inherit bg-transparent transition-colors">
              {/* BADGE */}
              <div className="bg-purita absolute -top-4 left-0 right-0 mx-auto flex h-8 w-[2px] flex-col place-content-center items-center justify-center text-center group-hover:bg-white">
                <div className="bg-purita group-hover:text-purita relative top-9 grid min-h-[44px] min-w-[44px] place-content-center rounded-full text-3xl text-white transition-colors group-hover:bg-white">
                  <TiWaves />
                </div>
              </div>
              <div className="h-20" />
              <div className="text-purita relative flex flex-col items-center gap-2 px-4 text-center transition-colors group-hover:text-white ">
                <h4 className="text-xl font-semibold">¿Qué atiende?</h4>
                <p className="leading-tight text-stone-800 transition-colors group-hover:text-white">
                  ¡Embárcate en un viaje para conocer el medio ambiente y el
                  cambio climático, entendiendo los retos que enfrentamos!
                </p>
              </div>
            </div>
          </div>

          {/* SECOND ROW */}
          <div className="border-purita grid h-72 w-full grid-cols-8 grid-rows-3 border-2 border-t-0">
            <div className="col-span-6 row-span-1 flex items-center justify-center border-b-2 border-inherit bg-transparent text-4xl uppercase ">
              <h4 className="text-purita font-bold tracking-[20px]">
                HORA DE JUGAR
              </h4>
            </div>
            <div className="bg-purita col-span-2 row-span-3">
              <Image
                src={PuritaBadgetImage}
                alt="Placa de Purita"
                className="h-full w-full object-contain object-center drop-shadow-[0_5px_12px_#fff8]"
              />
            </div>
            <div className="hover:bg-purita group relative col-span-3 row-span-2 cursor-pointer border-r-2 border-inherit bg-transparent transition-colors">
              {/* BADGE */}
              <div className="bg-purita absolute -top-4 left-0 right-0 mx-auto flex h-8 w-[2px] flex-col place-content-center items-center justify-center text-center group-hover:bg-white">
                <div className="bg-purita group-hover:text-purita relative top-9 grid min-h-[44px] min-w-[44px] place-content-center rounded-full text-3xl text-white transition-colors group-hover:bg-white">
                  <SlMagicWand />
                </div>
              </div>
              <div className="h-20" />
              <div className="text-purita relative flex flex-col items-center gap-2 px-4 text-center transition-colors group-hover:text-white ">
                <h4 className="text-xl font-semibold">Poderes</h4>
                <p className="leading-tight text-stone-800 transition-colors group-hover:text-white">
                  ¡Despierta los poderes de Purita y conviértete en un defensor
                  del medio ambiente, protegiendo todos sus tesoros naturales!
                </p>
              </div>
            </div>
            <div className="hover:bg-purita group relative col-span-3 row-span-2 cursor-pointer border-inherit bg-transparent transition-colors">
              {/* BADGE */}
              <div className="bg-purita absolute -top-4 left-0 right-0 mx-auto flex h-8 w-[2px] flex-col place-content-center items-center justify-center text-center group-hover:bg-white">
                <div className="bg-purita group-hover:text-purita relative top-9 grid min-h-[44px] min-w-[44px] place-content-center rounded-full text-3xl text-white transition-colors group-hover:bg-white">
                  <RiFingerprintLine />
                </div>
              </div>
              <div className="h-20" />
              <div className="text-purita relative flex flex-col items-center gap-2 px-4 text-center transition-colors group-hover:text-white ">
                <h4 className="text-xl font-semibold">Huella Ecológica</h4>
                <p className="leading-tight text-stone-800 transition-colors group-hover:text-white">
                  ¿Estás listo para convertirte en un guardián del medio
                  ambiente y ayudar a reducir la huella ecológica?
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroeSection>
    </CustomMain>
  );
}
