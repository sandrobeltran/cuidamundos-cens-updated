"use client";

import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import ChangeAvatarModal from "@/components/usuario/ChangeAvatarModal";
import EditProfileModal from "@/components/usuario/EditProfileModal";
import PanelMainInfo from "@/components/usuario/PanelMainInfo";
import UserRequired from "@/components/validations/UserRequired";
import dateToString from "@/utils/dateToString";
import Image from "next/image";
import React from "react";
import { ToastContainer } from "react-toastify";
import SkyBackgroundImage from "../../../../public/img/hero_sky.jpg";
import { useUserStore } from "@/store/useUserStore";
import Button from "@/components/Button";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useUserStore();

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
      <EditProfileModal />
      <ChangeAvatarModal />
      <PaddingWrapper>
        <CustomSection>
          <div className="relative z-10 flex w-full flex-col items-center gap-8 text-stone-500 pb-12">
            <PanelMainInfo />
            {children}
          </div>
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
};

export default UserLayout;
