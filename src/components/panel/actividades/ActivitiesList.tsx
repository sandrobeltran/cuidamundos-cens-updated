"use client";

import { IEvidence } from "@/utils/customTypes";
import React from "react";
import ActivityCard from "./ActivityCard";
import Link from "next/link";

type TProps = {
  activities: IEvidence[] | null;
  links?: boolean;
};

const ActivitiesList = ({ activities, links = false }: TProps) => {
  if (!activities) {
    return <div>Cargando...</div>;
  }

  if (!activities.length) {
    return <div>No hay evidencias aún</div>;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-5">
      {activities.map((evidence) => (
        <ActivityCard key={evidence._id} evidence={evidence} />
      ))}
    </div>
  );
};

export default ActivitiesList;
