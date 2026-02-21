export default function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "WNY Renovations & Repairs LLC",
    "areaServed": "Buffalo, NY and surrounding suburbs",
    "telephone": "+1-716-800-7854",
    "email": "wnyrenovation@gmail.com",
    "url": "https://wnyrenovation.com"
    "image": "https://wnyrenovation.com/brand/logo-full.png"
    "description": "Kitchen and bathroom renovations, tile/flooring, drywall/paint, handyman services, and moving/hauling in Buffalo and surrounding suburbs."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
