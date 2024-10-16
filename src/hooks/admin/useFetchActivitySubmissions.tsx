"use client";

import { customFetch } from "@/utils/customFetch";
import { IEvidence, ISubmission } from "@/utils/customTypes";
import React, { useEffect, useState } from "react";

interface IProps {
  id?: string;
  authorId?: string;
}

const useFetchActivitySubmissions = ({ id, authorId }: IProps) => {
  const [data, setData] = useState<ISubmission[] | null>(null);

  async function handleFecthEvidences(token: string) {
    let endpoint = `/usuario/evidencias/${id}/api/admin/submissions`;

    if (authorId) {
      endpoint += `?authorId=${authorId}`;
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

export default useFetchActivitySubmissions;
