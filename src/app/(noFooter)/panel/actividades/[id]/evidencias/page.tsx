"use client";

import SpinLoader from "@/components/SpinLoader";
import useFetchActivitySubmissions from "@/hooks/admin/useFetchActivitySubmissions";
import useFetchEvidencesAdmin from "@/hooks/admin/useFetchEvidencesAdmin";
import { useParams, useRouter } from "next/navigation";
import { FaFolder } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

export default function ActivityEvidencesPage() {
  const router = useRouter();
  const { id } = useParams();

  const activities = useFetchEvidencesAdmin({ id: id.toString() });
  const submissions = useFetchActivitySubmissions({ id: id.toString() });

  if (!activities) {
    return <SpinLoader />;
  }

  const data = activities[0];

  if (!data) {
    return (
      <div className="flex w-full flex-col items-center gap-4">
        <p>La actividad no existe o ha sido eliminada</p>
      </div>
    );
  }

  console.log(submissions);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div className="w-full pl-8 text-left font-medium">
        <h3 className="text-3xl text-cens-dark">Panel de Evidencias</h3>
        <p className="text-md mt-2">{data.title}</p>
      </div>

      <table className="w-full border-separate border-spacing-y-4">
        <thead>
          <tr className="rounded-3xl bg-white/80 text-center font-medium text-cens-dark shadow-md">
            <td className="rounded-l-3xl px-5 py-3">N°</td>
            <td className="px-5 py-3">Usuario</td>
            <td className="px-5 py-3">Estado de Entrega</td>
            <td className="px-5 py-3">Archivos</td>
            <td className="px-5 py-3">Hipervínculo</td>
            <td className="px-5 py-3">Fecha de Entrega</td>
            <td className="rounded-r-3xl px-5 py-3">Hora</td>
          </tr>
        </thead>
        <tbody>
          <tr className="rounded-3xl bg-white/80 text-center font-medium shadow-md">
            <td className="rounded-l-3xl px-5 py-6 text-lg">1</td>
            <td className="px-5 py-6 ">
              <div className="flex flex-col items-center font-normal">
                <div className="aspect-square h-16 w-16 rounded-full bg-red-500"></div>
                <p className="text-sm">Sandro Beltrán</p>
                <p className="text-xs text-stone-400">Estudiante</p>
              </div>
            </td>
            <td className="px-5 py-6 font-normal text-cens-dark">Entregada</td>
            <td className="px-5 py-6">
              <div className="grid place-content-center drop-shadow-md">
                <div className="relative h-12 w-12">
                  <FaFolder color="#FFC343" className="text-5xl" />
                  <div className="absolute inset-0 m-auto grid h-5 w-5 translate-x-5 translate-y-4 place-content-center rounded-full border-[3px] border-cens-dark bg-white text-xs text-cens-dark">
                    2
                  </div>
                </div>
              </div>
            </td>
            <td className="px-5 py-6">
              <div className="grid place-content-center drop-shadow-md">
                <div className="relative grid h-12 w-12 place-content-center rounded-full border-4 border-cens-brand text-cens-brand">
                  <IoLink className="text-4xl" />
                  <div className="absolute inset-0 m-auto grid h-5 w-5 translate-x-5 translate-y-4 place-content-center rounded-full border-[3px] border-cens-dark bg-white text-xs text-cens-dark">
                    2
                  </div>
                </div>
              </div>
            </td>
            <td className="px-5 py-6 font-normal text-stone-400">15/10/2024</td>
            <td className="rounded-r-3xl px-5 py-6 font-normal text-stone-400">
              4:37 PM
            </td>
          </tr>
        </tbody>
      </table>

      {/* <ActivitiesList activities={evidences} /> */}
    </div>
  );
}
