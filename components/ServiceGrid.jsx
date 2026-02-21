const services = [
  {
    title: "Kitchen Renovation",
    desc: "Cabinets, backsplash, flooring, lighting coordination, and modern finishes.",
    bullets: ["Backsplash tile", "Flooring upgrade", "Drywall + paint", "Finish details"],
  },
  {
    title: "Bathroom Renovation",
    desc: "Vanities, tile, fixtures, and clean waterproof-ready prep.",
    bullets: ["Tile work", "Vanity install", "Paint + trim", "Caulk + finish"],
  },
  {
    title: "Tile / Flooring",
    desc: "Straight lines, clean transitions, durable underlayment and prep.",
    bullets: ["Ceramic / porcelain", "LVP / laminate", "Baseboards", "Transitions"],
  },
  {
    title: "Drywall & Paint",
    desc: "Smooth walls, sharp edges, modern color palettes, and tidy protection.",
    bullets: ["Patch + repair", "Skim coat", "Interior paint", "Trim touch-ups"],
  },
  {
    title: "Handyman / Punch Lists",
    desc: "Fast fixes for rentals, move-ins, inspections, and finishing touches.",
    bullets: ["Mounting", "Door fixes", "Caulking", "Assembly"],
  },
  {
    title: "Moving / Hauling",
    desc: "Help with move-outs, cleanouts, debris hauling, and furniture moves.",
    bullets: ["Haul-away", "Small moves", "Cleanouts", "Furniture help"],
  },
];

export default function ServiceGrid({ showDetails = false }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <div key={s.title} className="card p-6">
          <p className="text-sm font-semibold">{s.title}</p>
          <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          {showDetails ? (
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              {s.bullets.map((b) => <li key={b}>• {b}</li>)}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
  );
}
