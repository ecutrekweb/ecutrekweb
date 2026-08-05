import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  jsonLdScriptProps,
  organizationJsonLd,
} from "@/lib/seo";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const brandFont = localFont({
  src: "../fonts/AkiraExpanded-SuperBold.woff",
  variable: "--font-brand",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Private Journeys Through Ecuador`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Ecuador tours",
    "Quito day trips",
    "Ecuador travel agency",
    "Cotopaxi tour",
    "Otavalo market tour",
    "Quilotoa Lake tour",
    "Baños Ecuador tour",
    "Mindo cloud forest tour",
    "Galápagos tours",
    "Cuyabeno Amazon tour",
    "Ecuador multi-day tour packages",
    "private guided tours Ecuador",
  ],
  authors: [{ name: "Cristian Erazo" }],
  category: "travel",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Private Journeys Through Ecuador`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/images/cuencaBCK.jpeg",
        width: 2010,
        height: 1340,
        alt: "Cuenca's cathedral at golden hour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Private Journeys Through Ecuador`,
    description: SITE_DESCRIPTION,
    images: ["/images/cuencaBCK.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${workSans.variable} ${brandFont.variable}`}
    >
      <body className="min-h-full font-sans text-ink antialiased">
        <script {...jsonLdScriptProps(organizationJsonLd())} />
        {children}
      </body>
    </html>
  );
}
