import type { ReactNode } from "react";

import Image from "next/image";

import TrackedLink from "@/components/TrackedLink";

const heroImages = ["/pool2.avif", "/front.avif", "/livingroom.avif"];

const featureList = [
  { emoji: "🏖️", label: "Walk to the Gulf", description: "Sandy shores just minutes away." },
  { emoji: "🍽️", label: "Close to restaurants", description: "Pine Avenue dining and waterfront seafood." },
  { emoji: "🛴", label: "Free island trolley", description: "Hop on the island shuttle nearby." },
  { emoji: "🛏️", label: "Three bedrooms", description: "Comfortable space for families or groups." },
  { emoji: "�", label: "Private baths", description: "Each bedroom includes its own ensuite for three couples." },
  { emoji: "🪑", label: "Game-ready lounge", description: "Pool table + dart board for friendly competition." },
  { emoji: "�📶", label: "High-speed Wi-Fi", description: "Stream and work with confidence." },
  { emoji: "☀️", label: "Air-conditioned comfort", description: "Stay cool after a day in the sun." },
  { emoji: "🚗", label: "Off-street parking", description: "Room for vehicles without the squeeze." },
];

export default function HomePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative h-[70vh] min-h-[520px]">
        <Image
          src={heroImages[0]}
          alt="AMI Rentals Beach House poolside"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-90"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="mx-auto w-full max-w-5xl px-6 text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-200">Bradenton Beach · Anna Maria Island</p>
          <h1 className="mb-4 text-4xl font-bold drop-shadow-lg md:text-5xl">
            AMI Rentals Beach House — Steps From the Gulf with a Pool
          </h1>
            <p className="mb-6 max-w-2xl text-lg drop-shadow md:text-xl">
              A bright, walkable island home just blocks from the Gulf of Mexico, restaurants, shops, and the free Anna
              Maria Island trolley.
            </p>
            <p className="text-sm uppercase tracking-wide text-slate-200">
              Each bedroom has an ensuite bathroom—perfect for three couples or a family of six.
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackedLink
                href="https://www.vrbo.com/9486364ha"
                eventLabel="VRBO Calendar"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 transition hover:bg-slate-100"
              >
                View VRBO Calendar
              </TrackedLink>
              <a
                href="#availability"
                className="rounded-md border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Book Direct &amp; Save
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-sky-50 to-white py-10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-lg font-semibold text-slate-700">⭐⭐⭐⭐⭐ Highly rated on Airbnb &amp; VRBO</p>
          <p className="mt-2 text-base text-slate-600">
            Charismatic bungalow with a bright living space, modern amenities, and breezy access to Gulf waters.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Why guests choose AMI Rentals Beach House</h2>
          <p className="text-lg text-slate-600">
            A charming 3-bedroom Bradenton Beach escape, perfect for families or groups. Modern comforts meet walkable
            access to the Gulf, dining, and the free island trolley.
          </p>
          <p className="mt-2 text-base text-slate-600">
            Every bedroom includes its own bathroom, making this layout ideal for three couples or a family of six who want
            privacy without sacrificing shared space.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold text-slate-900">Featured amenities</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureList.map(({ emoji, label, description }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm shadow-slate-900/5"
              >
                <p className="text-2xl">{emoji}</p>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{label}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Location &amp; experience</h2>
          <p className="text-lg text-slate-600">
            AMI Rentals Beach House sits in the heart of Bradenton Beach, a laid-back island community with world-class
            beaches, local seafood, and relaxed charm. Walk or bike to the Gulf, explore Pine Avenue, or hop on the free
            island trolley — all within easy reach from your front door.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {heroImages.map((src) => (
              <Photo key={src} src={src} alt="AMI Rentals Beach House" />
            ))}
          </div>
        </div>
      </section>

      <section id="availability" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to check availability?</h2>
          <p className="mb-8 text-lg">Dates fill quickly — plan your Gulf coast getaway today.</p>
          <TrackedLink
            href="https://www.vrbo.com/9486364ha"
            eventLabel="VRBO Availability"
            className="rounded-md bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            View Available Dates
          </TrackedLink>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} AMI Rentals · Bradenton Beach, FL
      </footer>
    </main>
  );
}

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-slate-100">
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover" />
    </div>
  );
}
