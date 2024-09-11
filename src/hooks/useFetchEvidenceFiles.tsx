"use client";

import { MIME_TYPES_DICT } from "@/constants/evidencesConstants";
import { customFetch } from "@/utils/customFetch";
import { IEvidence, IEvidenceFile } from "@/utils/customTypes";
import React, { useEffect, useState } from "react";

interface IProps {
  activityId: string;
  filesIds?: string[];
  authorId?: string;
}

const useFetchEvidenceFiles = ({ activityId, authorId, filesIds }: IProps) => {
  const [data, setData] = useState<IEvidenceFile[] | null>(null);

  async function handleFetchEvidenceFiles(token: string) {
    if (!filesIds) return;
    if (!filesIds.length) return setData([]);

    console.log("Fetching files...");
    const req = await customFetch(
      `/usuario/evidencias/${activityId}/entrega/api/archivos`,
      {
        method: "POST",
        headers: {
          "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          filesIds,
          authorId,
        }),
      },
    );

    if (!req.ok) {
      setData([]);
    }

    const res = await req.json();

    setData(res.data);
  }

  useEffect(() => {
    const token = localStorage.getItem("session-token");

    handleFetchEvidenceFiles(token as string);
  }, [filesIds]);

  return data;
};

export default useFetchEvidenceFiles;
