import SectionHeading from "@/components/SectionHeading";
import ServiceGrid from "@/components/ServiceGrid";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services | WNY Renovations & Repairs LLC",
  description: "Kitchen & bathroom renovation, tile/flooring, drywall/paint, handyman services, and moving/hauling in Buffalo and suburbs.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="container pt-10 pb-10">
        <SectionHeading
          eyebrow="What we do"
          title="Renovation services built around a premium finish."
          subtitle="From one-room updates to multi-trade punch lists — we keep the work clean, clear, and high quality."
        />

        <div className="mt-6">
          <ServiceGrid showDetails />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <p className="text-sm font-semibold">Common add-ons</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Demolition + haul-away</li>
              <li>• Caulking, trim, and finish carpentry</li>
              <li>• Vanity / fixture installation</li>
              <li>• Furniture assembly</li>
              <li>• Minor electrical/plumbing coordination (as allowed)</li>
            </ul>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold">Service area</p>
            <p className="mt-3 text-sm text-white/70">
              Buffalo and surrounding suburbs. If you’re not sure whether you’re in-range, send your ZIP code and we’ll confirm.
            </p>
            <a className="btn btn-primary mt-5" href="/contact">Get a Free Estimate</a>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
