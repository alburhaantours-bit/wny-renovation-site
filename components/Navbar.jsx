import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Free Estimate" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/logo-mark.png" alt="WNY Renovations logo mark" width={36} height={36} />
          <div className="leading-tight">
            <p className="text-sm font-semibold">WNY Renovations & Repairs</p>
            <p className="text-xs text-white/60">Buffalo • Suburbs</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm text-white/75 hover:text-white">
              {i.label}
            </Link>
          ))}
          <a className="btn btn-primary py-2" href="tel:7168007854">Call</a>
        </nav>

        <div className="md:hidden">
          <a className="btn btn-primary py-2" href="/contact">Estimate</a>
        </div>
      </div>
    </header>
  );
}
