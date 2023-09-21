import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import User from "./models/User";
import jwt from "jsonwebtoken";
import getCustomError from "./utils/getCustomError";

export interface ICustomResponse {
  status: "success" | "error";
  message: string;
  data?: any;
}

// This function can be marked `async` if using `await` inside
export default async function middleware(req: NextRequest) {
  const headers = new Headers(req.headers);

  const apiKey = headers.get("api-key");
  if (apiKey !== process.env.API_KEY) {
    return NextResponse.json<ICustomResponse>(
      {
        status: "error",
        message: "Clave de la API inválida",
      },
      { status: 403 },
    );
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*/api/:path*",
};
