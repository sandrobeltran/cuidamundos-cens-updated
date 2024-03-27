import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import User from "./models/User";
import jwt from "jsonwebtoken";
import getCustomError from "./utils/getCustomError";
import rateLimit from "./utils/rateLimit";
import { NextApiResponse } from "next";
import mongodbConnect from "./db/mongodbConnect";

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
  console.log("calling...");
  // API RATE LIMITER, DON'T DELETE
  await limiter.check(res, 1000, "CACHE_TOKEN"); // 15 requests per a half minute

  const headers = new Headers(req.headers);

  const apiKey = headers.get("api-key");

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
  const newRes = NextResponse.next();

  newRes.headers.append("Access-Control-Allow-Credentials", "true");
  newRes.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
  newRes.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT",
  );
  newRes.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  return newRes;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*/api/:path*",
};
