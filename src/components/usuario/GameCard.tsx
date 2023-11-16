import { IGame } from "@/utils/customTypes";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type TProps = {
  game: IGame;
};

const GameCard = ({ game }: TProps) => {
  const user = useUserStore((state) => state.user);

  const isWinner = game.winners.includes(user!._id);

  return (
    <div
      className="relative flex h-fit w-full items-start gap-6 overflow-hidden rounded-3xl bg-white/80 px-8 py-8 pl-16 text-stone-500 backdrop-blur-sm max-sm:flex-col max-sm:items-center max-sm:gap-2 max-sm:p-4 max-sm:pl-14"
      style={{
        backgroundColor: game.active ? "#fffc" : "#78716ccc",
        color: game.active ? "#78716c" : "#fff",
      }}
    >
      <span
        className="absolute left-0 top-0 h-full w-8 bg-stone-500"
        style={{
          backgroundColor: game.active
            ? isWinner
              ? "#39A935"
              : "#78716c"
            : "#78716c",
        }}
      ></span>
      <div className="relative flex h-full items-center max-sm:w-full">
        <Image
          width={230}
          height={150}
          className="aspect-video h-48 rounded-3xl object-cover shadow-lg max-sm:h-32 max-sm:w-full"
          src={game.cover}
          alt={`Juego ${game.title} CENS Portada`}
        />
      </div>
      <div className="flex h-full flex-1 flex-col items-start justify-between gap-4 pt-4 max-sm:gap-2 max-sm:items-center">
        <Link href={game.href}>
          <h6
            className="text-2xl font-medium underline"
            style={{ color: game.active ? "#39A935" : "#fff" }}
          >
            {game.title}
          </h6>
        </Link>
        <p className="pl-4 font-normal">{game.description}</p>
        <div className="flex w-full justify-end max-sm:mt-6">
          <div>
            {game.active ? (
              <Button size="md" hierarchy="primary" href={game.href}>
                Jugar
              </Button>
            ) : (
              <div className="mt-4 flex items-center gap-1 opacity-75">
                <InformationCircleIcon className="h-4" />
                <p className="text-sm font-medium text-stone-100">
                  Aún no disponible...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
