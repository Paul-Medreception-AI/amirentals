import type { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Walkable Luxury Vacation Planning | Bay to Beach House (AMI Rentals)",
  description:
    "Plan a walkable Anna Maria Island week from Bradenton Beach—Gulf access, Bridge Street dining, and luxury outdoor living through AMI Rentals. No pets allowed.",
};

const highlights = [
  {
    title: "Gulf access on foot",
    description: "Walk to the beach and keep the day clean and simple—no car needed for the best AMI moments.",
    badge: "Walkable",
    badgeClass: "bg-sky-100 text-sky-900",
    blobClass: "bg-sky-200/70",
    iconBgClass: "bg-sky-700",
    icon: "🏖️",
    href: "/location",
    cta: "See location",
  },
  {
    title: "Bridge Street nights",
    description: "Dining, sunset strolls, and island energy—all within easy reach from Bradenton Beach.",
    badge: "Local",
    badgeClass: "bg-indigo-100 text-indigo-900",
    blobClass: "bg-indigo-200/70",
    iconBgClass: "bg-indigo-700",
    icon: "🌅",
    href: "/faq",
    cta: "Read FAQ",
  },
  {
    title: "Pool resets",
    description: "A private pool changes the rhythm: cool off, recharge, then head back out.",
    badge: "Pool",
    badgeClass: "bg-emerald-100 text-emerald-900",
    blobClass: "bg-emerald-200/70",
    iconBgClass: "bg-emerald-700",
    icon: "☀️",
    href: "/pool",
    cta: "Pool pages",
  },
  {
    title: "Pristine, no-pet comfort",
    description: "No pets allowed for an allergy-friendly, HOA-grade clean environment—ideal for luxury-minded guests.",
    badge: "No pets",
    badgeClass: "bg-slate-200 text-slate-900",
    blobClass: "bg-slate-200/70",
    iconBgClass: "bg-slate-800",
    icon: "✨",
    href: "/photos",
    cta: "Browse photos",
  },
] as const;

export default function WalkablePage() {
  return (
    <main className="bg-gradient-to-b from-sky-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/60 blur-3xl" />

        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Walkability &amp; no-car-needed stays</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Walkable Luxury Vacation Planning</h1>
          <div className="mt-6 space-y-4 text-lg text-slate-700">
            <p>
              Walkable stays let you do more with less: beach time, dining, and sunset strolls without juggling parking and
              driving.
            </p>
            <p>
              BayToBeachHouse.com represents AMI Rentals: pristine, allergy-friendly comfort with no pets allowed—perfect
              for guests who want clean, quiet, walkable island days.
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
              href="/location"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Location Details
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl opacity-60 ${item.blobClass}`} />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`grid h-10 w-10 place-items-center rounded-xl text-white shadow-sm ${item.iconBgClass}`}>
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${item.badgeClass}`}>
                        {item.badge}
                      </p>
                    </div>
                    <span className="text-sm font-semibold text-slate-400 transition group-hover:text-slate-600">→</span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-3 text-slate-700">{item.description}</p>
                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-800">
                    {item.cta}
                    <span className="transition group-hover:translate-x-0.5">→</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-sky-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Walk more, drive less</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Keep your week clean and easy: beach walks, dinner on foot, then unwind back at your private outdoor living space.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Dates
              </Link>
              <Link
                href="/pool"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Pool Pages
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
