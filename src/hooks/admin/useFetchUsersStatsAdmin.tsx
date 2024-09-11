"use client";

import { IPaginatedResponseData } from "@/middleware";
import { customFetch } from "@/utils/customFetch";
import { IUserStats } from "@/utils/customTypes";
import { useEffect, useState } from "react";

interface IProps {
  limit?: number;
  page?: number;
  sort_by?: string;
  sort?: "asc" | "desc";
}

const useFetchUsersStatsAdmin = (params: IProps) => {
  const [data, setData] = useState<IPaginatedResponseData | null>(null);

  async function handleFetchUsersStats(token: string) {
    setData(null);
    let endpoint = "/panel/estadisticas/api?";

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        endpoint += `${key}=${value}&`;
      });
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

    handleFetchUsersStats(token as string);
  }, [params.page]);

  return data;
};

export default useFetchUsersStatsAdmin;
