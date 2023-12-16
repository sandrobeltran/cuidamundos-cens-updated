import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimationContext } from "./InteractiveVideo";
import OutroImage from "@public/img/aprende/historia/outro.png";

const Page7 = () => {
  const {
    state: { play },
  } = useContext(AnimationContext)!;
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [play]);

  return (
    <div
      ref={pageRef}
      className="relative h-full w-full overflow-hidden bg-[#3dd6d8]"
    >
      <div className="absolute left-0 top-0 h-full w-full bg-[url(/img/aprende/historia/paper-background.jpg)] bg-cover bg-center bg-no-repeat mix-blend-multiply" />
      <div className="flex h-full w-full items-center justify-center">
        <Image
          src={OutroImage}
          alt="Imagen de Dalia"
          width={400}
          height={200}
          className="w-1/2 object-contain object-top"
        />
      </div>
    </div>
  );
};

export default Page7;
