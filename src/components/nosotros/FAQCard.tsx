"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";

type TProps = {
  title: string;
  children: React.ReactNode;
};

const FAQCard = ({ title, children }: TProps) => {
  const [height, setHeight] = useState<number>(64);
  const bodyRef = useRef<HTMLDivElement>(null);

  function handleToggle() {
    if (height === 64) {
      setHeight((bodyRef.current?.clientHeight as number) + 64);
    } else {
      setHeight(64);
    }
  }

  return (
    <div
      className="w-full overflow-hidden transition-all"
      style={{ maxHeight: `${height}px` }}
    >
      {/* CARD HEADER */}
      <div
        className="flex h-16 cursor-pointer items-center justify-between border-b border-b-stone-600"
        onClick={() => handleToggle()}
      >
        <h4 className="flex items-center text-left text-lg font-normal text-stone-600">
          {title}
        </h4>
        <ChevronDownIcon className="w-6" />
      </div>
      {/* CARD BODY */}
      <div
        ref={bodyRef}
        className="rounded-bl-3xl rounded-br-3xl bg-cens-light/20 p-5 font-medium text-stone-500"
      >
        {children}
      </div>
    </div>
  );
};

export default FAQCard;
