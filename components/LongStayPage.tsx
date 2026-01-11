import type { Metadata } from "next";
import Link from "next/link";

import { longStayTopics, type LongStayTopic } from "@/lib/long-stays";

const ACCENTS = [
  {
    badge: "Snowbird season",
    badgeClass: "bg-slate-100 text-slate-900",
    blobClass: "bg-slate-300",
    ringClass: "hover:border-slate-200",
    iconBgClass: "bg-slate-800",
  },
  {
    badge: "Monthly stays",
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-300",
    ringClass: "hover:border-amber-200",
    iconBgClass: "bg-amber-600",
  },
  {
    badge: "Quiet winter",
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-300",
    ringClass: "hover:border-emerald-200",
    iconBgClass: "bg-emerald-700",
  },
  {
    badge: "Long-stay comfort",
    badgeClass: "bg-indigo-100 text-indigo-900",
    blobClass: "bg-indigo-300",
    ringClass: "hover:border-indigo-200",
    iconBgClass: "bg-indigo-700",
  },
] as const;

const brand = {
  name: "Bay to Beach House",
  base: "Bradenton Beach",
  baseSlug: "bradenton-beach",
  h1Suffix: "in Bradenton Beach",
  cta: "Enjoy a perfect winter on Anna Maria Island - view availability through AMI Rentals at Bay to Beach House.",
};

function getTopic(slug: string) {
  return longStayTopics.find((topic) => topic.slug === slug) ?? null;
}

function getAccent(slug: string) {
  const index = longStayTopics.findIndex((topic) => topic.slug === slug);
  if (index < 0) return ACCENTS[0];
  return ACCENTS[index % ACCENTS.length];
}

function buildOpening(topic: LongStayTopic) {
  return `${topic.title} ${brand.h1Suffix} are popular because the island stays calm, walkable, and welcoming during the winter months. Guests enjoy the mild weather, relaxed pace, and strong community feel that make long stays effortless. This stay style is ideal for ${topic.focus}`;
}

function buildBrandPositioning() {
  return "Bay to Beach House is pristine, HOA-grade, and allergy-safe with a strict no-pets policy. The home offers a heated pool and hot tub, making it ideal for snowbirds and retirees who want comfort and quiet throughout the season.";
}

function buildLocalContext() {
  return "Bradenton Beach and Anna Maria Island keep daily routines simple, with cafes, grocery stores, and the free island trolley close by. Healthcare access is nearby, giving long-stay guests confidence and convenience.";
}

export function getLongStayMetadata(slug: string): Metadata {
  const topic = getTopic(slug);
  if (!topic) return {};
  return {
    title: `${topic.title} ${brand.h1Suffix} | ${brand.name}`,
    description: `${topic.title} ${brand.h1Suffix} with a pristine, allergy-safe home and a heated pool plus hot tub. No pets allowed.`,
  };
}

export function LongStayPage({ slug }: { slug: string }) {
  const topic = getTopic(slug);
  if (!topic) return null;
  const accent = getAccent(slug);

  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 py-16">
          <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500" aria-label="Breadcrumb">
            <div className="flex flex-wrap items-center gap-2">
              <Link href="/" className="hover:text-slate-700">
                Home
              </Link>
              <span className="text-slate-300">/</span>
              <Link href="/long-stays/" className="hover:text-slate-700">
                Long stays
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{topic.title}</span>
            </div>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}>
              {accent.badge}
            </span>
            <span className="inline-flex rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Long stays
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {topic.title} {brand.h1Suffix}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">{buildOpening(topic)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/availability"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-black"
            >
              View Availability
            </Link>
            <Link
              href="/photos"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              View Photos
            </Link>
            <Link
              href="/locations"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Explore Locations
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition ${accent.ringClass}`}>
              <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-50 ${accent.blobClass}`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className={`grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm ${accent.iconBgClass}`}>
                    <span className="text-lg">✨</span>
                  </div>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Why Bay to Beach House works for long stays</h2>
                <p className="mt-3 text-slate-700">{buildBrandPositioning()}</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-200">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/60 blur-3xl opacity-40" />
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-600 text-white shadow-sm">
                  <span className="text-lg">🗺️</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Local context for seasonal living</h2>
                <p className="mt-3 text-slate-700">{buildLocalContext()}</p>
              </div>
            </div>
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Helpful links for long stays</h2>
            <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <Link className="font-semibold text-slate-900 hover:underline" href={`/locations/${brand.baseSlug}/`}>
                {brand.base} location guide
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/locations/anna-maria-island/">
                Anna Maria Island guide
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/locations/holmes-beach/">
                Holmes Beach guide
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/location">
                Walk-to-beach location
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/photos">
                Pool and home photos
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/faq">
                No-pet policy and FAQs
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/long-stays/">
                All long-stay guides
              </Link>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-amber-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Make winter feel effortless</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Enjoy a pristine, allergy-safe home with a heated pool and hot tub, set up for calm mornings and long evenings.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Dates
              </Link>
              <Link
                href="/photos"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Browse Photos
              </Link>
            </div>
          </section>

          <p className="mt-10 text-lg font-semibold text-slate-900">{brand.cta}</p>
        </div>
      </section>
    </main>
  );
}
