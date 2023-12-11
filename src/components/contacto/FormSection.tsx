"use client";

import React, { useState } from "react";
import CustomSection from "../layout/CustomSection";
import HeroesImage from "@public/img/contacto/heroes.png";
import Image from "next/image";
import TextField from "../form/TextField";
import { Formik } from "formik";
import FormWrapper from "../form/FormWrapper";
import TextArea from "../form/TextArea";
import { contactValidationSchema } from "@/utils/validations";
import Button from "../Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

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

  async function handleSubmit(values: TInitialValues) {
    if (!captcha) {
      return toast.error("Completa el captcha para enviar tu mensaje");
    }
    console.log(values);
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
        <div className="grid max-w-5xl grid-cols-10 items-center max-sm:flex-col max-sm:gap-10">
          <div className="col-span-4 flex flex-col items-center pt-16">
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => handleSubmit(values)}
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
                  <label
                    htmlFor="captcha"
                    className="font-medium text-stone-500"
                  >
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
            <Image src={HeroesImage} alt="Heroes Image" className="animate-levitating" />
          </div>
        </div>
    </CustomSection>
  );
};

export default FormSection;
