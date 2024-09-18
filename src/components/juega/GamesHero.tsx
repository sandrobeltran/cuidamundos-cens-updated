"use client";

import React from "react";

type TProps = {
  title: {
    text: string;
    resalted?: string;
  };
  description: string;
};

const GamesHero = ({ title, description }: TProps) => {
  return (
    <section className="relative col-span-12 mt-48 flex h-fit items-start justify-start px-24 text-sm text-stone-700 max-sm:h-fit max-sm:flex-col max-sm:bg-[cover] max-sm:px-4 max-sm:py-0 max-sm:pt-36">
      {/* <SkyBackground /> */}
      <div className="relative z-20 flex w-full flex-col items-center gap-5 text-center max-sm:w-full max-sm:items-center">
        <h1 className="text-6xl font-bold text-stone-100 max-sm:text-4xl">
          {title.text} <span className="text-cens-brand">{title.resalted}</span>
        </h1>
        <p className="w-5/6 text-lg font-normal max-sm:w-full">{description}</p>{" "}
      </div>
    </section>
  );
};

export default GamesHero;
