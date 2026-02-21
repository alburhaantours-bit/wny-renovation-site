import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "WNY Renovations & Repairs LLC | Buffalo Renovation Company",
  description: "Modern kitchen & bathroom renovations, tile/flooring, drywall/paint, handyman services, and moving/hauling in Buffalo and surrounding suburbs.",
 metadataBase: new URL("https://wnyrenovation.com"),
  openGraph: {
    title: "WNY Renovations & Repairs LLC",
    description: "Modern luxury renovations in Buffalo and its suburbs.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
