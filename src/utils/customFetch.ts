import { setCsrfTokens } from "@/actions/setCsrfToken";
import { generateCsrfToken } from "./csrfUtils";

export const customFetch = async (url: string, options: RequestInit = {}) => {
  await setCsrfTokens();

  const token = generateCsrfToken();

  // Add CSRF token to headers
  const headers = new Headers({
    "Content-Type": "application/json",
    "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
  });

  if (options.headers) {
    new Headers(options.headers).forEach((value, key) => {
      if (!headers.get(key)) headers.append(key, value);
    });
  }

  if (token) {
    headers.append("X-CSRF-Token", token);
  }

  const response = await fetch(url, {
    ...options,
    headers: headers,
  });

  // Handle response as needed
  return response;
};

// Example implementation for fetching the CSRF token
const getCsrfToken = async (): Promise<string> => {
  const request = await fetch("/csrf");

  if (!request.ok) {
    return "no-csrf";
  }

  const response = await request.json();

  return response.csrfToken;
};
