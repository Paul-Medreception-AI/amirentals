import { longStayTopics } from "@/lib/long-stays";

export const metadata = {
  title: "Long Stay Rentals in Bradenton Beach | Bay to Beach House",
  description:
    "Explore long-stay guides for snowbirds, monthly rentals, and winter stays in Bradenton Beach. Pristine, allergy-safe, and no pets.",
};

export default function LongStaysIndexPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Long stays in Bradenton Beach
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Long Stay Rentals in Bradenton Beach</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Planning a 30 to 180 day stay? These guides focus on snowbirds, monthly rentals, and seasonal living on
            Anna Maria Island with a pristine, allergy-safe home and a no-pet policy.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/availability"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-black"
            >
              View Availability
            </a>
            <a
              href="/locations"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Explore Locations
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {longStayTopics.map((topic, index) => {
              const accent = [
                "from-slate-100 to-white",
                "from-amber-100 to-white",
                "from-emerald-100 to-white",
                "from-indigo-100 to-white",
              ][index % 4];
              return (
                <a
                  key={topic.slug}
                  href={`/long-stays/${topic.slug}/`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-70`} />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Long stay guide</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900">{topic.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">Seasonal living in Bradenton Beach.</p>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                      Read guide <span className="transition group-hover:translate-x-0.5">→</span>
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-amber-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Plan a quiet, pristine winter stay</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Settle in with a heated pool and hot tub, a no-pet policy, and a calm neighborhood that feels like a second home.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/availability"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
              >
                Check Dates
              </a>
              <a
                href="/photos"
                className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Browse Photos
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
