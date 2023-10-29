import { useAuthorsStore } from "@/store/useAuthorsStore";
import { IAuthor, IEvidence } from "@/utils/customTypes";
import React, { useCallback, useEffect, useState } from "react";

type TProps = {
    authorsId: string[];
};

const useFetchAuthorData = ({ authorsId }: TProps) => {
    const [data, setData] = useState<IAuthor[] | null>(null);
    const { authors, addAuthor } = useAuthorsStore()

    const handleFetchAuthor = useCallback(
        async (token: string) => {

            if (!authorsId.length) return

            const req = await fetch(`/usuario/api/autor?authorsId=${authorsId.join()}`, {
                method: "GET",
                headers: {
                    "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
                    Authorization: `Bearer ${token}`,
                },

            });

            const res = await req.json();

            res.data.forEach((e: IAuthor) => {
                addAuthor(e)
            })
            //setData(res.data);
        },
        [authorsId],
    );

    useEffect(() => {
        const token = localStorage.getItem("session-token");
        handleFetchAuthor(token as string);
    }, [handleFetchAuthor]);

    return data;
};

export default useFetchAuthorData;
