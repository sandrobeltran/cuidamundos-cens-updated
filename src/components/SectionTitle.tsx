import React from "react";

type TProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: TProps) => {
  return (
    <div className="mt-1">
      <h2 className="text-6xl font-bold">{children}</h2>
    </div>
  );
};

export default SectionTitle;
