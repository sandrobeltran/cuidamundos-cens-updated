"use client";

import { customFetch } from "@/utils/customFetch";
import { IEvidence } from "@/utils/customTypes";
import React, { useEffect, useState } from "react";

interface IProps {
  id?: string;
}

const useFetchEvidencesAdmin = ({ id }: IProps) => {
  const [data, setData] = useState<IEvidence[] | null>(null);

  async function handleFecthEvidences(token: string) {
    let endpoint = "/usuario/evidencias/api/admin";

    if (id) {
      endpoint += `?id=${id}`;
    }

    const req = await customFetch(endpoint, {
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

export default useFetchEvidencesAdmin;