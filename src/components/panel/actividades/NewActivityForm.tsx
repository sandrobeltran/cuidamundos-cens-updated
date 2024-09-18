import { getIsoDate } from "@/utils/dateToString";
import { Form, Formik, FormikState } from "formik";
import React, { useState } from "react";
import NewActivityToolButton from "./NewActivityToolButton";
import Button from "@/components/Button";
import DateField from "@/components/form/DateField";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import { newActivityValidationSchema } from "@/utils/validations";
import { IoImageOutline, IoDocumentOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import { FaCheck, FaPlus } from "react-icons/fa6";
import useFetchInstitutionsAdmin from "@/hooks/admin/useFetchInstitutionsAdmin";
import NewInstitutionForm, {
  NewInstitutionInitialValues,
} from "../instituciones/NewInstitutionForm";
import { customFetch } from "@/utils/customFetch";
import router from "next/router";
import { toast } from "react-toastify";
import { IInstitution } from "@/utils/customTypes";
import clsx from "clsx";
import { generateCsrfToken } from "@/utils/csrfUtils";

export interface NewActivityInitialValues {
  title: string;
  description: string;
  deliveryDate: string;
  deadline: string;
  enabledOptions: {
    text: boolean;
    links: boolean;
    docs: boolean;
    images: boolean;
  };
}

const defaultValues: NewActivityInitialValues = {
  title: "",
  description: "",
  deliveryDate: getIsoDate(),
  deadline: getIsoDate(),
  enabledOptions: {
    text: false,
    links: false,
    docs: false,
    images: false,
  },
};

interface IProps {
  handleSubmit: (
    values: NewActivityInitialValues,
    reset: (
      nextState?: Partial<FormikState<NewActivityInitialValues>> | undefined,
    ) => void,
  ) => void;
  initialValues?: NewActivityInitialValues;
}

const newInstitutionModalId = "newInstitutionModalWrapper";

const NewActivityForm = ({ handleSubmit, initialValues }: IProps) => {
  const [institutionId, setInstitutionId] = useState<string | null>(null);
  const [institutionModalToggle, setInstitutionModalToggle] =
    useState<boolean>(false);
  const [newInstitutionModalToggle, setNewInstitutionModalToggle] =
    useState<boolean>(false);
  const [addedInstitutions, setAddedInstitutions] = useState<IInstitution[]>(
    [],
  );

  const institutions = useFetchInstitutionsAdmin({});

  async function handleSubmitNewInstitutionModal(
    values: NewInstitutionInitialValues,
    reset: (
      nextState?: Partial<FormikState<NewInstitutionInitialValues>> | undefined,
    ) => void,
  ) {
    const token = localStorage.getItem("session-token");
    const req = await customFetch(`/usuario/instituciones/api/admin`, {
      method: "POST",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...values, active: true }),
    });

    const res = await req.json();

    if (!req.ok) {
      return toast.error(res.message);
    }

    toast.success("Institución creada con éxito");

    setAddedInstitutions((e) => [...e, res.data]);
    setInstitutionId(res.data._id);
    setNewInstitutionModalToggle(false);
  }

  return (
    <div className="relative z-[999999]">
      {/* NEW INSTITUTION MODAL */}
      {newInstitutionModalToggle ? (
        <div
          className="modalWrapper fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm"
          id={newInstitutionModalId}
          onClick={(e) => {
            if ((e.target as HTMLDivElement).id === newInstitutionModalId) {
              // document.getElementById(newInstitutionModalId)!.style.display =
              // "none";
              setNewInstitutionModalToggle(false);
            }
          }}
        >
          <div className="flex h-fit max-h-[90%] w-fit max-w-4xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 shadow-xl shadow-stone-950/10 mobile-land:max-h-[95%] mobile-land:gap-6">
            <div className="flex flex-col items-center gap-1 text-center">
              <h2 className="text-3xl font-bold text-cens-brand mobile-land:text-2xl">
                Crea una institución
              </h2>
              <p className="text-sm text-stone-500">
                Completa el formulario para crear una nueva institución
              </p>
            </div>
            <NewInstitutionForm
              handleSubmit={handleSubmitNewInstitutionModal}
            />
          </div>
        </div>
      ) : null}
      <Formik
        initialValues={initialValues || defaultValues}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        validationSchema={newActivityValidationSchema}
      >
        <Form className="flex w-full flex-col items-center gap-6">
          <input type="hidden" name="csrfToken" value={generateCsrfToken()} />
          {/* TOOLS BAR */}
          <div className="sticky left-0 top-[5.5rem] z-50 flex w-full items-center justify-center gap-4 rounded-3xl bg-white/80 p-3 px-8 text-left shadow-md backdrop-blur-sm">
            {/* <NewActivityToolButton Icon={LuEye} label="Previsualizar" /> */}
            <div
              className="relative h-full w-fit"
              onMouseEnter={() => setInstitutionModalToggle(true)}
              onMouseLeave={() => setInstitutionModalToggle(false)}
            >
              <NewActivityToolButton
                Icon={LuGraduationCap}
                label="Seleccionar Institución"
              />

              {institutionModalToggle ? (
                <div className="modalWrapper absolute top-[100%] w-64 translate-x-[-25%] ">
                  <div className="flex h-full w-full flex-col items-center gap-3 rounded-3xl border border-cens-brand bg-white p-3 shadow-md">
                    <Button
                      hierarchy="primary"
                      size="sm"
                      onClick={() => setNewInstitutionModalToggle(true)}
                    >
                      <FaPlus className="text-lg" />
                      <p>Crear institución</p>
                    </Button>

                    <ul className="flex h-fit max-h-60 w-full flex-col items-center overflow-y-auto text-center">
                      <div className="h-[2px] w-full rounded bg-stone-300" />
                      {institutions ? (
                        institutions.length ? (
                          [...addedInstitutions, ...institutions].map(
                            (institution) => (
                              <li
                                key={institution._id}
                                className="w-full pt-1 transition-colors hover:bg-stone-100"
                              >
                                <button
                                  type="button"
                                  onClick={() =>
                                    setInstitutionId(
                                      institutionId === institution._id
                                        ? null
                                        : institution._id,
                                    )
                                  }
                                  className={clsx([
                                    "flex w-full items-center justify-center gap-2",
                                    {
                                      "font-semibold text-cens-brand":
                                        institutionId === institution._id,
                                    },
                                  ])}
                                >
                                  {institutionId === institution._id ? (
                                    <FaCheck className="text-lg" />
                                  ) : null}
                                  {institution.name}
                                </button>
                                <div className="mt-1 h-[1px] w-full rounded bg-stone-300" />
                              </li>
                            ),
                          )
                        ) : (
                          <p>No hay instituciones</p>
                        )
                      ) : (
                        <p>Cargando...</p>
                      )}
                    </ul>
                  </div>
                </div>
              ) : null}
            </div>
            <NewActivityToolButton
              Icon={IoImageOutline}
              label="Insertar Imagen"
            />
            <NewActivityToolButton
              Icon={IoDocumentOutline}
              label="Insertar Documento"
            />
            <div className="ml-6 h-fit">
              <Button type="submit" hierarchy="primary" size="md">
                {initialValues ? "Guardar cambios" : "Publicar"}
              </Button>
            </div>
          </div>

          {/* DETAILS CARD */}
          <div className="relative flex w-full items-center gap-16 overflow-hidden rounded-3xl bg-white/80 px-16 py-8 shadow-md backdrop-blur-sm">
            <div className="absolute left-0 top-0 h-full w-8 bg-cens-medium"></div>

            <div className="flex h-full flex-1 flex-col justify-center gap-4">
              <TextField name="title" placeholder="Nombre de la actividad" />
              <TextArea
                name="description"
                rows={2}
                placeholder="Descripción de la actividad"
              ></TextArea>
            </div>
          </div>

          {/* INFO GRID */}
          <div className="grid w-full grid-cols-2 grid-rows-2 gap-x-8 gap-y-4 px-10">
            <div className="flex items-center justify-center gap-2 rounded-lg bg-white/80 px-4 py-2 shadow-md">
              <p className="font-semibold">Estado de la entrega:</p>
              <p>En proceso</p>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-white/80 px-4 py-2 shadow-md">
              <p className="font-semibold">Editar Fecha de Entrega:</p>
              <div>
                <DateField name="deliveryDate" />
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-white/80 px-4 py-2 shadow-md">
              <p className="font-semibold">Última Modificación:</p>
              <p>Sin enviar</p>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-white/80 px-4 py-2 shadow-md">
              <p className="font-semibold">Editar Fecha Límite:</p>
              <div>
                <DateField name="deadline" />
              </div>
            </div>
          </div>

          {/* SUBMIT OPTIONS */}
          <div className="flex w-full flex-col items-center gap-6 rounded-3xl bg-white/80 px-10 py-6 shadow-md">
            <h5 className="w-full text-left text-lg font-semibold">
              Habilitación de Entregas
            </h5>

            <div className="flex w-full max-w-2xl flex-col items-start gap-2">
              <ToggleSwitch
                label='Habilitar "Agregar Texto"'
                name="enabledOptions.text"
              />
              <ToggleSwitch
                label='Habilitar "Agregar Hipervínculos"'
                name="enabledOptions.links"
              />
              <ToggleSwitch
                label='Habilitar "Agregar Documentos"'
                name="enabledOptions.docs"
              />
              <ToggleSwitch
                label='Habilitar "Agregar Imágenes y Videos"'
                name="enabledOptions.images"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default NewActivityForm;
