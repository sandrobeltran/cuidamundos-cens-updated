"use client";

import React, { useRef, useState } from "react";
import { useField } from "formik";

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
        className="rounded-lg border-2 border-stone-300 bg-white/80 px-4 py-2 backdrop-blur-sm placeholder:text-stone-200"
      />
      {/* {showModal ? (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black/60">
          <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-md">
            <header className="w-full bg-stone-500 py-4 text-center text-xl text-white">
              Fecha de Entrega
            </header>
            <div className="flex w-full items-center justify-center py-4">
              <p>Octubre de 2024</p>
              <div className="ml-4 flex items-center gap-1 text-xl text-cens-dark">
                <button
                  type="button"
                  className="rounded-full p-2 transition-colors hover:bg-stone-950/10"
                >
                  <IoChevronUp />
                </button>
                <button
                  type="button"
                  className="rounded-full p-2 transition-colors hover:bg-stone-950/10"
                >
                  <IoChevronDown />
                </button>
              </div>
            </div>
            <div
              ref={inputRef}
              id="datePickerWrapper"
              className="h-40 w-full bg-red-200"
            ></div>
          </div>
        </div>
      ) : null} */}
      {meta.touched && meta.error ? (
        <div className="font-medium text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default DateField;
