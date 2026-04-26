"use client";

import { cn } from "@/lib/utils";
import { bookingSchema, type BookingInput } from "@/lib/validation";
import { motion } from "framer-motion";
import type { FormEvent, ReactNode } from "react";
import { useMemo, useState } from "react";
import { GlassButton, GlassPanel } from "./ui";

const initialForm: BookingInput = {
  name: "",
  phone: "",
  device: "",
  service: "",
  issue: "",
  address: "",
  preferredTime: ""
};

const services = ["Screen repair", "Battery replacement", "Software troubleshooting", "Doorstep inspection"];

const devices = ["iPhone", "Samsung flagship", "Other Android flagship", "Mid-range Android", "Budget Android"];

const whatsappNumber = "919903334513";
const fallbackWhatsAppLink = "https://wa.me/919903334513";

function buildWhatsAppMessage(form: BookingInput) {
  return [
    "Hello Infralyx Technologies,",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Device: ${form.device}`,
    `Issue: ${form.issue}`,
    "",
    "I would like to book a repair service."
  ].join("\n");
}

function buildWhatsAppUrl(form: BookingInput) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(buildWhatsAppMessage(form))}`;
}

export function BookingForm() {
  const [form, setForm] = useState<BookingInput>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingInput, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function updateField<K extends keyof BookingInput>(key: K, value: BookingInput[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Redirecting to WhatsApp...");
    setStatus("loading");

    const parsed = bookingSchema.safeParse(form);
    if (!parsed.success) {
      const nextErrors: Partial<Record<keyof BookingInput, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof BookingInput;
        if (!nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      }

      setErrors(nextErrors);
      setStatus("error");
      setMessage("Please check the highlighted fields.");
      return;
    }

    setErrors({});

    const whatsappUrl = buildWhatsAppUrl(parsed.data);
    const popup = window.open("about:blank", "_blank");

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data)
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Something went wrong.");
      }

      if (popup) {
        popup.opener = null;
        popup.location.href = whatsappUrl;
      } else {
        const opened = window.open(whatsappUrl, "_blank");
        if (!opened) {
          throw new Error("WhatsApp did not open.");
        }
      }

      setStatus("success");
      setMessage("Redirecting to WhatsApp...");
      setForm(initialForm);
    } catch (error) {
      popup?.close();
      setStatus("error");
      setMessage(
        error instanceof Error
          ? `${error.message} You can also message us manually at +91 9903334513 or open ${fallbackWhatsAppLink}.`
          : `WhatsApp did not open. Please message us manually at +91 9903334513 or open ${fallbackWhatsAppLink}.`
      );
    }
  }

  return (
    <GlassPanel className="relative overflow-hidden p-5 sm:p-6 lg:p-7">
      <motion.form
        onSubmit={handleSubmit}
        className="grid gap-4"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Full name" error={errors.name}>
            <input
              className="glass-input w-full rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/35"
              placeholder="Your name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
            />
          </Field>
          <Field label="Phone number" error={errors.phone}>
            <input
              className="glass-input w-full rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/35"
              placeholder="+91..."
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
            />
          </Field>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Device" error={errors.device}>
            <select
              className="glass-input w-full rounded-2xl px-4 py-3 text-sm text-white"
              value={form.device}
              onChange={(event) => updateField("device", event.target.value)}
            >
              <option value="">Select device</option>
              {devices.map((device) => (
                <option key={device} value={device} className="bg-slate-950">
                  {device}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Service" error={errors.service}>
            <select
              className="glass-input w-full rounded-2xl px-4 py-3 text-sm text-white"
              value={form.service}
              onChange={(event) => updateField("service", event.target.value)}
            >
              <option value="">Select service</option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-slate-950">
                  {service}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Issue summary" error={errors.issue}>
          <textarea
            className="glass-input min-h-32 w-full rounded-[22px] px-4 py-3 text-sm text-white placeholder:text-white/35"
            placeholder="Describe the issue, symptoms, and any useful details"
            value={form.issue}
            onChange={(event) => updateField("issue", event.target.value)}
          />
        </Field>

        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Service address" error={errors.address}>
            <input
              className="glass-input w-full rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/35"
              placeholder="Home or office address"
              value={form.address}
              onChange={(event) => updateField("address", event.target.value)}
            />
          </Field>
          <Field label="Preferred time" error={errors.preferredTime}>
            <input
              className="glass-input w-full rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/35"
              placeholder="Today, evening, tomorrow morning..."
              value={form.preferredTime}
              onChange={(event) => updateField("preferredTime", event.target.value)}
            />
          </Field>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <GlassButton type="submit" className="w-full sm:w-auto" disabled={status === "loading"}>
            {status === "loading" ? "Redirecting..." : "Request Booking"}
          </GlassButton>
          <GlassButton type="button" tone="secondary" className="w-full sm:w-auto" disabled={!hasErrors}>
            Review details
          </GlassButton>
        </div>

        {message ? (
          <div
            className={cn(
              "rounded-2xl border px-4 py-3 text-sm",
              status === "success" || message.includes("Redirecting")
                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-100"
                : "border-rose-400/30 bg-rose-400/10 text-rose-100"
            )}
          >
            {message}
          </div>
        ) : null}
      </motion.form>
    </GlassPanel>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.22em] text-white/58">{label}</span>
      <div className="grid gap-1">
        {children}
        {error ? <span className="text-xs text-rose-200">{error}</span> : null}
      </div>
    </label>
  );
}
