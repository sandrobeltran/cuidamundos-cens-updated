const TOKEN_SECRET = process.env.TOKEN_SECRET || 'your-secret-key';

// Generate a CSRF token
export function generateCsrfToken(): string {
    const array = new Uint8Array(32); // 32 bytes = 256 bits
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  

// Verify a CSRF token
export async function verifyCsrfToken(token: string, storedToken: string): Promise<boolean> {
    return await crypto.subtle.digest('SHA-256', new TextEncoder().encode(token))
      .then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
        return hashHex === storedToken;
      });
  }
  