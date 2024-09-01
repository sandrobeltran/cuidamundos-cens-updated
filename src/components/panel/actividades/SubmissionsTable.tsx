import { IAdminAuthor, ISubmission } from "@/utils/customTypes";
import dateToString, { getTimeFromDate } from "@/utils/dateToString";
import { getSubmissionState } from "@/utils/evidenceUtils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaFolder } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

interface IProps {
  submissions: ISubmission[] | null;
}

const SubmissionsTable = ({ submissions }: IProps) => {
  const { id } = useParams();

  console.log(submissions)

  if (!submissions) {
    return (
      <div className="w-full text-center">
        <p>Cargando evidencias...</p>
      </div>
    );
  }

  if (!submissions.length) {
    return (
      <div className="w-full text-center">
        <p>No hay entregas aún</p>
      </div>
    );
  }

  return (
    <table className="w-full border-separate border-spacing-y-4">
      <thead>
        <tr className="rounded-3xl bg-white/80 text-center font-medium text-cens-dark shadow-md">
          <td className="rounded-l-3xl px-5 py-3">N°</td>
          <td className="px-5 py-3">Usuario</td>
          <td className="px-5 py-3">Estado de Entrega</td>
          <td className="px-5 py-3">Archivos</td>
          <td className="px-5 py-3">Hipervínculo</td>
          <td className="px-5 py-3">Fecha de Entrega</td>
          <td className="rounded-r-3xl px-5 py-3">Acciones</td>
        </tr>
      </thead>
      <tbody>
        {submissions.map((submission) => {
          const author = submission.author as IAdminAuthor;
          return (
            <tr
              key={author._id}
              className="rounded-3xl bg-white/80 text-center font-medium shadow-md"
            >
              <td className="rounded-l-3xl px-5 py-6 text-lg">1</td>
              <td className="px-5 py-6 ">
                <div className="flex flex-col items-center font-normal">
                  <div className="aspect-square h-16 w-16 rounded-full bg-white p-1 shadow-md shadow-stone-400">
                    <Image
                      src={author.avatar}
                      alt={`${author.name} Avatar`}
                      width={44}
                      height={44}
                      className="aspect-square h-full w-full rounded-full"
                    />
                  </div>
                  <p className="mt-1 text-sm">
                    {author.name} {author.lastname}
                  </p>
                  <p className="text-xs text-stone-400">
                    {author.role === "USER" ? "Estudiante" : "Rol"}
                  </p>
                </div>
              </td>
              <td className="px-5 py-6 font-normal text-cens-dark">
                {getSubmissionState(submission, 0)}
              </td>
              <td className="px-5 py-6">
                <div className="grid place-content-center drop-shadow-md">
                  <div className="relative h-12 w-12">
                    <FaFolder color="#FFC343" className="text-5xl" />
                    <div className="absolute inset-0 m-auto grid h-5 w-5 translate-x-5 translate-y-4 place-content-center rounded-full border-[3px] border-cens-dark bg-white text-xs text-cens-dark">
                      {submission.content.files.length}
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
              <td className="px-5 py-6 font-normal text-stone-400">
                {dateToString(submission.submitedAt)}{" - "}
                {getTimeFromDate(new Date(submission.submitedAt))}
              </td>
              <td className="rounded-r-3xl px-5 py-6">
                <Link
                  href={`/panel/actividades/${id}/evidencias/${author._id}`}
                  className="underline"
                >
                  Ver
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SubmissionsTable;
