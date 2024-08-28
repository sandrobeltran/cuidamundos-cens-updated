import { STATES_DICT } from "@/constants/evidencesConstants";
import { ISubmission } from "./customTypes";

export function getSubmissionState(
  submission: ISubmission | undefined,
  remainingDays: number,
) {
  return submission
    ? STATES_DICT[submission.state as keyof typeof STATES_DICT]
    : remainingDays < 0
    ? "Atrasada"
    : "Sin enviar";
}
