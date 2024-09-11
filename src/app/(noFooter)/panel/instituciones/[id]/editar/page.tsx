"use client";

import NewActivityForm, {
  NewActivityInitialValues,
} from "@/components/panel/actividades/NewActivityForm";
import NewInstitutionForm, {
  NewInstitutionInitialValues,
} from "@/components/panel/instituciones/NewInstitutionForm";
import SpinLoader from "@/components/SpinLoader";
import useFetchInstitutionsAdmin from "@/hooks/admin/useFetchInstitutionsAdmin";
import { customFetch } from "@/utils/customFetch";
import { getIsoDate } from "@/utils/dateToString";
import { FormikState } from "formik";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EditInstitutionPage() {
  const router = useRouter();
  const { id } = useParams();

  const institutions = useFetchInstitutionsAdmin({ id: id.toString() });

  if (!institutions) {
    return <SpinLoader />;
  }

  const data = institutions[0];

  async function handleSubmit(
    values: NewInstitutionInitialValues,
    reset: (
      nextState?: Partial<FormikState<NewInstitutionInitialValues>> | undefined,
    ) => void,
  ) {
    const token = localStorage.getItem("session-token");
    const req = await customFetch(
      `/usuario/instituciones/${data._id}/api/admin`,
      {
        method: "PUT",
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...values }),
      },
    );

    const res = await req.json();

    if (!req.ok) {
      return toast.error(res.message);
    }

    toast.success("Institución actualizada con éxito");
    router.push("/panel/instituciones");
  }

  const initialValues: NewInstitutionInitialValues = {
    name: data.name,
    phone: data.phone,
    email: data.email,
  };

  return (
    <div className="w-full">
      <NewInstitutionForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
      />
    </div>
  );
}
