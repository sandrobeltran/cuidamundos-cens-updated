"use server";

import { generateCsrfToken } from "@/utils/csrfUtils";
import { cookies } from "next/headers";

export async function setCsrfTokens() {
  // handle csrf tokens

  const generatedSessionId = generateCsrfToken();

  // Create or retrieve CSRF token
  const generatedCsrfToken = generateCsrfToken();

  // Attach the CSRF token to a cookie
  cookies().set("csrfToken", generatedCsrfToken, { httpOnly: true });
  cookies().set("sessionId", generatedSessionId, { httpOnly: true });
}
