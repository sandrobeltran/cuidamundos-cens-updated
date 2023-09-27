import Image from "next/image";
import React from "react";

type TProps = {
  title: string;
  image: string;
  current: number;
  total: number;
};

const TriviaHeader = ({ title, image, current, total }: TProps) => {
  return (
    <div className="flex h-64 w-full items-center gap-10 rounded-3xl bg-cens-brand p-5 text-center text-white">
      <div className="min-w-48 relative aspect-square w-48">
        <Image src={image} fill alt="Question image" className="rounded-3xl" />
      </div>
      <div className="w-full">
        <p>
          {current}/{total}
        </p>
        <h4 className="text-2xl font-medium">{title}</h4>
      </div>
    </div>
  );
};

export default TriviaHeader;
