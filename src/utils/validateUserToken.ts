import jwt, { JsonWebTokenError } from "jsonwebtoken"


export function validateUserToken(headers: Headers): string {
    const token = headers.get("Authorization")?.substring(7) as string;
    // verify token signature
    try {
        const tokenPayload = jwt.verify(
            token,
            process.env.APP_SECRET as string,
        ) as jwt.JwtPayload;
        return tokenPayload._id
    } catch (error) {
        throw error
    }
}