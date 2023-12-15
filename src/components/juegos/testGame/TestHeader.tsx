import React, { useCallback, useEffect, useRef, useState } from "react";
import { ClockIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { useUsoEficiente } from "@/store/useUsoEficiente";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import { ITrivia } from "@/utils/customTypes";
import { parseGameTime } from "@/utils/timeFormatter";
import { useHuellaEcologica } from "@/store/useHuellaEcologica";

const TestHeader = () => {
  const user = useUserStore((state) => state.user);
  const { results, questions, stage } = useHuellaEcologica();

  return (
    <div className="relative z-10 flex h-16 w-full items-center justify-between bg-cens-brand px-6 text-white shadow-md mobile-land:h-10">
      {stage === 1 ? (
        <>
          {/* USER BADGE */}
          {user ? (
            <div className="absolute left-6 top-full flex h-28 w-12 items-end justify-center rounded-b-3xl bg-cens-brand p-1 shadow-[inset_0_5px_5px_#0003] mobile-land:h-24">
              <Image
                src={user!.avatar}
                alt="Avatar del usuario"
                width={48}
                height={48}
                className="aspect-square w-full rounded-full object-cover object-center"
              />
              <div></div>
            </div>
          ) : null}
          <h6>{`${results.length + 1}/${questions.length}`}</h6>
          {/* div */}
          <span>{/* <SpeakerWaveIcon className="h-6" /> */}</span>
        </>
      ) : null}
    </div>
  );
};

export default TestHeader;
