import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import MobileCTA from "@/components/MobileCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "AMI Rentals Beach House",
  description: "3-bedroom Bradenton Beach home with pool and walkable Gulf access on Anna Maria Island.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "108 12th St N",
    addressLocality: "Bradenton Beach",
    addressRegion: "FL",
    addressCountry: "US",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Walk to Gulf beaches" },
    { "@type": "LocationFeatureSpecification", name: "High-speed Wi-Fi" },
    { "@type": "LocationFeatureSpecification", name: "Off-street parking" },
  ],
  image: ["/front.avif"],
  sameAs: ["https://www.vrbo.com/9486364ha"],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMI Rentals Beach House — Bradenton Beach, FL",
  description:
    "3-bedroom Anna Maria Island beach house with pool, walkable Gulf access, modern amenities, and off-street parking.",
  openGraph: {
    title: "AMI Rentals Beach House — Bradenton Beach, FL",
    description:
      "Steps from the Gulf, AMI Rentals keeps guests near beaches, dining, and Anna Maria Island’s free trolley.",
    images: [
      {
        url: "/front.avif",
        width: 1200,
        height: 630,
        alt: "AMI Rentals Beach House exterior",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <div className="pt-16 pb-16 md:pb-0">{children}</div>
        <MobileCTA />
      </body>
    </html>
  );
}
