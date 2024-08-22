"use client";

import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import SpinLoader from "../SpinLoader";

const AdminRequired = () => {
  const { user, loading } = useUserStore();
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (user && !loading) {
      if (user!.role != "ADMIN") {
        router.push("/usuario");
      } else {
        ref.current?.remove();
      }
    } else {
    }
  }, [user, loading]);

  return (
    <div ref={ref}>
      <SpinLoader></SpinLoader>
    </div>
  );
};

export default AdminRequired;
