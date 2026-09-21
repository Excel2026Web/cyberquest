import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Slab, Bebas_Neue, Josefin_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const BASE_URL = "https://cyberquest.excelmec.org";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "CyberQuest 2025 | Excel MEC — CTF Workshop & Cybersecurity Event",
    template: "%s | CyberQuest 2025",
  },
  description:
    "CyberQuest is Excel MEC's flagship cybersecurity workshop — a full-day event on September 26, 2025 covering VAPT, Capture The Flag (CTF) challenges, and hands-on security research. Register now for ₹599.",
  keywords: [
    "CyberQuest",
    "Excel MEC",
    "CTF workshop",
    "cybersecurity event",
    "VAPT",
    "Capture The Flag",
    "ethical hacking",
    "penetration testing",
    "security workshop India",
    "MEC tech fest",
    "Excel 2025",
    "cybersecurity Kerala",
  ],
  authors: [{ name: "Excel MEC", url: "https://excelmec.org" }],
  creator: "Excel MEC",
  publisher: "Excel MEC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "CyberQuest 2025 — Excel MEC",
    title: "CyberQuest 2025 | Excel MEC — CTF Workshop & Cybersecurity Event",
    description:
      "Join CyberQuest on September 26, 2025 at ASA Hall, Nippon Centre. A full-day workshop on VAPT & CTF challenges by Excel MEC. Register for ₹599.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CyberQuest 2025 — Excel MEC Cybersecurity Workshop",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberQuest 2025 | Excel MEC — CTF Workshop & Cybersecurity Event",
    description:
      "Full-day cybersecurity workshop on VAPT & CTF. Sep 26, 2025 · ASA Hall, Nippon Centre · ₹599. Register now!",
    images: ["/og-image.png"],
    creator: "@excelmec",
    site: "@excelmec",
  },
  category: "Technology",
};

// JSON-LD structured data for the event
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "CyberQuest 2025",
  description:
    "A full-day cybersecurity workshop by Excel MEC covering VAPT and Capture The Flag (CTF) challenges.",
  url: BASE_URL,
  startDate: "2025-09-26T10:00:00+05:30",
  endDate: "2025-09-26T17:00:00+05:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "ASA Hall, Nippon Centre",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Kerala",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Excel MEC",
    url: "https://excelmec.org",
  },
  offers: {
    "@type": "Offer",
    price: "599",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://forms.excelmec.org/cyberquest",
  },
  image: [`${BASE_URL}/og-image.png`],
  performer: [
    {
      "@type": "Person",
      name: "Krishnadev P",
      jobTitle: "Independent Security Researcher",
    },
    {
      "@type": "Person",
      name: "Jerin Manoj",
      jobTitle: "Cybersecurity Researcher",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${robotoSlab.variable} ${bebasNeue.variable} ${josefinSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
