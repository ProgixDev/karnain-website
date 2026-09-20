import "server-only";
import nodemailer, { type Transporter } from "nodemailer";

/**
 * Outgoing mail over the brand's own mailbox at o2switch.
 *
 * Sending *through* that server rather than from Vercel is deliberate: the domain's SPF authorises
 * o2switch's IP and its DKIM key signs what leaves it, so an order notification lands in the inbox
 * instead of the spam folder. A message sent straight from a serverless function would be
 * unauthenticated for this domain.
 *
 * Gated on configuration like Stripe and Supabase: with no SMTP settings the app runs, builds and
 * tests exactly as before and simply sends nothing.
 */
const smtp = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  user: process.env.SMTP_USER,
  password: process.env.SMTP_PASSWORD,
  from: process.env.MAIL_FROM,
} as const;

export function isMailConfigured(): boolean {
  return Boolean(smtp.host && smtp.user && smtp.password && smtp.from);
}

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!smtp.host || !smtp.user || !smtp.password) {
    throw new Error("SMTP is not configured.");
  }
  // Cached across warm invocations; the timeouts matter because this runs inside a webhook whose
  // budget is measured in seconds — a hung SMTP socket must fail fast, not hold the request open.
  transporter ??= nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: { user: smtp.user, pass: smtp.password },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
  return transporter;
}

export type MailMessage = {
  to: string;
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
};

/**
 * Sends a message, reporting success as a boolean rather than throwing.
 *
 * Callers are webhooks and background tasks where a failed notification must never fail the
 * operation it describes: an order is paid whether or not the shop manages to email about it, and
 * throwing here would make Stripe retry a payment it already processed.
 */
export async function sendMail(message: MailMessage): Promise<boolean> {
  if (!isMailConfigured()) return false;
  try {
    await getTransporter().sendMail({
      from: smtp.from,
      to: message.to,
      subject: message.subject,
      text: message.text,
      html: message.html,
      replyTo: message.replyTo,
    });
    return true;
  } catch (error) {
    console.error("[mail] send failed:", error instanceof Error ? error.message : error);
    return false;
  }
}
