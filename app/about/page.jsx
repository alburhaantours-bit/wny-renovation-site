import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTA from "@/components/CTA";

export const metadata = {
  title: "About | WNY Renovations & Repairs LLC",
  description: "About WNY Renovations & Repairs LLC — modern luxury renovations in Buffalo and surrounding suburbs.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container pt-10 pb-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Craftsmanship + communication."
              subtitle="A renovation should feel organized, clean, and premium — not stressful."
              align="left"
            />

            <div className="mt-4 space-y-3 text-sm text-white/75">
              <p>
                WNY Renovations & Repairs LLC provides kitchen and bathroom renovations, tile/flooring, drywall/paint,
                and handyman services across Buffalo and surrounding suburbs.
              </p>
              <p>
                Our standard is simple: clear scope, tight details, and respect for your home — from surface protection
                to cleanup and the final walkthrough.
              </p>
              <p>
                Want a modern-luxury look? We’ll help you choose materials and finishes that elevate the space without
                wasting budget.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn btn-primary" href="/contact">Get a Free Estimate</a>
              <a className="btn btn-ghost" href="tel:7168007854">Call 716-800-7854</a>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/brand/about.jpg"
                alt="Renovation team at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold">Modern luxury, Buffalo-built.</p>
              <p className="mt-1 text-sm text-white/70">
                Replace this image with your own team / project photo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
