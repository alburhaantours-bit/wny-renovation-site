import Link from "next/link";

export default function CTA() {
  return (
    <section className="container pb-14">
      <div className="card p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest text-white/60">READY WHEN YOU ARE</p>
            <h3 className="mt-3 font-display text-3xl">Get a clean quote and a clear timeline.</h3>
            <p className="mt-3 text-sm text-white/70">
              Send photos + details. We’ll schedule a walkthrough and recommend the most cost-effective path to a modern-luxury finish.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link className="btn btn-primary" href="/contact">Free Estimate</Link>
            <a className="btn btn-ghost" href="tel:7168007854">Call 716-800-7854</a>
          </div>
        </div>
      </div>
    </section>
  );
}
