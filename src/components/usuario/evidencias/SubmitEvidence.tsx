"use client";

import Button from "@/components/Button";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import { useUserStore } from "@/store/useUserStore";
import { IEvidence } from "@/utils/customTypes";
import { submitEvidenceValidationSchema } from "@/utils/validations";
import { LinkIcon, DocumentIcon } from "@heroicons/react/24/outline";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import EvidenceSubmitedModal from "./EvidenceSubmitedModal";
import { toast } from "react-toastify";
import { submitEvidence } from "@/actions/submitEvidence";
import InputFile from "@/components/form/InputFile";
import FileCard from "./FileCard";

type TProps = {
  evidence: IEvidence;
};

const SubmitEvidence = ({ evidence }: TProps) => {
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

    const action = await submitEvidence(formData, evidence._id, token!);
return
    if (action.status == "error") {
      return toast.error(action.message);
    }

    //setCurrentEvidence(action.data);

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
              {files.map((file, index) => (
                <FileCard file={file} key={index} />
              ))}
            </div>
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
