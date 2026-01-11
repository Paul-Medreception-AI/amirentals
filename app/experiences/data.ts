export type ExperienceLink = {
  href: string;
  label: string;
};

export type ExperiencePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  opening: string[];
  brandPositioning: {
    intro: string[];
    bullets: string[];
  };
  localContext: {
    heading: string;
    body: string[];
  };
  internalLinks: ExperienceLink[];
  cta: string;
};

const baseLinks: ExperienceLink[] = [
  { href: "/availability", label: "Availability" },
  { href: "/location", label: "Location" },
  { href: "/walkable", label: "Walkability" },
  { href: "/pool/pool-and-hot-tub", label: "Pool + hot tub" },
  { href: "/pool/heated-pool", label: "Heated pool" },
  { href: "/locations/bridge-street/", label: "Bridge Street dining" },
  { href: "/locations/pine-avenue/", label: "Pine Avenue shopping" },
];

const defaultCta =
  "Enjoy a luxury AMI retreat — view availability through AMI Rentals at Bay to Beach House.";

export const experiencePages: ExperiencePage[] = [
  {
    slug: "romantic-getaway",
    title: "Romantic Getaway Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "Plan a romantic getaway in Bradenton Beach with a spotless, no-pets luxury stay. Enjoy a heated pool + hot tub, privacy, and an elevated HOA-grade retreat.",
    h1: "Romantic Getaways in Bradenton Beach (Luxury, No Pets)",
    opening: [
      "Romance on Anna Maria Island doesn’t need a packed itinerary. It needs privacy, warm evenings, and a place that feels calm the moment you arrive.",
      "Bradenton Beach is perfect for couples: sunset walks, walkable dining pockets, and an island rhythm that feels slower (in the best way).",
    ],
    brandPositioning: {
      intro: [
        "Bay to Beach House (AMI Rentals) is designed for couples who want a pristine, allergy-safe environment — no pets allowed.",
        "Expect HOA-grade luxury, a heated pool, and a private hot tub for true ‘stay-in’ romance.",
      ],
      bullets: [
        "No pets allowed for a spotless, allergy-friendly stay",
        "Heated pool + hot tub for a spa-style backyard",
        "Luxury HOA-grade comfort and quiet",
        "Ideal for couples and romantic weekends",
      ],
    },
    localContext: {
      heading: "Local date-night ideas",
      body: [
        "Bridge Street is the go-to for dinner and evening strolls. Pine Avenue is perfect for daytime shopping, coffee, and an easy island wander.",
      ],
    },
    internalLinks: [...baseLinks, { href: "/photos", label: "Photos" }],
    cta: defaultCta,
  },
  {
    slug: "couples-retreat",
    title: "Couples Retreat Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "A couples retreat in Bradenton Beach with luxury calm, no pets, and a spa-style backyard. Heated pool + hot tub and pristine, allergy-safe comfort.",
    h1: "Couples Retreats in Bradenton Beach (Luxury Calm)",
    opening: [
      "A couples retreat should feel like quiet luxury: clean lines, warm water, and evenings that end with a sunset — not a schedule.",
      "Anna Maria Island is built for couples because it’s easy to be spontaneous: beach, dinner, and a relaxed pace.",
    ],
    brandPositioning: {
      intro: [
        "Bay to Beach House is no pets allowed for a pristine, allergy-safe environment.",
        "The heated pool + hot tub combo creates a private resort moment without crowds.",
      ],
      bullets: ["No pets (spotless)", "Heated pool + hot tub", "HOA-grade luxury", "Privacy-forward comfort"],
    },
    localContext: {
      heading: "Bradenton Beach for couples",
      body: [
        "Walkable pockets around Bridge Street make date nights easy. Sunset time is your built-in plan.",
      ],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
  {
    slug: "honeymoon",
    title: "Honeymoon Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "A luxury honeymoon stay near Anna Maria Island with no pets, pristine comfort, and a heated pool + hot tub. Ideal for romantic, upscale trips.",
    h1: "Honeymoon Stays Near Anna Maria Island (Luxury, No Pets)",
    opening: [
      "Honeymoons are better when your stay feels effortless: spotless comfort, privacy, and a relaxing backyard you actually want to spend time in.",
      "Anna Maria Island gives you romance naturally — beach sunsets, walkable dining, and warm evenings.",
    ],
    brandPositioning: {
      intro: [
        "AMI Rentals is no pets allowed — ideal for couples who prefer an allergy-friendly, meticulously maintained environment.",
        "Enjoy a heated pool + hot tub that turns evenings into a private spa ritual.",
      ],
      bullets: ["No pets", "Heated pool + hot tub", "Luxury calm", "Perfect for honeymoons"],
    },
    localContext: {
      heading: "Honeymoon rhythm",
      body: [
        "Do one great dinner near Bridge Street, one Pine Avenue afternoon, and let the rest be pool time, beach time, and sunsets.",
      ],
    },
    internalLinks: [...baseLinks, { href: "/pool/luxury-spa-backyard", label: "Luxury spa backyard" }],
    cta: defaultCta,
  },
  {
    slug: "anniversary",
    title: "Anniversary Trip Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "Celebrate an anniversary in Bradenton Beach with a spotless, no-pets luxury stay. Heated pool + hot tub and a private, HOA-grade retreat.",
    h1: "Anniversary Trips in Bradenton Beach (Upscale & Private)",
    opening: [
      "Anniversary trips are about one thing: time together that feels clean, calm, and unrushed.",
      "Bradenton Beach is a classic choice for couples because it’s close to everything and still feels peaceful.",
    ],
    brandPositioning: {
      intro: [
        "Bay to Beach House is no pets allowed, keeping the stay pristine and allergy-safe.",
        "The heated pool + hot tub setup makes celebrating feel private and elevated.",
      ],
      bullets: ["No pets", "Heated pool + hot tub", "Luxury HOA-grade comfort", "Romantic, quiet nights"],
    },
    localContext: {
      heading: "Make one night the highlight",
      body: [
        "Plan a sunset walk, then a Bridge Street dinner. Come back for a quiet soak under the lights.",
      ],
    },
    internalLinks: [...baseLinks, { href: "/pool/evening-soak", label: "Evening soak" }],
    cta: defaultCta,
  },
  {
    slug: "babymoon",
    title: "Babymoon Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "A calm, upscale babymoon near Anna Maria Island with no pets and pristine, allergy-friendly comfort. Heated pool + hot tub for gentle relaxation.",
    h1: "Babymoon Stays Near Anna Maria Island (Quiet Luxury)",
    opening: [
      "A babymoon should feel restorative: warm air, quiet mornings, and a home base that makes rest easy.",
      "AMI is ideal for a softer pace — beach walks, simple dining, and sunsets on repeat.",
    ],
    brandPositioning: {
      intro: [
        "AMI Rentals is no pets allowed, supporting a clean, controlled environment for allergy-sensitive guests.",
        "The heated pool + hot tub create a private wellness-style experience.",
      ],
      bullets: ["No pets (allergy-friendly)", "Heated pool + hot tub", "Quiet HOA-grade luxury", "Easy, restful days"],
    },
    localContext: {
      heading: "Keep it gentle",
      body: [
        "A Pine Avenue outing and a sunset stroll are plenty. Let the rest be pool time, naps, and calm evenings.",
      ],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
  {
    slug: "quiet-escape",
    title: "Quiet Escape Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "A quiet escape in Bradenton Beach with no pets, pristine comfort, and a private heated pool + hot tub. Luxury, HOA-grade calm.",
    h1: "Quiet Escapes in Bradenton Beach (No Pets, Luxury Calm)",
    opening: [
      "If you’re craving quiet, choose a stay that feels controlled: clean, calm, and private.",
      "Bradenton Beach gives you island beauty without the constant bustle.",
    ],
    brandPositioning: {
      intro: [
        "Bay to Beach House is a no-pets, allergy-friendly retreat built for guests who value pristine comfort.",
        "A heated pool + hot tub make the backyard the main event.",
      ],
      bullets: ["No pets", "Heated pool + hot tub", "Private resort feel", "Luxury quiet"],
    },
    localContext: {
      heading: "Quiet, but close",
      body: ["Enjoy calm days, then head to Bridge Street when you want dinner and a stroll."],
    },
    internalLinks: [...baseLinks, { href: "/pool/quiet-pool", label: "Quiet pool" }],
    cta: defaultCta,
  },
  {
    slug: "girls-weekend",
    title: "Girls Weekend Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "An upscale girls’ weekend near Anna Maria Island with a pristine, no-pets luxury home base. Heated pool + hot tub and spa-style outdoor living.",
    h1: "Girls’ Weekends Near Anna Maria Island (Upscale & Relaxed)",
    opening: [
      "A girls’ weekend feels better when the home base is spotless, calm, and designed for comfort.",
      "AMI gives you walkable dining pockets, beach time, and sunset energy — without the big-city stress.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a pristine stay.", "Heated pool + hot tub for a spa-style backyard hangout."],
      bullets: ["No pets", "Heated pool + hot tub", "Luxury outdoor living", "Great for small groups"],
    },
    localContext: {
      heading: "Plan the vibe",
      body: ["Bridge Street for dinner. Pool + hot tub for the nights you want to stay in and talk for hours."],
    },
    internalLinks: [...baseLinks, { href: "/pool/pool-and-hot-tub", label: "Pool + hot tub" }],
    cta: defaultCta,
  },
  {
    slug: "guys-fishing-trip",
    title: "Guys Fishing Trip Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "A clean, quiet home base for a guys’ fishing trip near Bradenton Beach. No pets for pristine, allergy-friendly comfort, plus a heated pool + hot tub for recovery.",
    h1: "Guys’ Fishing Trips Near Bradenton Beach (Clean, Quiet Home Base)",
    opening: [
      "A great fishing trip needs a clean reset after early mornings and sun.",
      "Bradenton Beach keeps you close to the water, dining, and the island’s best sunset moments.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a spotless stay.", "Heated pool + hot tub make recovery and downtime effortless."],
      bullets: ["No pets", "Heated pool + hot tub", "Quiet luxury", "Easy dining access"],
    },
    localContext: {
      heading: "Local context",
      body: ["Cortez is a classic fishing village stop. Bridge Street is an easy dinner option after a long day."],
    },
    internalLinks: [...baseLinks, { href: "/locations/cortez-fishing-village/", label: "Cortez Fishing Village" }],
    cta: defaultCta,
  },
  {
    slug: "wellness-retreat",
    title: "Wellness Retreat Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "A wellness-style retreat near Anna Maria Island with pristine, no-pets luxury comfort. Heated pool + hot tub for a private spa rhythm.",
    h1: "Wellness Retreats Near Anna Maria Island (Luxury, No Pets)",
    opening: [
      "Wellness on AMI is simple: sunlight, salt air, and quiet routines that make you feel better fast.",
      "Couples love the island because it invites slower days.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a clean, allergy-friendly environment.", "Heated pool + hot tub for spa-style evenings."],
      bullets: ["No pets", "Heated pool + hot tub", "Quiet luxury", "Private outdoor living"],
    },
    localContext: {
      heading: "Wellness rhythm",
      body: ["Morning walk, pool afternoon, sunset, then a quiet soak. Repeat."],
    },
    internalLinks: [...baseLinks, { href: "/pool/luxury-spa-backyard", label: "Luxury spa backyard" }],
    cta: defaultCta,
  },
  {
    slug: "yoga-relaxation",
    title: "Yoga & Relaxation Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "Yoga and relaxation near Anna Maria Island with a spotless, no-pets luxury home base. Heated pool + hot tub for calm recovery.",
    h1: "Yoga & Relaxation Stays Near Anna Maria Island",
    opening: [
      "Relaxation is easier when the environment feels clean and controlled — especially for couples who value calm.",
      "AMI adds the rest: beach air, sunsets, and a slower pace.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for an allergy-friendly stay.", "Heated pool + hot tub support an easy, spa-like rhythm."],
      bullets: ["No pets", "Heated pool + hot tub", "Quiet nights", "Luxury calm"],
    },
    localContext: {
      heading: "Sunrise + sunset anchors",
      body: ["Let the island set the pace: sunrise walk, calm pool time, sunset, then a quiet soak."],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
  {
    slug: "sunset-lovers",
    title: "Sunset Lovers Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "For sunset lovers planning Bradenton Beach, choose a spotless, no-pets luxury stay with a heated pool + hot tub. Quiet, romantic nights.",
    h1: "Sunset Lovers’ Stays in Bradenton Beach (Luxury Calm)",
    opening: [
      "If sunsets are your love language, Bradenton Beach will feel like the right choice.",
      "Do golden hour outside, then come back to a private backyard that feels like your own resort.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a pristine environment.", "Heated pool + hot tub make sunset nights feel private and elevated."],
      bullets: ["No pets", "Heated pool + hot tub", "Private resort feel", "Romantic evenings"],
    },
    localContext: {
      heading: "Golden hour plan",
      body: ["Sunset walk, Bridge Street dinner, then a quiet soak under the lights."],
    },
    internalLinks: [...baseLinks, { href: "/pool/sunset-swims", label: "Sunset swims" }],
    cta: defaultCta,
  },
  {
    slug: "wine-dine-stays",
    title: "Wine & Dine Weekend Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "Plan a wine-and-dine weekend near Anna Maria Island with a pristine, no-pets luxury home base. Heated pool + hot tub for after-dinner downtime.",
    h1: "Wine & Dine Stays Near Anna Maria Island",
    opening: [
      "Wine-and-dine trips are about timing: beach first, dinner later, and a calm home base in between.",
      "AMI keeps it easy with walkable pockets like Bridge Street and Pine Avenue.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a spotless stay.", "Heated pool + hot tub make evenings feel like a private spa."],
      bullets: ["No pets", "Luxury calm", "Heated pool + hot tub", "Great for date-night weekends"],
    },
    localContext: {
      heading: "Two perfect pockets",
      body: ["Bridge Street for date-night energy. Pine Avenue for daytime browsing and coffee."],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
  {
    slug: "spa-like-vacations",
    title: "Spa-Like Vacation Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "A spa-like vacation near Anna Maria Island with a pristine, no-pets luxury stay. Heated pool + hot tub and a private, resort-style backyard.",
    h1: "Spa-Like Vacations Near Anna Maria Island (Pool + Hot Tub)",
    opening: [
      "A spa-like vacation is about how your day feels: quiet mornings, warm water, and no pressure.",
      "A clean, controlled environment makes relaxation easier — especially for couples who value calm.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for an allergy-friendly stay.", "Heated pool + hot tub for a private spa rhythm."],
      bullets: ["No pets", "Heated pool + hot tub", "Luxury outdoor living", "Quiet comfort"],
    },
    localContext: {
      heading: "Make the backyard the main event",
      body: ["Beach morning, spa backyard afternoon, sunset, then a soak. That’s the whole plan."],
    },
    internalLinks: [...baseLinks, { href: "/pool/luxury-spa-backyard", label: "Luxury spa backyard" }],
    cta: defaultCta,
  },
  {
    slug: "privacy-seekers",
    title: "Privacy Seekers Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "A privacy-forward luxury stay in Bradenton Beach with no pets, pristine comfort, and a heated pool + hot tub. Ideal for couples who want quiet.",
    h1: "Privacy-Seeking Couples in Bradenton Beach (Luxury, No Pets)",
    opening: [
      "Privacy doesn’t have to mean isolation — it means you can relax without feeling surrounded.",
      "Bradenton Beach is a strong choice for couples who want calm days and easy access to dinner and sunsets.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a controlled, spotless environment.", "Heated pool + hot tub support a private resort feel."],
      bullets: ["No pets", "Private resort feel", "Heated pool + hot tub", "HOA-grade comfort"],
    },
    localContext: {
      heading: "Quiet nights, easy options",
      body: ["When you want to go out, Bridge Street is close. When you don’t, the spa backyard is the plan."],
    },
    internalLinks: [...baseLinks, { href: "/pool/privacy-fencing", label: "Privacy fencing" }],
    cta: defaultCta,
  },
  {
    slug: "second-honeymoon",
    title: "Second Honeymoon Bradenton Beach | Bay to Beach House (AMI Rentals)",
    description:
      "A second honeymoon near Anna Maria Island with luxury calm, no pets, and a heated pool + hot tub. Pristine, allergy-safe comfort for couples.",
    h1: "Second Honeymoon Stays Near Anna Maria Island (Luxury Calm)",
    opening: [
      "Second honeymoons are the best kind: you know what you love, and you want it easy.",
      "On AMI, romance is built in — sunsets, warm nights, and a relaxed island pace.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a pristine environment.", "Heated pool + hot tub make nights feel private and elevated."],
      bullets: ["No pets", "Heated pool + hot tub", "Quiet luxury", "Perfect for couples"],
    },
    localContext: {
      heading: "Special without busy",
      body: ["Do one great dinner, one long sunset walk, and lots of quiet backyard time."],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
  {
    slug: "mini-moon",
    title: "Mini-moon Weekend Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "A mini-moon weekend near Anna Maria Island with a spotless, no-pets luxury stay. Heated pool + hot tub and an elevated, quiet home base.",
    h1: "Mini-moon Weekends Near Anna Maria Island",
    opening: [
      "Mini-moons are about quick, high-quality rest: beach air, a great dinner, and a stay that feels pristine.",
      "AMI makes short trips feel big — especially at sunset.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for an allergy-friendly stay.", "Heated pool + hot tub maximize relaxation in minimal time."],
      bullets: ["No pets", "Heated pool + hot tub", "Luxury calm", "Perfect for 2–3 nights"],
    },
    localContext: {
      heading: "48 hours done right",
      body: ["Night one: sunset + dinner. Day two: pool + hot tub + a slow Pine Avenue wander."],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
  {
    slug: "proposal-trips",
    title: "Proposal Trip Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "Planning a proposal trip near Anna Maria Island? Choose a pristine, no-pets luxury stay with a heated pool + hot tub for a private celebration.",
    h1: "Proposal Trips Near Anna Maria Island (Luxury, Private)",
    opening: [
      "The best proposals feel personal: a quiet moment, a sunset, and the right setting.",
      "AMI gives you golden hour and walkable dining pockets for the celebration after.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a controlled, spotless environment.", "Heated pool + hot tub make celebrating feel private and elevated."],
      bullets: ["No pets", "Heated pool + hot tub", "Luxury calm", "Ideal for proposals"],
    },
    localContext: {
      heading: "Celebrate after",
      body: ["Sunset first, then Bridge Street. Then back for a quiet soak and a private toast."],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
  {
    slug: "elopement-stays",
    title: "Elopement Stay Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "Eloping near Anna Maria Island? Stay in a pristine, no-pets luxury home with a heated pool + hot tub for a private, romantic reset.",
    h1: "Elopement Stays Near Anna Maria Island (Pristine & Romantic)",
    opening: [
      "Elopements are about choosing each other — and keeping the day beautifully simple.",
      "AMI gives you beach backdrops, sunset light, and a calm island rhythm.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for an allergy-friendly environment.", "Heated pool + hot tub support a quiet, celebratory weekend."],
      bullets: ["No pets", "Heated pool + hot tub", "Luxury calm", "Perfect for a private celebration"],
    },
    localContext: {
      heading: "Simple celebration plan",
      body: ["Beach moment, dinner, then a quiet soak and early night."],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
  {
    slug: "birthday-trips",
    title: "Birthday Trip Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "Celebrate a birthday near Anna Maria Island with a pristine, no-pets luxury stay. Heated pool + hot tub and a quiet, upscale home base.",
    h1: "Birthday Trips Near Anna Maria Island (Luxury Weekend)",
    opening: [
      "Beach birthdays feel better: warm air, sunset light, and a day that doesn’t need a big itinerary.",
      "A clean, quiet home base makes celebrating feel effortless.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a spotless environment.", "Heated pool + hot tub create a private celebration space."],
      bullets: ["No pets", "Heated pool + hot tub", "Luxury outdoor living", "Quiet comfort"],
    },
    localContext: {
      heading: "Celebrate with a sunset",
      body: ["Sunset walk, Bridge Street dinner, then back for a soak."],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
  {
    slug: "weekend-escapes",
    title: "Luxury Weekend Escape Anna Maria Island | Bay to Beach House (AMI Rentals)",
    description:
      "A luxury weekend escape near Anna Maria Island with no pets, pristine comfort, and a heated pool + hot tub. Ideal for couples who book quickly.",
    h1: "Weekend Escapes Near Anna Maria Island (Luxury, No Pets)",
    opening: [
      "Weekend escapes should feel immediate: arrive, exhale, and let the island do the work.",
      "AMI delivers that reset with sunsets, beach time, and easy dining pockets.",
    ],
    brandPositioning: {
      intro: ["No pets allowed for a controlled, spotless environment.", "Heated pool + hot tub make short trips feel like true luxury."],
      bullets: ["No pets", "Heated pool + hot tub", "Pristine luxury", "Perfect for couples"],
    },
    localContext: {
      heading: "Two nights, big impact",
      body: ["One great dinner, one long beach walk, and lots of spa-backyard time."],
    },
    internalLinks: [...baseLinks],
    cta: defaultCta,
  },
];

export function getExperiencePage(slug: string) {
  return experiencePages.find((p) => p.slug === slug) ?? null;
}
