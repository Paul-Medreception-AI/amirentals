import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const revalidate = 60 * 60 * 24;

type RawCalendarDay = {
  Month: number;
  Day: number;
  Year: number;
  Arrive?: string;
  Depart?: string;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function isoDateFromParts(year: number, month: number, day: number) {
  return `${year}-${pad2(month)}-${pad2(day)}`;
}

function parseMdYToIso(value: string): string | null {
  const m = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!m) return null;
  const [, mm, dd, yyyy] = m;
  return `${yyyy}-${mm}-${dd}`;
}

export async function GET() {
  const sourceUrl = "https://rentals.beachrentals.mobi/rns/api/calendar/186";
  const startedAt = Date.now();

  const res = await fetch(sourceUrl, {
    headers: {
      Accept: "application/json",
    },
    next: { revalidate },
  });

  if (!res.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: `Upstream calendar request failed (${res.status}).`,
        status: res.status,
      },
      { status: 502 }
    );
  }

  const raw = (await res.json()) as RawCalendarDay[];

  const blockedDates = Array.from(
    new Set(
      raw
        .filter((d) => typeof d?.Year === "number" && typeof d?.Month === "number" && typeof d?.Day === "number")
        .map((d) => isoDateFromParts(d.Year, d.Month, d.Day))
    )
  ).sort();

  const rangesMap = new Map<string, { start: string; end: string }>();
  for (const d of raw) {
    if (!d.Arrive || !d.Depart) continue;
    const start = parseMdYToIso(d.Arrive);
    const end = parseMdYToIso(d.Depart);
    if (!start || !end) continue;
    const key = `${start}__${end}`;
    if (!rangesMap.has(key)) rangesMap.set(key, { start, end });
  }

  const blockedRanges = Array.from(rangesMap.values()).sort((a, b) => (a.start < b.start ? -1 : a.start > b.start ? 1 : 0));

  return NextResponse.json({
    ok: true,
    propertyId: 186,
    sourceUrl,
    fetchedAt: new Date().toISOString(),
    durationMs: Date.now() - startedAt,
    blockedDates,
    blockedRanges,
  });
}
