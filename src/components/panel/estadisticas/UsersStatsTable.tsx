import { IUserStats } from "@/utils/customTypes";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

interface IProps {
  usersStats: IUserStats[] | null;
}

const UsersStatsTable = ({ usersStats }: IProps) => {
  if (!usersStats) {
    return (
      <div className="w-full text-center">
        <p>Cargando estadísticas de usuarios...</p>
      </div>
    );
  }

  if (!usersStats.length) {
    return (
      <div className="w-full text-center">
        <p>No hay usuarios aún</p>
      </div>
    );
  }

  return (
    <table className="w-full border-separate border-spacing-y-4">
      <thead>
        <tr className="rounded-3xl bg-white/80 text-center font-medium text-cens-dark shadow-md">
          <td className="rounded-l-3xl px-5 py-3">Avatar</td>
          <td className="px-5 py-3">Usuario</td>
          <td className="px-5 py-3">Puntos</td>
          <td className="px-5 py-3">Actividades</td>
          <td className="rounded-r-3xl px-5 py-3">Certificaciones</td>
        </tr>
      </thead>
      <tbody>
        {usersStats.map((user) => {
          return (
            <tr
              key={user._id}
              className="rounded-3xl bg-white/80 text-center font-medium shadow-md"
            >
              <td className="rounded-l-3xl px-5 py-6 text-lg">
                <div className="grid w-full place-content-center">
                  <div className="aspect-square h-20 w-20 rounded-full bg-white p-1 shadow-md shadow-stone-400">
                    <Image
                      src={user.avatar}
                      alt={`${user.name} Avatar`}
                      width={44}
                      height={44}
                      className="aspect-square h-full w-full rounded-full"
                    />
                  </div>
                </div>
              </td>
              <td className="px-5 py-6 ">
                <div className="flex flex-col items-center justify-center text-center font-normal">
                  <p className="mt-1 w-full">
                    {user.name} {user.lastname}
                  </p>

                  {user.institutionData ? (
                    <p className="w-full text-xs text-stone-400">
                      {user.institutionData.name}
                    </p>
                  ) : null}
                </div>
              </td>
              <td className="px-5 py-6 font-normal text-cens-dark">
                <div className="flex items-center justify-center gap-1 font-semibold max-sm:gap-0 max-sm:text-sm">
                  <p className="text-xl font-semibold">{user?.points}</p>
                  <StarIcon color="#ffb800" className="h-7" />
                </div>
              </td>
              <td className="px-5 py-6 text-center">
                <p>{user.activitiesAmount}</p>
              </td>
              <td className="rounded-r-3xl px-5 py-6 text-center">
                <p>{user.certificatesAmount}</p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersStatsTable;
