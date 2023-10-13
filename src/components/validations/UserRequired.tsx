"use client";

import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const UserRequired = () => {
  const router = useRouter();
  const { error, loading, user } = useUserStore((state) => state);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const token = localStorage.getItem("session-token");
      if ((!loading && error) || !token) {
        document.getElementById("loginModalWrapper")!.style.display = "flex";
      }
    }
  }, [error, loading, router, user]);

  return <></>;
};

export default UserRequired;
