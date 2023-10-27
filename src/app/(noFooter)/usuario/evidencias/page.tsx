"use client";

import EvidencesList from "@/components/usuario/evidencias/EvidencesList";
import useFetchEvidences from "@/hooks/useFetchEvidences";

export default function Evidencias() {
  const evidences = useFetchEvidences();

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* EVIDENCES GRID */}
      <EvidencesList evidences={evidences} links={true} />
    </div>
  );
}
