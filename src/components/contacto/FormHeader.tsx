import React from "react";
import CustomSection from "../layout/CustomSection";

const FormHeader = () => {
  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-8 rounded-3xl border bg-white/80 p-16 text-center text-stone-500 shadow-lg shadow-stone-200 mobile-land:gap-4 mobile-land:p-8 max-sm:grid-rows-3 max-sm:p-8 max-sm:text-left">
        <h2 className="text-center text-4xl font-medium text-cens-medium mobile-land:text-2xl">
          ¡Contáctanos!
        </h2>
        <p className="text-left mobile-land:text-sm">
          En CuidaMundos, nos emociona escuchar tus comentarios, preguntas y
          sugerencias. Si quieres hablar con nosotros, utiliza el formulario de
          abajo. Estamos aquí para ayudarte con todo lo relacionado con nuestro
          juego, las cosas geniales que hacemos para cuidar el planeta y
          cualquier otra cosa que quieras compartir. ¡Esperamos trabajar juntos
          en la increíble misión de cuidar nuestro hogar!
        </p>
      </div>
    </CustomSection>
  );
};

export default FormHeader;
