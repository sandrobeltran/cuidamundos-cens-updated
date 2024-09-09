"use client";

import UsersStatsTable from "@/components/panel/estadisticas/UsersStatsTable";
import useFetchUsersStatsAdmin from "@/hooks/admin/useFetchUsersStatsAdmin";

export default function ActivityEvidencesPage() {
  const usersStats = useFetchUsersStatsAdmin({
    limit: 6,
    page: 1,
    sort_by: "points",
    sort: "desc",
  });

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* <div className="w-full pl-8 text-left font-medium">
        <h3 className="text-3xl text-cens-dark">Panel de Estadísticas</h3>
        <p className="text-md mt-2">label</p>
      </div> */}

      {/* <SubmissionsTable submissions={submissions} /> */}

      {/* <ActivitiesList activities={evidences} /> */}

      <UsersStatsTable usersStats={usersStats} />
    </div>
  );
}
