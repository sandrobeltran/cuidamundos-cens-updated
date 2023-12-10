import React from "react";

type TProps = {
  children: JSX.Element[] | JSX.Element;
};

// This component handles the main grid of the app

const PaddingWrapper = ({ children }: TProps) => {
  return <div className="grid grid-cols grid-cols-12 px-16 mobile-land:grid-cols-4 mobile-land:px-6">{children}</div>;
};

export default PaddingWrapper;
