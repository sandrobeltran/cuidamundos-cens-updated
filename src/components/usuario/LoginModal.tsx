"use client"

import { Formik } from "formik";
import React, { Dispatch, SetStateAction, useRef } from "react";
import FormWrapper from "../form/FormWrapper";
import TextField from "../form/TextField";
import Button from "../Button";
import TextArea from "../form/TextArea";
import { useUserStore } from "@/store/useUserStore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SectionTitle from "../SectionTitle";
import { loginValidationSchema } from "@/utils/validations";
import Link from "next/link";

type TProps = {};

type TInitialValues = {
  email: string;
  password: string;
};

const initialValues: TInitialValues = {
  email: "",
  password: "",
};

const LoginModal = ({ }: TProps) => {
  const { setUser, user, setLoading, setError } = useUserStore(
    (state) => state,
  );
  const router = useRouter();
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).id === modalWrapperRef.current?.id) {
      modalWrapperRef.current.style.display = "none";
    }
  }

  async function handleSubmit(values: TInitialValues) {
    setLoading(true);

    console.log(process.env.NEXT_PUBLIC_API_KEY as string)

    // Login user and get the token
    const signUpReq = await fetch("/iniciar-sesion/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
      body: JSON.stringify(values),
    });
    const signUpRes = await signUpReq.json();

    if (!signUpReq.ok) {
      toast.error(signUpRes.message);
      return setError(signUpRes.message);
    }

    // Fetch user data
    const fetchUserReq = await fetch("/usuario/api", {
      method: "GET",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${signUpRes.data.token}`,
      },
    });
    const fetchUserRes = await fetchUserReq.json();

    if (!fetchUserReq.ok) {
      toast.error(fetchUserRes.message);
      return setError(fetchUserRes.message);
    }

    // Set a cookie with the JWT token after a successful login
    localStorage.setItem("session-token", signUpRes.data.token);

    setUser(fetchUserRes.data);
    toast.success(
      `Bienvenid@, ${fetchUserRes.data.name.split(" ")[0]} ${fetchUserRes.data.lastname.split(" ")[0]
      }`,
    );
    modalWrapperRef.current!.style.display = "none";
  }

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm"
      id="loginModalWrapper"
      onClick={handleClick}
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-fit max-w-3xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 shadow-xl shadow-stone-950/10">
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="text-3xl font-semibold text-cens-brand">
            ¡Bienvenido otra vez!
          </h2>
          <p className="text-sm text-stone-500">Nos alegra verte de nuevo</p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={loginValidationSchema}
        >
          <FormWrapper>
            <div>
              <label
                htmlFor="emailField"
                className="mb-1 inline-block text-left font-semibold text-cens-brand"
              >
                Correo
              </label>
              <TextField type="email" name="email" placeholder="Correo" />
            </div>
            <div>
              <label
                htmlFor="passwordField"
                className="mb-1 inline-block text-left font-semibold text-cens-brand"
              >
                Contraseña
              </label>
              <TextField
                name="password"
                placeholder="Contraseña"
                password={true}
              />
            </div>
            <div className="mt-4 flex">
              <Button hierarchy="primary" size="md" type="submit">
                Inicia sesión
              </Button>
            </div>
            <div className="w-full mt-1 flex items-center justify-between text-sm">
              <p className="text-stone-400">¿Es tu primera vez?</p>
              <button
                type="button"
                className="text-cens-brand underline"
                onClick={() => {
                  document.getElementById("loginModalWrapper")!.style.display =
                    "none";
                  document.getElementById(
                    "registerModalWrapper",
                  )!.style.display = "flex";
                }}
              >
                Regístrate
              </button>
            </div>
          </FormWrapper>
        </Formik>
      </div>
    </div>
  );
};

export default LoginModal;
