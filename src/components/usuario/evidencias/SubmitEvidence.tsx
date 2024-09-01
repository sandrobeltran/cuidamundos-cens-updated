"use client";

import Button from "@/components/Button";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import { useUserStore } from "@/store/useUserStore";
import { IEvidence, IEvidenceFile } from "@/utils/customTypes";
import { submitEvidenceValidationSchema } from "@/utils/validations";
import { LinkIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import EvidenceSubmitedModal from "./EvidenceSubmitedModal";
import { toast } from "react-toastify";
import { submitEvidence } from "@/actions/submitEvidence";
import InputFile from "@/components/form/InputFile";
import FileCard from "./FileCard";
import useFetchEvidenceFiles from "@/hooks/useFetchEvidenceFiles";

type TProps = {
  evidence: IEvidence;
};

const DeletableFileCard = ({
  isDeleted,
  onClick,
  file,
}: {
  isDeleted?: boolean;
  onClick: () => void;
  file: {
    filename: string;
    type: string;
  };
}) => {
  return (
    <div
      title={isDeleted ? "Restaurar" : "Eliminar"}
      className="relative cursor-pointer"
      onClick={onClick}
    >
      {isDeleted ? (
        <div className="absolute inset-0 z-10 m-auto h-fit w-fit rounded-full bg-red-500/70 px-3 text-xs font-medium text-white">
          Eliminado
        </div>
      ) : null}
      <div
        style={
          isDeleted
            ? {
                filter: "grayscale(100%)",
                opacity: ".3",
              }
            : {}
        }
      >
        <FileCard {...file} />
      </div>
    </div>
  );
};

const SubmitEvidence = ({ evidence }: TProps) => {
  const [deletedFilesIds, setDeletedFilenames] = useState<string[]>([]);
  const user = useUserStore((state) => state.user);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);

  // ? The idea is to use a component-local state to store the evidence so we can update it when any change happens
  const [currentEvidence, setCurrentEvidence] = useState<IEvidence | null>(
    evidence,
  );

  // Check if there is a submission yet to update
  const submission = evidence.submissions.find(
    (submission) => (submission.author as any) === user!._id,
  );

  const currentFiles = useFetchEvidenceFiles({
    activityId: evidence._id,
    filesIds: submission?.content.files,
  });

  type TInitialValues = {
    answer: string;
    link: string;
  };

  const initialValues: TInitialValues = {
    answer: submission ? submission.content.answer : "",
    link: submission ? submission?.content.link : "",
  };

  async function handleSubmit(values: TInitialValues) {
    const token = localStorage.getItem("session-token");

    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) =>
      formData.append(key, value),
    );

    files.forEach((file) => {
      formData.append(file.name, file);
    });

    const action = await submitEvidence({
      formData,
      evidenceId: evidence._id,
      token: token!,
      deletedFilesIds,
    });

    if (action.status == "error") {
      return toast.error(action.message);
    }

    toast.success("Evidencia subida con éxito");

    setSubmitted(true);
  }

  function handleFilePicked(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);

      if (newFiles.length) {
        setFiles([...files, ...newFiles]);
      }
    }
  }

  function handleDeleteNewFile(name: string) {
    const newFiles = [...files];
    const index = newFiles.findIndex((e) => e.name === name);

    newFiles.splice(index, 1);

    setFiles(newFiles);
  }

  function handleDeleteCurrentFile(_id: string) {
    if (!deletedFilesIds.includes(_id)) setDeletedFilenames((e) => [...e, _id]);
    else
      setDeletedFilenames((e) => {
        const newFiles = [...e];
        const index = newFiles.findIndex((e) => e === _id);
        newFiles.splice(index, 1);

        return newFiles;
      });
  }

  return (
    <div className="flex w-full flex-col px-10 max-sm:px-4">
      {/* EVIDENCE SUBMITED MODAL */}
      {submitted ? <EvidenceSubmitedModal evidenceId={evidence._id} /> : null}
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={submitEvidenceValidationSchema}
      >
        <Form className="flex w-full flex-col items-center gap-8 max-sm:gap-6">
          <label className="flex w-full flex-col gap-3 font-semibold text-stone-500">
            Sube tu respuesta
            <TextArea
              name="answer"
              placeholder="Escribe aquí la evidencia..."
              rows={4}
            />
          </label>
          <div className="flex w-full flex-col justify-start gap-3">
            <label className="flex items-center gap-2 font-medium text-stone-500">
              <LinkIcon className="h-6" /> Adjunta un vínculo
            </label>
            <div className="w-full max-w-2xl">
              <TextField name="link" placeholder="" type="text" />
            </div>
          </div>

          <div className="flex w-full flex-col justify-start gap-3">
            <label className="flex items-center gap-2 font-medium text-stone-500">
              <DocumentIcon className="h-6" /> Adjunta un archivo
            </label>
            <div className="w-full max-w-2xl">
              <InputFile name="fileInput" onChange={handleFilePicked} />
            </div>

            <div className="flex w-full gap-4 overflow-x-auto p-2">
              {currentFiles ? (
                currentFiles.length ? (
                  currentFiles.map((file, index) => (
                    <DeletableFileCard
                      isDeleted={deletedFilesIds.includes(file._id)}
                      file={file}
                      key={index}
                      onClick={() => handleDeleteCurrentFile(file._id)}
                    />
                  ))
                ) : null
              ) : (
                <p>Cargando archivos...</p>
              )}
              {files.map((file, index) => (
                <DeletableFileCard
                  file={{
                    filename: file.name,
                    type: file.type.split("/").pop() || "default",
                  }}
                  onClick={() => handleDeleteNewFile(file.name)}
                  key={index}
                />
              ))}
            </div>
            <p className="text-sm font-medium text-stone-400">
              Toca un archivo para eliminarlo
            </p>
          </div>

          <Button hierarchy="primary" size="md" type="submit">
            {submission ? "Guardar cambios" : "Subir entrega"}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SubmitEvidence;
