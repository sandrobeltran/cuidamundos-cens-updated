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

export default function Usuario() {
  const router = useRouter();
  const [user, logOut] = useUserStore((state) => [state.user, state.logOut]);

  function handleLogOut() {
    router.push("/");
    localStorage.removeItem("session-token");
    logOut();
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
      <PaddingWrapper>
        <CustomSection>
          <div className="flex w-full flex-col items-center gap-8">
            <SectionTitle>Perfil</SectionTitle>
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-normal text-stone-400">Nombre</span>
                  <h4 className="text-xl font-bold">{user?.fullName}</h4>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-normal text-stone-400">Correo</span>
                  <h4 className="text-xl font-bold">{user?.email}</h4>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-normal text-stone-400">
                    Trivia completada
                  </span>
                  <h4 className="text-xl font-bold">Sí</h4>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-normal text-stone-400">
                    Desafío de Eficiencia Completado
                  </span>
                  <h4 className="text-xl font-bold">Sí</h4>
                </div>
              </div>
              <div className="flex gap-5">
                <Link href={"/usuario/editar"}>
                  <Button hierarchy="primary" size="lg">
                    Editar perfil
                  </Button>
                </Link>
                <button
                  className="flex flex-1 items-center gap-2 rounded-lg border-2 border-red-500 bg-red-500/25 px-2 py-1 text-center font-semibold text-red-500 transition-transform hover:scale-110"
                  onClick={() => handleLogOut()}
                >
                  <ArrowRightOnRectangleIcon className="w-6" />
                  <p>Cerrar sesión</p>
                </button>
              </div>
            </div>
          </div>
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
