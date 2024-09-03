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
import Link from "next/link";
import { customFetch } from "@/utils/customFetch";

type TInitialValues = {
  username: string;
  question1: string;
  question2: string;
};

const initialValues: TInitialValues = {
  username: "",
  question1: "",
  question2: "",
};

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { setUser, user, setLoading, setError, loading } = useUserStore(
    (state) => state,
  );

  async function handleSubmit(values: TInitialValues) {
    if (loading) return;
    setLoading(true);

    // Login user and get the token
    const loginReq = await customFetch("/iniciar-sesion/api", {
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
      `Bienvenid@, ${fetchUserRes.data.name.split(" ")[0]} ${
        fetchUserRes.data.lastname.split(" ")[0]
      }`,
    );
  }

  return (
    <main className="h-full w-full">
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
      <section className="grid h-[calc(100vh-5rem)] mobile-land:h-calc[100vh-4rem] w-full place-content-center relative z-[2]">
        <div className="flex h-fit w-fit max-w-3xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 shadow-xl shadow-stone-950/10 mobile-land:max-h-[95%] mobile-land:gap-6">
          <SectionTitle title={{ text: "Recuperar", resalted: "Contraseña" }} />
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={loginValidationSchema}
          >
            <FormWrapper>
              <TextField type="text" name="username" placeholder="Usuario" />

              <label className="mb-1 flex w-full flex-col gap-1 text-left font-bold text-cens-brand">
                ¿Cuál es tu color favorito?
                <TextField
                  name="question1"
                  placeholder="Respuesta"
                  password={true}
                />
              </label>
              <label className="mb-1 flex w-full flex-col gap-1 text-left font-bold text-cens-brand">
                ¿Cuál es tu fruta favorita?
                <TextField
                  name="question2"
                  placeholder="Respuesta"
                  password={true}
                />
              </label>
              <div className="mt-4 flex">
                <Button hierarchy="primary" size="md" type="submit">
                  Recuperar
                </Button>
              </div>
              <div className="mt-1 flex w-full items-center justify-center text-sm">
                <Link href={"/"} className="text-cens-brand underline">
                  Volver al inicio
                </Link>
              </div>
            </FormWrapper>
          </Formik>
        </div>
      </section>
    </main>
  );
}
