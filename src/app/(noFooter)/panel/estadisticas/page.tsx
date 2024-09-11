"use client";

import Button from "@/components/Button";
import UsersStatsTable from "@/components/panel/estadisticas/UsersStatsTable";
import useFetchUsersStatsAdmin from "@/hooks/admin/useFetchUsersStatsAdmin";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function ActivityEvidencesPage() {
  const [page, setPage] = useState<number>(1);
  const usersStats = useFetchUsersStatsAdmin({
    limit: 4,
    page: page,
    sort_by: "points",
    sort: "desc",
  });

  function prevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function nextPage() {
    if (usersStats) {
      if (page < usersStats?.metadata?.totalPages) {
        setPage(page + 1);
      }
    }
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <UsersStatsTable usersStats={usersStats?.results} />

      {usersStats && usersStats.metadata.totalPages > 1 ? (
        <div className="flex items-stretch gap-3">
          {page > 1 ? (
            <Button hierarchy="secondary" size="md" onClick={prevPage}>
              <FaArrowLeftLong />
            </Button>
          ) : null}
          {page < usersStats?.metadata.totalPages ? (
            <div className="">
              <Button hierarchy="primary" size="md" onClick={nextPage}>
                Siguiente Página
                <FaArrowRightLong />
              </Button>
            </div>
          ) : null}
          <div className="flex items-center text-lg text-cens-brand">
            {page}/{usersStats.metadata.totalPages}
          </div>
        </div>
      ) : null}
    </div>
  );
}
