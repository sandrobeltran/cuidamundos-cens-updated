import React from "react";
import CustomSection from "../layout/CustomSection";
import SectionTitle from "../SectionTitle";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import FAQCard from "./FAQCard";

const FAQ = () => {
  return (
    <CustomSection>
      <div className="w-fit">
        <SectionTitle
          title={{ text: "Preguntas", resalted: "Frecuentes", color: "brand" }}
        />
      </div>
      <ul className="flex flex-col gap-4">
        <li>
          <FAQCard title="Políticas de Privacidad">
            <p>
              En CuidaMundos, valoramos tus comentarios, preguntas y
              sugerencias. Si deseas ponerte en contacto con nuestro equipo, por
              favor utiliza el formulario a continuación. Estamos aquí para
              ayudarte y responder a cualquier consulta que tengas relacionada
              con nuestro juego, iniciativas de conservación o cualquier otro
              tema. ¡Esperamos con interés colaborar contigo en la misión de
              cuidar nuestro planeta!
            </p>
          </FAQCard>
        </li>
        <li>
          <FAQCard title="Términos y condiciones">
            <p>Respuestas para Términos y condiciones</p>
          </FAQCard>
        </li>
        <li>
          <FAQCard title="Sincronización de Progreso entre Dispositivos">
            <p>Respuestas para Sincronización de Progreso entre Dispositivos</p>
          </FAQCard>
        </li>
        <li>
          <FAQCard title="Seguridad y Privacidad">
            <p>Respuestas para Seguridad y Privacidad</p>
          </FAQCard>
        </li>
        <li>
          <FAQCard title="Políticas del Juego y Código de Conducta">
            <p>Respuestas para Políticas del Juego y Código de ConductA</p>
          </FAQCard>
        </li>
        <li>
          <FAQCard title="Problemas Técnicos Comunes">
            <p>Respuestas Problemas Técnicos Comunes</p>
          </FAQCard>
        </li>
      </ul>
    </CustomSection>
  );
};

export default FAQ;
