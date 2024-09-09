"use client";

import { Formik, FormikState } from "formik";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";
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
import { StarIcon } from "@heroicons/react/24/solid";

interface IProps {
  authorName: string;
  currentGrade: number | null;
}

const grades = [
  {
    points: 0,
    color: "#a9a9a9",
  },
  {
    points: 10,
    color: "#D9891A",
  },
  {
    points: 20,
    color: "#FFC933",
  },
];

const AssignGradeModal = ({ authorName, currentGrade }: IProps) => {
  const { id, authorId } = useParams();
  const [pointsAmount, setPointsAmount] = useState<number>(currentGrade || 0);
  const { setUser, user, setLoading } = useUserStore((state) => state);
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).id === modalWrapperRef.current?.id) {
      setPointsAmount(currentGrade || 0);
      closeModal();
    }
  }

  function closeModal() {
    if (modalWrapperRef.current) modalWrapperRef.current.style.display = "none";
  }

  async function handleSubmit() {
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
        body: JSON.stringify({ grade: pointsAmount }),
      },
    );
    const updateUserResponse = await updateUserRequest.json();

    if (!updateUserRequest.ok) {
      console.log(updateUserResponse);
      return toast.error(updateUserResponse.message);
    }

    setLoading(false);
    toast.success("Nota asignada con éxito");
    closeModal();
  }

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm"
      id="assignGradeModalWrapper"
      onClick={handleClick}
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-fit max-w-3xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white px-16 py-8 shadow-xl shadow-stone-950/10 mobile-land:max-h-[95%] mobile-land:gap-6">
        <div className="flex w-full flex-col items-center gap-1 text-center">
          <h2 className="text-3xl font-bold text-cens-brand mobile-land:text-2xl">
            Asignar calificación
          </h2>
          <div className="h-0.5 w-full bg-stone-400" />
          <p className="mt-2 max-w-xs text-sm text-stone-500">
            Califica la actividad con estrellas. Simplemente selecciona el
            número de estrellas que mejor represente tu experiencia.
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full items-center justify-around">
            <button
              className="group relative flex flex-1 items-center justify-center gap-2 rounded-s-2xl border-2 border-stone-400 px-4 py-2 text-cens-dark opacity-60 transition-all hover:opacity-100"
              style={
                pointsAmount === 0
                  ? {
                      outline: "2px solid #a9a9a9",
                      opacity: 1,
                      boxShadow: "0 0 8px #a9a9a955",
                      borderColor: "transparent",
                      zIndex: 2,
                    }
                  : {}
              }
              onClick={() => setPointsAmount(0)}
            >
              <StarIcon
                color={"#a9a9a9"}
                className={`h-9 drop-shadow-[0_3px_#12121288]`}
              />
              <p className="text-2xl font-semibold">0</p>
            </button>
            <button
              className="group relative ml-[-1px] flex flex-1 items-center justify-center gap-2 border-2 border-stone-400 px-4 py-2 text-cens-dark opacity-60 transition-all hover:opacity-100"
              style={
                pointsAmount === 25
                  ? {
                      outline: "2px solid #D9891A",
                      opacity: 1,
                      boxShadow: "0 0 8px #D9891A55",
                      borderColor: "transparent",
                      zIndex: 2,
                    }
                  : {}
              }
              onClick={() => setPointsAmount(25)}
            >
              <StarIcon
                color={"#D9891A"}
                className={`h-9 drop-shadow-[0_3px_#12121288]`}
              />
              <p className="text-2xl font-semibold">25</p>
            </button>
            <button
              className="group group relative ml-[-1px] flex flex-1 items-center justify-center gap-2 rounded-e-2xl border-2 border-stone-400 px-4 py-2 text-cens-dark opacity-60 transition-all hover:opacity-100"
              style={
                pointsAmount === 50
                  ? {
                      outline: "3px solid #FFC933",
                      opacity: 1,
                      boxShadow: "0 0 8px #FFC93355",
                      borderColor: "transparent",
                      zIndex: 2,
                    }
                  : {}
              }
              onClick={() => setPointsAmount(50)}
            >
              <StarIcon
                color={"#FFC933"}
                className={`h-9 drop-shadow-[0_3px_#12121288]`}
              />
              <p className="text-2xl font-semibold">50</p>
            </button>
          </div>

          <div className="mt-4 flex w-full gap-4">
            <Button
              hierarchy="secondary"
              onClick={closeModal}
              size="md"
              type="button"
            >
              Salir
            </Button>
            <Button
              hierarchy="primary"
              size="md"
              type="button"
              onClick={handleSubmit}
            >
              Guardar
            </Button>
          </div>
        </div>
        {/* <Formik
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
        </Formik> */}
      </div>
    </div>
  );
};

export default AssignGradeModal;
