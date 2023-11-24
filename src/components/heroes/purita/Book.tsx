"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import BookPage from "./BookPage";
import Image, { StaticImageData } from "next/image";
import PrevIcon from "../../../../public/icons/prev_icon.svg";
import NextIcon from "../../../../public/icons/next_icon.svg";
import dynamic from "next/dynamic";

export type TBookPage = {
  text?: React.ReactNode;
  bg?: string | StaticImageData;
};

type TProps = {
  pages: TBookPage[];
};

const Book = ({ pages }: TProps) => {
  const sortedPages = [...pages].reverse();

  const [currentIndex, setCurrentIndex] = useState<number>(
    sortedPages.length - 1,
  );
  const bookRef = useRef<HTMLDivElement>(null);
  const bookPages = useRef<NodeListOf<HTMLDivElement>>();

  function handleNextPage() {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      updatePages();
    }
  }

  function handlePrevPage() {
    if (currentIndex < bookPages.current!.length - 1) {
      setCurrentIndex(currentIndex + 1);
      updatePages();
      bookPages.current![currentIndex + 1].style.zIndex = "30";
    }
  }

  function assignRightZ() {
    console.log("z");
    let z = 0;
    bookPages.current!.forEach((page) => {
      page.style.zIndex = `${z}`;
      z++;
    });
  }

  const updatePages = useCallback(() => {
    bookPages.current!.forEach((page, index) => {
      page.style.zIndex = "1";
      if (index < currentIndex) {
        // Turn and show
        page.classList.remove("turned");
      } else {
        page.style.zIndex = `${10 - index}`;
      }
    });
    bookPages.current![currentIndex].classList.add("turned");
    bookPages.current![currentIndex].style.zIndex = "20";
  }, [currentIndex]);

  const initBook = useCallback(() => {
    bookPages.current! = bookRef.current!.querySelectorAll(".book__page");
    assignRightZ();
    updatePages();
  }, [updatePages]);

  useEffect(() => {
    initBook();
  }, [initBook]);

  return (
    <div className="relative flex w-full items-center px-16">
      <button
        onClick={() => handlePrevPage()}
        className="absolute left-10 z-10 min-h-[42px] min-w-[42px] cursor-pointer rounded-full bg-cens-dark text-lg"
      >
        <Image src={PrevIcon} alt="Icono de ir atrás" width={42} height={42} />
      </button>
      <div
        ref={bookRef}
        style={{ perspective: 1000 }}
        className="book relative h-64 w-full rounded-3xl bg-white"
      >
        {sortedPages.map((page, index) => (
          <BookPage key={index} {...page} />
        ))}
      </div>
      <button
        onClick={() => handleNextPage()}
        className="absolute right-10 z-10 min-h-[42px] min-w-[42px] cursor-pointer rounded-full bg-cens-dark text-lg"
      >
        <Image
          src={NextIcon}
          alt="Icono de ir adelante"
          width={42}
          height={42}
        />
      </button>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Book), { ssr: false });
