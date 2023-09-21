import Image, { StaticImageData } from "next/image";
import React from "react";
import Button from "../Button";
import Link from "next/link";

type TProps = {
  cover: StaticImageData;
  image: StaticImageData;
  title: string;
  description: React.ReactNode;
  href: string;
};

const HeroMiniSection = ({
  cover,
  image,
  title,
  description,
  href,
}: TProps) => {
  return (
    <div className="relative flex items-center justify-center gap-8 overflow-hidden rounded-3xl px-10 py-10 text-white">
      <Image
        src={cover}
        alt={`${title} cover image`}
        fill
        className="object-cover"
      />
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-t from-stone-900/70 to-stone-900/0" />
      <div className="relative z-10 flex w-1/4">
        <Image
          src={image}
          alt={`${title} Image`}
          className="object-contain"
        />
      </div>
      <div className="z-10 flex w-3/4 flex-col items-start gap-4">
        <h4 className="w-full text-center text-3xl font-semibold">{title}</h4>
        <p className="text-lg font-normal">{description}</p>
        <Link href={href}>
          <Button hierarchy="primary" size="lg">
            Leer más
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeroMiniSection;
