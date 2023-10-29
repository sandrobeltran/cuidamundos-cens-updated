import { IGame } from "@/utils/customTypes";
import Image from "next/image";
import React from "react";
import Button from "../Button";

type TProps = {
  game: IGame
}

const GameCard = ({ game }: TProps) => {
  return (
    <div className="rounded-3xl pl-16 relative flex items-start h-fit w-full gap-6 text-stone-500 bg-white/80 px-8 py-8 backdrop-blur-sm overflow-hidden">
      <span
        className="absolute left-0 top-0 h-full w-8 bg-stone-500"
        style={{
          backgroundColor: game.active ? "#39A935" : "#78716c",
        }}
      ></span>
      <div className="h-full flex items-center bg-white relative"><Image width={230} height={150} className="shadow-lg rounded-3xl h-48 aspect-video object-cover" src={game.cover} alt={`Juego ${game.title} CENS Portada`} /></div>
      <div className="flex flex-1 h-full flex-col items-start justify-between gap-4 pt-4">
        <h6 className="underline text-2xl text-cens-medium font-medium">{game.title}</h6>
        <p className="font-normal pl-4">
          {game.description}
        </p>
        <div className="flex w-full justify-end">
          <div>
            <Button size="md" hierarchy="primary" href={game.href} >Jugar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
