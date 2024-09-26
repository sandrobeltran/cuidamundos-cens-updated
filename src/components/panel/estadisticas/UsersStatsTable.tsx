import { IUserStats } from "@/utils/customTypes";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

interface IProps {
  usersStats: IUserStats[] | null;
}

const UsersStatsTable = ({ usersStats }: IProps) => {
  console.log(usersStats);

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
        {usersStats.map((user, i) => {
          return (
            <tr
              key={i}
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
              <td className="group relative rounded-r-3xl px-5 py-6 text-center">
                {user.certificatesAmount ? (
                  <div className="absolute left-0 right-0 top-[65%] mx-auto translate-y-5 rounded-2xl border border-stone-200 bg-white p-2 opacity-0 shadow-lg shadow-cens-dark/30 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <ul className="flex flex-col items-center text-left">
                      {user.userGamesWon.map((e, i) => (
                        <div
                          className="flex w-full flex-col items-center"
                          key={i}
                        >
                          <li className="text-left text-sm w-full">{i+1}. {e.title}</li>
                          {i < user.certificatesAmount - 1 ? (
                            <div className="my-2 h-[1.3px] w-[95%] rounded-xl bg-stone-300" />
                          ) : null}
                        </div>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <p className="flex justify-center gap-2">
                  {user.certificatesAmount}
                  {user.certificatesAmount ? (
                    <InformationCircleIcon className="h-6 cursor-pointer text-cens-medium" />
                  ) : null}
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default UsersStatsTable;
