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
export default function Usuario() {
  const router = useRouter();
  const { user, logOut, loading } = useUserStore();
  const [modalToggle, setModalToggle] = useState<boolean>(false);

  function handleLogOut() {
    router.push("/");
    localStorage.removeItem("session-token");
    logOut();
  }

  if (loading) {
    return (
      <div className="fixed left-0 top-0 z-50 grid h-full w-full place-content-center bg-white">
        <div className="h-16 w-16 animate-spin rounded-full border-[7px] border-stone-200 border-t-cens-brand" />
      </div>
    );
  }

  /* NO USER */
  if (!user) {
    return (
      <CustomMain>
        <UserRequired />
        <PaddingWrapper>
          <Image
            src={SkyBackgroundImage}
            alt="Fondo de cielo CENS"
            fill
            className="z-0"
          />
          <div className="fixed left-0 top-0 z-10 grid h-full w-full place-content-center">
            <div className="flex flex-col items-center justify-center gap-2 rounded-3xl bg-white/70 p-6 text-center backdrop-blur-sm">
              <h4 className="text-3xl font-bold text-cens-brand">
                ¡Uppps!, No sabemos quién eres
              </h4>
              <p className="mb-6 text-stone-500">
                Debes iniciar sesión para ver tu perfil
              </p>
              <Button
                hierarchy="primary"
                size="md"
                onClick={() =>
                  (document.getElementById("loginModalWrapper")!.style.display =
                    "flex")
                }
              >
                Iniciar sesión
              </Button>
            </div>
          </div>
        </PaddingWrapper>
      </CustomMain>
    );
  }

  return (
    <CustomMain>
      <div className="h-20" />
      <UserRequired />
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
      <Image src={SkyBackgroundImage} alt="Fondo de cielo CENS" fill />
      {modalToggle ? (
        <EditProfileModal toggle={modalToggle} set={setModalToggle} />
      ) : (
        <></>
      )}
      <PaddingWrapper>
        <CustomSection>
          <div className="relative z-10 flex w-full flex-col items-center gap-8 text-stone-500">
            {/* USER MAIN INFO */}
            <div className="w-full rounded-3xl bg-white/80 p-8">
              <div className="mb-14 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-40">
                    <div className="absolute -bottom-10 h-40 w-40 rounded-full border-4 border-white">
                      <Image
                        src={user!.avatar}
                        alt="User avatar"
                        fill
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <h6 className="text-3xl font-bold text-cens-brand">
                    {user?.name} {user?.lastname}
                  </h6>
                </div>
                <div>
                  <Button
                    onClick={() => setModalToggle(true)}
                    hierarchy="primary"
                    size="md"
                  >
                    Editar Perfil
                  </Button>
                </div>
                {/* //! TEMPORALLY */}
                <div>
                  <Button
                    onClick={() => handleLogOut()}
                    hierarchy="primary"
                    size="md"
                  >
                    CERRAR SESIÓN
                  </Button>
                </div>
              </div>
              <div className="border-t-2 border-stone-300 pt-4">
                <ul className="flex gap-16 font-normal text-stone-400">
                  <li>
                    <button className="font-semibold text-cens-brand underline underline-offset-4">
                      Información
                    </button>
                  </li>
                  <li>
                    <button className="underline-offset-4">Certificados</button>
                  </li>
                  <li>
                    <button className="underline-offset-4">Juegos</button>
                  </li>
                  <li>
                    <button className="underline-offset-4">Evidencias</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex w-full gap-4">
              {/* ABOUT ME CARD */}
              <div className="flex w-4/12 flex-col items-start gap-2 rounded-3xl bg-white/80 p-8 text-left">
                <h6 className="font-medium text-cens-medium">Sobre mí</h6>
                <p>
                  Cuéntanos un poco sobre ti. ¡Nos encantaría conocerte más!
                </p>
              </div>
              {/* INFO CARD */}
              <div className="flex w-8/12 flex-col items-start gap-2 rounded-3xl bg-white/80 p-8 text-left">
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
                        {user.birthdate ? (
                          dateToString(user.birthdate)
                        ) : (
                          <button
                            className="underline"
                            onClick={() => setModalToggle(true)}
                          >
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
                        {user.address || (
                          <button
                            className="underline"
                            onClick={() => setModalToggle(true)}
                          >
                            Agregar dirección
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Celular:</td>
                      <td className="pl-7 text-stone-400">
                        {user.phone || (
                          <button
                            className="underline"
                            onClick={() => setModalToggle(true)}
                          >
                            Agregar teléfono
                          </button>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Instituto:</td>
                      <td className="pl-7 text-stone-400">
                        {user.school || (
                          <button
                            className="underline"
                            onClick={() => setModalToggle(true)}
                          >
                            Agregar instituto
                          </button>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
