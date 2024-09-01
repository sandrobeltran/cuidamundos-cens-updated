"use client";

import NewActivityForm, {
  NewActivityInitialValues,
} from "@/components/panel/actividades/NewActivityForm";
import SpinLoader from "@/components/SpinLoader";
import useFetchEvidencesAdmin from "@/hooks/admin/useFetchEvidencesAdmin";
import { customFetch } from "@/utils/customFetch";
import { getIsoDate } from "@/utils/dateToString";
import { FormikState } from "formik";
import { useParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EditActivityPage() {
  const router = useRouter();
  const { id } = useParams();

  const activities = useFetchEvidencesAdmin({ id: id.toString() });

  if (!activities) {
    return <SpinLoader />;
  }

  const data = activities[0];

  async function handleSubmit(
    values: NewActivityInitialValues,
    reset: (
      nextState?: Partial<FormikState<NewActivityInitialValues>> | undefined,
    ) => void,
  ) {
    const token = localStorage.getItem("session-token");
    const req = await customFetch(`/usuario/evidencias/${data._id}/api/admin`, {
      method: "PUT",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ ...values }),
    });

    const res = await req.json();

    if (!req.ok) {
      return toast.error(res.message);
    }

    toast.success("Actividad actualizada con éxito");
    router.push("/panel/actividades");
  }

  const initialValues: NewActivityInitialValues = {
    deadline: getIsoDate(new Date(data.deadline)),
    deliveryDate: getIsoDate(new Date(data.deliveryDate)),
    description: data.description,
    title: data.title,
    enabledOptions: data.enabledOptions,
  };

  return (
    <div className="w-full">
      <NewActivityForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
      />
    </div>
  );
}
