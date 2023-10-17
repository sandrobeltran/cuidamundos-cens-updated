import React from "react";
import SectionTitle from "../SectionTitle";
import CustomSection from "../layout/CustomSection";

const RulesSection = () => {
  return (
    <CustomSection>
      <SectionTitle
        title={{
          text: "Aprende",
          resalted: "las reglas",
        }}
      />
      <div className="mt-6 flex items-center justify-center gap-8">
        <div className="flex h-52 w-1/4 min-w-[220px] flex-col items-center justify-center gap-2 rounded-3xl bg-cens-light p-5 text-center text-white shadow-lg">
          <h4 className="text-lg font-semibold">Objetivo del juego</h4>
          <p>
            Completa misiones y desafíos para avanzar en la historia y alcanzar
            la victoria mientras exploras el mundo con los diferentes
            personajes.
          </p>
        </div>
        <div className="flex h-60 w-[28%] min-w-[220px] flex-col items-center justify-center gap-2 rounded-3xl bg-cens-light p-5 text-center text-white shadow-lg">
          <h4 className="text-lg font-semibold">Progresión y guardado</h4>
          <p>
            Tu progreso se guarda automáticamente al llegar a puntos de control
            o completar misiones o guarda manualmente.
          </p>
        </div>
        <div className="flex h-52 w-1/4 min-w-[220px] flex-col items-center justify-center gap-2 rounded-3xl bg-cens-light p-5 text-center text-white shadow-lg">
          <h4 className="text-lg font-semibold">Combate y habilidades</h4>
          <p>
            Enfrenta enemigos usando el botón de ataque tambien desbloquea y
            mejora habilidades especiales a medida que avances en el juego.
          </p>
        </div>
      </div>
    </CustomSection>
  );
};

export default RulesSection;
