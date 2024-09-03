"use client";

import { customFetch } from "@/utils/customFetch";
import { IEvidence, IUserStats } from "@/utils/customTypes";
import React, { useEffect, useState } from "react";

interface IProps {
  limit?: string;
}

const useFetchUsersStatsAdmin = ({ limit }: IProps) => {
  const [data, setData] = useState<IUserStats[] | null>(null);

  async function handleFetchUsersStats(token: string) {
    let endpoint = "/panel/estadisticas/api/";

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

    handleFetchUsersStats(token as string);
  }, []);

  return data;
};

export default useFetchUsersStatsAdmin;
