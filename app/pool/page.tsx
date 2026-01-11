import type { Metadata } from "next";

import Link from "next/link";

import { POOL_PAGES } from "./content";

const ACCENTS = [
  {
    badge: "Heated pool",
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-300",
    ringClass: "hover:border-sky-200",
    iconBgClass: "bg-sky-700",
    icon: "🏖️",
  },
  {
    badge: "Outdoor living",
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-300",
    ringClass: "hover:border-emerald-200",
    iconBgClass: "bg-emerald-700",
    icon: "☀️",
  },
  {
    badge: "Spa vibes",
    badgeClass: "bg-indigo-100 text-indigo-900",
    blobClass: "bg-indigo-300",
    ringClass: "hover:border-indigo-200",
    iconBgClass: "bg-indigo-700",
    icon: "🫧",
  },
  {
    badge: "No pets",
    badgeClass: "bg-slate-200 text-slate-900",
    blobClass: "bg-slate-200",
    ringClass: "hover:border-slate-300",
    iconBgClass: "bg-slate-800",
    icon: "✨",
  },
] as const;

export const metadata: Metadata = {
  title: "Pool & Outdoor Living Rentals | Bay to Beach House (AMI Rentals)",
  description:
    "Explore pool, outdoor living, and hot tub-friendly luxury stays on Anna Maria Island through AMI Rentals. No pets allowed for pristine, allergy-friendly comfort.",
};

export default function PoolIndexPage() {
  const poolPages = POOL_PAGES.filter((p) => p.collection !== "hot-tub");
  const hotTubPages = POOL_PAGES.filter((p) => p.collection === "hot-tub");

  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Pool, outdoor living &amp; spa-style stays
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Pool &amp; Outdoor Living</h1>
          <div className="mt-6 space-y-4 text-lg text-slate-700">
            <p>
              Pools and outdoor living are the centerpiece of a Florida beach vacation—and a major upgrade over hotel stays.
              Enjoy a private backyard experience with clean, quiet comfort.
            </p>
            <p>
              BayToBeachHouse.com represents the AMI Rentals portfolio: pristine, allergy-friendly, HOA-grade outdoor spaces.
              No pets allowed.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/availability"
              className="rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-900/10 transition hover:bg-sky-800"
            >
              Check Availability
            </Link>
            <Link
              href="/photos"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              View Photos
            </Link>
            <Link
              href="/location"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              See Location
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-slate-900">Pool pages</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Browse private pool topics first, then explore spa-style pages if you want a hot tub + pool combo.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {poolPages.map((page, index) => {
              const accent = ACCENTS[index % ACCENTS.length];
              return (
                <Link
                  key={page.slug}
                  href={`/pool/${page.slug}`}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${accent.ringClass}`}
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-50 ${accent.blobClass}`}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm ${accent.iconBgClass}`}
                        >
                          <span className="text-lg">{accent.icon}</span>
                        </div>
                        <p
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}
                        >
                          {accent.badge}
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-slate-400 transition group-hover:text-slate-600">→</span>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold text-slate-900">{page.h1}</h3>
                    <p className="mt-3 text-slate-700">{page.metaDescription}</p>

                    <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
                      Read more
                      <span className="transition group-hover:translate-x-0.5">→</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {hotTubPages.length ? (
            <>
              <h2 className="mt-12 text-2xl font-bold text-slate-900">Hot tub &amp; spa backyard</h2>
              <p className="mt-2 max-w-3xl text-slate-600">
                For guests searching “AMI rental with hot tub,” these pages focus on spa-style outdoor living and pool + hot tub combos.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {hotTubPages.map((page, index) => {
                  const accent = ACCENTS[(index + 2) % ACCENTS.length];
                  return (
                    <Link
                      key={page.slug}
                      href={`/pool/${page.slug}`}
                      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${accent.ringClass}`}
                    >
                      <div
                        className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-50 ${accent.blobClass}`}
                      />
                      <div className="relative">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div
                              className={`grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm ${accent.iconBgClass}`}
                            >
                              <span className="text-lg">🫧</span>
                            </div>
                            <p
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}
                            >
                              Hot tub
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-slate-400 transition group-hover:text-slate-600">→</span>
                        </div>

                        <h3 className="mt-4 text-2xl font-semibold text-slate-900">{page.h1}</h3>
                        <p className="mt-3 text-slate-700">{page.metaDescription}</p>

                        <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
                          Read more
                          <span className="transition group-hover:translate-x-0.5">→</span>
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </>
          ) : null}

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Want the private resort feel—without the hotel crowds?</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Beach mornings, pool afternoons, and a quiet evening soak. Lock in your dates, then pick the outdoor-living vibe you want.
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
        </div>
      </section>
    </main>
  );
}
