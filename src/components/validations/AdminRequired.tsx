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
      if (user!.role !== "ADMIN") {
        router.push("/usuario");
      } else {
        /* if (ref.current) {
          ref.current.remove();
        } */
      }
    } else {
    }
  }, [user, loading]);

  if (loading) {
    return <SpinLoader />;
  }

  if (user && user.role !== "ADMIN") {
    return <SpinLoader />;
  }

  return (
    <>
      {/* <div ref={ref}>
      <SpinLoader></SpinLoader>
      </div> */}
    </>
  );
};

export default AdminRequired;
