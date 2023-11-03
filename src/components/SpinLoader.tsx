import React from "react";

const SpinLoader = () => {
  return (
    <div className="absolute left-0 top-0 z-50 grid h-full w-full place-content-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-[7px] border-stone-200 border-t-cens-brand" />
    </div>
  );
};

export default SpinLoader;
