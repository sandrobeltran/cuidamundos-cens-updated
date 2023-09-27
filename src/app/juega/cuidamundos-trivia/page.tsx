"use client";

import ResultsSection from "@/components/cuidaMundosTrivia/ResultsSection";
import TriviaContainer from "@/components/cuidaMundosTrivia/TriviaContainer";
import CustomMain from "@/components/layout/CustomMain";
import CustomSection from "@/components/layout/CustomSection";
import PaddingWrapper from "@/components/layout/PaddingWrapper";
import UserRequired from "@/components/validations/UserRequired";
import { useCuidaMundosTrivia } from "@/store/useCuidaMundosTrivia";
import { cuidaMundosQuestions } from "@/trivias/cuidaMundosQuestions";
import { useState } from "react";

export default function CuidaMundosTrivia() {
  const showResults = useCuidaMundosTrivia((state) => state.showResults);

  return (
    <CustomMain>
      <UserRequired />
      <PaddingWrapper>
        {showResults ? (
          <ResultsSection questions={cuidaMundosQuestions} />
        ) : (
          <CustomSection>
            <TriviaContainer questions={cuidaMundosQuestions} />
          </CustomSection>
        )}
      </PaddingWrapper>
    </CustomMain>
  );
}
