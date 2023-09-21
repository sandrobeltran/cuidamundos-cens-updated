import React from "react";
import CustomSection from "../layout/CustomSection";

const TrailerSection = () => {
  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-8 rounded-3xl border bg-white p-16 text-center shadow-lg shadow-stone-200 max-sm:p-8">
        <h2 className="text-4xl font-medium">
          ¡Mira el tráiler oficial{" "}
          <span className="text-cens-medium">ahora!</span>
        </h2>
        <p className="font-normal text-stone-500">
          Sumérgete en el fascinante mundo de CuidaMundos a través de nuestro
          tráiler oficial. Haz clic para disfrutar del tráiler y adéntrate en un
          mundo lleno de sorpresas y aprendizaje. ¡Explora la belleza de
          CuidaMundos ahora!
        </p>
        <div className="relative aspect-[19/9] w-full max-sm:aspect-square">
          {/* //TODO: ASK IF THIS BUTTON IS REALLY NECCESARY WHEN YOUTUBE HAS ITS OWN */}
          {/* PLAY BUTTON */}
          {/* <div className="absolute w-20 h-20 inset-0 m-auto z-10 bg-white rounded-full">
          <svg
            className="fill-cens-light w-full h-full"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"></path>
          </svg>
        </div> */}
          <iframe
            className="h-full w-full rounded-3xl"
            src="https://www.youtube.com/embed/qVdPh2cBTN0?si=v4xKBjQlbiL4xSGz"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </CustomSection>
  );
};

export default TrailerSection;
