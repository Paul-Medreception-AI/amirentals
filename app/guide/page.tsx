import { guideTopics } from "@/lib/guides";

export const metadata = {
  title: "Local Guides & Things To Do | Bay to Beach House",
  description:
    "Plan your Bradenton Beach getaway with refined local guides to beaches, restaurants, and coastal experiences.",
};

export default function GuideIndexPage() {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-slate-200/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-200/60 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Local guides in Bradenton Beach
          </p>
          <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">Local Guides &amp; Things To Do</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Build a refined itinerary with the best beaches, restaurants, and sunset spots around Bradenton Beach and
            Anna Maria Island. These guides are designed for calm, upscale travel planning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/availability"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-black"
            >
              View Availability
            </a>
            <a
              href="/experiences"
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Explore Experiences
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-4 md:grid-cols-2">
            {guideTopics.map((topic, index) => {
              const accent = [
                "from-slate-100 to-white",
                "from-amber-100 to-white",
                "from-emerald-100 to-white",
                "from-indigo-100 to-white",
              ][index % 4];
              return (
                <a
                  key={topic.slug}
                  href={`/guide/${topic.slug}/`}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-70`} />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Local guide</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900">{topic.title}</h2>
                    <p className="mt-2 text-sm text-slate-600">Refined island planning.</p>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
                      Read guide <span className="transition group-hover:translate-x-0.5">→</span>
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          <section className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-amber-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Stay nearby and explore with ease</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Keep every plan simple with a pristine, allergy-safe home base near the Gulf.
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
