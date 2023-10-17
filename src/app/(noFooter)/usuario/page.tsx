"use client";

import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import UserRequired from "@/components/validations/UserRequired";
import { useUserStore } from "@/store/useUserStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import SkyBackgroundImage from "../../../../public/img/hero_sky.jpg";
import EditProfileModal from "@/components/usuario/EditProfileModal";
import { useState } from "react";
import dateToString from "@/utils/dateToString";
import { PencilIcon } from "@heroicons/react/24/outline";
import ChangeAvatarModal from "@/components/usuario/ChangeAvatarModal";
import PanelMainInfo from "@/components/usuario/PanelMainInfo";

export default function Usuario() {
  const { user } = useUserStore();

  function showEditModal() {
    console.log("sa");
    document.getElementById("editProfileModalWrapper")!.style.display = "flex";
  }

  return (
    <div className="flex w-full gap-4">
      {/* ABOUT ME CARD */}
      <div className="flex w-4/12 flex-col items-start gap-2 rounded-3xl bg-white/80 p-8 text-left backdrop-blur-sm">
        <h6 className="font-medium text-cens-medium">Sobre mí</h6>
        <p>Cuéntanos un poco sobre ti. ¡Nos encantaría conocerte más!</p>
      </div>
      {/* INFO CARD */}
      <div className="flex w-8/12 flex-col items-start gap-2 rounded-3xl bg-white/80 p-8 text-left backdrop-blur-sm">
        <table className="border-separate border-spacing-1 text-stone-700">
          <tbody className="">
            <tr>
              <td>Nombres:</td>
              <td className="pl-7 text-stone-400">{user?.name}</td>
            </tr>
            <tr>
              <td>Apellidos:</td>
              <td className="pl-7 text-stone-400">{user?.lastname}</td>
            </tr>
            <tr>
              <td>Fecha de Nacimiento:</td>
              <td className="pl-7 text-stone-400">
                {user!.birthdate ? (
                  dateToString(user!.birthdate)
                ) : (
                  <button className="underline" onClick={() => showEditModal()}>
                    Agregar fecha
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>Correo Electrónico:</td>
              <td className="pl-7 text-stone-400">{user?.email}</td>
            </tr>
            <tr>
              <td>Dirección:</td>
              <td className="pl-7 text-stone-400">
                {user!.address || (
                  <button className="underline" onClick={() => showEditModal()}>
                    Agregar dirección
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>Celular:</td>
              <td className="pl-7 text-stone-400">
                {user!.phone || (
                  <button className="underline" onClick={() => showEditModal()}>
                    Agregar teléfono
                  </button>
                )}
              </td>
            </tr>
            <tr>
              <td>Instituto:</td>
              <td className="pl-7 text-stone-400">
                {user!.school || (
                  <button className="underline" onClick={() => showEditModal()}>
                    Agregar instituto
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
