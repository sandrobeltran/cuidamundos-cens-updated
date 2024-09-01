"use client";

import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import ChangeAvatarModal from "@/components/usuario/ChangeAvatarModal";
import EditProfileModal from "@/components/usuario/EditProfileModal";
import PanelMainInfo from "@/components/usuario/PanelMainInfo";
import UserRequired from "@/components/validations/UserRequired";
import React from "react";
import { ToastContainer } from "react-toastify";
import { useUserStore } from "@/store/useUserStore";
import Button from "@/components/Button";
import SpinLoader from "@/components/SpinLoader";

const links = [
  {
    href: "/panel",
    title: "Información",
  },
  {
    href: "/panel/actividades",
    title: "Actividades",
  },
  {
    href: "/panel/estadisticas",
    title: "Estadísticas",
  },
  {
    href: "/panel/instituciones",
    title: "Instituciones",
  },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useUserStore();

  if (loading) {
    return <SpinLoader />;
  }

  /* NO USER */
  if (!user) {
    return (
      <CustomMain>
        <UserRequired />
        <PaddingWrapper>
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
      <EditProfileModal />
      <ChangeAvatarModal />
      <PaddingWrapper>
        <CustomSection>
          <div className="relative z-10 flex w-full flex-col items-center gap-8 pb-12 text-stone-500">
            <PanelMainInfo links={links} />
            {children}
          </div>
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
};

export default DashboardLayout;
