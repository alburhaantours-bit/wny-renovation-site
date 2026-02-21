"use client";

import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";


const initial = { name: "", phone: "", email: "", address: "", service: "Kitchen renovation", details: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const canSubmit = useMemo(() => {
    return form.name.trim() && form.phone.trim() && form.details.trim();
  }, [form]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      setStatus({ state: "loading", message: "Sending..." });

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");

      setStatus({ state: "success", message: "Thanks! We’ll reach out shortly." });
      setForm(initial);
    } catch (err) {
      setStatus({ state: "error", message: err.message || "Something went wrong." });
    }
  }

  return (
    <section className="container pt-10 pb-12">
      <SectionHeading
        eyebrow="Free estimate"
        title="Tell us about your project."
        subtitle="Share details + photos and we’ll schedule a walkthrough in Buffalo or surrounding suburbs."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-white/70">Name*</label>
                <input className="input mt-2" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Your full name" />
              </div>
              <div>
                <label className="text-xs text-white/70">Phone*</label>
                <input className="input mt-2" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} placeholder="(716) 800-7854" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs text-white/70">Email</label>
                <input className="input mt-2" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="wnyrenovation@gmail.com" />
              </div>
              <div>
                <label className="text-xs text-white/70">Project address / ZIP</label>
                <input className="input mt-2" value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})} placeholder="Buffalo, NY 142xx" />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/70">Service</label>
              <select className="input mt-2" value={form.service} onChange={(e)=>setForm({...form, service:e.target.value})}>
                <option>Kitchen renovation</option>
                <option>Bathroom renovation</option>
                <option>Tile / flooring</option>
                <option>Drywall & paint</option>
                <option>Handyman / punch lists</option>
                <option>Moving / hauling</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-white/70">Project details*</label>
              <textarea className="input mt-2 min-h-[130px]" value={form.details} onChange={(e)=>setForm({...form, details:e.target.value})}
                placeholder="Describe what you want done, ideal timeline, and any materials/brands you prefer." />
              <p className="mt-2 text-xs text-white/50">
                Tip: include measurements and 2–4 photos when you text/email us — it speeds up the estimate.
              </p>
            </div>

            <button className="btn btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed" disabled={!canSubmit || status.state==="loading"}>
              {status.state === "loading" ? "Sending..." : "Request Estimate"}
            </button>

            {status.message ? (
              <p className={status.state==="error" ? "text-sm text-red-300" : "text-sm text-white/80"}>{status.message}</p>
            ) : null}
          </form>
        </div>

        <div className="space-y-4">
          <div className="card p-6">
            <p className="text-sm font-semibold">Direct contact</p>
            <div className="mt-3 space-y-2 text-sm text-white/75">
              <p><span className="text-white/90">Phone:</span> <a className="underline decoration-white/20 hover:decoration-white/40" href="tel:7168007854">716-800-7854</a></p>
              <p><span className="text-white/90">Email:</span> <a className="underline decoration-white/20 hover:decoration-white/40" href="mailto:wnyrenovation@gmail.com">wnyrenovation@gmail.com</a></p>
              <p><span className="text-white/90">Service area:</span> Buffalo and its suburbs</p>
            </div>
          </div>

          <div className="card p-6">
            <p className="text-sm font-semibold">What to send for faster pricing</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• 3–6 photos of the space</li>
              <li>• Rough measurements (or room size)</li>
              <li>• Finish style you want (modern, white, wood tones, etc.)</li>
              <li>• Any deadline (move-in, guests coming, etc.)</li>
            </ul>
          </div>

          <div className="card p-6">
            <p className="text-sm font-semibold">Hours</p>
            <p className="mt-3 text-sm text-white/70">Mon–Sat: 8am–6pm • Sunday: by appointment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
