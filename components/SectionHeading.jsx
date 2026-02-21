export default function SectionHeading({ eyebrow, title, subtitle, align="center" }) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={alignClass}>
      {eyebrow ? (
        <p className="text-xs font-semibold tracking-widest text-white/60">{eyebrow.toUpperCase()}</p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl md:text-4xl">{title}</h2>
      {subtitle ? <p className={"mt-3 text-sm text-white/70 " + (align==="left" ? "max-w-xl" : "mx-auto max-w-2xl")}>{subtitle}</p> : null}
    </div>
  );
}
