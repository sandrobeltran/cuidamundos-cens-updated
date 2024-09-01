import { MIME_TYPES_DICT, STATES_DICT } from "@/constants/evidencesConstants";
import { IEvidenceFile, ISubmission } from "./customTypes";

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

export function getFileUrl(file: IEvidenceFile) {
  const buffer = new Uint8Array(file.chunk.data);
  const blob = new Blob([buffer], {
    type: MIME_TYPES_DICT[file.type as keyof typeof MIME_TYPES_DICT] || "",
  });

  const url = URL.createObjectURL(blob);

  return url;
}
