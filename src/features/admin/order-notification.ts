import "server-only";
import { sendMail } from "@/core/mail/server";
import { site } from "@/core/site";
import { getServiceClient, hasServiceRole } from "@/core/supabase/service";
import { formatEur } from "@/lib/format";

type ItemRow = { name: string; quantity: number; price_eur: number };
type OrderRow = {
  id: string;
  total_eur: number;
  email: string | null;
  customer_name: string | null;
  created_at: string;
  order_items: ItemRow[] | null;
};

const SELECT =
  "id, total_eur, email, customer_name, created_at, order_items(name, quantity, price_eur)";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Tells the shop that an order has been paid.
 *
 * The lines are read back from the database rather than taken from the Stripe event, because the
 * database holds the prices the server re-calculated at checkout — the only figures that were
 * actually charged. Reporting anything else risks an email that disagrees with the till.
 *
 * Called only when an order genuinely transitions to paid, so one sale produces one message even
 * though Stripe may deliver the same event more than once.
 */
export async function sendOrderPaidNotification(orderId: string): Promise<boolean> {
  const to = process.env.ORDER_NOTIFICATION_TO;
  if (!to || !hasServiceRole()) return false;

  const { data } = await getServiceClient()
    .from("orders")
    .select(SELECT)
    .eq("id", orderId)
    .maybeSingle();
  if (!data) return false;
  const order = data as unknown as OrderRow;

  const items = order.order_items ?? [];
  const customer = order.customer_name?.trim() || "Client";
  const email = order.email?.trim() || "—";
  const total = formatEur(order.total_eur);
  const placed = new Date(order.created_at).toLocaleString("fr-FR", { timeZone: "Europe/Paris" });
  const adminUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? site.url}/admin/commandes/${order.id}`;

  const lines = items.map(
    (item) => `- ${item.quantity} × ${item.name} — ${formatEur(item.price_eur * item.quantity)}`,
  );

  const text = [
    `Nouvelle commande payée sur ${site.name}.`,
    "",
    `Client    : ${customer}`,
    `E-mail    : ${email}`,
    `Date      : ${placed}`,
    "",
    "Articles :",
    ...lines,
    "",
    `Total     : ${total}`,
    "",
    `Voir la commande : ${adminUrl}`,
  ].join("\n");

  const cell = "padding:4px 16px 4px 0";
  const totalCell = "padding:8px 16px 0 0;border-top:1px solid #ddd";
  const rows = items
    .map(
      (item) =>
        `<tr><td style="${cell}">${item.quantity} × ${escapeHtml(item.name)}</td>` +
        `<td style="padding:4px 0;text-align:right">${formatEur(item.price_eur * item.quantity)}</td></tr>`,
    )
    .join("");

  const html = `<div style="font-family:Helvetica,Arial,sans-serif;color:#1b1b1b;line-height:1.55">
  <p style="margin:0 0 18px"><strong>Nouvelle commande payée sur ${escapeHtml(site.name)}.</strong></p>
  <table cellpadding="0" cellspacing="0" style="margin:0 0 18px">
    <tr><td style="${cell};color:#666">Client</td><td>${escapeHtml(customer)}</td></tr>
    <tr><td style="${cell};color:#666">E-mail</td><td>${escapeHtml(email)}</td></tr>
    <tr><td style="${cell};color:#666">Date</td><td>${escapeHtml(placed)}</td></tr>
  </table>
  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 18px">
    ${rows}
    <tr>
      <td style="${totalCell}"><strong>Total</strong></td>
      <td style="${totalCell};text-align:right"><strong>${total}</strong></td>
    </tr>
  </table>
  <p style="margin:0"><a href="${adminUrl}">Voir la commande dans l’administration</a></p>
</div>`;

  return sendMail({
    to,
    subject: `Nouvelle commande — ${total} — ${site.name}`,
    text,
    html,
    // So hitting reply in the mailbox answers the buyer, not the robot.
    replyTo: order.email?.trim() || undefined,
  });
}
