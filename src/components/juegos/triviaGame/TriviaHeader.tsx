import React, { useCallback, useEffect, useRef, useState } from "react";
import { ClockIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { useUsoEficiente } from "@/store/useUsoEficiente";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import { ITrivia } from "@/utils/customTypes";
import { parseGameTime } from "@/utils/timeFormatter";

type TProps = {
  time: number; // in seconds
};

const TriviaHeader = ({ time }: TProps) => {
  const user = useUserStore((state) => state.user);
  const { results, questions, stage, setLose, lose } = useUsoEficiente();
  const [remaningTime, setRemainingTime] = useState<number>(time);
  const interval = useRef<NodeJS.Timeout>();

  const handleSpendSecond = useCallback(() => {
    setRemainingTime(remaningTime - 1);
  }, [remaningTime]);

  const endGame = useCallback(() => {
    clearInterval(interval.current);
  }, []);

  const resetGame = useCallback(() => {
    console.log("reset game");
    setRemainingTime(time);
    clearInterval(interval.current);
  }, [time]);

  useEffect(() => {
    switch (stage) {
      case 0:
        resetGame();
        break;
      case 1:
        interval.current = setInterval(function () {
          handleSpendSecond();
        }, 1000);
        break;
      case 2:
        endGame();
        break;
      default:
        break;
    }

    if (remaningTime <= 0 && stage === 1) {
      endGame();
      document.getElementById("timeRunOutModalWrapper")!.style.display = "flex";
      setLose();
    } else {
      document.getElementById("timeRunOutModalWrapper")!.style.display = "none";
    }

    return () => {
      clearInterval(interval.current);
    };
  }, [stage, endGame, resetGame, handleSpendSecond, remaningTime, setLose]);

  return (
    <div className="relative z-10 flex h-16 mobile-land:h-10 w-full items-center justify-between bg-cens-brand px-6 text-white shadow-md">
      {stage === 1 ? (
        <>
          {/* USER BADGE */}
          {user ? (
            <div className="absolute left-6 mobile-land:h-24 top-full flex h-28 w-12 items-end justify-center rounded-b-3xl bg-cens-brand p-1 shadow-[inset_0_5px_5px_#0003] max-sm:left-2 max-sm:h-16">
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
          <div className="flex items-center gap-1">
            <ClockIcon className="h-6" />
            <p>{parseGameTime(remaningTime)}</p>
          </div>
          <button>
            <SpeakerWaveIcon className="h-6" />
          </button>
        </>
      ) : null}
    </div>
  );
};

export default TriviaHeader;
