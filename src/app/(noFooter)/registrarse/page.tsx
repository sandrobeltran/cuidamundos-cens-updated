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

type TInitialValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues: TInitialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
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

    router.push("/usuario");
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
            <SectionTitle title={{ text: "Regisrarse" }} />

            <Formik
              initialValues={initialValues}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={signUpValidationSchema}
            >
              <FormWrapper>
                <TextField name="fullName" placeholder="Nombre completo" />
                <TextField name="email" type="email" placeholder="Correo" />
                <TextField name="passwordHash" placeholder="Contraseña" />
                <TextField
                  name="confirmPassword"
                  placeholder="Confirmar Contraseña"
                />
                <div className="flex gap-5">
                  <Button
                    hierarchy="secondary"
                    size="lg"
                    href="/iniciar-sesion"
                  >
                    Iniciar Sesión
                  </Button>
                  <Button hierarchy="primary" size="lg" type="submit">
                    Registrarse
                  </Button>
                </div>
              </FormWrapper>
            </Formik>
          </div>
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
