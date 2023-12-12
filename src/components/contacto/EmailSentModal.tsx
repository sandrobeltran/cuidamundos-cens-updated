import { IEvidence } from "@/utils/customTypes";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useRef } from "react";

const EmailSentModal = () => {
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const closeModal = useCallback(() => {
    if (modalWrapperRef.current) {
      modalWrapperRef.current.style.display = "none";
    }
  }, []);

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/20 p-8 backdrop-blur-sm"
      id="emailSentModalWrapper"
      onClick={() => closeModal()}
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-full max-w-lg flex-col items-center gap-3 overflow-y-auto rounded-3xl bg-white px-16 py-8 text-center shadow-xl shadow-stone-950/10">
        <h2 className="text-2xl font-bold text-cens-dark">
          ¡Correo Enviado con Éxito!
        </h2>
        <p className="text-stone-600">
          Tu mensaje ha sido entregado a CuidaMundos. Gracias por ponerte en
          contacto con nosotros. Nuestro equipo revisará tu consulta y te
          responderá tan pronto como sea posible. Valoramos tu interés y
          esperamos colaborar contigo en nuestra misión de cuidar el mundo.
        </p>
      </div>
    </div>
  );
};

export default EmailSentModal;
