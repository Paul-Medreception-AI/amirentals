import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bradenton Beach Location | AMI Rentals",
  description:
    "AMI Rentals Beach House sits in Bradenton Beach on Anna Maria Island — walkable, quiet, and perfectly situated near the Gulf.",
};

export default function LocationPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mb-6 text-4xl font-bold">Bradenton Beach, Anna Maria Island</h1>

          <p className="mb-10 max-w-3xl text-lg">
            AMI Rentals Beach House is located in Bradenton Beach on Anna Maria Island, one of Florida&apos;s most
            walkable and family-friendly beach towns. The home sits close to the Gulf of Mexico in a quiet residential
            area — close to everything, without feeling busy.
          </p>

          {/* WALKABILITY */}
          <div className="mb-14 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold">Walkable From the House</h2>
              <ul className="space-y-2 text-lg">
                <li>🏖️ Beach access: ~1 minute walk</li>
                <li>🚎 Free Anna Maria Island trolley: nearby stop</li>
                <li>🍽️ Restaurants &amp; cafés: easy walk</li>
                <li>🛍️ Shops &amp; local markets: walkable</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold">Why Guests Love This Location</h2>
              <ul className="space-y-2 text-lg">
                <li>✔ Quiet, residential setting</li>
                <li>✔ No major roads to cross to reach the beach</li>
                <li>✔ Central access to the entire island</li>
                <li>✔ Ideal for families, couples, and repeat guests</li>
              </ul>
            </div>
          </div>

          {/* MAP */}
          <div className="mb-14">
            <h2 className="mb-4 text-2xl font-semibold">Where You&apos;ll Be Staying</h2>
            <p className="mb-6 max-w-3xl text-lg">
              Bradenton Beach sits on the southern end of Anna Maria Island, offering relaxed vibes, quick Gulf access,
              and easy north-south trolley connections across the island.
            </p>

            <div className="h-[400px] w-full overflow-hidden rounded-lg border">
              <iframe
                title="AMI Rentals Location"
                src="https://www.google.com/maps?q=108+12th+St+N,+Bradenton+Beach,+FL&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/availability"
              className="rounded-md bg-black px-8 py-4 font-semibold text-white hover:bg-gray-800"
            >
              Check Availability
            </a>

            <a
              href="/photos"
              className="rounded-md border border-black px-8 py-4 font-semibold hover:bg-black hover:text-white"
            >
              View Photos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
