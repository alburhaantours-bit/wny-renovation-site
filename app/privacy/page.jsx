export const metadata = {
  title: "Privacy | WNY Renovations & Repairs LLC",
  description: "Privacy policy for WNY Renovations & Repairs LLC.",
};

export default function PrivacyPage() {
  return (
    <section className="container pt-10 pb-12">
      <h1 className="font-display text-3xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-white/70">
        We collect the information you submit through our contact form (such as name, phone, email, and project details)
        for the purpose of responding to your request and providing an estimate. We do not sell your information.
      </p>
      <p className="mt-3 text-sm text-white/70">
        If you have questions, email <a className="underline decoration-white/20 hover:decoration-white/40" href="mailto:wnyrenovation@gmail.com">wnyrenovation@gmail.com</a>.
      </p>
    </section>
  );
}
