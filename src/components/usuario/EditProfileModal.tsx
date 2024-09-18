"use client";

import { Formik } from "formik";
import React, { useRef } from "react";
import FormWrapper from "../form/FormWrapper";
import TextField from "../form/TextField";
import Button from "../Button";
import TextArea from "../form/TextArea";
import { useUserStore } from "@/store/useUserStore";
import { editProfileValidationSchema } from "@/utils/validations";
import { toast } from "react-toastify";
import Image from "next/image";
import { PencilIcon } from "@heroicons/react/24/outline";
import { customFetch } from "@/utils/customFetch";
import { generateCsrfToken } from "@/utils/csrfUtils";

type TInitialValues = {
  name: string;
  lastname: string;
  city: string;
  bio: string;
};

const EditProfileModal = () => {
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  const { user, setLoading, setUser } = useUserStore();

  const initialValues: TInitialValues = {
    name: user!.name || "",
    lastname: user!.lastname || "",
    city: user!.city || "",
    bio: user!.bio || "",
  };

  async function handleSubmit(values: {}) {
    setLoading(true);
    const token = localStorage.getItem("session-token");

    if (!token) return toast("Acción inválida");

    const updateUserRequest = await customFetch("/usuario/api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });
    const updateUserResponse = await updateUserRequest.json();

    if (!updateUserRequest.ok) {
      console.log(updateUserResponse);
      return toast.error(updateUserResponse.message);
    }

    setUser(updateUserResponse.data);
    setLoading(false);
    toast.success("Usuario actualizado con éxito.");
    closeModal();
  }

  function closeModal() {
    modalWrapperRef.current!.style.display = "none";
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).id === modalWrapperRef.current?.id) {
      closeModal();
    }
  }

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/60"
      id="editProfileModalWrapper"
      onClick={handleClick}
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-fit max-w-3xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white px-16 py-8 mobile-land:gap-6">
        {/* PHOTO */}
        <div className="flex w-full flex-col items-center gap-2 border-b-2 border-stone-200 pb-4 text-center">
          <button
            onClick={() =>
              (document.getElementById(
                "changeAvatarModalWrapper",
              )!.style.display = "flex")
            }
            className="relative h-40 w-40 rounded-full border-4 border-white mobile-land:h-32 mobile-land:w-32"
          >
            <Image
              src={user!.avatar}
              alt="User avatar"
              fill
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-2 right-2 rounded-full bg-white p-2 shadow mobile-land:bottom-0 mobile-land:right-0">
              <PencilIcon className="h-4" />
            </div>
          </button>
          <h6 className="text-3xl font-bold text-cens-brand mobile-land:text-2xl">
            {user?.username}
          </h6>
        </div>
        {/* EDIT FORM */}
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={editProfileValidationSchema}
        >
          <FormWrapper>
            <input type="hidden" name="csrfToken" value={generateCsrfToken()} />
            <table className="border-separate border-spacing-1 text-stone-700">
              <tbody className="">
                <tr>
                  <td>Nombres:</td>
                  <td className="pl-7 text-stone-400">
                    <TextField name="name" placeholder="" />
                  </td>
                </tr>
                <tr>
                  <td>Apellidos:</td>
                  <td className="pl-7 text-stone-400">
                    <TextField name="lastname" placeholder="" />
                  </td>
                </tr>
                <tr>
                  <td>Usuario:</td>
                  <td className="pl-7 text-stone-400">
                    <div className="rounded-lg border-2  bg-stone-500/10 px-4 py-2 font-normal backdrop-blur-sm ">
                      {user?.username}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Municipio:</td>
                  <td className="pl-7 text-stone-400">
                    <TextField name="city" placeholder="" />
                  </td>
                </tr>
              </tbody>
            </table>
            <label className="flex w-full flex-col gap-2 text-stone-400">
              <span className="text-stone-700">Sobre mí</span>
              <TextArea
                name="bio"
                rows={3}
                placeholder="Cuéntanos un poco sobre ti. ¡Nos encantaría conocerte más!"
              />
            </label>
            <div>
              <Button size="md" hierarchy="primary" type="submit">
                Guardar cambios
              </Button>
            </div>
          </FormWrapper>
        </Formik>
      </div>
    </div>
  );
};

export default EditProfileModal;
