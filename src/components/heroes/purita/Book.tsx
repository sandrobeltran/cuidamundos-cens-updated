"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import BookPage from "./BookPage";
import PrevIcon from "../../../../public/icons/prev_icon.svg";
import NextIcon from "../../../../public/icons/next_icon.svg";
import dynamic from "next/dynamic";
import Image from "next/image";
import DividerImage from "@public/img/purita/atiende/divider.svg";
import clsx from "clsx";

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
      setCurrentIndex(currentIndex - 2);
      updatePages();
    }
  }

  function handlePrevPage() {
    if (currentIndex < bookPages.current!.length - 1) {
      setLastAction(0);
      setCurrentIndex(currentIndex + 2);
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
    <div className="relative flex w-full items-center px-16 mobile-land:px-10">
      <button
        onClick={() => handlePrevPage()}
        className={clsx([
          "absolute left-10 z-10 min-h-[42px] min-w-[42px] cursor-pointer rounded-full bg-cens-dark text-lg transition-all mobile-land:left-4",
          { grayscale: currentIndex >= pages.length - 1 },
        ])}
      >
        <Image src={PrevIcon} alt="Icono de ir atrás" width={42} height={42} />
      </button>
      <div
        ref={bookRef}
        className="book perspective relative h-64 w-full rounded-3xl bg-white shadow-md mobile-land:h-[95vh]"
      >
        {sortedPages.map((page, index) => {
          let z = sortedPages.length;
          return (
            <div
              key={index}
              style={{ zIndex: z - index }}
              className={`${
                currentIndex < index ? "turned" : ""
              } book__page absolute right-[1%] top-[2.5%] flex h-[95%] w-[49%] origin-[center_left] items-center justify-center overflow-hidden rounded-br-3xl rounded-tr-3xl bg-white text-stone-500 shadow-stone-300`}
            >
              {page.bg ? (
                <Image
                  src={DividerImage}
                  alt="Imagen de separador de página"
                  className="bg-blue pointer-events-none absolute left-[-21.5px] top-0 z-50 h-full translate-x-3 object-contain mobile-land:translate-x-4"
                />
              ) : null}
              <BookPage {...page} />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => handleNextPage()}
        className={clsx([
          "absolute right-10 z-10 min-h-[42px] min-w-[42px] cursor-pointer rounded-full bg-cens-dark text-lg transition-all mobile-land:right-4",
          { grayscale: currentIndex <= 1 },
        ])}
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
