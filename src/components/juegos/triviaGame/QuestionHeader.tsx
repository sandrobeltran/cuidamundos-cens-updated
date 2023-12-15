import Image, { StaticImageData } from "next/image";
import React from "react";

type TProps = {
  title: string;
  image: string | StaticImageData;
};

const QuestionHeader = ({ title, image }: TProps) => {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center gap-3 rounded-3xl text-center text-stone-600">
      <div className="relative aspect-[7/3] w-full  mobile-land:aspect-[7/1.5]">
        <Image
          src={image}
          fill
          alt="Question image"
          className="rounded-4xl object-contain"
        />
      </div>
      <h4 className="w-full text-xl font-medium mobile-land:text-lg">
        {title}
      </h4>
    </div>
  );
};

export default QuestionHeader;
