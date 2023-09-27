"use client";

import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import { useEffect, useRef } from "react";
import jsPDF from "jspdf";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { useUserStore } from "@/store/useUserStore";

export default function Cert() {
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      
    }
  }, [user]);

  return (
    <CustomMain>
      <PaddingWrapper>
        <CustomSection>
          <h1 className="text-6xl font-bold">Certificate</h1>
          <canvas
            className="aspect-[1,41/1] w-full bg-red-500"
            width={1122}
            height={793}
          ></canvas>
        </CustomSection>
      </PaddingWrapper>
    </CustomMain>
  );
}
