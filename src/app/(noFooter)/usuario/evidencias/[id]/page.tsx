"use client";

import Button from "@/components/Button";
import CertificateCard from "@/components/usuario/CertificateCard";
import EvidenceCard from "@/components/usuario/evidencias/EvidenceCard";
import EvidenceComments from "@/components/usuario/evidencias/EvidenceComments";
import EvidenceItemsGrid from "@/components/usuario/evidencias/EvidenceItemsGrid";
import useFetchEvidenceData from "@/hooks/useFetchEvidenceData";
import { useParams } from "next/navigation";

export default function Evidencia() {
  const { id } = useParams();

  const evidence = useFetchEvidenceData({ id: id as string });

  if (!evidence) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex w-full flex-col items-center gap-12">
      {/* EVIDENCE CARD */}
      <EvidenceCard evidence={evidence} />
      {/* EVIDENCE TIME ITEMS GRID */}
      <EvidenceItemsGrid evidence={evidence} />
      <Button
        hierarchy="primary"
        href={`/usuario/evidencias/${id}/entrega`}
        size="md"
      >
        Subir entrega
      </Button>
      <EvidenceComments comments={evidence?.comments} />
    </div>
  );
}
