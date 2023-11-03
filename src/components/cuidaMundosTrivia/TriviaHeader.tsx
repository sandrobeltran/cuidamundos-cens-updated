import React, { useCallback, useEffect, useRef, useState } from "react";
import { ClockIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import Image from "next/image";
import { useUserStore } from "@/store/useUserStore";
import { ITrivia } from "@/utils/customTypes";
import { parseGameTime } from "@/utils/timeFormatter";

type TProps = {
  time: number; // in seconds
};

const TriviaHeader = ({ time }: TProps) => {
  const user = useUserStore((state) => state.user);
  const { results, questions, stage } = useCuidaMundosTrivia();
  const [remaningTime, setRemainingTime] = useState<number>(time);
  const interval = useRef<NodeJS.Timeout>();

  const handleSpendSecond = useCallback(() => {
    setRemainingTime(remaningTime - 1);
  }, [remaningTime]);
  /* 
  const startGame = useCallback(() => {
    console.log(interval.current);
    if (!interval.current) {
      interval.current = setInterval(() => {
        console.log("interval started");
        handleSpendSecond();
      }, 1000);
    }
  }, [handleSpendSecond]); */

  const endGame = useCallback(() => {
    console.log("end game");
    clearInterval(interval.current);
  }, []);

  const resetGame = useCallback(() => {
    console.log("reset game");
    setRemainingTime(time);
    clearInterval(interval.current)
  }, [time]);

  useEffect(() => {
    console.log("change stage");
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

    return () => {
      console.log("disposing interval");
      clearInterval(interval.current);
    };
  }, [stage, endGame, resetGame, handleSpendSecond]);

  console.log(remaningTime);

  return (
    <div className="z-10 relative flex h-16 w-full items-center justify-between bg-cens-brand px-6 text-white shadow-md">
      {stage === 1 ? (
        <>
          {/* USER BADGE */}
          <div className="absolute left-6 top-full flex h-28 w-12 items-end justify-center rounded-b-3xl bg-cens-brand p-1 shadow-[inset_0_10px_10px_#0005]">
            <Image
              src={user!.avatar}
              alt="Avatar del usuario"
              width={48}
              height={48}
              className="aspect-square w-full rounded-full object-cover object-center"
            />
            <div></div>
          </div>
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
