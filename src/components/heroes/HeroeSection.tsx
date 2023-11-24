import React from "react";

type TProps = {
  children: JSX.Element[] | JSX.Element;
};

const HeroeSection = ({ children }: TProps) => {
  return (
    <section className="relative z-[2] col-span-12 mt-48 flex h-fit w-full flex-col gap-8 bg-cover bg-center bg-no-repeat max-lg:col-span-4">
      {children}
    </section>
  );
};

export default HeroeSection;
