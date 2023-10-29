"use client";

import { IEvidence, IGame } from "@/utils/customTypes";
import React, { useEffect, useState } from "react";

type TProps = {};

const useFetchGames = () => {
    const [data, setData] = useState<IGame[] | null>(null);

    async function handleFecthEvidences(token: string) {
        const req = await fetch("/usuario/juegos/api", {
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

export default useFetchGames;
