"use client";

import { Formik, FormikState } from "formik";
import React, { Dispatch, SetStateAction, useRef } from "react";
import FormWrapper from "../form/FormWrapper";
import TextField from "../form/TextField";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import { toast } from "react-toastify";
import { signUpValidationSchema } from "@/utils/validations";
import { customFetch } from "@/utils/customFetch";
import useFetchInstitutionsAdmin from "@/hooks/admin/useFetchInstitutionsAdmin";
import useFetchInstitutions from "@/hooks/useFetchInstitutions";
import InputSelect from "../form/InputSelect";
import { generateCsrfToken } from "@/utils/csrfUtils";

type TProps = {};
type TInitialValues = {
  name: string;
  lastname: string;
  username: string;
  passwordHash: string;
  confirmPassword: string;
  city: string;
  institutionId: string | null;
  classCode: string | null;
};

const initialValues: TInitialValues = {
  name: "",
  lastname: "",
  username: "",
  passwordHash: "",
  confirmPassword: "",
  city: "",
  institutionId: "",
  classCode: "",
};
const RegisterModal = ({}: TProps) => {
  const institutions = useFetchInstitutions({});
  const { setUser, user, setLoading, setError, loading } = useUserStore(
    (state) => state,
  );
  const router = useRouter();
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).id === modalWrapperRef.current?.id) {
      modalWrapperRef.current.style.display = "none";
    }
  }

  async function handleSubmit(
    values: TInitialValues,
    reset: (
      nextState?: Partial<FormikState<TInitialValues>> | undefined,
    ) => void,
  ) {
    if (loading) return;
    setLoading(true);
    // Login user and get the token
    const loginReq = await customFetch("/registrarse/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
      },
      body: JSON.stringify(values),
    });
    const loginRes = await loginReq.json();

    if (!loginReq.ok) {
      console.log(loginRes);
      toast.error(loginRes.message);
      return setError(loginRes.message);
    }

    // Fetch user data
    const fetchUserReq = await customFetch("/usuario/api", {
      method: "GET",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${loginRes.data.token}`,
      },
    });
    const fetchUserRes = await fetchUserReq.json();

    if (!fetchUserReq.ok) {
      toast.error(fetchUserRes.message);
      return setError(fetchUserRes.message);
    }

    // Set a cookie with the JWT token after a successful login
    localStorage.setItem("session-token", loginRes.data.token);

    setUser(fetchUserRes.data);
    toast.success(
      `Bienvenido, ${fetchUserRes.data.name.split(" ")[0]} ${
        fetchUserRes.data.lastname.split(" ")[0]
      }`,
    );
    reset();
    modalWrapperRef.current!.style.display = "none";
  }

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm"
      id="registerModalWrapper"
      onClick={handleClick}
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-fit max-w-3xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 shadow-xl shadow-stone-950/10 mobile-land:max-h-[95%] mobile-land:gap-6">
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="text-3xl font-bold text-cens-brand mobile-land:text-2xl">
            ¡Regístrate para empezar!
          </h2>
          <p className="text-sm text-stone-500">
            ¡Bienvenido a bordo de nuestro viaje de aprendizaje!
          </p>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
          validationSchema={signUpValidationSchema}
        >
          {({ values }) => (
            <FormWrapper>
              <input
                type="hidden"
                name="csrfToken"
                value={generateCsrfToken()}
              />
              <h4 className="text-center text-lg font-semibold text-cens-brand mobile-land:text-[1rem]">
                Crea tu cuenta de Cuidamundos
              </h4>
              <TextField name="name" placeholder="Nombres*" />
              <TextField name="lastname" placeholder="Apellidos*" />
              <TextField name="username" type="text" placeholder="Usuario*" />
              <TextField name="city" type="text" placeholder="Municipio*" />
              <InputSelect name="institutionId">
                {institutions ? (
                  <>
                    <option value={""}>Selecciona tu institución</option>
                    {institutions.map((institution) => (
                      <option key={institution._id} value={institution._id}>
                        {institution.name}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value={""}>Cargando instituciones</option>
                )}
              </InputSelect>
              {values.institutionId ? (
                <TextField
                  name="classCode"
                  placeholder="Código de clase"
                  type="text"
                />
              ) : (
                <></>
              )}

              <TextField
                name="passwordHash"
                placeholder="Contraseña*"
                password
              />
              <TextField
                name="confirmPassword"
                placeholder="Confirmar Contraseña*"
                password
              />
              <div className="mt-4 flex">
                <Button hierarchy="primary" size="md" type="submit">
                  Registrarse
                </Button>
              </div>
              <div className="mt-1 flex w-full items-center justify-between text-sm">
                <p className="text-stone-400">¿Ya tienes una cuenta?</p>
                <button
                  type="button"
                  className="text-cens-brand underline"
                  onClick={() => {
                    document.getElementById(
                      "registerModalWrapper",
                    )!.style.display = "none";
                    document.getElementById(
                      "loginModalWrapper",
                    )!.style.display = "flex";
                  }}
                >
                  Inicia sesión
                </button>
              </div>
            </FormWrapper>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterModal;
