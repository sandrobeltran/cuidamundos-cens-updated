"use client"

import { Formik } from "formik";
import React, {
  useRef,
  useState,
} from "react";
import FormWrapper from "../form/FormWrapper";
import TextField from "../form/TextField";
import Button from "../Button";
import TextArea from "../form/TextArea";
import { useUserStore } from "@/store/useUserStore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import SectionTitle from "../SectionTitle";
import { loginValidationSchema } from "@/utils/validations";
import Link from "next/link";
import Image from "next/image";

type TProps = {};

const AVATARS_DATA = [
  "https://ucarecdn.com/a12ad6de-49f0-463c-af77-13723cd9e48f/1.png",
  "https://ucarecdn.com/f5fe2117-c0f2-4473-ba0b-dbd838ebe037/2.png",
  "https://ucarecdn.com/16595ce8-ec35-4318-bd84-0fe2af124a92/3.png",
  "https://ucarecdn.com/82649811-a825-4bad-9b80-f8a1b792a25f/4.png",
  "https://ucarecdn.com/c643f037-80b9-4c9c-9ab8-1ba00ad364d7/5.png",
  "https://ucarecdn.com/795f0792-9f08-42e4-bd7e-b90900c95848/6.png",
  "https://ucarecdn.com/3dc375fb-5ce5-4ffd-a045-c9f8419431fd/7.png",
  "https://ucarecdn.com/b75d3950-7301-4f24-851c-bb1580b834c4/8.png",
];

const ChangeAvatarModal = ({}: TProps) => {
  const { setUser, user, setLoading, setError } = useUserStore(
    (state) => state,
  );
  const [selected, setSelected] = useState<string | null>(user!.avatar);
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if ((e.target as HTMLDivElement).id === modalWrapperRef.current?.id) {
      closeModal();
    }
  }

  async function handleSubmit() {
    setLoading(true);
    const token = localStorage.getItem("session-token");

    if (!token) return toast("Acción inválida");

    const updateUserRequest = await fetch("/usuario/api", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ avatar: selected }),
    });
    const updateUserResponse = await updateUserRequest.json();

    if (!updateUserRequest.ok) {
      console.log(updateUserResponse);
      return toast.error(updateUserResponse.message);
    }

    setUser(updateUserResponse.data);
    setLoading(false);
    toast.success("Avatar actualizado con éxito.");
    return closeModal();
  }

  function closeModal() {
    if (modalWrapperRef.current) {
      modalWrapperRef.current.style.display = "none";
      setSelected(user!.avatar);
    }
  }

  return (
    <div
      className="modalWrapper fixed left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-black/20 backdrop-blur-sm"
      id="changeAvatarModalWrapper"
      onClick={handleClick}
      ref={modalWrapperRef}
    >
      <div className="flex h-fit max-h-[90%] w-full max-w-2xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 shadow-xl shadow-stone-950/10">
        <div className="flex w-full flex-col items-center gap-2 border-b-2 border-stone-200 pb-4 text-center">
          <h6 className="text-3xl font-bold text-cens-brand">Avatar</h6>
        </div>
        <div className="grid h-fit w-full grid-cols-[repeat(auto-fill,_minmax(152px,_1fr))] items-start justify-center gap-5">
          {AVATARS_DATA.map((avatar) => (
            <button
              key={avatar}
              className="aspect-square rounded-full border-[6px] shadow-lg shadow-stone-900/20 outline outline-[6px] outline-offset-0 transition-all"
              style={{
                borderColor: selected === avatar ? "#005F24" : "transparent",
                outlineColor: selected === avatar ? "#93C01F" : "transparent",
              }}
              onClick={() => setSelected(avatar)}
            >
              <Image
                src={avatar}
                alt="User Avatar 01 CENS"
                width={160}
                height={160}
                className="w-full rounded-full object-cover"
              />
            </button>
          ))}
        </div>
        <Button hierarchy="primary" size="md" onClick={() => handleSubmit()}>
          Guardar cambios
        </Button>
      </div>
    </div>
  );
};

export default ChangeAvatarModal;
