"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useRef } from "react";

type TProps = {
  video: { src: string; poster: string; title: string };
  set: Dispatch<SetStateAction<{ src: string; poster: string; title: string }>>;
};

const VIDEOS_DATA = [
  {
    title: "Generación de energía hidroeléctrica",
    src: "/video/jirol/generacion-hidroelectrica.mp4",
    poster: "/img/jirol/generacion-electrica/hidroelectrica-cover.jpg",
  },
  {
    title: "Generación de energía solar",
    src: "/video/jirol/generacion-solar.mp4",
    poster: "/img/jirol/generacion-electrica/solar-cover.jpg",
  },
  {
    title: "Quién es Jirol",
    src: "/video/jirol/quien.mp4",
    poster: "/img/jirol/quien-cover.jpg",
  },
];

const JirolVideosModal = ({ video, set }: TProps) => {
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).id === modalWrapperRef.current?.id) {
      modalWrapperRef.current.style.display = "none";
    }
  }

  const availableVideos = VIDEOS_DATA.filter((e) => e.src !== video.src);

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full flex-col items-center justify-center gap-8 bg-black/40 backdrop-blur-md"
      id="jirolVideosModalWrapper"
      onClick={handleClick}
      ref={modalWrapperRef}
    >
      {/* CURRENT VIDEO */}
      <div className="relative aspect-video mobile-land:max-w-2xl w-full max-w-4xl rounded-3xl bg-cens-brand p-2">
        <video
          ref={videoRef}
          src={video.src}
          className="h-full w-full rounded-2xl object-cover object-center"
          controls
          poster={video.poster}
        ></video>
        <button
          onClick={(e) => {
            videoRef.current!.play();
            e.currentTarget.style.display = "none";
          }}
          className="group absolute left-0 top-0 z-10 m-auto grid aspect-square h-full w-full place-content-center text-white"
        >
          <PlayIcon className="h-14 transition-transform group-hover:scale-125" />
        </button>
      </div>

      {/* AVAILABLE VIDEOS */}

      {/* <div className="flex justify-center gap-8">
          {availableVideos.map((video) => (
            <button
              key={video.src}
              className="group relative aspect-video w-[300px] rounded-2xl bg-white text-white shadow-lg"
              onClick={() => set(video)}
            >
              <PlayIcon className="absolute inset-0 m-auto h-10 transition-transform group-hover:scale-125" />
              <Image
                src={video.poster}
                alt="Portada de video de Jirol 1"
                width={300}
                height={200}
                className="h-full w-full rounded-2xl object-cover"
              />
              <h4 className="absolute left-2 top-2 w-full text-left font-medium text-white">
                {video.title}
              </h4>
            </button>
          ))}
        </div> */}
    </div>
  );
};

export default JirolVideosModal;
