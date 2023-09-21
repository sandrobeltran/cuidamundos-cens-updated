import React from "react";

type TProps = {
  children: JSX.Element[] | JSX.Element;
};

// This component handles the main grid of the app

const PaddingWrapper = ({ children }: TProps) => {
  return <div className="grid grid-cols grid-cols-12 px-16 max-lg:grid-cols-4 max-lg:px-4">{children}</div>;
};

export default PaddingWrapper;
