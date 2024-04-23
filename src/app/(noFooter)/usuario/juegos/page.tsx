"use client";

import CertificateCard from "@/components/usuario/CertificateCard";
import GameCard from "@/components/usuario/GameCard";
import useFetchGames from "@/hooks/useFetchGames";
import { useGamesStore } from "@/store/useGamesStore";
import { IGame } from "@/utils/customTypes";

const cuidamundosGame: IGame = {
  _id: "",
  active: true,
  cover: "cuidamundos.png",
  description:
    "Videojuego 2D de aventura y educativo sobre los CuidaMundos de CENS. ¡Donde serás Purita, Jirol y Félix, y tendrás que ser un héroe para salvar nuestro planeta!",
  href: "/juega/cuidamundos",
  points: 25,
  title: "Videojuego Cuidamundos",
  type: "videogame",
  winners: [],
};

export default function Juegos() {
  const { games } = useGamesStore();

  if (!games) {
    return <p>Loading...</p>;
  }

  const mobileGames = games.filter((game) => game.type === "mobile");

  cuidamundosGame.winners = mobileGames.flatMap((game) => game.winners);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* GAMES GRID */}
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <GameCard game={cuidamundosGame} key={cuidamundosGame._id} />
        {games.length ? (
          games.map((game) =>
            game.type !== "mobile" ? (
              <GameCard game={game} key={game._id} />
            ) : null,
          )
        ) : (
          <p>No hay más juegos disponibles :c</p>
        )}
      </div>
    </div>
  );
}
