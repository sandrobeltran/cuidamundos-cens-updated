"use client";

import { IoIosAddCircleOutline } from "react-icons/io";
import Link from "next/link";
import useFetchInstitutionsAdmin from "@/hooks/admin/useFetchInstitutionsAdmin";
import InstitutionsList from "@/components/panel/instituciones/InstitutionsList";

export default function DashboardInstitutionsPage() {
  const institutions = useFetchInstitutionsAdmin({});

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Link
        href={"/panel/instituciones/nueva"}
        className="flex w-full items-center justify-center gap-2 rounded-3xl bg-white/80 p-3 text-left shadow-md backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-500/30"
      >
        <IoIosAddCircleOutline className="text-5xl" />
        <p>Agregar Nueva Institución</p>
      </Link>
      <InstitutionsList institutions={institutions} />
    </div>
  );
}
