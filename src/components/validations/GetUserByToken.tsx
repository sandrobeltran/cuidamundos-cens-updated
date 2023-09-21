"use client";

import { useUserStore } from "@/store/useUserStore";
import React, { useCallback, useEffect } from "react";

const GetUserByToken = () => {
  const { setUser, setLoading, setError } = useUserStore((state) => state);

  const handleGetUserByToken = useCallback(
    async (token: string) => {
      setLoading(true);

      // Fetch user data
      const fetchUserReq = await fetch("/usuario/api", {
        method: "GET",
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          Authorization: `Bearer ${token}`,
        },
      });
      const fetchUserRes = await fetchUserReq.json();

      if (!fetchUserReq.ok) {
        setError(fetchUserRes.message);
      }

      setUser(fetchUserRes.data);
      setLoading(false);
    },
    [setUser, setError, setLoading],
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("session-token");

      if (token) {
        console.log("Token found!");
        handleGetUserByToken(token);
      }
    }
  }, [handleGetUserByToken, setLoading]);

  return <></>;
};

export default GetUserByToken;
