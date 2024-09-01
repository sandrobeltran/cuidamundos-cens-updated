"use client";

import Button from "@/components/Button";
import DateField from "@/components/form/DateField";
import TextArea from "@/components/form/TextArea";
import TextField from "@/components/form/TextField";
import ToggleSwitch from "@/components/form/ToggleSwitch";
import NewActivityForm, {
  NewActivityInitialValues,
} from "@/components/panel/actividades/NewActivityForm";
import { customFetch } from "@/utils/customFetch";
import { FormikState } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function NewEvidencePage() {
  const router = useRouter();

  async function handleSubmit(
    values: NewActivityInitialValues,
    reset: (
      nextState?: Partial<FormikState<NewActivityInitialValues>> | undefined,
    ) => void,
  ) {
    const token = localStorage.getItem("session-token");
    const req = await customFetch(`/usuario/evidencias/api/admin`, {
      method: "POST",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...values, active: true }),
    });

    const res = await req.json();

    if (!req.ok) {
      return toast.error(res.message);
    }

    toast.success("Actividad creada con éxito");

    router.push("/panel/actividades");
  }

  return (
    <div className="w-full">
      <NewActivityForm handleSubmit={handleSubmit} />
    </div>
  );
}
