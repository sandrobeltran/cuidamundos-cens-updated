import crypto from "crypto";
import { stringify } from "querystring";

const secretKey = process.env.APP_SECRET as string;

type QueryParameters = Record<string, string | number | boolean>;

function encryptQueryParameters(queryParameters: QueryParameters) {
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    secretKey,
    crypto.randomBytes(16), // Initialization vector (IV)
  );

  const encryptedData =
    cipher.update(stringify(queryParameters), "utf8", "hex") +
    cipher.final("hex");

  return encryptedData;
}

function decryptQueryParameters(encryptedData: any) {
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    secretKey,
    crypto.randomBytes(16), // Initialization vector (IV)
  );

  const decryptedData =
    decipher.update(encryptedData, "hex", "utf8") + decipher.final("utf8");

  return JSON.parse(decryptedData);
}
