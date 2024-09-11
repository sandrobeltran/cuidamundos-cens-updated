"use client";

import SubmissionsTable from "@/components/panel/actividades/SubmissionsTable";
import SpinLoader from "@/components/SpinLoader";
import useFetchActivitySubmissions from "@/hooks/admin/useFetchActivitySubmissions";
import useFetchEvidencesAdmin from "@/hooks/admin/useFetchEvidencesAdmin";
import { useParams, useRouter } from "next/navigation";
import { FaFolder } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

export default function ActivityEvidencesPage() {
  const { id } = useParams();

  const activities = useFetchEvidencesAdmin({ id: id.toString() });
  const submissions = useFetchActivitySubmissions({ id: id.toString() });

  if (!activities) {
    return <SpinLoader />;
  }

  const data = activities.results[0];

  if (!data) {
    return (
      <div className="flex w-full flex-col items-center gap-4">
        <p>La actividad no existe o ha sido eliminada</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="w-full pl-8 text-left font-medium">
        <h3 className="text-3xl text-cens-dark">Panel de Evidencias</h3>
        <p className="text-md mt-2">{data.title}</p>
      </div>

      <SubmissionsTable submissions={submissions} />

      {/* <ActivitiesList activities={evidences} /> */}
    </div>
  );
}
