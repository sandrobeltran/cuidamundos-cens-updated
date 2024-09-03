"use client";

import { useUserStore } from "@/store/useUserStore";
import React, { useEffect } from "react";
import SecurityQuestionsModal from "../usuario/SecurityQuestionsModal";
import SpinLoader from "../SpinLoader";

const SecurityQuestionsChecker = () => {
  const { user, loading } = useUserStore();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (user && !loading) {
        if (!user.hasSecurityQuestions) {
          document.getElementById("securityQuestionsModal")!.style.display =
            "flex";
        }
      }
    }
  }, [user, loading]);

  if (loading) {
    return <SpinLoader />;
  }

  return <SecurityQuestionsModal />;
};

export default SecurityQuestionsChecker;
