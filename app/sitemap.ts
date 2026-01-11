import type { MetadataRoute } from "next";

import { POOL_PAGES } from "@/app/pool/content";
import { locations } from "@/lib/locations";

const BASE_URL = "https://baytobeachhouse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const changeFrequency = "weekly" as const;

  const staticRoutes = [
    "",
    "/photos",
    "/location",
    "/availability",
    "/faq",
    "/pool",
    "/walkable",
    "/locations",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority: path === "" ? 1 : 0.7,
    })),
    ...POOL_PAGES.map((page) => ({
      url: `${BASE_URL}/pool/${page.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
    ...locations.map((loc) => ({
      url: `${BASE_URL}/locations/${loc.slug}`,
      lastModified,
      changeFrequency,
      priority: 0.6,
    })),
  ];
}
