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
      className="w-full rounded-2xl bg-cens-brand p-4 text-center font-medium text-white shadow-xl shadow-stone-600/30 transition-all hover:brightness-75"
    >
      {option}
    </button>
  );
};

export default OptionCard;
