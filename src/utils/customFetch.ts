import { setCsrfTokens } from "@/actions/setCsrfToken";

export const customFetch = async (url: string, options: RequestInit = {}) => {
    await setCsrfTokens();

    const token = document.cookie
    .split('; ')
    .find(row => row.startsWith('csrfToken='))
    ?.split('=')[1];
  

    // Add CSRF token to headers
    const headers = new Headers(options.headers || {});
    if (token) {
        headers.append('X-CSRF-Token', token);
    }

    const response = await fetch(url, {
        ...options,
        headers: {
            ...headers,
            ...options.headers,
            'Content-Type': 'application/json',
            "api-key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
    });

    // Handle response as needed
    return response;
};

// Example implementation for fetching the CSRF token
const getCsrfToken = async (): Promise<string> => {
    const request = await fetch("/csrf")

    if (!request.ok) {
        return "no-csrf"
    }

    const response = await request.json()

    return response.csrfToken;
};
