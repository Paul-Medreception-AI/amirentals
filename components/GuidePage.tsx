import type { Metadata } from "next";
import Link from "next/link";

import { guideTopics, type GuideTopic } from "@/lib/guides";

const brand = {
  name: "Bay to Beach House",
  base: "Bradenton Beach",
  baseSlug: "bradenton-beach",
  cta: "Stay nearby at Bay to Beach House and enjoy a refined, easy island itinerary.",
};

const ACCENTS = [
  {
    badge: "Refined guide",
    badgeClass: "bg-slate-100 text-slate-900",
    blobClass: "bg-slate-300",
    ringClass: "hover:border-slate-200",
    iconBgClass: "bg-slate-800",
  },
  {
    badge: "Coastal dining",
    badgeClass: "bg-amber-100 text-amber-900",
    blobClass: "bg-amber-300",
    ringClass: "hover:border-amber-200",
    iconBgClass: "bg-amber-600",
  },
  {
    badge: "Quiet escapes",
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-300",
    ringClass: "hover:border-emerald-200",
    iconBgClass: "bg-emerald-700",
  },
  {
    badge: "Luxury feel",
    badgeClass: "bg-indigo-100 text-indigo-900",
    blobClass: "bg-indigo-300",
    ringClass: "hover:border-indigo-200",
    iconBgClass: "bg-indigo-700",
  },
] as const;

type ExternalLink = {
  title: string;
  description: string;
  href: string;
};

const externalLinksBySlug: Record<string, ExternalLink[]> = {
  "best-restaurants": [
    {
      title: "Visit TripAdvisor's Anna Maria Island restaurant guide",
      description: "Explore top-rated restaurants and menus before you arrive.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-seafood": [
    {
      title: "Visit TripAdvisor's Anna Maria Island restaurant guide",
      description: "Seafood favorites and waterfront dining options.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-pizza": [
    {
      title: "Visit TripAdvisor's Anna Maria Island restaurant guide",
      description: "Pizza spots and casual dining options.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-coffee": [
    {
      title: "Browse breakfast and coffee favorites",
      description: "A filtered list of morning spots and cafes.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-zfg9900-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-breakfast": [
    {
      title: "Browse breakfast and coffee favorites",
      description: "A filtered list of morning spots and cafes.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-zfg9900-Anna_Maria_Island_Florida.html",
    },
  ],
  "best-ice-cream": [
    {
      title: "Find desserts and ice cream stops",
      description: "Sweet treats and family-friendly dessert spots.",
      href: "https://www.tripadvisor.com/Restaurants-g635970-zfd20834-Anna_Maria_Island_Florida.html",
    },
  ],
  "things-to-do": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "A quick overview of top activities and beach stops.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
    {
      title: "Watch a quick Anna Maria Island overview",
      description: "A short video that shows the beach and walkable vibe.",
      href: "https://www.youtube.com/watch?v=dpa0jDP7778",
    },
  ],
  "family-activities": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "Family-friendly ideas and easy day plans.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
    {
      title: "Watch a quick Anna Maria Island overview",
      description: "A short video that shows the beach and walkable vibe.",
      href: "https://www.youtube.com/watch?v=dpa0jDP7778",
    },
  ],
  "rainy-day-activities": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "Backup ideas when beach weather changes.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
  ],
  "romantic-things-to-do": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "Sunset-friendly ideas for couples.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
  ],
  "sunset-spots": [
    {
      title: "Visit Florida's Anna Maria Island guide",
      description: "Sunset stops and beach viewpoints.",
      href: "https://www.visitflorida.com/travel-ideas/articles/10-things-to-do-in-anna-maria-island-fl/",
    },
  ],
  "fishing": [
    {
      title: "Read the Anna Maria Island fishing guide",
      description: "Local fishing tips, charters, and seasonal notes.",
      href: "https://www.annamaria.com/fishing/",
    },
  ],
  "boating": [
    {
      title: "Read the Anna Maria Island fishing guide",
      description: "Local charters, water access, and seasonal tips.",
      href: "https://www.annamaria.com/fishing/",
    },
  ],
  "kayaking": [
    {
      title: "Read the Anna Maria Island fishing guide",
      description: "Water access tips and nearby launch ideas.",
      href: "https://www.annamaria.com/fishing/",
    },
  ],
};

function getExternalLinks(slug: string) {
  return externalLinksBySlug[slug] ?? [];
}

function getTopic(slug: string) {
  return guideTopics.find((topic) => topic.slug === slug) ?? null;
}

function getAccent(slug: string) {
  const index = guideTopics.findIndex((topic) => topic.slug === slug);
  if (index < 0) return ACCENTS[0];
  return ACCENTS[index % ACCENTS.length];
}

function buildOpening(topic: GuideTopic) {
  return `${topic.h1} in ${brand.base} help travelers plan elegant, low-stress days near the Gulf. Guests appreciate the calm pace, refined options, and polished island feel that make every outing effortless. This guide is best for ${topic.focus}`;
}

function buildWhyLove(topic: GuideTopic) {
  return `${brand.base} pairs coastal beauty with thoughtful dining, quiet neighborhoods, and an upscale rhythm. ${topic.title} stand out here because you can enjoy refined options without sacrificing the relaxed island pace.`;
}

function buildBestFor(topic: GuideTopic) {
  return `Best for ${topic.focus} plus travelers who prioritize quality, comfort, and calm surroundings.`;
}

function buildDistance() {
  return "Many favorites are a short drive away, while Bridge Street and Gulf Drive offer walkable pockets with dining and sunset views.";
}

function buildBrandTieIn() {
  return "Bay to Beach House is pristine and allergy-safe with a no-pets policy, making it ideal for guests who value cleanliness and refined experiences.";
}

export function getGuideMetadata(slug: string): Metadata {
  const topic = getTopic(slug);
  if (!topic) return {};
  return {
    title: `${topic.h1} in ${brand.base} | ${brand.name}`,
    description: `${topic.h1} in ${brand.base} with refined recommendations and easy island access.`,
  };
}

export function GuidePage({ slug }: { slug: string }) {
  const topic = getTopic(slug);
  if (!topic) return null;
  const accent = getAccent(slug);
  const externalLinks = getExternalLinks(slug);

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
              <Link href="/guide/" className="hover:text-slate-700">
                Guide
              </Link>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">{topic.title}</span>
            </div>
          </nav>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${accent.badgeClass}`}>
              {accent.badge}
            </span>
            <span className="inline-flex rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Local guide
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            {topic.h1} in {brand.base}
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
              href="/experiences"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Explore Experiences
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
                <div className={`grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm ${accent.iconBgClass}`}>
                  <span className="text-lg">✨</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Why people love it</h2>
                <p className="mt-3 text-slate-700">{buildWhyLove(topic)}</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-200">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/60 blur-3xl opacity-40" />
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-amber-600 text-white shadow-sm">
                  <span className="text-lg">👥</span>
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">Who it’s best for</h2>
                <p className="mt-3 text-slate-700">{buildBestFor(topic)}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Walking vs driving</h3>
              <p className="mt-3 text-slate-700">{buildDistance()}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Why Bay to Beach House fits</h3>
              <p className="mt-3 text-slate-700">{buildBrandTieIn()}</p>
            </div>
          </div>

          {externalLinks.length ? (
            <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Learn more about the area</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {externalLinks.map((link) => (
                  <a
                    key={link.href}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 transition hover:border-slate-300 hover:bg-white"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="text-base font-semibold text-slate-900">{link.title}</div>
                    <p className="mt-2 text-slate-600">{link.description}</p>
                  </a>
                ))}
              </div>
            </section>
          ) : null}

          <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold">Helpful links for planning</h2>
            <div className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <Link className="font-semibold text-slate-900 hover:underline" href={`/locations/${brand.baseSlug}/`}>
                {brand.base} location guide
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/locations/anna-maria-island/">
                Anna Maria Island guide
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/locations/bridge-street/">
                Bridge Street guide
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/location">
                Walk-to-beach location
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/pool">
                Pool & outdoor living
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/experiences">
                Experiences hub
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/long-stays/">
                Long-stay guides
              </Link>
              <Link className="font-semibold text-slate-900 hover:underline" href="/guide/">
                All local guides
              </Link>
            </div>
          </section>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-amber-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Stay nearby and explore in comfort</h2>
            <p className="mt-3 max-w-2xl text-white/85">{brand.cta}</p>
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
