import React from "react";
import { TBookPage } from "./Book";
import Image from "next/image";

const BookPage = ({ bg, text }: TBookPage) => {
  return (
    <div className="book__page absolute right-[1%] top-[2.5%] flex h-[95%] w-[49%] origin-left items-center justify-center overflow-hidden rounded-br-3xl rounded-tr-3xl bg-white text-stone-500 shadow-md shadow-stone-300">
      <div className="content h-full">
        {text ? (
          <div className="flex h-full  w-full items-start justify-start p-5">
            <p>{text}</p>
          </div>
        ) : (
          <Image src={bg!} alt="Imagen de la página" fill />
        )}
      </div>
    </div>
  );
};

export default BookPage;
