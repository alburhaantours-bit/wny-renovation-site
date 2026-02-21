const testimonials = [
  {
    name: "Homeowner in Buffalo",
    quote: "Very professional, great communication, and the finish looks premium. Would hire again.",
  },
  {
    name: "Rental owner (suburbs)",
    quote: "Handled our punch list quickly and cleanly. Clear quote and no surprises.",
  },
  {
    name: "Bathroom refresh",
    quote: "Tile lines are perfect and everything was left clean every day.",
  },
];

export default function TestimonialGrid() {
  return (
    <div className="mt-8 grid gap-4 md:grid-cols-3">
      {testimonials.map((t, idx) => (
        <div key={idx} className="card p-6">
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="mt-3 text-sm text-white/70">“{t.quote}”</p>
          <p className="mt-4 text-xs text-white/50">Replace with a real review + add your Google Reviews link.</p>
        </div>
      ))}
    </div>
  );
}
