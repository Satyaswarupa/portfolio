import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Satyaswarupa Parida — MERN Stack Developer & UI Designer";
const DESCRIPTION =
  "Satyaswarupa Parida, also known as Rabble Razz, is a MERN Stack Developer and UI Designer based in Bhadrak, Odisha, building fast, modern web applications for clients across the US.";

/** @type {import("next").Metadata} */
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "Satyaswarupa",
    "Satyaswarupa Parida",
    "Rabble Razz",
    "MERN Stack Developer",
    "MERN Developer Bhadrak",
    "UI Designer Odisha",
    "Full Stack Developer India",
    "React Developer",
    "Next.js Developer",
    "Web Developer for US clients",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  alternateName: "Rabble Razz",
  jobTitle: "MERN Stack Developer & UI Designer",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhadrak",
    addressRegion: "Odisha",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/satyaswarupa",
    "https://linkedin.com/in/satyaswarupa",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080800]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
