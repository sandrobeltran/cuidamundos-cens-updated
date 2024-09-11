"use client";

import { IPaginatedResponse, IPaginatedResponseData } from "@/middleware";
import { customFetch } from "@/utils/customFetch";
import { IEvidence } from "@/utils/customTypes";
import React, { useEffect, useState } from "react";

interface IProps {
  id?: string;
  page?: number;
  limit?: number;
}

const useFetchEvidencesAdmin = (params: IProps) => {
  const [data, setData] = useState<IPaginatedResponseData | null>(null);

  async function handleFecthEvidences(token: string) {
    setData(null);
    let endpoint = "/usuario/evidencias/api/admin?";

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        endpoint += `&${key}=${value}`;
      }
    });

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
  }, [params.page]);

  return data;
};

export default useFetchEvidencesAdmin;
