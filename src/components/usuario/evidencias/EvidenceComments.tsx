import React from "react";
import Button from "../../Button";
import TextArea from "../../form/TextArea";
import { Form, Formik, FormikState } from "formik";
import FormWrapper from "../../form/FormWrapper";
import { IComment } from "@/utils/customTypes";
import { postCommentValdationSchema } from "@/utils/validations";

type TProps = {
  comments: IComment[];
};

const EvidenceComments = ({comments}: TProps) => {
  type TInitialValues = {
    content: string;
  };

  const initialValues: TInitialValues = {
    content: "",
  };

  async function handleSubmit(
    values: TInitialValues,
    reset: (
      nextState?: Partial<FormikState<TInitialValues>> | undefined,
    ) => void,
  ) {
    console.log(values);

    reset();
  }

  return (
    <div className="flex w-full flex-col items-start justify-start gap-12">
      {/* NEW COMMENT */}
      <div className="flex w-full flex-col items-start justify-start gap-4">
        <h4 className="text-lg font-medium text-cens-brand">Comentarios (0)</h4>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
          validationSchema={postCommentValdationSchema}
        >
          <Form className="flex w-full flex-col items-end gap-4 text-stone-900">
            <TextArea
              placeholder="Agregar comentario"
              name="content"
              rows={4}
            />
            <Button type="submit" hierarchy="primary" size="md">
              Comentar
            </Button>
          </Form>
        </Formik>
      </div>

      {/* COMMENTS LIST */}
      <div className="flex w-full flex-col items-center justify-center gap-5">
        {true ? (
          new Array(1).fill("#").map((e, index) => (
            <div
              key={index}
              className="flex h-full w-full items-start justify-start gap-4 border-b border-b-stone-300 p-2 pb-6"
            >
              <div className="aspect-square min-w-[120px] rounded-full bg-red-300"></div>
              <div className="w-full rounded-lg border-2 border-stone-300 px-4 py-3">
                Excelente trabajo.
                <br />
                Recuerda siempre tener en cuenta toda la información necesaria.
              </div>
            </div>
          ))
        ) : (
          <div className="text-center font-normal text-stone-500">
            No hay comentarios disponibles
          </div>
        )}
      </div>
    </div>
  );
};

export default EvidenceComments;
