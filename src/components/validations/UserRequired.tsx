"use client";

import { useUserStore } from "@/store/useUserStore";
import React, { useEffect } from "react";

const UserRequired = () => {
  const { error, loading, user } = useUserStore((state) => state);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const token = localStorage.getItem("session-token");
      if ((!loading && error && !user) || !token) {
        document.getElementById("loginModalWrapper")!.style.display = "flex";
      } else {
      }
    }
  }, [error, loading]);

  return <></>;
};

export default UserRequired;
