"use client";

import React, { useState } from "react";
import { useField } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type TProps = {
  name: string;
  placeholder: string;
  label: string;
  rows?: number;
};

const TextArea = ({ label, rows = 6, ...props }: TProps) => {
  const [field, meta] = useField(props.name);

  return (
    <div className="relative flex w-full flex-col">
      <textarea
        rows={rows}
        id={`${props.name}Field`}
        {...field}
        {...props}
        className="rounded-lg border-2 border-stone-300 px-4 py-3"
      />

      {meta.touched && meta.error ? (
        <div className="font-medium text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextArea;
