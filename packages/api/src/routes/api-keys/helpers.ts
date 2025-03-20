import { z } from "@hono/zod-openapi";
import crypto from "crypto";


export const paymentProvider = z.enum([
  "PAYSTACK_API_KEY",
  "SELCOM_API_KEY",
  "DPO_API_KEY",
  "FLUTTERWAVE_API_KEY",
  "STRIPE_API_KEY",
]);

export const paymentProviderSchema = z.object({
  provider: paymentProvider,
  apiKey: z.string(),
});

export const AzamCredentialsSchema = z.object({
  appName: z.string(),
  clientId: z.string(),
  clientSecret: z.string(),
});


const algorithm = "aes-256-cbc";
// const key = Buffer.from(process.env.ENCRYPTION_KEY!, "hex");
const key = Buffer.from("Hello world", "hex")
const iv = crypto.randomBytes(16);

export function encrypt(text: string): string {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return iv.toString("hex") + ":" + encrypted;
}

function decrypt(text: string): string {
  const parts = text.split(":");
  const iv = Buffer.from(parts.shift()!, "hex");
  const encryptedText = Buffer.from(parts.join(":"), "hex");
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}