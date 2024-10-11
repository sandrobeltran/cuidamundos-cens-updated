import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import rateLimit from "./utils/rateLimit";
import { NextApiResponse } from "next";
import { verifyCsrfToken } from "./utils/csrfUtils";

export interface ICustomResponse {
  status: "success" | "error";
  message: string;
  data?: any;
}

export interface IPaginatedResponse {
  status: "success" | "error";
  message: string;
  data?: {
    metadata: {
      total: number;
      currentPage: number;
      totalPages: number;
    };
    results: any;
  };
}

export interface IPaginatedResponseData {
  metadata: {
    total: number;
    currentPage: number;
    totalPages: number;
  };
  results: any;
}

const limiter = rateLimit({
  interval: 30 * 1000, // 30 seconds
  uniqueTokenPerInterval: 400, // Max 400 users per second
});

// This function can be marked `async` if using `await` inside
export default async function middleware(
  req: NextRequest,
  res: NextApiResponse,
) {
  console.log("NODE_ENV:", process.env.NODE_ENV);

  // CSP Generation
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${
      process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""
    };
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
`;

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

 

  // Check for metadata IP
  if (req.nextUrl.href.includes("/latest/meta-data")) {
    return new NextResponse("Access denied", { status: 401 });
  }

  //? API RATE LIMITER, DON'T DELETE
  await limiter.check(res, 1000, "CACHE_TOKEN"); // 15 requests per a half minute

  const headers = new Headers(req.headers);

  const apiKey = headers.get("api-key");

  if (req.method === "OPTIONS") {
    return NextResponse.json({}, { status: 200 });
  }

  if (req.nextUrl.href.includes("/api")) {
    if (req.method === "POST" || req.method === "PUT") {
      try {
        const body = await req.json();
        if (!body)
          return NextResponse.json<ICustomResponse>(
            {
              status: "error",
              message: "Body de la petición inválido",
            },
            { status: 400 },
          );
      } catch (error) {
        return NextResponse.json<ICustomResponse>(
          {
            status: "error",
            message: "Body de la petición inválido",
          },
          { status: 400 },
        );
      }
    }

    const csrfToken = req.headers.get("csrfToken");
    //const csrfToken = req.cookies.get("csrfToken")?.value || "";
    const sessionId = req.cookies.get("sessionId")?.value || "";

    // Verify the CSRF token
    if (
      /* req.method !== "GET" && */
      !csrfToken ||
      !verifyCsrfToken(csrfToken, sessionId)
    ) {
      return NextResponse.json<ICustomResponse>(
        {
          status: "error",
          message: "Invalid CSRF token",
        },
        { status: 403 },
      );
    }

    // ? Admin actions validation
    if (!req.nextUrl.pathname.includes("/admin")) {
      // ? Normal api-key validation
      if (apiKey !== process.env.API_KEY) {
        return NextResponse.json<ICustomResponse>(
          {
            status: "error",
            message: "Clave de la API inválida",
          },
          { status: 403 },
        );
      }
    }
  }

  if(req.url.includes(".js")){
    console.log("JS Detected")
  }

  const requestHeaders = new Headers(req.headers);


  // if (req.headers.get('accept')?.includes('text/html')) {
    // console.log("TEXT/HTML DETECTED")
    requestHeaders.set("x-nonce", nonce);

    requestHeaders.set(
      "Content-Security-Policy",
      contentSecurityPolicyHeaderValue,
    );
  
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
      headers: requestHeaders,
    });
   /*  response.headers.set(
      "Content-Security-Policy",
      contentSecurityPolicyHeaderValue,
    ); */
  
  // }

  if(req.headers.get("Accept")?.includes("text/html")){
    console.log("TEXT/HTML DETECTED")
  }

  
  console.log("Middleware");
  return response;

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*"
};

// [{source:"/:path*/api/:path*"}, {source:"/_next/static/:path*"}, {
//   source: "/:path*",
//   has: [
//     { type:"header", key:"Accept", value: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8" }
//   ]
// },
// {
//   source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   missing: [
//     { type: 'header', key: 'next-router-prefetch' },
//     { type: 'header', key: 'purpose', value: 'prefetch' },
//   ],
// },

// ],

// matcher: [{
//     source:"/:path*.js"
//   },
// {
//   source: "/:path*/api/:path*"
//   }
// ],
