import { getIsoDate } from "@/utils/dateToString";
import { Form, Formik, FormikState } from "formik";
import React from "react";
import NewActivityToolButton from "./NewActivityToolButton";
import Button from "@/components/Button";
import DateField from "@/components/form/DateField";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import { newActivityValidationSchema } from "@/utils/validations";
import {
  IoAddCircleOutline,
  IoImageOutline,
  IoDocumentOutline,
} from "react-icons/io5";
import { LuUndo2, LuRedo2, LuEye } from "react-icons/lu";

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

const NewActivityForm = ({ handleSubmit, initialValues }: IProps) => {
  return (
    <Formik
      initialValues={initialValues || defaultValues}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      validationSchema={newActivityValidationSchema}
    >
      <Form className="flex w-full flex-col items-center gap-6">
        {/* TOOLS BAR */}
        <div className="sticky left-0 top-[5.5rem] z-50 flex w-full items-center justify-between gap-2 rounded-3xl bg-white/80 p-3 px-8 text-left shadow-md backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <NewActivityToolButton Icon={LuUndo2} label="Deshacer" />
            <NewActivityToolButton Icon={LuRedo2} label="Rehacer" />
          </div>
          <div className="flex items-center gap-3">
            <NewActivityToolButton Icon={LuEye} label="Previsualizar" />
            <NewActivityToolButton
              Icon={IoAddCircleOutline}
              label="Agregar Pregunta"
            />
            <NewActivityToolButton
              Icon={IoImageOutline}
              label="Insertar Imagen"
            />
            <NewActivityToolButton
              Icon={IoDocumentOutline}
              label="Insertar Documento"
            />
            <div className="ml-2 h-fit">
              <Button type="submit" hierarchy="primary" size="sm">
                {initialValues ? "Guardar cambios" : "Publicar"}
              </Button>
            </div>
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
  );
};

export default NewActivityForm;
