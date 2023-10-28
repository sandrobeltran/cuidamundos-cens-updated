"use client";

import Button from "@/components/Button";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import { useUserStore } from "@/store/useUserStore";
import { IEvidence } from "@/utils/customTypes";
import { submitEvidenceValidationSchema } from "@/utils/validations";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type TProps = {
  evidence: IEvidence;
};

const SubmitEvidence = ({ evidence }: TProps) => {
  const user = useUserStore((state) => state.user);

  const [currentEvidence, setCurrentEvidence] = useState<IEvidence | null>(
    evidence,
  );
  // ? The idea is to use a component-local state to store the evidence so we can update it when any change happens


  // Check if there is a submission yet to update
  const submission = evidence.submissions.find(
    (submission) => submission.author === user!._id,
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
    const req = await fetch(`/usuario/evidencias/${evidence._id}/entrega/api`, {
      method: "PUT",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    const res = await req.json();

    setCurrentEvidence(res.data);


    document.getElementById("evidenceSubmitedModalWrapper")!.style.display =
      "flex";
  }

  return (
    <div className="flex w-full flex-col px-10">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={submitEvidenceValidationSchema}
      >
        <Form className="flex w-full flex-col items-center gap-8">
          <label className="flex w-full flex-col gap-3 font-semibold text-stone-500">
            Sube tu respuesta
            <TextArea
              name="answer"
              placeholder="Escribe aquí la evidencia..."
              rows={4}
            />
          </label>
          <div className="flex w-full flex-col justify-start gap-3 px-4">
            <label className="flex items-center gap-2 font-medium text-stone-500">
              <LinkIcon className="h-6" /> Adjunta un vínculo
            </label>
            <div className="w-full max-w-2xl">
              <TextField name="link" placeholder="" type="text" />
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
