"use client";

import { IEvidence } from "@/utils/customTypes";
import React, { useEffect, useState } from "react";

type TProps = {};

const useFetchEvidences = () => {
  const [data, setData] = useState<IEvidence[] | null>(null);

  async function handleFecthEvidences(token: string) {
    const req = await fetch("/usuario/evidencias/api", {
      method: "GET",
      headers: {
        "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await req.json();

    setData(res.data);
  }

  useEffect(() => {
    const token = localStorage.getItem("session-token");

    handleFecthEvidences(token as string);
  }, []);

  return data;
};

export default useFetchEvidences;
