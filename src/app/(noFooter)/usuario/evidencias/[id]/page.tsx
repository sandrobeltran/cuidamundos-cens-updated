"use client";

import Button from "@/components/Button";
import CertificateCard from "@/components/usuario/CertificateCard";
import CurrentEvidence from "@/components/usuario/evidencias/CurrentEvidence";
import EvidenceCard from "@/components/usuario/evidencias/EvidenceCard";
import EvidenceComments from "@/components/usuario/evidencias/EvidenceComments";
import EvidenceItemsGrid from "@/components/usuario/evidencias/EvidenceItemsGrid";
import useFetchEvidenceData from "@/hooks/useFetchEvidenceData";
import { useUserStore } from "@/store/useUserStore";
import { useParams } from "next/navigation";

export default function Evidencia() {
  const { id } = useParams();
  const user = useUserStore((state) => state.user);

  const evidence = useFetchEvidenceData({ id: id as string });

  if (!evidence) {
    return <p>Loading...</p>;
  }

  const submission = evidence.submissions.find(
    (submission) => submission.author === user!._id,
  );

  return (
    <div className="flex w-full flex-col items-center gap-12">
      {/* EVIDENCE CARD */}
      <EvidenceCard evidence={evidence} />
      {/* EVIDENCE TIME ITEMS GRID */}
      <EvidenceItemsGrid evidence={evidence} />
      {submission ? <CurrentEvidence submission={submission} /> : null}
      <Button
        hierarchy="primary"
        href={`/usuario/evidencias/${id}/entrega`}
        size="md"
      >
        {submission ? "Modificar entrega" : "Subir entrega"}
      </Button>
      <EvidenceComments comments={evidence?.comments} />
    </div>
  );
}
