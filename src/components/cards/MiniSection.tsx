import React from "react";
import CustomSection from "../layout/CustomSection";
import Image, { StaticImageData } from "next/image";

type TProps = {
  image: StaticImageData | string;
  title: {
    text: string;
    resalted?: string;
  };
  description: React.ReactNode;
  button?: {
    url: string;
    label: string;
  };
};

const MiniSection = ({ image, title, description, button }: TProps) => {
  return (
    <CustomSection>
      <div className="flex items-center justify-center gap-8 max-sm:flex-col">
        <div className="h-full flex-1 flex-col gap-6">
          <h3 className="text-5xl font-medium text-stone-500 max-sm:text-3xl">
            {title.text}{" "}
            <span className="text-cens-medium">{title.resalted}</span>
          </h3>
          <p className="text-lg font-normal text-stone-500">{description}</p>
        </div>
        <div className="flex-1">
          <Image
            src={image}
            width={200}
            height={200}
            alt={`Mini section ${title.text} image`}
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default MiniSection;
