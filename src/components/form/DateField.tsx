"use client";

import React, { useState } from "react";
import { useField } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type TProps = {
  name: string;
  max?: number;
  min?: number;
};

const DateField = ({ ...props }: TProps) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="relative flex w-full flex-col">
      <input
        type="date"
        id={`${props.name}Field`}
        {...field}
        {...props}
        className="rounded-lg border-2 border-stone-300 bg-white/80 backdrop-blur-sm px-4 py-2 placeholder:text-stone-200"
      />
      {meta.touched && meta.error ? (
        <div className="font-medium text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default DateField;
