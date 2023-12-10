import React, { ReactNode } from "react";

type TProps = {
  title: {
    text: string;
    resalted?: string;
    color?: "medium" | "brand";
  };
  description?: ReactNode;
};

const HeroeTitle = ({ title, description }: TProps) => {
  return (
    <div className="relative z-20 flex w-full flex-col items-center gap-4 px-16 text-center">
      <h1 className="text-6xl font-bold text-stone-100 max-sm:text-4xl">
        {title.text} <span className="text-cens-brand">{title.resalted}</span>
      </h1>
      <p className="mt-5 max-w-3xl text-lg font-normal mobile-land:mt-3">
        {description}
      </p>
    </div>
  );
};

export default HeroeTitle;
