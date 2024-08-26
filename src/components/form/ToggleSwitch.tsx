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
        style={{
          backgroundColor: meta.value ? "#39A935" : "#D9D9D9",
        }}
        onClick={toggle}
        className="flex h-6 w-11 items-center justify-start rounded-full bg-cens-medium p-0.5 transition-colors"
      >
        <span
          style={{
            transform: `translateX(${meta.value ? "100%" : "0%"})`,
          }}
          className="relative inline-block aspect-square h-full rounded-full bg-white transition-transform"
        />
      </button>
      <p>{label}</p>
    </div>
  );
};

export default ToggleSwitch;
