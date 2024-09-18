import { getIsoDate } from "@/utils/dateToString";
import { Form, Formik, FormikState } from "formik";
import React from "react";
import Button from "@/components/Button";
import DateField from "@/components/form/DateField";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import {
  newActivityValidationSchema,
  newInstitutionValidationSchema,
} from "@/utils/validations";
import {
  IoAddCircleOutline,
  IoImageOutline,
  IoDocumentOutline,
} from "react-icons/io5";
import { LuUndo2, LuRedo2, LuEye, LuGraduationCap } from "react-icons/lu";
import { generateCsrfToken } from "@/utils/csrfUtils";

export interface NewInstitutionInitialValues {
  name: string;
  phone: string;
  email: string;
}

const defaultValues: NewInstitutionInitialValues = {
  name: "",
  phone: "",
  email: "",
};

interface IProps {
  handleSubmit: (
    values: NewInstitutionInitialValues,
    reset: (
      nextState?: Partial<FormikState<NewInstitutionInitialValues>> | undefined,
    ) => void,
  ) => void;
  initialValues?: NewInstitutionInitialValues;
}

const NewInstitutionForm = ({ handleSubmit, initialValues }: IProps) => {
  return (
    <Formik
      initialValues={initialValues || defaultValues}
      onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      validationSchema={newInstitutionValidationSchema}
    >
      <Form className="flex w-full flex-col items-center gap-6">
        <input type="hidden" name="csrfToken" value={generateCsrfToken()} />
        {/* DETAILS CARD */}
        <div className="relative flex w-full items-center gap-16">
          <div className="flex h-full w-full flex-1 flex-col justify-center gap-4">
            <label className="mb-1 flex w-full flex-col gap-1 text-left font-bold text-cens-brand">
              Nombre de la institución
              <TextField name="name" placeholder="Nombre de la institución" />
            </label>

            <label className="mb-1 flex w-full flex-col gap-1 text-left font-bold text-cens-brand">
              Teléfono
              <TextField name="phone" placeholder="Ciudad de la institución" />
            </label>

            <label className="mb-1 flex w-full flex-col gap-1 text-left font-bold text-cens-brand">
              Correo electrónico
              <TextField name="email" placeholder="Correo de la institución" />
            </label>
          </div>
        </div>

        {/* SUBMIT OPTIONS */}
        <div className="ml-6 h-fit">
          <Button type="submit" hierarchy="primary" size="md">
            {initialValues ? "Guardar cambios" : "Crear institución"}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default NewInstitutionForm;
