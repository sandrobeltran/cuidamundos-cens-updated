"use client";

import { Formik, FormikState } from "formik";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { toast } from "react-toastify";
import { useParams, useRouter } from "next/navigation";
import {
  assignGradeValidationSchema,
  loginValidationSchema,
  securityQuestionsValidationSchema,
} from "@/utils/validations";
import Link from "next/link";
import { customFetch } from "@/utils/customFetch";
import { ISecurityQuestion } from "@/utils/customTypes";
import Button from "@/components/Button";
import FormWrapper from "@/components/form/FormWrapper";
import TextField from "@/components/form/TextField";
import { useUserStore } from "@/store/useUserStore";

type TInitialValues = {
  grade: "" | number;
};

const initialValues: TInitialValues = {
  grade: "",
};

interface IProps {
  authorName: string;
}

const AssignGradeModal = ({ authorName }: IProps) => {
  const { id, authorId } = useParams();
  const { setUser, user, setLoading } = useUserStore((state) => state);
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).id === modalWrapperRef.current?.id) {
      modalWrapperRef.current.style.display = "none";
    }
  }

  async function handleSubmit(values: TInitialValues) {
    setLoading(true);
    const token = localStorage.getItem("session-token");

    if (!token) return toast("Acción inválida");

    const updateUserRequest = await customFetch(
      `/panel/actividades/${id}/evidencias/${authorId}/api/calificar`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      },
    );
    const updateUserResponse = await updateUserRequest.json();

    if (!updateUserRequest.ok) {
      console.log(updateUserResponse);
      return toast.error(updateUserResponse.message);
    }

    setLoading(false);
    toast.success("Nota asignada con éxito");
    modalWrapperRef.current!.style.display = "none";
  }

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm"
      id="assignGradeModalWrapper"
      onClick={handleClick}
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-fit max-w-3xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 shadow-xl shadow-stone-950/10 mobile-land:max-h-[95%] mobile-land:gap-6">
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="text-3xl font-bold text-cens-brand mobile-land:text-2xl">
            Asignar calificación
          </h2>
          <p className="text-sm text-stone-500">Entrega de {authorName}</p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={assignGradeValidationSchema}
        >
          {({ values }) => (
            <FormWrapper>
              <label className="mb-1 flex w-full flex-col gap-1 text-left font-bold text-cens-brand">
                Ingresa cantidad de puntos
                <TextField type="number" name="grade" placeholder="Puntos" />
              </label>
              <div className="mt-4 flex">
                <Button hierarchy="primary" size="md" type="submit">
                  Asignar Calificación
                </Button>
              </div>
            </FormWrapper>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AssignGradeModal;