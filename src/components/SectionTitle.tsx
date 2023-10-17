import React, { ReactNode } from "react";

type TProps = {
  title: {
    text: string;
    resalted: string;
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
          className="text-cens-brand"
          style={{ color: title.color === "medium" ? "#39A935" : "#005F24" }}
        >
          {title.resalted}
        </span>
      </h2>
      <p className="mt-5 font-normal">{description}</p>
    </div>
  );
};

export default SectionTitle;
