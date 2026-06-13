import { cookies } from "next/headers";
import crypto from "crypto";

const SECRET = process.env.NEXTAUTH_SECRET || "navayuvabharatinfotech_super_secret_key_123!";
const ALGORITHM = "aes-256-cbc";
const KEY = crypto.scryptSync(SECRET, "salt", 32);
const IV_LENGTH = 16;

export function encrypt(text: string): string {
  const iv = crypto.randomBytes(IV_LENGTH);
  const cipher = crypto.createCipheriv(ALGORITHM, KEY, iv);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return `${iv.toString("hex")}:${encrypted}`;
}

export function decrypt(text: string): string | null {
  try {
    const textParts = text.split(":");
    const ivHex = textParts.shift();
    if (!ivHex) return null;
    const iv = Buffer.from(ivHex, "hex");
    const encryptedText = textParts.join(":");
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (e) {
    return null;
  }
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("nyb_session");
  if (!sessionCookie) return null;

  const decrypted = decrypt(sessionCookie.value);
  if (!decrypted) return null;

  try {
    const session = JSON.parse(decrypted);
    // Verify session isn't expired (e.g. 24 hour expiry)
    if (Date.now() > session.expires) {
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export async function setSession(username: string, role: string) {
  const expires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
  const sessionData = JSON.stringify({ username, role, expires });
  const encrypted = encrypt(sessionData);

  const cookieStore = await cookies();
  cookieStore.set("nyb_session", encrypted, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(expires),
    path: "/",
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete("nyb_session");
}
