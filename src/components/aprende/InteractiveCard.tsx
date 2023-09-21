import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

type TProps = {
  title: string;
  cover: StaticImageData;
  href: string;
};

const InteractiveCard = ({ title, cover, href }: TProps) => {
  return (
    <div className="relative aspect-video w-full max-w-sm overflow-hidden rounded-3xl bg-red-500 p-4">
      <Image src={cover} alt={`${title} imagen`} fill />
      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-stone-900/50 to-stone-900/0" />
      <div className="relative z-20">
        <h6 className="text-lg font-medium text-white">{title}</h6>
      </div>
      <button className="absolute inset-0 z-10 m-auto h-fit w-fit">
        <PlayCircleIcon className="h-14 text-white" />
      </button>
    </div>
  );
};

export default InteractiveCard;
