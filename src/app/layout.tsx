import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "EcuTrek — Private Journeys Through Ecuador",
  description:
    "Personalized tours across volcanoes, cloud forest and the Galápagos — guided by a naturalist with 28 years in the field.",
  icons: {
    icon: "/images/ecutrek-logo.png",
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
        {children}
      </body>
    </html>
  );
}
