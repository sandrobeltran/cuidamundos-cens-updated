import React from "react";
import CustomSection from "../layout/CustomSection";
import Button from "../Button";

const ClickerGameSection = () => {
  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-8 rounded-3xl border bg-white p-16 text-center text-stone-500 shadow-lg shadow-stone-200 max-sm:grid-rows-3 max-sm:p-4 max-sm:text-left">
        <h2 className="text-center text-4xl font-semibold text-stone-500">
          El Desafío de la Eficiencia Energética
        </h2>
        <p className="font-normal text-stone-500">
          Bienvenido a CuidaMundos, donde cada acción cuenta. En este
          emocionante juego, tu misión es apagar las luces y desconectar los
          electrodomésticos en tiempo récord. ¿Puedes vencer el reloj y
          convertirte en un campeón de la eficiencia energética? ¡Demuestra tus
          habilidades y aprende a ahorrar energía mientras te diviertes!
        </p>
        <div className="grid aspect-[20/9] w-full place-content-center rounded-3xl bg-[url(/img/clicker_game.jpg)] bg-cover bg-center bg-no-repeat max-sm:aspect-video">
          <Button hierarchy="primary" size="lg">
            Empezar
          </Button>
        </div>
      </div>
    </CustomSection>
  );
};

export default ClickerGameSection;
