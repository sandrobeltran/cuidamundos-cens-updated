"use client";

import React, { useState } from "react";
import { useField } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type TProps = {
  name: string;
  placeholder: string;
  type?: "text" | "email" | "password" | "number";
  password?: boolean;
  max?: number;
  min?: number;
};

const TextField = ({ type = "text", password, ...props }: TProps) => {
  const [field, meta] = useField(props.name);
  const [fieldType, setFieldType] = useState(password ? "password" : type);

  function toggeVisibility() {
    if (type !== "email") {
      setFieldType(fieldType === "text" ? "password" : "text");
    }
  }

  return (
    <div className="relative flex w-full flex-col">
      {/* <label htmlFor={`${props.name}Field`} className="text-sm font-medium text-stone-500">{label}</label> */}
      <input
        type={fieldType}
        id={`${props.name}Field`}
        {...field}
        {...props}
        className="rounded-lg border-2 border-stone-300 bg-white/80 px-4 py-2 font-normal backdrop-blur-sm "
      />
      {password ? (
        <button
          type="button"
          onClick={() => toggeVisibility()}
          className="absolute right-2 top-2.5 h-fit cursor-pointer"
        >
          {fieldType === "password" ? (
            <EyeIcon className="h-6 text-cens-dark" />
          ) : (
            <EyeSlashIcon className="h-6 text-cens-dark" />
          )}
        </button>
      ) : null}
      {meta.touched && meta.error ? (
        <div className="font-medium text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextField;
