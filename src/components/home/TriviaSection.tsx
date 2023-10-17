import React from "react";
import CustomSection from "../layout/CustomSection";
import Button from "../Button";
import { StaticImageData } from "next/image";
import Link from "next/link";

type TProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  cover: string;
  href: string;
};

const TriviaSection = ({ title, description, cover, href }: TProps) => {
  return (
    <CustomSection>
      <div
        className="flex aspect-[3/1] w-full flex-col items-center gap-8 rounded-3xl border bg-cover bg-bottom bg-no-repeat p-16 text-center text-stone-500 shadow-lg shadow-stone-200 max-sm:p-8"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="flex max-w-2xl flex-col items-center gap-4">
          <h2 className="text-5xl font-medium">{title}</h2>
          <p className="max-w-lg text-lg font-normal text-stone-500 max-sm:max-w-none">
            {description}
          </p>
        </div>
        <Link href={href}>
          <Button hierarchy="primary" size="md">
            Comenzar la trivia
          </Button>
        </Link>
      </div>
    </CustomSection>
  );
};

export default TriviaSection;
