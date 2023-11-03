"use client";

import CertificateCard from "@/components/usuario/CertificateCard";
import { useGamesStore } from "@/store/useGamesStore";
import { useUserStore } from "@/store/useUserStore";
import { TUserData } from "@/utils/customTypes";

export default function Certificados() {
  const { games } = useGamesStore();
  const user = useUserStore((state) => state.user);

  if (!games.length) {
    return <p>Loading...</p>;
  }

  const winnedGames = games.filter((game) => game.winners.includes(user!._id));

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <h6 className="text-center text-2xl font-bold text-cens-brand">
        En total has logrado {winnedGames.length} Certificado
        {winnedGames.length > 1 ? "s" : ""} <br />{" "}
        <span className="text-white">¡Felicidades!</span>
      </h6>
      {/* CERTIFICATES GRID */}
      <div className="grid w-full max-w-5xl grid-cols-[repeat(auto-fill,_300px)] grid-rows-1 justify-center gap-5">
        {winnedGames.length ? (
          winnedGames.map((game) => (
            <CertificateCard
              game={game}
              key={game._id}
              user={user as TUserData}
            />
          ))
        ) : (
          <p>Completa un juego para obtener tu primer certificado</p>
        )}
      </div>
    </div>
  );
}
