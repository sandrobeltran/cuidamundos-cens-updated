import React from "react";
import CustomSection from "../layout/CustomSection";
import Image, { StaticImageData } from "next/image";
import Button from "../Button";

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
      <div className="flex items-start max-sm:items-stretch justify-start gap-8 max-sm:flex-col">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="text-5xl font-medium text-stone-500 max-sm:text-3xl">
            {title.text}{" "}
            <span className="text-cens-medium">{title.resalted}</span>
          </h3>
          <p className="text-lg font-normal text-stone-500">{description}</p>
          {button ? (
            <div className="w-fit">
              <Button href={button.url} hierarchy="primary" size="lg">
                {button.label}
              </Button>
            </div>
          ) : null}
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
