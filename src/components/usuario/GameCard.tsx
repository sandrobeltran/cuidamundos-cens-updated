import React from "react";

const GameCard = () => {
  return (
    <div className="flex w-full gap-6 h-36 text-stone-500">
      <div className="aspect-video h-full rounded-3xl bg-white shadow-lg"></div>
      <div className="flex flex-1 flex-col items-start justify-start py-5">
        <h6 className="text-lg text-cens-medium font-normal">El Desafío de la Eficiencia Energética</h6>
        <p className="font-normal">
          ¿Puedes vencer el reloj y convertirte en un campeón de la eficiencia
          energética? ¡Demuestra tus habilidades y aprende a ahorrar energía
          mientras te diviertes!
        </p>
      </div>
    </div>
  );
};

export default GameCard;
