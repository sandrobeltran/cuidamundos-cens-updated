import jwt, { JsonWebTokenError } from "jsonwebtoken";

export function validateUserToken(headers: Headers): {
  uid: string;
  role: string;
} {
  const token = headers.get("Authorization")?.substring(7) as string;

  if (!token) {
    throw new JsonWebTokenError("No jwt provided");
  }
  // verify token signature
  try {
    const tokenPayload = jwt.verify(
      token,
      process.env.APP_SECRET as string,
    ) as jwt.JwtPayload;

    return {
      uid: tokenPayload._id,
      role: tokenPayload.role,
    };
  } catch (error) {
    throw error;
  }
}
