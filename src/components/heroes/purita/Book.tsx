"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import BookPage from "./BookPage";
import Image, { StaticImageData } from "next/image";
import PrevIcon from "../../../../public/icons/prev_icon.svg";
import NextIcon from "../../../../public/icons/next_icon.svg";
import dynamic from "next/dynamic";

export type TBookPage = {
  text?: React.ReactNode;
  bg?: string;
};

type TProps = {
  pages: TBookPage[];
};

const Book = ({ pages }: TProps) => {
  const sortedPages = [...pages].reverse();
  const bookRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(
    sortedPages.length - 1,
  );
  const bookPages = useRef<NodeListOf<HTMLDivElement>>();
  const [lastAction, setLastAction] = useState<number>(1); // 0: previous | 1: next

  function handleNextPage() {
    if (currentIndex > 1) {
      setLastAction(1);
      setCurrentIndex(currentIndex - 1);
      updatePages();
    }
  }

  function handlePrevPage() {
    if (currentIndex < bookPages.current!.length - 1) {
      setLastAction(0);
      setCurrentIndex(currentIndex + 1);
      updatePages();
    }
  }

  const updatePages = useCallback(() => {
    bookPages.current!.forEach((page, index) => {
      page.style.zIndex = "1";
      if (index < currentIndex) {
        page.classList.remove("turned");
      } else {
        page.style.zIndex = `${bookPages.current!.length - index}`;
      }
    });
    // Turn and show
    bookPages.current![currentIndex].classList.add("turned");
    bookPages.current![currentIndex].style.zIndex = "20";

    if (lastAction === 0) {
      // Last action was go back
      bookPages.current![currentIndex - 1].style.zIndex = "30";
    }
  }, [currentIndex, lastAction]);

  const initBook = useCallback(() => {
    bookPages.current! = bookRef.current!.querySelectorAll(".book__page");
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
        style={{ perspective: 1200 }}
        className="book relative h-64 w-full rounded-3xl bg-white"
      >
        {sortedPages.map((page, index) => {
          let z = sortedPages.length;
          return (
            <div
              key={index}
              style={{ zIndex: z - index }}
              className={`${
                currentIndex < index ? "turned" : ""
              } book__page absolute right-[1%] top-[2.5%] flex h-[95%] w-[49%] origin-[center_left] items-center justify-center overflow-hidden rounded-br-3xl rounded-tr-3xl bg-white text-stone-500 shadow-md shadow-stone-300`}
            >
              <BookPage {...page} />
            </div>
          );
        })}
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
