"use client";

import React from "react";
import { useField } from "formik";

type TProps = {
  children: React.ReactNode;
  name: string;
};

const InputSelect = ({ children, ...props }: TProps) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="relative flex w-full flex-col">
      <select
        id={`${props.name}Field`}
        {...field}
        {...props}
        className="rounded-lg border-2 border-stone-300 bg-white/80 px-4 py-3 font-normal backdrop-blur-sm"
      >
        {children}
      </select>

      {meta.touched && meta.error ? (
        <div className="font-medium text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputSelect;
