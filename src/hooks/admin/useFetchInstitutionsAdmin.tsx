"use client";

import { customFetch } from "@/utils/customFetch";
import { IEvidence, IInstitution } from "@/utils/customTypes";
import React, { useEffect, useState } from "react";

interface IProps {
  id?: string;
}

const useFetchInstitutionsAdmin = ({ id }: IProps) => {
  const [data, setData] = useState<IInstitution[] | null>(null);

  async function handleFetchInstitutions(token: string) {
    let endpoint = "/usuario/instituciones/api/admin";

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

    handleFetchInstitutions(token as string);
  }, []);

  return data;
};

export default useFetchInstitutionsAdmin;
