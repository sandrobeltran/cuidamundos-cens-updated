"use client";

import React, { useRef, useState } from "react";
import Button from "../Button";
import { useUserStore } from "@/store/useUserStore";
import { toast } from "react-toastify";
import Image from "next/image";
import AVATARS_DATA from "@/utils/avatarsData";
import { useAuthorsStore } from "@/store/useAuthorsStore";
import { IAuthor } from "@/utils/customTypes";

type TProps = {};

const ChangeAvatarModal = ({}: TProps) => {
  const { setUser, user, setLoading, setError } = useUserStore(
    (state) => state,
  );
  const { updateAuthor } = useAuthorsStore();
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

    const userAsAuthor: IAuthor = {
      _id: updateUserResponse.data._id,
      avatar: updateUserResponse.data.avatar,
      lastname: updateUserResponse.data.lastname,
      name: updateUserResponse.data.name,
    };

    updateAuthor(userAsAuthor);

    toast.success("Avatar actualizado con éxito.");
    closeModal();
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
      <div className="flex h-fit max-h-[90%] w-full max-w-2xl flex-col items-center gap-10 overflow-y-auto rounded-3xl bg-white/90 px-16 py-8 shadow-xl shadow-stone-950/10 mobile-land:max-w-[90%]">
        <div className="flex w-full flex-col items-center gap-2 border-b-2 border-stone-200 pb-4 text-center">
          <h6 className="text-3xl font-bold text-cens-brand">Avatar</h6>
        </div>
        <div className="grid h-fit w-full grid-cols-[repeat(auto-fill,_minmax(152px,_1fr))] items-start justify-center gap-5 mobile-land:grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]">
          {Object.entries(AVATARS_DATA).map((avatar) => (
            <button
              key={avatar[0]}
              className="aspect-square rounded-full border-[6px] shadow-lg shadow-stone-900/20 outline outline-[6px] outline-offset-0 transition-all"
              style={{
                borderColor: selected === avatar[1] ? "#005F24" : "transparent",
                outlineColor:
                  selected === avatar[1] ? "#93C01F" : "transparent",
              }}
              onClick={() => setSelected(avatar[1])}
            >
              <Image
                src={avatar[1]}
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
