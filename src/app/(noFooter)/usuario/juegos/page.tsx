import CertificateCard from "@/components/usuario/CertificateCard";
import GameCard from "@/components/usuario/GameCard";

export default function Juegos() {
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-white/80 p-16 backdrop-blur-sm">
      {/* GAMES GRID */}
      <div className="flex w-full flex-col items-center justify-center gap-5">
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}
