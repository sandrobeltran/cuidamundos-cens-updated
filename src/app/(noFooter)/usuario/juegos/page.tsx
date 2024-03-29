"use client";

import CertificateCard from "@/components/usuario/CertificateCard";
import GameCard from "@/components/usuario/GameCard";
import useFetchGames from "@/hooks/useFetchGames";
import { useGamesStore } from "@/store/useGamesStore";

export default function Juegos() {
  const { games } = useGamesStore();

  if (!games) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* GAMES GRID */}
      <div className="flex w-full flex-col items-center justify-center gap-5">
        {games.length ? games.map((game) => (
          <GameCard game={game} key={game._id} />
        )) : <p>No hay juegos disponibles :c</p>}
      </div>
    </div>
  );
}
