import { useUsoEficiente } from "@/store/useUsoEficiente";
import React from "react";

type TProps = {
  option: string;
  nextPage: (option: any) => void;
  value?: any;
};

const OptionCard = ({ option, nextPage, value }: TProps) => {
  return (
    <button
      onClick={() => nextPage(value || option)}
      key={option}
      className="w-[45%] min-h-full rounded-lg border border-stone-300 bg-white px-5 py-4 text-center font-normal text-stone-500 shadow-md transition-colors hover:bg-cens-light hover:text-white mobile-land:text-sm mobile-land:py-2 mobile-land:px-4"
    >
      {option}
    </button>
  );
};

export default OptionCard;
