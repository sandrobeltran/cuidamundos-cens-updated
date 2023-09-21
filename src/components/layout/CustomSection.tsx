import React from "react";

type TProps = {
  children: JSX.Element[] | JSX.Element;
};

// This is the custom section tag of the app

const CustomSection = ({ children }: TProps) => {
  return <section className="col-span-12 mt-20 max-lg:col-span-4">{children}</section>;
};

export default CustomSection;
