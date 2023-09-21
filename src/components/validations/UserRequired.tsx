"use client";

import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const UserRequired = () => {
  const router = useRouter();
  const { error, loading, user } = useUserStore((state) => state);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("session-token");
      if ((!loading && error) || !token) {
        router.push("/iniciar-sesion");
      }
    }
  }, [error, loading, router, user]);

  if (!user) {
    return (
      <div className="fixed left-0 top-0 z-50 grid h-full w-full place-content-center bg-white">
        <div className="h-16 w-16 animate-spin rounded-full border-[7px] border-stone-200 border-t-cens-brand" />
      </div>
    );
  }

  return <></>;
};

export default UserRequired;
