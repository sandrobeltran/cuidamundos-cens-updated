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

type TInitialValues = {
  username: string;
  password: string;
};

const initialValues: TInitialValues = {
  username: "",
  password: "",
};

export default function Login() {
  const router = useRouter();
  const { setUser, user, setLoading, setError, loading } = useUserStore(
    (state) => state,
  );

  async function handleSubmit(values: TInitialValues) {
    if (loading) return;
    setLoading(true);

    console.log(process.env.NEXT_PUBLIC_API_KEY as string);

    // Login user and get the token
    const loginReq = await fetch("/iniciar-sesion/api", {
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
    toast.success(
      `Bienvenid@, ${fetchUserRes.data.name.split(" ")[0]} ${
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
            <SectionTitle title={{ text: "Iniciar", resalted: "Sesión" }} />
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => handleSubmit(values)}
              validationSchema={loginValidationSchema}
            >
              <FormWrapper>
                <TextField type="text" name="username" placeholder="Usuario" />
                <TextField
                  name="password"
                  placeholder="Contraseña"
                  password={true}
                />
                <div className="mt-4 flex">
                  <Button hierarchy="primary" size="md" type="submit">
                    Iniciar sesión
                  </Button>
                </div>
                <div className="mt-1 flex w-full items-center justify-between text-sm">
                  <p className="text-stone-400">¿Es tu primera vez?</p>
                  <Link
                    href={"/registrarse"}
                    className="text-cens-brand underline"
                  >
                    Registrarse
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
