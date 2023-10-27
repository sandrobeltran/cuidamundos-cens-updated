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
  const token = localStorage.getItem("session-token");

  async function handleStartCheck() {
    const fetchUserReq = await fetch("/usuario/api", {
      method: "GET",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
    });
    const fetchUserRes = await fetchUserReq.json();

    console.log(fetchUserRes)
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
            <Button
              onClick={() => handleStartCheck()}
              hierarchy="primary"
              size="md"
            >
              Start rate limit check
            </Button>
          </div>
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
