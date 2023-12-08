import React from "react";
import { TBookPage } from "./Book";
import Image from "next/image";
import DividerImage from "@public/img/purita/atiende/divider.svg";

const BookPage = ({ text, bg }: TBookPage) => {
  return (
    <div className="content h-full w-full">
      {text ? (
        <div className="relative flex h-full w-full items-center justify-start p-8 text-lg">
          <p>{text}</p>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bg!}
          alt="Imagen de la página"
          className="h-full w-full object-cover object-center"
        />
      )}
    </div>
  );
};

export default BookPage;
