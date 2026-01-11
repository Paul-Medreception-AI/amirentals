import type { Metadata } from "next";

import Link from "next/link";

import { POOL_PAGES } from "./content";

export const metadata: Metadata = {
  title: "Pool & Outdoor Living Rentals | Bay to Beach House (AMI Rentals)",
  description:
    "Explore pool, outdoor living, and hot tub-friendly luxury stays on Anna Maria Island through AMI Rentals. No pets allowed for pristine, allergy-friendly comfort.",
};

export default function PoolIndexPage() {
  const poolPages = POOL_PAGES.filter((p) => p.collection !== "hot-tub");
  const hotTubPages = POOL_PAGES.filter((p) => p.collection === "hot-tub");

  return (
    <main className="bg-white text-gray-900">
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="mb-6 text-4xl font-bold">Pool &amp; Outdoor Living</h1>
          <p className="mb-10 max-w-3xl text-lg">
            Pools and outdoor living are the centerpiece of a Florida beach vacation—and a major upgrade over hotel stays.
            Enjoy a private backyard experience with clean, quiet comfort.
          </p>
          <p className="mb-12 max-w-3xl text-lg text-gray-700">
            BayToBeachHouse.com represents the AMI Rentals portfolio: pristine, allergy-friendly, HOA-grade outdoor spaces.
            No pets allowed.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {poolPages.map((page) => (
              <Link
                key={page.slug}
                href={`/pool/${page.slug}`}
                className="rounded-2xl border border-gray-200 p-6 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <h2 className="text-xl font-semibold">{page.h1}</h2>
                <p className="mt-2 text-gray-700">{page.metaDescription}</p>
                <p className="mt-4 text-sm font-semibold text-sky-800">Read more</p>
              </Link>
            ))}
          </div>

          <h2 className="mt-16 mb-6 text-3xl font-bold">Hot tub &amp; spa backyard</h2>
          <p className="mb-10 max-w-3xl text-lg text-gray-700">
            For guests searching “AMI rental with hot tub,” these pages focus on spa-style outdoor living and pool + hot
            tub combos.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {hotTubPages.map((page) => (
              <Link
                key={page.slug}
                href={`/pool/${page.slug}`}
                className="rounded-2xl border border-gray-200 p-6 transition hover:border-sky-200 hover:bg-sky-50"
              >
                <h3 className="text-xl font-semibold">{page.h1}</h3>
                <p className="mt-2 text-gray-700">{page.metaDescription}</p>
                <p className="mt-4 text-sm font-semibold text-sky-800">Read more</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <Link
              href="/availability"
              className="rounded-md bg-black px-8 py-4 font-semibold text-white hover:bg-gray-800"
            >
              Check Availability
            </Link>
            <Link
              href="/photos"
              className="rounded-md border border-black px-8 py-4 font-semibold hover:bg-black hover:text-white"
            >
              View Photos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
