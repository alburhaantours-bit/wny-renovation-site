import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import TestimonialGrid from "@/components/TestimonialGrid";
import CTA from "@/components/CTA";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

export default function HomePage() {
  return (
    <>
      <LocalBusinessJsonLd />
      <section className="container pt-10 pb-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="badge">Buffalo + Suburbs</span>
              <span className="badge">Kitchen • Bathroom • Tile</span>
              <span className="badge">Clean, on-time, premium finish</span>
            </div>

            <h1 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Modern-luxury renovations that feel <span className="text-white/90">expensive</span> — without the chaos.
            </h1>

            <p className="mt-4 max-w-xl text-white/75">
              WNY Renovations & Repairs LLC helps homeowners upgrade kitchens, bathrooms, flooring, and interiors with
              clear quotes, tight workmanship, and a clean job site from day one to final walkthrough.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="tel:7168007854">Call 716-800-7854</a>
              <Link className="btn btn-ghost" href="/contact">Get a Free Estimate</Link>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="card p-4">
                <p className="text-sm font-semibold">Clear scope</p>
                <p className="mt-1 text-xs text-white/70">Written quotes, change orders, no surprises.</p>
              </div>
              <div className="card p-4">
                <p className="text-sm font-semibold">Premium finish</p>
                <p className="mt-1 text-xs text-white/70">Tile lines, paint edges, and details done right.</p>
              </div>
              <div className="card p-4">
                <p className="text-sm font-semibold">Respect your home</p>
                <p className="mt-1 text-xs text-white/70">Protection, cleanup, and a final walkthrough.</p>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/brand/hero.jpg"
                alt="Modern luxury renovation example"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold">Your next upgrade starts with a walkthrough.</p>
              <p className="mt-1 text-sm text-white/70">
                Tell us what you want to change — we’ll recommend materials, timeline, and a clean plan of action.
              </p>
              <div className="mt-4 flex gap-3">
                <Link className="btn btn-primary" href="/services">View Services</Link>
                <Link className="btn btn-ghost" href="/gallery">See Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <SectionHeading
          eyebrow="Services"
          title="High-impact upgrades, done with a premium standard."
          subtitle="Pick one project or bundle multiple upgrades. We work in Buffalo and surrounding suburbs."
        />
        <ServiceGrid />
      </section>

      <section className="container pb-12">
        <SectionHeading
          eyebrow="Process"
          title="A simple, professional workflow"
          subtitle="Clear steps that keep your project moving and your home livable."
        />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card p-6">
            <p className="text-sm font-semibold">1) Request estimate</p>
            <p className="mt-2 text-sm text-white/70">Send photos + a short description. We’ll schedule a walkthrough.</p>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold">2) Walkthrough + quote</p>
            <p className="mt-2 text-sm text-white/70">We confirm scope, materials, timeline, and provide a written quote.</p>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold">3) Build + final walkthrough</p>
            <p className="mt-2 text-sm text-white/70">We protect surfaces, keep the site clean, and finish strong.</p>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <SectionHeading
          eyebrow="Reviews"
          title="Homeowners recommend us for quality + communication."
          subtitle="Add your Google Reviews link and paste real reviews in the code (easy instructions included)."
        />
        <TestimonialGrid />
      </section>

      <CTA />
    </>
  );
}
