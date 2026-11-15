/* The one status vocabulary. Every status label in the app maps to one of
   eight tones; screens never pick colours for a status themselves. Labels
   match case-insensitively, so "Under Review", "under review" and
   "UNDER_REVIEW" all land on the same tone. When a new status appears, add
   it here rather than passing colours. */

export type StatusTone =
  "success" | "away" | "warning" | "error" | "info" | "verified" | "brand" | "neutral";

const TONES: Record<Exclude<StatusTone, "neutral">, string[]> = {
  // Done, approved, open to buy
  success: [
    "approved",
    "accepted",
    "paid",
    "completed",
    "complete",
    "available",
    "live",
    "live on marketplace",
    "disbursed",
    "valid",
    "active",
    "granted",
    "resolved",
    "signed",
    "terms accepted",
    "offer accepted",
    "financing available",
    "ready to disburse",
    "owned",
    "fully transferred",
    "discharge issued",
    "funded",
    "confirmed",
    "satisfied",
    "executed",
    "released",
    "settled",
    "on track",
    "current",
    "listed",
    "in line",
  ],
  // Waiting on someone else
  away: [
    "pending",
    "pending review",
    "under review",
    "in review",
    "awaiting review",
    "awaiting",
    "awaiting vendor",
    "awaiting payment",
    "awaiting signature",
    "under offer",
    "due",
    "upcoming",
    "docs submitted",
    "submitted",
    "in progress",
    "pending deposit",
    "processing",
    "on hold",
    "waiting",
    "reserved",
    "acquiring",
    "in transaction",
    "awaiting disbursement",
    "awaiting discharge",
    "lender signing",
    "pending approval",
    "awaiting confirmation",
    "awaiting the vendor",
    "awaiting lender",
    "documents submitted",
    "awaiting countersignature",
  ],
  // The person must act
  warning: [
    "needed",
    "missing",
    "needs replacing",
    "docs requested",
    "documents requested",
    "action required",
    "expiring",
    "incomplete",
    "required",
    "awaiting you",
    "in arrears",
    "arrears",
    "late",
    "deposit due",
    "sign now",
  ],
  // Failed, declined, late
  error: [
    "rejected",
    "declined",
    "overdue",
    "expired",
    "revoked",
    "failed",
    "cancelled",
    "canceled",
    "withdrawn",
    "defaulted",
    "default",
    "terminated",
  ],
  // A transaction stage in motion
  info: [
    "new",
    "credit assessment",
    "drafting term sheet",
    "term sheet issued",
    "offer letter issued",
    "loan agreement issued",
    "conditions precedent",
    "repaying",
    "financier offer",
    "seller financing",
    "vendor financing",
    "rent to buy",
    "fractionalised",
    "stage",
    "servicing",
    "negotiating",
    "countered",
    "counter offer",
    "with a financier",
    "term sheet in preparation",
    "offer letter signed",
  ],
  // Identity or document checked
  verified: ["verified", "uploaded", "kyc verified", "verified vendor"],
  // An Afram highlight
  brand: ["pre-launch", "prelaunch", "recommended", "featured", "joint", "personal funds", "cash"],
};

const LOOKUP = new Map<string, StatusTone>();
for (const [tone, labels] of Object.entries(TONES)) {
  for (const label of labels) LOOKUP.set(label, tone as StatusTone);
}

const norm = (s: string) => s.toLowerCase().replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();

/** The tone for a status label. Unknown labels are neutral. */
export function toneForStatus(label: string | null | undefined): StatusTone {
  if (!label) return "neutral";
  const n = norm(label);
  const hit = LOOKUP.get(n);
  if (hit) return hit;
  if (/^expires? in/.test(n)) return "warning";
  if (/^(expired|overdue|rejected|declined) /.test(n)) return "error";
  if (/^(paid|approved|signed|verified) /.test(n)) {
    return n.startsWith("verified") ? "verified" : "success";
  }
  if (/^due /.test(n)) return "away";
  return "neutral";
}

const ACRONYMS = new Set([
  "KYC",
  "KYB",
  "NIA",
  "GHS",
  "USD",
  "ID",
  "CP",
  "CS",
  "AI",
  "KPI",
  "OTP",
  "PDF",
  "NDA",
  "SPA",
]);
const MONTHS = new Set([
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
const cap = (w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();

/** Sentence case for a status label: "UNDER_REVIEW" and "Under Review" become
 *  "Under review". Acronyms ("KYC verified"), codes and dates ("Expired 12 Oct")
 *  keep their form. */
export function statusLabel(label: string): string {
  const n = label.replace(/_+/g, " ").replace(/\s+/g, " ").trim();
  if (!n) return n;
  const shouting = n === n.toUpperCase();
  const words = n.split(" ").map((w, i) => {
    if (ACRONYMS.has(w.toUpperCase())) return w.toUpperCase();
    if (/\d/.test(w)) return w;
    if (i > 0 && MONTHS.has(cap(w))) return cap(w);
    if (!shouting && /^[A-Z]{2,}$/.test(w)) return w;
    return w.toLowerCase();
  });
  const s = words.join(" ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}
