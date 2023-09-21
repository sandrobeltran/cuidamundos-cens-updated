"use client";

import { Form } from "formik";

type TProps = {
  children: JSX.Element | JSX.Element[];
};
const FormWrapper = ({ children }: TProps) => {
  return (
    <Form className="flex w-full max-w-md flex-col gap-4 text-stone-900">
      {children}
    </Form>
  );
};

export default FormWrapper;
