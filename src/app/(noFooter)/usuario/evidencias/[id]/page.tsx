"use client";

import { downloadFileStream } from "@/actions/downloadFileStream";
import Button from "@/components/Button";
import CertificateCard from "@/components/usuario/CertificateCard";
import CurrentEvidence from "@/components/usuario/evidencias/CurrentEvidence";
import EvidenceCard from "@/components/usuario/evidencias/EvidenceCard";
import EvidenceComments from "@/components/usuario/evidencias/EvidenceComments";
import EvidenceItemsGrid from "@/components/usuario/evidencias/EvidenceItemsGrid";
import { MIME_TYPES_DICT } from "@/constants/evidencesConstants";
import useFetchEvidenceData from "@/hooks/useFetchEvidenceData";
import { useUserStore } from "@/store/useUserStore";
import { customFetch } from "@/utils/customFetch";
import { getRemainingTime } from "@/utils/dateToString";
import { key } from "flatpickr/dist/types/locale";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Evidencia() {
  const { id } = useParams();
  const user = useUserStore((state) => state.user);
  const [filesUrls, setFilesUrls] = useState<string[]>([]);

  const evidence = useFetchEvidenceData({ id: id as string });

  useEffect(() => {
    fetchFiles();
  }, [evidence != null]);

  if (!evidence) {
    return <p>Loading...</p>;
  }

  const submission = evidence.submissions.find(
    (submission) => submission.author === user!._id,
  );

  async function fetchFiles() {
    if (!evidence) return;
    if (!submission) return;

    //const files = await downloadFileStream(submission.content.files);
    const req = await customFetch(
      `/usuario/evidencias/${evidence._id}/entrega/api/archivos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filesIds: submission!.content.files }),
      },
    );

    const res = await req.json();

    console.log(res);

    const urls: string[] = res.data.map((e: any) => {
      const buffer = new Uint8Array(e.chunk.data);
      const blob = new Blob([buffer], {
        type: MIME_TYPES_DICT[e.type as keyof typeof MIME_TYPES_DICT] || "",
      });

      const url = URL.createObjectURL(blob);

      return url;
    });

    console.log(urls);

    //console.log(URL.createObjectURL(res))

    //setFilesUrls(res.data);
  }

  const remainingTime = getRemainingTime(evidence.deadline);

  return (
    <div className="flex w-full flex-col items-center gap-12">
      {/* EVIDENCE CARD */}
      <EvidenceCard evidence={evidence} />
      {/* EVIDENCE TIME ITEMS GRID */}
      <EvidenceItemsGrid evidence={evidence} />
      {submission ? <CurrentEvidence submission={submission} /> : null}
      {remainingTime.d > 0 ? (
        <Button
          hierarchy="primary"
          href={`/usuario/evidencias/${id}/entrega`}
          size="md"
        >
          {submission ? "Modificar entrega" : "Subir entrega"}
        </Button>
      ) : null}
      <EvidenceComments comments={evidence?.comments} />
    </div>
  );
}
