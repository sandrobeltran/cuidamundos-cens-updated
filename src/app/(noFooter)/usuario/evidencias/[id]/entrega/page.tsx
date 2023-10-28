"use client";

import Button from "@/components/Button";
import CertificateCard from "@/components/usuario/CertificateCard";
import EvidenceCard from "@/components/usuario/evidencias/EvidenceCard";
import EvidenceComments from "@/components/usuario/evidencias/EvidenceComments";
import EvidenceItemsGrid from "@/components/usuario/evidencias/EvidenceItemsGrid";
import EvidenceSubmitedModal from "@/components/usuario/evidencias/EvidenceSubmitedModal";
import SubmitEvidence from "@/components/usuario/evidencias/SubmitEvidence";
import useFetchEvidenceData from "@/hooks/useFetchEvidenceData";
import { useParams } from "next/navigation";

export default function EntregaEvidencia() {
  const { id } = useParams();

  const evidence = useFetchEvidenceData({ id: id as string });

  if (!evidence) {
    return <p>Cargando evidencia...</p>;
  }

  return (
    <div className="flex w-full flex-col items-center gap-12">
      {/* EVIDENCE SUBMITED MODAL */}
      <EvidenceSubmitedModal evidence={evidence} />
      {/* EVIDENCE CARD */}
      <EvidenceCard evidence={evidence} />
      {/* EVIDENCE TIME ITEMS GRID */}
      <EvidenceItemsGrid evidence={evidence} />
      {/* SUBMIT EVIDENCE FORM */}
      <SubmitEvidence evidence={evidence} />
      <EvidenceComments comments={evidence.comments} />
    </div>
  );
}
