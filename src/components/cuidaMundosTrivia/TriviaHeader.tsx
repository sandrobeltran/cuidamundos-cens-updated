import React from "react";
import { ClockIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";

const TriviaHeader = () => {
  const { results, questions, playing } = useCuidaMundosTrivia();

  return (
    <div className="relative flex h-16 w-full items-center justify-between bg-cens-brand px-6 text-white">
      {playing ? (
        <>
          <h6>{`${results.length + 1}/${questions.length}`}</h6>
          <div className="flex items-center gap-1">
            <ClockIcon className="h-6" />
            <p>03:30</p>
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
