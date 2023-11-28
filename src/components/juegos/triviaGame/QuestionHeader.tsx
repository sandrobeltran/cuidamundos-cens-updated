import Image from "next/image";
import React from "react";

type TProps = {
  title: string;
  image: string;
};

const QuestionHeader = ({ title, image }: TProps) => {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-3 rounded-3xl text-center text-stone-600">
      <div className="relative aspect-[7/3] w-full">
        <Image
          src={image}
          fill
          alt="Question image"
          className="rounded-4xl object-contain"
        />
      </div>
      <h4 className="w-full text-xl font-medium">{title}</h4>
    </div>
  );
};

export default QuestionHeader;
