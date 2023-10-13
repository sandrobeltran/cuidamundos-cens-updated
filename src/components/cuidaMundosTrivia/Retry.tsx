import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import React from "react";
import Button from "../Button";

const Retry = () => {
  const resetTrivia = useCuidaMundosTrivia((state) => state.resetTrivia);

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {/* <h1 className="text-6xl font-bold text-cens-brand">¡Qué lástima!</h1>
      <p className="max-w-3xl text-xl font-medium">
        No has alcanzado la nota minima para obtener tu certificado, pero,
        siempre puedes intentarlo de nuevo, sigue aprendiendo para ser un
        verdadero CuidaMundos
      </p> */}
      <Button hierarchy="primary" size="md" onClick={() => resetTrivia()}>
        Reintentar
      </Button>
    </div>
  );
};

export default Retry;
