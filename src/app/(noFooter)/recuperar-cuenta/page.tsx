"use client";

import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import { Form, Formik } from "formik";
import FormWrapper from "@/components/form/FormWrapper";
import {
  loginValidationSchema,
  restoreAccountValidationSchema,
} from "@/utils/validations";
import TextField from "@/components/form/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";
import { customFetch } from "@/utils/customFetch";
import { ISecurityQuestion } from "@/utils/customTypes";

type TInitialValues = {
  username: string;
  question1: ISecurityQuestion;
  question2: ISecurityQuestion;
  newPassword: "";
};

const initialValues: TInitialValues = {
  username: "",
  question1: {
    question: "¿Cuál es tu color favorito?",
    answer: "",
  },
  question2: {
    question: "¿Cuál es tu fruta favorita?",
    answer: "",
  },
  newPassword: "",
};

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { setUser, user, setLoading, setError, loading } = useUserStore(
    (state) => state,
  );

  async function handleSubmit(values: TInitialValues) {
    if (loading) return;

    // Login user and get the token
    const questionsReq = await customFetch(
      "/usuario/api/recuperar-cuenta/preguntas",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
        body: JSON.stringify({
          username: values.username,
          questions: [values.question1, values.question2],
          newPassword: values.newPassword,
        }),
      },
    );
    const questionsRes = await questionsReq.json();

    if (!questionsReq.ok) {
      toast.error(questionsRes.message);
      return;
    }

    toast.success(questionsRes.message);
    router.push("/usuario")
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
      <section className="mobile-land:h-calc[100vh-4rem] relative z-[2] grid h-[calc(100vh-5rem)] w-full place-content-center">
        <div className="flex h-fit w-fit max-w-3xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 shadow-xl shadow-stone-950/10 mobile-land:max-h-[95%] mobile-land:gap-6">
          <SectionTitle title={{ text: "Recuperar", resalted: "Contraseña" }} />
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={restoreAccountValidationSchema}
          >
            <FormWrapper>
              <TextField type="text" name="username" placeholder="Usuario" />

              <label className="mb-1 flex w-full flex-col gap-1 text-left font-bold text-cens-brand">
                ¿Cuál es tu color favorito?
                <TextField
                  name="question1.answer"
                  placeholder="Respuesta"
                  password={true}
                />
              </label>
              <label className="mb-1 flex w-full flex-col gap-1 text-left font-bold text-cens-brand">
                ¿Cuál es tu fruta favorita?
                <TextField
                  name="question2.answer"
                  placeholder="Respuesta"
                  password={true}
                />
              </label>

              <div className="h-[1px] w-full bg-cens-brand/30"></div>

              <label className="mb-1 flex w-full flex-col gap-1 text-left font-bold text-cens-brand">
                Nueva contraseña
                <TextField
                  name="newPassword"
                  placeholder="Contraseña"
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
