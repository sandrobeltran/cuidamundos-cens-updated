"use client";

import { IoIosAddCircleOutline } from "react-icons/io";
import useFetchEvidencesAdmin from "@/hooks/admin/useFetchEvidencesAdmin";
import ActivitiesList from "@/components/panel/actividades/ActivitiesList";
import Link from "next/link";
import { useState } from "react";
import Button from "@/components/Button";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function DashboardEvidencesPage() {
  const [page, setPage] = useState<number>(1);
  const evidences = useFetchEvidencesAdmin({ page: page, limit: 3 });

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function nextPage() {
    if (evidences) {
      if (page < evidences?.metadata?.totalPages) {
        setPage(page + 1);
      }
    }
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Link
        href={"/panel/actividades/nueva"}
        className="flex w-full items-center justify-center gap-2 rounded-3xl bg-white/80 p-3 text-left shadow-md backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-500/30"
      >
        <IoIosAddCircleOutline className="text-5xl" />
        <p>Agregar Actividad Nueva</p>
      </Link>
      <ActivitiesList activities={evidences?.results} />
      {evidences && evidences.metadata.totalPages > 1 ? (
        <div className="flex items-stretch gap-3">
          {page > 1 ? (
            <Button hierarchy="secondary" size="md" onClick={prevPage}>
              <FaArrowLeftLong />
            </Button>
          ) : null}
          {page < evidences?.metadata.totalPages ? (
            <div className="">
              <Button hierarchy="primary" size="md" onClick={nextPage}>
                Siguiente Página
                <FaArrowRightLong />
              </Button>
            </div>
          ) : null}
          <div className="text-lg flex items-center text-cens-brand">
            {page}/{evidences.metadata.totalPages}
          </div>
        </div>
      ) : null}
    </div>
  );
}
