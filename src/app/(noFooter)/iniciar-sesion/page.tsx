"use client";

import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import { Form, Formik } from "formik";
import FormWrapper from "@/components/form/FormWrapper";
import { loginValidationSchema } from "@/utils/validations";
import TextField from "@/components/form/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

type TInitialValues = {
  email: string;
  password: string;
};

const initialValues: TInitialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const router = useRouter();
  const { setUser, user, setLoading, setError } = useUserStore(
    (state) => state,
  );

  async function handleSubmit(values: TInitialValues) {
    setLoading(true);
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
            <SectionTitle title={{ text: "Iniciar", resalted: "Sesión" }} />
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={loginValidationSchema}
            >
              <FormWrapper>
                <TextField type="email" name="email" placeholder="Correo" />
                <TextField
                  name="password"
                  placeholder="Contraseña"
                  password={true}
                />
                <div className="flex gap-5">
                  <Button hierarchy="secondary" size="lg" href="/registrarse">
                    Registrarse
                  </Button>
                  <Button hierarchy="primary" size="lg" type="submit">
                    Iniciar Sesión
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
