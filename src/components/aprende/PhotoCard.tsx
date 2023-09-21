import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

type TProps = {
  cover: StaticImageData;
  alt: string;
};

const PhotoCard = ({ cover, alt }: TProps) => {
  return (
    <div className="relative aspect-video w-full max-w-sm overflow-hidden rounded-3xl bg-red-500 p-4">
      <Image src={cover} alt={alt} fill />
    </div>
  );
};

export default PhotoCard;
