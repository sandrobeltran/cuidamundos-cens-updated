import { JsonWebTokenError } from "jsonwebtoken";
import { MongooseError } from "mongoose";

export default function getCustomError(error: unknown): { message: string } {
  if (error instanceof JsonWebTokenError) {
    return { message: error.message };
  }

  if (error instanceof MongooseError) {
    return { message: error.message };
  }

console.log(error)
  return { message: "Unknown error" };
}
