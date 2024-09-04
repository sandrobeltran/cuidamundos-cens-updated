import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import rateLimit from "./utils/rateLimit";
import { NextApiResponse } from "next";
import { generateCsrfToken, verifyCsrfToken } from "./utils/csrfUtils";
import { cookies } from "next/headers";
import { validateUserToken } from "./utils/validateUserToken";
import User from "./models/User";

export interface ICustomResponse {
  status: "success" | "error";
  message: string;
  data?: any;
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

  // ? Admin actions validation
  if (req.nextUrl.pathname.includes("/admin")) {
    //for admin api key
    /*  if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json<ICustomResponse>(
        {
          status: "error",
          message: "No tienes permisos para realizar esta acción",
        },
        { status: 403 },
      );
    } */
  } else {
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

  const csrfToken = req.headers.get("X-CSRF-Token");
  //const csrfToken = req.cookies.get("csrfToken")?.value || "";
  const sessionId = req.cookies.get("sessionId")?.value || "";

  // Verify the CSRF token
  if (
    req.method !== "GET" &&
    (!csrfToken || !verifyCsrfToken(csrfToken, sessionId))
  ) {
    return res.status(403).json({ error: "Invalid CSRF token" });
  }

  NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/:path*/api/:path*", "/latest/meta-data"],
};
