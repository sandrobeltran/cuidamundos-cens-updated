"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  size: "sm" | "md" | "lg";
  hierarchy: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit";
  href?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  size,
  hierarchy,
  type = "button",
  href,
  onClick = () => {},
}: TProps) => {
  let styles =
    "text-center flex-1 rounded-lg hover:scale-110 transition-transform";
  switch (hierarchy) {
    case "primary":
      styles += " bg-cens-dark text-white";
      break;
    case "secondary":
      styles += " bg-white text-cens-dark border-2 border-cens-dark";
      break;
    case "tertiary":
      styles += " text-white bg-transparent";
      break;
  }
  switch (size) {
    case "sm":
      styles += " px-2 py-1 font-normal";
      break;
    case "md":
      styles += " px-3 py-2 font-bold";
      break;
    case "lg":
      styles += " px-6 py-3 font-bold text-lg";
      break;
  }

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles} type={type} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
