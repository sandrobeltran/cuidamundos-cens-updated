import React, { useRef } from "react";
import Button from "../Button";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const GuestUser = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="absolute left-0 top-0 z-10 grid h-full w-full place-content-center bg-stone-900/50 backdrop-blur-sm"
    >
      <div className="flex w-full max-w-lg flex-col items-center gap-6 rounded-3xl bg-white px-20 py-16 text-center">
        <div className="flex w-full items-baseline justify-center gap-0">
          <StarIcon className="star w-20" />
          <StarIcon className="star w-28 -translate-y-4" />
          <StarIcon className="star w-20" />
        </div>
        <h3 className="text-3xl font-bold text-cens-dark">
          ¡No Pares de Ganar!
        </h3>
        <p className="text-xl font-light text-stone-500">
          ¡Regístrate para acumular puntos y desbloquear emocionantes premios!
        </p>
        <div className="flex w-full justify-between gap-5">
          <div>
            <Button hierarchy="secondary" size="lg">
              Más tarde
            </Button>
          </div>
          <div>
            <Button hierarchy="primary" size="lg">
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestUser;