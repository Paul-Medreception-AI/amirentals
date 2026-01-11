import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Link from "next/link";

import { locations, type LocationData } from "@/lib/locations";

const brand = {
  name: "Bay to Beach House",
  base: "Bradenton Beach",
  baseSlug: "bradenton-beach",
  h1Prefix: "Luxury No-Pet Vacation Rentals in",
  policyLabel: "no-pet, allergy-friendly stay",
};

function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug) ?? null;
}

function getNearby(location: LocationData) {
  return location.nearby
    .map((slug) => getLocation(slug))
    .filter((item): item is LocationData => Boolean(item));
}

function buildIntro(location: LocationData) {
  const fitLine =
    location.slug === brand.baseSlug
      ? `${brand.name} sits right here in ${location.name}, so you can settle in fast and keep the beach close.`
      : `From our ${brand.base} address, reaching ${location.name} is ${location.access}.`;
  return `${location.whyLove} It is best for ${location.bestFor} ${fitLine}`;
}

function buildStayCopy(location: LocationData) {
  const accessLine =
    location.slug === brand.baseSlug
      ? `You are already in ${location.name}, with easy access to the beach and local favorites.`
      : `${location.name} is ${location.access} from our ${brand.base} home, so day trips feel effortless.`;
  return `Bay to Beach House is pristine, HOA-grade, and allergy-friendly, with a no-pets policy that keeps the home exceptionally clean. Expect a polished, quiet retreat after beach days. ${accessLine}`;
}

function buildMapsUrl(location: LocationData) {
  const query = `${location.name}, Florida`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

const learnMoreLinks: Record<string, string> = {
  "anna-maria-island": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "bradenton-beach": "https://www.expedia.com/Things-To-Do-In-Bradenton-Beach.d10159.Travel-Guide-Activities",
  "holmes-beach": "https://www.tripadvisor.com/Attractions-g635970-Activities-Anna_Maria_Island_Florida.html",
  "anna-maria-city": "https://www.annamaria.com/anna-maria-island-piers/",
  "coquina-beach": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "manatee-public-beach": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "ami-north-end": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "ami-south-end": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "bean-point": "https://www.hotels.com/go/usa/us-best-things-to-do-anna-maria-island/",
  "pine-avenue": "https://www.annamaria.com/places-to-see-and-things-to-do-on-pine-avenue/",
  "gulf-drive-corridor": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "bridge-street": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "cortez": "https://en.wikipedia.org/wiki/Florida_Maritime_Museum",
  "cortez-fishing-village": "https://en.wikipedia.org/wiki/Florida_Maritime_Museum",
  "sarasota-bay": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
  "bradenton": "https://www.visitflorida.com/places-to-go/southwest/bradenton/",
  "west-bradenton": "https://www.visitflorida.com/places-to-go/southwest/bradenton/",
  "palmetto": "https://www.visitflorida.com/places-to-go/southwest/bradenton/",
  "longboat-key": "https://www.visitflorida.com/places-to-go/southwest/anna-maria-island/",
};

function getLearnMoreLink(location: LocationData) {
  return learnMoreLinks[location.slug];
}

export function getLocationMetadata(slug: string): Metadata {
  const location = getLocation(slug);
  if (!location) return {};
  return {
    title: `${brand.h1Prefix} ${location.name} | ${brand.name}`,
    description: `Luxury, no-pet stays near ${location.name}. ${location.whyLove} View availability at ${brand.name}.`,
  };
}

export function LocationPage({ slug }: { slug: string }) {
  const location = getLocation(slug);
  if (!location) return notFound();

  const nearby = getNearby(location);

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-wrap items-center gap-2">
            <p className="inline-flex rounded-full bg-slate-900/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
              Location guide
            </p>
            <p className="inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900">
              No pets
            </p>
            <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-900">
              Walkable island days
            </p>
          </div>

          <h1 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            {brand.h1Prefix} {location.name}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">{buildIntro(location)}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/availability"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-800"
            >
              Check Availability
            </Link>
            <Link
              href="/photos"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Browse Photos
            </Link>
            <Link
              href="/pool"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Pool Pages
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">Local highlights</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-200/50 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Beach type</p>
                  <p className="mt-3 text-slate-700">{location.highlights.beach}</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-200/50 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Restaurants</p>
                  <p className="mt-3 text-slate-700">{location.highlights.restaurants}</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-200/50 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Walkability</p>
                  <p className="mt-3 text-slate-700">{location.highlights.walkability}</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-200/50 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Vibe</p>
                  <p className="mt-3 text-slate-700">{location.highlights.vibe}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                href={buildMapsUrl(location)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
                <span aria-hidden>↗</span>
              </a>
              {getLearnMoreLink(location) ? (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
                  href={getLearnMoreLink(location)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                  <span aria-hidden>↗</span>
                </a>
              ) : null}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">Stay at {brand.name} here</h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="max-w-3xl text-lg text-slate-700">{buildStayCopy(location)}</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">Explore nearby</h2>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="max-w-3xl text-lg text-slate-700">
                Also explore{" "}
                {nearby.map((spot, index) => (
                  <span key={spot.slug}>
                    <Link className="font-semibold text-sky-800 hover:underline" href={`/locations/${spot.slug}/`}>
                      {spot.name}
                    </Link>
                    {index === nearby.length - 1 ? "." : ", "}
                  </span>
                ))}
                {" "}See our{" "}
                <Link className="font-semibold text-sky-800 hover:underline" href="/location">
                  walk-to-beach location
                </Link>
                , review the{" "}
                <Link className="font-semibold text-sky-800 hover:underline" href="/faq">
                  {brand.policyLabel}
                </Link>
                , and peek at{" "}
                <Link className="font-semibold text-sky-800 hover:underline" href="/photos">
                  pool and family spaces
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Build your perfect {location.name} day</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Choose walkable beach time, great dining, and a pristine home base—then lock in your dates.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Availability
              </Link>
              <Link
                href="/locations"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Browse All Locations
              </Link>
            </div>
          </section>

          <p className="mt-10 text-lg font-semibold text-slate-900">
            View availability at {brand.name} on {location.name}.
          </p>
        </div>
      </section>
    </main>
  );
}
