import React, { useEffect, useRef } from "react";
import Button from "../Button";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useUserStore } from "@/store/useUserStore";

const GuestUser = () => {
  const user = useUserStore((state) => state.user);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user) {
      containerRef.current!.style.display = "none";
    }
  }, [user]);

  return (
    <div
      ref={containerRef}
      className="absolute left-0 top-0 z-10 grid h-full w-full place-content-center bg-stone-900/50 backdrop-blur-sm"
    >
      <div className="flex w-full max-w-lg mobile-land:max-w-2xl mobile-land:py-10 mobile-land:px-8 flex-col items-center gap-6 mobile-land:gap-4 rounded-3xl bg-white px-20 py-16 text-center">
        <div className="flex w-full items-baseline justify-center gap-0">
          <StarIcon className="star w-20 mobile-land:w-14" />
          <StarIcon className="star w-28 mobile-land:w-16 -translate-y-4" />
          <StarIcon className="star w-20 mobile-land:w-14" />
        </div>
        <h3 className="text-3xl mobile-land:text-2xl font-bold text-cens-dark">¡Sigue avanzando!</h3>
        <p className="text-xl mobile-land:text-lg mobile-land:max-w-md font-light text-stone-500">
          ¡Regístrate para acumular puntos, desbloquear emocionantes premios y
          obtener tu certificado!
        </p>
        <div className="flex w-full justify-center gap-10">
          <div>
            <Button
              hierarchy="secondary"
              size="lg"
              onClick={() => (containerRef.current!.style.display = "none")}
            >
              Más tarde
            </Button>
          </div>
          <div>
            <Button
              hierarchy="primary"
              size="lg"
              onClick={() =>
                (document.getElementById(
                  "registerModalWrapper",
                )!.style.display = "flex")
              }
            >
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestUser;
