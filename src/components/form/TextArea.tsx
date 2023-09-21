"use client";

import React, { useState } from "react";
import { useField } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type TProps = {
  name: string;
  placeholder: string;
  label: string;
  type?: "text" | "email" | "password" | "number";
  password?: boolean;
};

const TextArea = ({ label, type = "text", password, ...props }: TProps) => {
  const [field, meta] = useField(props.name);
  const [fieldType, setFieldType] = useState(password ? "password" : type);

  function toggeVisibility() {
    if (type !== "email") {
      setFieldType(fieldType === "text" ? "password" : "text");
    }
  }

  return (
    <div className="relative flex flex-col">
      {/* <label htmlFor={`${props.name}Field`} className="text-sm font-medium text-stone-500">{label}</label> */}
      <textarea
      rows={6}
        id={`${props.name}Field`}
        {...field}
        {...props}
        className="rounded-lg border-2 border-stone-300 px-4 py-3"
      />
      {password ? (
        <button
          type="button"
          onClick={() => toggeVisibility()}
          className="absolute right-3 top-4 h-fit cursor-pointer"
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

export default TextArea;
