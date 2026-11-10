import { useEffect, useId, useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { company, products, type Product } from "@/data/site";

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-primary outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/25";

function Field({
  label,
  id,
  required,
  wide,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium tracking-wide text-primary">
        {label}
        {required ? (
          <span className="text-destructive" aria-hidden="true">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
    </div>
  );
}

export function EnquiryForm({ product }: { product?: Product | null }) {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // When someone clicks "Enquire Now" on a product, pre-select it.
  useEffect(() => {
    if (product) setSelected(product.name);
  }, [product]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Spam trap: real visitors never fill this hidden field.
    if (data.get("_honey")) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
    if (!accessKey) {
      setErrorMsg(
        "The enquiry form is not set up yet (missing VITE_WEB3FORMS_KEY). Please message us on WhatsApp.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const payload: Record<string, string> = {
        access_key: accessKey,
        subject: `New website enquiry: ${String(data.get("product") || "General")}`,
        from_name: "Laxmikant Worldlink website",
      };
      data.forEach((value, key) => {
        if (key !== "_honey") payload[key] = String(value);
      });

      const res = await fetch(company.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (!res.ok || !json?.success) {
        throw new Error(json?.message || `The form service answered with status ${res.status}.`);
      }
      setStatus("success");
      form.reset();
      setSelected("");
    } catch (err) {
      setErrorMsg(
        err instanceof TypeError
          ? "Could not reach the form service. Check your internet connection, or turn off an ad blocker, and try again."
          : err instanceof Error
            ? err.message
            : "Something went wrong.",
      );
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex h-full min-h-[22rem] flex-col items-center justify-center rounded-3xl border border-gold/30 bg-card p-8 text-center shadow-[var(--shadow-soft)]"
      >
        <CheckCircle2 size={44} className="text-gold" />
        <h3 className="mt-4 text-2xl text-primary">Thank you!</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
          Your enquiry has been sent. Our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="lift-btn mt-6 rounded-full border border-primary/20 px-5 py-2.5 text-sm font-medium text-primary hover:border-gold hover:bg-secondary"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
    >
      <h3 className="text-2xl text-primary">Send an enquiry</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Tell us what you need and we will reply personally.
      </p>

      {/* hidden spam trap */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Your name" id={`${uid}-name`} required>
          <input id={`${uid}-name`} className={field} name="name" placeholder="Full name" required autoComplete="name" />
        </Field>
        <Field label="Company name" id={`${uid}-company`}>
          <input id={`${uid}-company`} className={field} name="company" placeholder="Your business" autoComplete="organization" />
        </Field>
        <Field label="Email" id={`${uid}-email`} required>
          <input id={`${uid}-email`} className={field} type="email" name="email" placeholder="you@company.com" required autoComplete="email" />
        </Field>
        <Field label="Phone / WhatsApp" id={`${uid}-phone`}>
          <input id={`${uid}-phone`} className={field} type="tel" name="phone" placeholder="With country code" autoComplete="tel" />
        </Field>
        <Field label="Country" id={`${uid}-country`}>
          <input id={`${uid}-country`} className={field} name="country" placeholder="Where should we deliver?" autoComplete="country-name" />
        </Field>
        <Field label="Quantity needed" id={`${uid}-qty`}>
          <input id={`${uid}-qty`} className={field} name="quantity" placeholder="For example 500 kg" />
        </Field>
        <Field label="Product" id={`${uid}-product`} wide>
          <select
            id={`${uid}-product`}
            className={field}
            name="product"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select a product (optional)</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="White label packaging">White label packaging</option>
          </select>
        </Field>
        <Field label="Your requirement" id={`${uid}-message`} required wide>
          <textarea
            id={`${uid}-message`}
            className={`${field} min-h-32 resize-y`}
            name="message"
            placeholder="Packaging needs, destination, timeline..."
            required
          />
        </Field>
      </div>

      <div aria-live="polite">
        {status === "error" ? (
          <p className="mt-4 text-sm text-destructive" role="alert">
            {errorMsg || "Sorry, something went wrong."} You can also message us on WhatsApp.
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="lift-btn group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-navy-deep hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Enquiry
            <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
        By sending this form you agree that Laxmikant Worldlink may contact you about your enquiry.
        We do not share your details.
      </p>
    </form>
  );
}
