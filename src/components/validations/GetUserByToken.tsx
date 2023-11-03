"use client";

import { useUserStore } from "@/store/useUserStore";
import React, { useCallback, useEffect } from "react";

const GetUserByToken = () => {
  const { setUser, setLoading, setError, user } = useUserStore(
    (state) => state,
  );

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
        if (fetchUserRes.message === "jwt expired") {
          localStorage.removeItem("session-token");
        }

        console.log(fetchUserRes)

        return setError(fetchUserRes.message);
      }

      setUser(fetchUserRes.data);
      setLoading(false);
    },
    [setUser, setError, setLoading],
  );

  useEffect(() => {
    if (typeof window !== "undefined" && typeof document !== "undefined" && !user) {
      const token = localStorage.getItem("session-token");

      if (token) {
        console.log("Token found!");
        handleGetUserByToken(token);
      } else {
        setError("No current user token");
      }
    }
  }, [handleGetUserByToken, setLoading, setError, user]);

  return <></>;
};

export default GetUserByToken;
