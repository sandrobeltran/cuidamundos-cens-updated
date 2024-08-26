"use client";

import Button from "@/components/Button";
import DateField from "@/components/form/DateField";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import { newActivityValidationSchema } from "@/utils/validations";
import { Form, Formik, FormikState } from "formik";
import {
  IoAddCircleOutline,
  IoDocumentOutline,
  IoImageOutline,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { LuUndo2, LuRedo2, LuEye } from "react-icons/lu";

interface IToolButtonProps {
  label: string;
  Icon: IconType;
}

function ToolButton({ label, Icon }: IToolButtonProps) {
  return (
    <button
      type="button"
      className="flex flex-col items-center rounded-md px-2 py-1 transition-all hover:bg-cens-light/10"
    >
      <Icon className="text-3xl" />
      <p className="text-xs">{label}</p>
    </button>
  );
}

interface IInitialValues {
  name: string;
  description: string;
  enableText: boolean;
  enableLinks: boolean;
  enableDocs: boolean;
  enableImages: boolean;
}

const initialValues: IInitialValues = {
  name: "",
  description: "",
  enableText: false,
  enableLinks: false,
  enableDocs: false,
  enableImages: false,
};

export default function NewEvidencePage() {
  function handleSubmit(
    values: IInitialValues,
    reset: (
      nextState?: Partial<FormikState<IInitialValues>> | undefined,
    ) => void,
  ) {
    console.log(values);
  }

  return (
    <div className="w-full">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        validationSchema={newActivityValidationSchema}
      >
        <Form className="flex w-full flex-col items-center gap-6">
          {/* TOOLS BAR */}
          <div className="flex w-full items-center justify-between gap-2 rounded-3xl bg-white/80 p-3 px-8 text-left shadow-md backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <ToolButton Icon={LuUndo2} label="Deshacer" />
              <ToolButton Icon={LuRedo2} label="Rehacer" />
            </div>
            <div className="flex items-center gap-3">
              <ToolButton Icon={LuEye} label="Previsualizar" />
              <ToolButton Icon={IoAddCircleOutline} label="Agregar Pregunta" />
              <ToolButton Icon={IoImageOutline} label="Insertar Imagen" />
              <ToolButton Icon={IoDocumentOutline} label="Insertar Documento" />
              <div className="ml-2 h-fit">
                <Button type="submit" hierarchy="primary" size="sm">
                  Publicar
                </Button>
              </div>
            </div>
          </div>

          {/* DETAILS CARD */}
          <div className="relative flex w-full items-center gap-16 overflow-hidden rounded-3xl bg-white/80 px-16 py-8 shadow-md backdrop-blur-sm">
            <div className="absolute left-0 top-0 h-full w-8 bg-cens-medium"></div>

            <div className="flex h-full flex-1 flex-col justify-center gap-4">
              <TextField name="name" placeholder="Nombre de la actividad" />
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
              <p>19/10/2023</p>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-white/80 px-4 py-2 shadow-md">
              <p className="font-semibold">Última Modificación:</p>
              <p>Sin enviar</p>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-lg bg-white/80 px-4 py-2 shadow-md">
              <p className="font-semibold">Editar Fecha Límite:</p>
              <p>19/10/2023</p>
            </div>
          </div>

          <DateField name="deadline" />

          {/* SUBMIT OPTIONS */}
          <div className="flex w-full flex-col items-center gap-6 rounded-3xl bg-white/80 px-10 py-6 shadow-md">
            <h5 className="w-full text-left text-lg font-semibold">
              Habilitación de Entregas
            </h5>

            <div className="flex w-full max-w-2xl flex-col items-start gap-2">
              <ToggleSwitch
                label='Habilitar "Agregar Texto"'
                name="enableText"
              />
              <ToggleSwitch
                label='Habilitar "Agregar Hipervínculos"'
                name="enableLinks"
              />
              <ToggleSwitch
                label='Habilitar "Agregar Documentos"'
                name="enableDocs"
              />
              <ToggleSwitch
                label='Habilitar "Agregar Imágenes y Videos"'
                name="enableImages"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
