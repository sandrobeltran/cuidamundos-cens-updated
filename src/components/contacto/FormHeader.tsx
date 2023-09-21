import React from "react";
import CustomSection from "../layout/CustomSection";

const FormHeader = () => {
  return (
    <CustomSection>
      <div className="flex flex-col items-center gap-8 rounded-3xl border bg-white p-16 text-center text-stone-500 shadow-lg shadow-stone-200 max-sm:grid-rows-3 max-sm:p-8 max-sm:text-left">
        <h2 className="text-center text-4xl font-medium">
          ¡Estamos encantados de escucharte!
        </h2>
        <p className="text-left">
          En CuidaMundos, valoramos tus comentarios, preguntas y sugerencias. Si
          deseas ponerte en contacto con nuestro equipo, por favor utiliza el
          formulario a continuación. Estamos aquí para ayudarte y responder a
          cualquier consulta que tengas relacionada con nuestro juego,
          iniciativas de conservación o cualquier otro tema. ¡Esperamos con
          interés colaborar contigo en la misión de cuidar nuestro planeta!
        </p>
      </div>
    </CustomSection>
  );
};

export default FormHeader;
