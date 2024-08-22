export const customFetch = async (url: string, options: RequestInit = {}) => {
    // Retrieve CSRF token from a global variable, state, or a function
    const csrfToken = await getCsrfToken(); // Implement this function to get the CSRF token

    // Add CSRF token to headers
    const headers = new Headers(options.headers || {});
    if (csrfToken) {
        headers.append('CSRF-Token', csrfToken);
    }

    const response = await fetch(url, {
        ...options,
        headers: {
            ...headers,
            'Content-Type': 'application/json',
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
