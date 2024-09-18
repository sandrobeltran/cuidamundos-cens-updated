import clsx from "clsx";
import React, { ReactNode } from "react";

type TProps = {
  title: {
    text: string;
    resalted?: string;
    color?: "medium" | "brand";
  };
  description?: ReactNode;
};

const SectionTitle = ({ title, description }: TProps) => {
  return (
    <div className="mt-1 text-stone-500">
      <h2 className="text-center text-4xl font-medium">
        {title.text}{" "}
        <span
          className={clsx([
            "text-cens-brand",
            { "text-cens-medium": title.color === "medium" },
          ])}
        >
          {title.resalted}
        </span>
      </h2>
      <p className="mt-5 font-normal text-stone-600">{description}</p>
    </div>
  );
};

export default SectionTitle;
