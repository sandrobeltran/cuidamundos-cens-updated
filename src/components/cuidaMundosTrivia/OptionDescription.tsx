import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

type TProps = {
  description: string;
};
const OptionDescription = ({ description }: TProps) => {
  const { currentOption, correctOption } = useCuidaMundosTrivia(
    (state) => state,
  );

  return (
    <div className="flex w-full flex-col items-center gap-3 bg-cens-brand p-3 text-white">
      {currentOption === correctOption ? (
        <CheckCircleIcon className="w-14 text-cens-medium" />
      ) : (
        <XCircleIcon className="w-14 text-red-500" />
      )}
      <p className="w-full max-w-lg text-center text-lg font-normal">
        {description}
      </p>
    </div>
  );
};

export default OptionDescription;
