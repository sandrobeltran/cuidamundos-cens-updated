"use client";

import NewInstitutionForm, {
  NewInstitutionInitialValues,
} from "@/components/panel/instituciones/NewInstitutionForm";
import { customFetch } from "@/utils/customFetch";
import { FormikState } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function NewInstitutionPage() {
  const router = useRouter();

  async function handleSubmit(
    values: NewInstitutionInitialValues,
    reset: (
      nextState?: Partial<FormikState<NewInstitutionInitialValues>> | undefined,
    ) => void,
  ) {
    const token = localStorage.getItem("session-token");
    const req = await customFetch(`/usuario/instituciones/api/admin`, {
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

    toast.success("Institución creada con éxito");

    router.push("/panel/instituciones");
  }

  return (
    <div className="w-full">
      <div className="w-full rounded-3xl bg-white/80 px-16 py-8 shadow-md backdrop-blur-md">
        <NewInstitutionForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}
