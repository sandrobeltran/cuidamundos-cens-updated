import { IEvidence } from "@/utils/customTypes";
import React, { useCallback, useEffect, useState } from "react";

type TProps = {
  id: string;
};

const useFetchEvidenceData = ({ id }: TProps) => {
  const [data, setData] = useState<IEvidence | null>(null);

  const handleFetchEvidence = useCallback(
    async (token: string) => {
      const req = await fetch(`/usuario/evidencias/${id}/api`, {
        method: "GET",
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          Authorization: `Bearer ${token}`,
        },
      });

      const res = await req.json();

      setData(res.data);
    },
    [id],
  );

  useEffect(() => {
    const token = localStorage.getItem("session-token");
    handleFetchEvidence(token as string);
  }, [handleFetchEvidence]);

  return data;
};

export default useFetchEvidenceData;
