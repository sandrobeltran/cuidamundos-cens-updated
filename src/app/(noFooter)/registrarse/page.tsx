"use client";

import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import TextField from "@/components/form/TextField";
import FormWrapper from "@/components/form/FormWrapper";
import { Formik } from "formik";
import { signUpValidationSchema } from "@/utils/validations";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";

type TInitialValues = {
  name: string;
  lastname: string;
  username: string;
  passwordHash: string;
  confirmPassword: string;
  city: string;
};

const initialValues: TInitialValues = {
  name: "",
  lastname: "",
  username: "",
  passwordHash: "",
  confirmPassword: "",
  city: "",
};
export default function Signup() {
  const { setUser, user, setLoading, setError } = useUserStore(
    (state) => state,
  );
  const router = useRouter();

  async function handleSubmit(values: TInitialValues) {
    setLoading(true);
    // Login user and get the token
    const loginReq = await fetch("/registrarse/api", {
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
    const fetchUserReq = await fetch("/usuario/api", {
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
  }

  return (
    <CustomMain>
      <div className="h-20" />
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
      <PaddingWrapper>
        <CustomSection>
          <div className="flex w-full flex-col items-center gap-8">
            <SectionTitle title={{ text: "Registrarse" }} />

            <Formik
              initialValues={initialValues}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={signUpValidationSchema}
            >
              <FormWrapper>
                <h4 className="text-center text-lg font-semibold text-cens-brand">
                  Crea tu cuenta para empezar a estudiar
                </h4>
                <TextField name="name" placeholder="Nombres" />
                <TextField name="lastname" placeholder="Apellidos" />
                <TextField name="username" type="text" placeholder="Usuario" />
                <TextField name="city" type="text" placeholder="Ciudad" />
                <TextField
                  name="passwordHash"
                  placeholder="Contraseña"
                  password
                />
                <TextField
                  name="confirmPassword"
                  placeholder="Confirmar Contraseña"
                  password
                />
                <div className="mt-4 flex">
                  <Button hierarchy="primary" size="md" type="submit">
                    Registrarse
                  </Button>
                </div>
                <div className="mt-1 flex w-full items-center justify-between text-sm">
                  <p className="text-stone-400">¿Ya tienes una cuenta?</p>
                  <Link
                    href={"/iniciar-sesion"}
                    className="text-cens-brand underline"
                  >
                    Inicia sesión
                  </Link>
                </div>
              </FormWrapper>
            </Formik>
          </div>
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
