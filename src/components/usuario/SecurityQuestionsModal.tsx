"use client";

import { Formik, FormikState } from "formik";
import React, { Dispatch, SetStateAction, useRef } from "react";
import FormWrapper from "../form/FormWrapper";
import TextField from "../form/TextField";
import Button from "../Button";
import TextArea from "../form/TextArea";
import { useUserStore } from "@/store/useUserStore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SectionTitle from "../SectionTitle";
import {
  loginValidationSchema,
  securityQuestionsValidationSchema,
} from "@/utils/validations";
import Link from "next/link";
import { customFetch } from "@/utils/customFetch";
import { ISecurityQuestion } from "@/utils/customTypes";
import { generateCsrfToken } from "@/utils/csrfUtils";

type TProps = {};

type TInitialValues = {
  question1: ISecurityQuestion;
  question2: ISecurityQuestion;
};

const initialValues: TInitialValues = {
  question1: {
    question: "¿Cuál es tu color favorito?",
    answer: "",
  },
  question2: {
    question: "¿Cuál es tu fruta favorita?",
    answer: "",
  },
};

const SecurityQuestionsModal = ({}: TProps) => {
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

    const updateUserRequest = await customFetch("/usuario/api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        securityQuestions: [values.question1, values.question2],
      }),
    });
    const updateUserResponse = await updateUserRequest.json();

    if (!updateUserRequest.ok) {
      console.log(updateUserResponse);
      return toast.error(updateUserResponse.message);
    }

    setUser(updateUserResponse.data);
    setLoading(false);
    toast.success("Preguntas guardadas con éxito");
    modalWrapperRef.current!.style.display = "none";
  }

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm"
      id="securityQuestionsModal"
      /* onClick={handleClick} */
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-fit max-w-3xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 shadow-xl shadow-stone-950/10 mobile-land:max-h-[95%] mobile-land:gap-6">
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="text-3xl font-bold text-cens-brand mobile-land:text-2xl">
            Proteje tu cuenta
          </h2>
          <p className="text-sm text-stone-500">Añade preguntas de seguridad</p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={securityQuestionsValidationSchema}
        >
          {({ values }) => (
            <FormWrapper>
              <input
                type="hidden"
                name="csrfToken"
                value={generateCsrfToken()}
              />
              <div>
                <label className="mb-1 flex flex-col gap-1 text-left font-bold text-cens-brand">
                  {values.question1.question}
                  <TextField
                    type="text"
                    name="question1.answer"
                    placeholder="Respuesta"
                  />
                </label>
              </div>

              <div>
                <label className="mb-1 flex flex-col gap-1 text-left font-bold text-cens-brand">
                  {values.question2.question}
                  <TextField
                    type="text"
                    name="question2.answer"
                    placeholder="Respuesta"
                  />
                </label>
              </div>
              <div className="mt-4 flex">
                <Button hierarchy="primary" size="md" type="submit">
                  Guardar preguntas
                </Button>
              </div>
            </FormWrapper>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SecurityQuestionsModal;
