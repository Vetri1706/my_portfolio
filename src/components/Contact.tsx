"use client";
import { social } from "@/data/social";
import { useState } from "react";
import { sendContact } from "@/lib/email";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const configured = Boolean(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formEl = e.currentTarget as HTMLFormElement | null;
          if (!configured) {
            setError(
              "Email sending is not configured. Add NEXT_PUBLIC_EMAILJS_* variables to .env.local and restart the dev server. See README."
            );
            setStatus("error");
            return;
          }
          setStatus("loading");
          setError(null);
          const fd = new FormData(formEl || undefined);
          const name = String(fd.get("name") || "");
          const email = String(fd.get("email") || "");
          const message = String(fd.get("message") || "");
          try {
            await sendContact({ name, email, message });
            setStatus("success");
            formEl?.reset();
          } catch (err: any) {
            const msg = err?.text || err?.message || (typeof err === 'string' ? err : null);
            setError(msg || "Failed to send. Please try again.");
            setStatus("error");
          }
        }}
        className="rounded-2xl p-5 glass-pan glow-border"
      >
        <div className="grid gap-4">
          <input name="name" required placeholder="Name" className="px-3 py-2 rounded-md bg-black/40 border border-white/10 text-cyan-100 placeholder:text-cyan-200/50" />
          <input name="email" type="email" required placeholder="Email" className="px-3 py-2 rounded-md bg-black/40 border border-white/10 text-cyan-100 placeholder:text-cyan-200/50" />
          <textarea name="message" required placeholder="Message" rows={5} className="px-3 py-2 rounded-md bg-black/40 border border-white/10 text-cyan-100 placeholder:text-cyan-200/50" />
          <div className="flex items-center gap-3">
            <button disabled={status === "loading" || !configured} className="px-4 py-2 rounded-md border border-cyan-400/30 text-cyan-100 hover:bg-cyan-400/10 w-fit disabled:opacity-60">
              {status === "loading" ? "Sending…" : status === "success" ? "Sent ✓" : "Send"}
            </button>
            {!configured && (
              <span className="text-emerald-200/80 text-sm">Set EmailJS keys in .env.local to enable sending.</span>
            )}
            {status === "error" && <span className="text-pink-300 text-sm">{error}</span>}
            {status === "success" && <span className="text-cyan-300 text-sm">Thanks! I’ll get back to you soon.</span>}
          </div>
        </div>
      </form>
      <div className="glass-pan glow-border p-5 rounded-2xl">
        <h3 className="text-cyan-100 font-semibold mb-3">Find me online</h3>
        <ul className="space-y-2 text-cyan-200">
          <li>
            <a className="hover:text-cyan-300" href={social.github}>GitHub</a>
          </li>
          <li>
            <a className="hover:text-cyan-300" href={social.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a className="hover:text-cyan-300" href={social.discord}>Discord</a>
          </li>
          <li>
            <a className="hover:text-cyan-300" href={social.email}>Email</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
