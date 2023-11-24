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
    <div className="relative z-20 flex w-full flex-col items-center gap-5 text-center px-16">
      <h1 className="text-6xl font-bold text-stone-100 max-sm:text-4xl">
        {title.text} <span className="text-cens-brand">{title.resalted}</span>
      </h1>
      <p className="max-w-3xl mt-5 font-normal">{description}</p>
    </div>
  );
};

export default HeroeTitle;
