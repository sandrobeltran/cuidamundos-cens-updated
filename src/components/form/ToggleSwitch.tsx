import clsx from "clsx";
import { useField } from "formik";
import React from "react";

interface IProps {
  name: string;
  label: string;
}

const ToggleSwitch = ({ name, label }: IProps) => {
  const [field, meta, helpers] = useField(name);

  function toggle() {
    helpers.setValue(!meta.value);
  }

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={toggle}
        className={clsx([
          "flex h-6 w-11 items-center justify-start rounded-full bg-cens-medium p-0.5 transition-colors",
          meta.value ? "bg-cens-medium" : "bg-[#d9d9d9]",
        ])}
      >
        <span
          className={clsx([
            "relative inline-block aspect-square h-full rounded-full bg-white transition-transform",
            { "translate-x-full": meta.value },
          ])}
        />
      </button>
      <p>{label}</p>
    </div>
  );
};

export default ToggleSwitch;
