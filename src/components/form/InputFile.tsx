"use client";

import React, { ChangeEventHandler, useState } from "react";
import { useField } from "formik";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

type TProps = {
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputFile = ({ ...props }: TProps) => {
  const [field, meta, helpers] = useField(props.name);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files?.length) {
      helpers.setValue(e.target.files[0]);
    }
  }

  return (
    <div className="relative flex w-full flex-col">
      <label className="rounded-lg border-2 border-stone-300 bg-white/80 px-4 py-2 font-normal text-stone-500 backdrop-blur-sm">
        {meta.value instanceof File ? meta.value.name : "Seleccionar archivo"}
        <input
          type="file"
          multiple
          {...field}
          {...props}
          value={""}
          onChange={props.onChange || handleChange}
          className="hidden"
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="font-medium text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputFile;
