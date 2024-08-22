import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import rateLimit from "./utils/rateLimit";
import { NextApiResponse } from "next";

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
  if (req.nextUrl.href.includes('169.254.169.254')) {
    return new NextResponse('Access denied', { status: 403 });
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
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json<ICustomResponse>(
        {
          status: "error",
          message: "No tienes permisos para realizar esta acción",
        },
        { status: 403 },
      );
    }
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

  return NextResponse.next;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*/api/:path*",
};
