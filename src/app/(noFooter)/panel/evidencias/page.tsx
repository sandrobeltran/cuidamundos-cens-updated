"use client";

import useFetchEvidencesAdmin from "@/hooks/admin/useFetchEvidencesAdmin";

export default function DashboardEvidencesPage() {
  const evidences = useFetchEvidencesAdmin();

  console.log(evidences);

  return <p>dashboard evidences</p>;
}
