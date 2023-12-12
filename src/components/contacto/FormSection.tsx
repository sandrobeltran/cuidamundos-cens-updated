"use client";

import React, { useState } from "react";
import CustomSection from "../layout/CustomSection";
import HeroesImage from "@public/img/contacto/heroes.png";
import Image from "next/image";
import TextField from "../form/TextField";
import { Formik, FormikState } from "formik";
import FormWrapper from "../form/FormWrapper";
import TextArea from "../form/TextArea";
import { contactValidationSchema } from "@/utils/validations";
import Button from "../Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import EmailSentModal from "./EmailSentModal";

type TInitialValues = {
  name: string;
  email: string;
  phone: number | string;
  message: string;
};

const initialValues: TInitialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const FormSection = () => {
  const [captcha, setCaptcha] = useState<boolean>(false);

  async function handleSubmit(
    values: TInitialValues,
    reset: (
      nextState?: Partial<FormikState<TInitialValues>> | undefined,
    ) => void,
  ) {
    if (!captcha) {
      return toast.error("Completa el captcha para enviar tu mensaje");
    }

    const req = await fetch("/contacto/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
      body: JSON.stringify(values),
    });
    const res = await req.json();

    if (!req.ok) {
      return toast.error(res.message);
    }

    document.getElementById("emailSentModalWrapper")!.style.display = "flex";

    const timer = setTimeout(() => {
      document.getElementById("emailSentModalWrapper")!.style.display = "none";
      clearTimeout(timer);
    }, 3000);

    reset();
  }

  return (
    <CustomSection>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <EmailSentModal />
      <div className="grid max-w-5xl grid-cols-10 items-center max-sm:flex-col max-sm:gap-10">
        <div className="col-span-4 flex flex-col items-center pt-16 mobile-land:pt-6">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) =>
              handleSubmit(values, resetForm)
            }
            validationSchema={contactValidationSchema}
          >
            <FormWrapper>
              <TextField placeholder="Nombre" name="name" />
              <TextField placeholder="Correo" name="email" />
              <TextField placeholder="Teléfono" name="phone" type="number" />
              <TextArea name="message" placeholder="Mensaje" />
              <div className="flex w-full gap-2">
                <input
                  id="captcha"
                  type="checkbox"
                  name="captcha"
                  onChange={(e) => setCaptcha(e.target.checked)}
                  checked={captcha}
                />
                <label htmlFor="captcha" className="font-medium text-stone-500">
                  No soy un robot
                </label>
              </div>
              <div className="w-full">
                <Button type="submit" hierarchy="primary" size="lg">
                  Enviar
                </Button>
              </div>
            </FormWrapper>
          </Formik>
        </div>
        <div className="col-span-6">
          <Image
            src={HeroesImage}
            alt="Heroes Image"
            className="animate-levitating"
          />
        </div>
      </div>
    </CustomSection>
  );
};

export default FormSection;
