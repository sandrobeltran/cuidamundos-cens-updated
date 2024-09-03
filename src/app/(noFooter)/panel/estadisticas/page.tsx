"use client";

import SubmissionsTable from "@/components/panel/actividades/SubmissionsTable";
import UsersStatsTable from "@/components/panel/estadisticas/UsersStatsTable";
import SpinLoader from "@/components/SpinLoader";
import useFetchActivitySubmissions from "@/hooks/admin/useFetchActivitySubmissions";
import useFetchEvidencesAdmin from "@/hooks/admin/useFetchEvidencesAdmin";
import useFetchUsersStatsAdmin from "@/hooks/admin/useFetchUsersStatsAdmin";
import { useParams, useRouter } from "next/navigation";

export default function ActivityEvidencesPage() {
  const usersStats = useFetchUsersStatsAdmin({});

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
