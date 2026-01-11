import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";

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
  icons: {
    icon: [{ url: "/BaytoBeachLogo.png", type: "image/png" }],
    apple: [{ url: "/BaytoBeachLogo.png", type: "image/png" }],
  },
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
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P4L33M6D');`,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SL24N61JYV" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SL24N61JYV');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P4L33M6D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
        <div className="pt-16 pb-16 md:pb-0">{children}</div>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
