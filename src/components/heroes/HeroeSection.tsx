import React from "react";

type TProps = {
  children: JSX.Element[] | JSX.Element;
};

const HeroeSection = ({ children }: TProps) => {
  return (
    <section className="relative z-[2] col-span-12 mt-20 flex h-fit min-h-screen w-full flex-col gap-8 bg-cover bg-center bg-no-repeat pt-32 max-lg:col-span-4">
      {children}
    </section>
  );
};

export default HeroeSection;
