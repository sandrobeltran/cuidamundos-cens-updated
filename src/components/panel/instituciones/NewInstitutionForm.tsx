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

export interface NewInstitutionInitialValues {
  name: string;
  city: string;
}

const defaultValues: NewInstitutionInitialValues = {
  name: "",
  city: "",
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
        {/* DETAILS CARD */}
        <div className="relative flex w-full items-center gap-16 overflow-hidden rounded-3xl bg-white/80 px-16 py-8 shadow-md backdrop-blur-sm">
          <div className="absolute left-0 top-0 h-full w-8 bg-cens-medium"></div>

          <div className="flex h-full flex-1 flex-col justify-center gap-4">
            <TextField name="name" placeholder="Nombre de la institución" />
            <TextField name="city" placeholder="Ciudad de la institución" />
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
