import React, { useRef } from "react";

const EvidenceSubmitedModal = () => {
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  function closeModal() {
    if (modalWrapperRef.current) {
      modalWrapperRef.current.style.display = "none";
    }
  }

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm"
      id="evidenceSubmitedModalWrapper"
      onClick={() => closeModal()}
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-full max-w-lg flex-col items-center gap-3 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 text-center shadow-xl shadow-stone-950/10">
        <h2 className="text-2xl font-bold text-cens-dark">¡Felicidades!</h2>
        <p className="text-stone-600">
          ¡Éxito! Tu actividad ha sido cargada correctamente. ¡Gracias por
          contribuir a CuidaMundos y fomentar la conciencia ambiental!
        </p>
      </div>
    </div>
  );
};

export default EvidenceSubmitedModal;
