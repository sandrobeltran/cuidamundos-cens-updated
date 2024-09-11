"use client";

import Button from "@/components/Button";
import AssignGradeModal from "@/components/panel/actividades/AssignGradeModal";
import SpinLoader from "@/components/SpinLoader";
import EvidenceCard from "@/components/usuario/evidencias/EvidenceCard";
import FileCard from "@/components/usuario/evidencias/FileCard";
import { FILES_DICT } from "@/constants/evidencesConstants";
import useFetchActivitySubmissions from "@/hooks/admin/useFetchActivitySubmissions";
import useFetchEvidencesAdmin from "@/hooks/admin/useFetchEvidencesAdmin";
import useFetchEvidenceFiles from "@/hooks/useFetchEvidenceFiles";
import { IAdminAuthor } from "@/utils/customTypes";
import dateToString, { getTimeFromDate } from "@/utils/dateToString";
import { getFileUrl, getSubmissionState } from "@/utils/evidenceUtils";
import { gradeFormatter } from "@/utils/timeFormatter";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaFolder } from "react-icons/fa6";
import { PiExam } from "react-icons/pi";

export default function SubmissionDetails() {
  const { id, authorId } = useParams();

  const activities = useFetchEvidencesAdmin({ id: id.toString() });
  const submissions = useFetchActivitySubmissions({
    id: id.toString(),
    authorId: authorId.toString(),
  });
  const currentFiles = useFetchEvidenceFiles({
    activityId: id.toString(),
    filesIds: submissions ? submissions[0].content.files : undefined,
  });

  if (!activities || !submissions) {
    return <SpinLoader />;
  }

  const activityData = activities.results[0];
  const submissionData = submissions[0];

  if (!activityData) {
    return (
      <div className="flex w-full flex-col items-center gap-4">
        <p>La actividad no existe o ha sido eliminada</p>
      </div>
    );
  }

  if (!submissionData) {
    return (
      <div className="flex w-full flex-col items-center gap-4">
        <p>La entrega no existe o ha sido eliminada</p>
      </div>
    );
  }

  const author = submissionData.author as IAdminAuthor;
  const institution = author.institutionData;

  function showAssignGradeModal() {
    document.getElementById("assignGradeModalWrapper")!.style.display = "flex";
  }

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <AssignGradeModal
        currentGrade={submissionData.grade}
        authorName={`${author.name} ${author.lastname}`}
      />
      <div className="w-full pl-8 text-left font-medium">
        <h3 className="text-3xl text-cens-dark">Panel de Evidencias</h3>
        <p className="text-md mt-2">{activityData.title}</p>
      </div>

      <div className="relative mt-12 flex w-full flex-col items-center rounded-3xl bg-white/80 p-10 shadow-md">
        <div className="relative left-0 right-0 top-[-72px] mx-auto flex w-fit flex-col items-center text-center">
          {/* USER BADGE */}
          <div className="aspect-square h-36 w-36 rounded-full bg-white p-2 shadow-md">
            <Image
              width={256}
              height={256}
              className="aspect-square h-full w-full rounded-full shadow-md shadow-stone-300 mobile-land:w-9"
              src={author.avatar}
              alt={`${author.name} avatar`}
            />
          </div>
          <h4 className="mt-1 text-lg font-medium">
            {author.name} {author.lastname}
          </h4>
          <p className="font-normal text-stone-400">
            {author.role === "USER" ? "Estudiante" : "Rol desconocido"}
          </p>
          {institution ? (
            <p className="font-normal text-stone-400">{institution.name}</p>
          ) : null}
        </div>

        {/* DETALLES */}
        <div className="-mt-6 grid w-full max-w-5xl grid-cols-2 gap-16">
          <div className="h-full w-full">
            <h4 className="text-2xl font-medium text-cens-brand">Evidencias</h4>
            <div className="mt-3 flex w-full items-center justify-between">
              <p>Estado de entrega</p>
              <p className="font-semibold">
                {getSubmissionState(submissionData, 0)}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Fecha de entrega</p>
              <p className="font-semibold">
                {dateToString(submissionData.submitedAt)}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Hora de entrega</p>
              <p className="font-semibold">
                {getTimeFromDate(new Date(submissionData.submitedAt))}
              </p>
            </div>
          </div>
          <div className="h-full w-full">
            <h4 className="text-2xl font-medium text-cens-brand">Actividad</h4>
            <div className="mt-3 flex w-full items-center justify-between">
              <p>Fecha de Actividad</p>
              <p className="font-semibold">
                {dateToString(activityData.createdAt)}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Fecha límite</p>
              <p className="font-semibold">
                {dateToString(activityData.deadline)}
              </p>
            </div>
            <div className="flex w-full items-center justify-between">
              <p>Hora de entrega</p>
              <p className="font-semibold">
                {getTimeFromDate(new Date(activityData.deadline))}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Button onClick={showAssignGradeModal} hierarchy="primary" size="md">
            <PiExam />
            <p>Calificar Tarea</p>
          </Button>
          <p className="w-full pt-2 text-center text-lg font-semibold text-cens-brand underline">
            {submissionData.grade
              ? gradeFormatter.format(submissionData.grade)
              : "-- --"}
          </p>
        </div>
      </div>

      {/* EVIDENCE DETAILS */}
      <div className="mt-8 flex w-full flex-col items-center gap-10">
        <EvidenceCard evidence={activityData} />

        <div className="flex w-full flex-col items-start gap-1 text-stone-500">
          <p className="font-medium">Respuesta</p>
          <div className="w-full whitespace-pre-wrap rounded-lg border-2 border-stone-300 bg-white/80 px-4 py-3 font-normal shadow-md backdrop-blur-sm">
            {submissionData.content.answer}
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-1 text-stone-500">
          <div className="flex items-center gap-1 font-medium">
            <FaFolder className="text-yellow-500" />
            Archivos Adjuntados
          </div>
          {currentFiles ? (
            currentFiles.length ? (
              <div className="flex w-full flex-wrap gap-4 rounded-lg border-2 border-stone-300 bg-white/80 p-4 font-normal text-yellow-500 shadow-md backdrop-blur-sm">
                {currentFiles.map((file) => (
                  <a key={file._id} href={getFileUrl(file)} target="_blank">
                    <FileCard filename={file.filename} type={file.type} />
                  </a>
                ))}
              </div>
            ) : (
              <p>Sin archivos</p>
            )
          ) : (
            <p>Cargando archivos...</p>
          )}
        </div>
      </div>

      {/* <ActivitiesList activities={evidences} /> */}
    </div>
  );
}
