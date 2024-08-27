"use client";

import { IoIosAddCircleOutline } from "react-icons/io";
import useFetchEvidencesAdmin from "@/hooks/admin/useFetchEvidencesAdmin";
import ActivitiesList from "@/components/panel/actividades/ActivitiesList";
import Link from "next/link";

export default function DashboardEvidencesPage() {
  const evidences = useFetchEvidencesAdmin({});

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Link
        href={"/panel/actividades/nueva"}
        className="flex w-full items-center justify-center gap-2 rounded-3xl bg-white/80 p-3 text-left shadow-md backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-500/30"
      >
        <IoIosAddCircleOutline className="text-5xl" />
        <p>Agregar Actividad Nueva</p>
      </Link>
      <ActivitiesList activities={evidences} />
    </div>
  );
}
