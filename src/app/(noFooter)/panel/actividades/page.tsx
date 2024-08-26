"use client";

import { IoIosAddCircleOutline } from "react-icons/io";
import useFetchEvidencesAdmin from "@/hooks/admin/useFetchEvidencesAdmin";
import ActivitiesList from "@/components/panel/actividades/ActivitiesList";
import Link from "next/link";

export default function DashboardEvidencesPage() {
  const evidences = useFetchEvidencesAdmin();

  console.log(evidences);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Link href={"/panel/actividades/nueva"} className="hover:-translate-y-1 transition-all hover:shadow-stone-500/30 hover:shadow-lg flex w-full items-center justify-center gap-2 rounded-3xl bg-white/80 text-left shadow-md backdrop-blur-sm p-3">
        <IoIosAddCircleOutline className="text-5xl" />
        <p>Agregar Actividad Nueva</p>
      </Link>
      <ActivitiesList activities={evidences} links={true} />
    </div>
  );
}
