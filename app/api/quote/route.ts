import { NextResponse } from "next/server";

export const runtime = "nodejs";

function diffNights(startIso: string, endIso: string) {
  const start = new Date(`${startIso}T00:00:00`);
  const end = new Date(`${endIso}T00:00:00`);
  const ms = end.getTime() - start.getTime();
  return Math.max(0, Math.round(ms / (1000 * 60 * 60 * 24)));
}

function isoToMdy(value: string) {
  const m = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const [, yyyy, mm, dd] = m;
  return `${Number(mm)}/${Number(dd)}/${yyyy}`;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const startIso = url.searchParams.get("start") || "";
  const endIso = url.searchParams.get("end") || "";
  const people = 1;

  const arrive = isoToMdy(startIso);
  const depart = isoToMdy(endIso);

  if (!arrive || !depart) {
    return NextResponse.json(
      { ok: false, message: "Missing or invalid start/end. Use YYYY-MM-DD." },
      { status: 400 }
    );
  }

  const nights = diffNights(startIso, endIso);
  if (!nights || nights < 1) {
    return NextResponse.json(
      { ok: false, message: "End date must be after start date." },
      { status: 400 }
    );
  }

  const payload = {
    call: "getPrice",
    unitId: "186",
    people,
    arrive,
    depart,
    nights,
    optIn: true,
    promoCode: "",
    sdpBool: false,
  };

  const upstream = "https://www.beachrentals.mobi/vacation-rentals/router/";

  try {
    const cookie = (process.env.BEACHRENTALS_COOKIE || "").trim();

    const res = await fetch(upstream, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        "Content-Type": "application/json",
        Origin: "https://www.beachrentals.mobi",
        Referer: "https://www.beachrentals.mobi/vacation-rentals/rental/10812thSt/",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "sec-ch-ua": '"Chromium";v="120", "Not=A?Brand";v="24", "Google Chrome";v="120"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "X-Requested-With": "XMLHttpRequest",
        ...(cookie ? { Cookie: cookie } : {}),
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const text = await res.text();
    let data: unknown = null;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: `Upstream quote request failed (${res.status}).`,
          status: res.status,
          debug: {
            upstream,
            payload,
            hasCookie: Boolean(cookie),
            responsePreview: typeof data === "string" ? data.slice(0, 500) : data,
          },
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      unitId: 186,
      arrive,
      depart,
      nights,
      people,
      upstream,
      data,
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        message: "Quote request failed.",
        debug: { upstream, payload, error: String(err) },
      },
      { status: 500 }
    );
  }
}
