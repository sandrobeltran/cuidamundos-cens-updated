import React from "react";

type TProps = {
  children: JSX.Element[] | JSX.Element;
};

// This is the custom main tag of the app

const CustomMain = ({ children }: TProps) => {
  return <main>{children}</main>;
};

export default CustomMain;
