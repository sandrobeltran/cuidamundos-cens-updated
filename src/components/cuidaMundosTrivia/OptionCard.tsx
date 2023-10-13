import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import React from "react";

type TProps = {
  option: string;
  nextPage: (option: string) => void;
};

const OptionCard = ({ option, nextPage }: TProps) => {
  return (
    <button
      onClick={() => nextPage(option)}
      key={option}
      className="w-full rounded-lg border border-stone-300 bg-white px-5 py-4 text-center font-normal text-stone-500 shadow-md transition-colors hover:bg-cens-light hover:text-white"
    >
      {option}
    </button>
  );
};

export default OptionCard;
