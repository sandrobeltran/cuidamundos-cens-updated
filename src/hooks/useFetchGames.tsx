"use client";

import { useUserStore } from "@/store/useUserStore";
import { IEvidence, IGame } from "@/utils/customTypes";
import React, { useEffect, useState } from "react";

type TProps = {};

const useFetchGames = () => {
    const [data, setData] = useState<IGame[] | null>(null);
    const user = useUserStore(state => state.user)

    async function handleFetchGames() {
        const req = await fetch("/usuario/juegos/api", {
            method: "GET",
            headers: {
                "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
            },
        });
        const res = await req.json();

        setData(res.data);
    }

    useEffect(() => {
        handleFetchGames();
    }, [user]);

    return data;
};

export default useFetchGames;
