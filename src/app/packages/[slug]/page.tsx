import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageCarousel } from "@/components/ImageCarousel";
import { getFolderImages } from "@/lib/cloudinary";
import { WHATSAPP_NUMBER, packages } from "@/lib/data";
import {
  absoluteUrl,
  breadcrumbJsonLd,
  jsonLdScriptProps,
  SITE_NAME,
} from "@/lib/seo";

export const revalidate = 3600;

export function generateStaticParams() {
  return packages.map((pack) => ({ slug: pack.slug }));
}

async function getPackage(slug: string) {
  return packages.find((pack) => pack.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pack = await getPackage(slug);
  if (!pack) return {};

  return {
    title: pack.title,
    description: pack.desc,
    alternates: {
      canonical: `/packages/${pack.slug}`,
    },
    openGraph: {
      title: `${pack.title} — ${SITE_NAME}`,
      description: pack.desc,
      url: `/packages/${pack.slug}`,
      images: [pack.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pack.title} — ${SITE_NAME}`,
      description: pack.desc,
      images: [pack.image],
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pack = await getPackage(slug);
  if (!pack) notFound();

  const cloudinaryImages = await getFolderImages(pack.cloudinaryFolder);
  const galleryImages = cloudinaryImages.length
    ? cloudinaryImages
    : [pack.image];

  const touristTripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pack.title,
    description: pack.desc,
    image: galleryImages.map((src) =>
      src.startsWith("http") ? src : absoluteUrl(src)
    ),
    touristType: "Leisure",
    url: absoluteUrl(`/packages/${pack.slug}`),
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    ...(pack.itinerary.length > 0 && {
      itinerary: {
        "@type": "ItemList",
        itemListElement: pack.itinerary.map((day) => ({
          "@type": "ListItem",
          position: day.day,
          name: day.title,
          description: day.description,
        })),
      },
    }),
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Ecuador Packages", path: "/#packages" },
    { name: pack.title, path: `/packages/${pack.slug}` },
  ]);

  const bookingText = `Hi! I'd like to book the ${pack.title} package.`;
  const bookingHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    bookingText
  )}`;

  return (
    <>
      <script {...jsonLdScriptProps(touristTripJsonLd)} />
      <script {...jsonLdScriptProps(breadcrumbs)} />
      <Header />
      <main className="px-6 py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/#packages"
            className="mb-8 inline-block text-[14px] font-medium text-accent-dark hover:underline"
          >
            ← Back to Ecuador Packages
          </Link>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <ImageCarousel images={galleryImages} alt={pack.title} />

              <div className="mt-9">
                <span className="text-xs tracking-wide text-accent uppercase">
                  {pack.dest}
                </span>
                <h1 className="mt-2 mb-2 font-serif text-[32px] font-medium text-deep-green sm:text-4xl">
                  {pack.title}
                </h1>
                <p className="max-w-[640px] text-base leading-relaxed text-body-alt">
                  {pack.desc}
                </p>

                {pack.itinerary.length > 0 && (
                  <div className="mt-9">
                    <div className="mb-5 text-[13px] tracking-[0.1em] text-muted uppercase">
                      Day-by-Day Itinerary
                    </div>
                    <div className="flex max-w-[720px] flex-col gap-6">
                      {pack.itinerary.map((day) => (
                        <div
                          key={day.day}
                          className="border-l-2 border-accent/40 pl-5"
                        >
                          <div className="mb-1 font-serif text-lg font-medium text-deep-green">
                            Day {day.day} — {day.title}
                          </div>
                          <p className="text-[14.5px] leading-relaxed text-body-alt">
                            {day.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="sticky top-24 rounded-lg bg-deep-green px-8 py-9">
              <div className="mb-5 text-[13px] tracking-[0.12em] text-accent uppercase">
                Book This Package
              </div>
              <div className="mb-[6px] font-serif text-[22px] text-cream">
                {pack.title}
              </div>
              <p className="mb-6 text-[14.5px] leading-relaxed text-cream/75">
                {pack.dest}
              </p>
              <a
                href={bookingHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-accent-btn px-6 py-[15px] text-center text-sm font-medium tracking-wide text-white hover:bg-accent-btn-hover"
              >
                Reserve via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
