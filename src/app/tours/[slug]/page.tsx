import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ImageCarousel } from "@/components/ImageCarousel";
import { getFolderImages } from "@/lib/cloudinary";
import { WHATSAPP_NUMBER, fullDayTours } from "@/lib/data";

export const revalidate = 3600;

export function generateStaticParams() {
  return fullDayTours.map((tour) => ({ slug: tour.slug }));
}

async function getTour(slug: string) {
  return fullDayTours.find((tour) => tour.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = await getTour(slug);
  if (!tour) return {};

  return {
    title: `${tour.name} — EcuTrek`,
    description: tour.desc,
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = await getTour(slug);
  if (!tour) notFound();

  const cloudinaryImages = await getFolderImages(tour.cloudinaryFolder);
  const galleryImages = cloudinaryImages.length ? cloudinaryImages : tour.images;

  const bookingText = `Hi! I'd like to book the ${tour.name} tour.`;
  const bookingHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    bookingText
  )}`;

  return (
    <>
      <Header />
      <main className="px-6 py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/#tours"
            className="mb-8 inline-block text-[14px] font-medium text-accent-dark hover:underline"
          >
            ← Back to Full Day Tours
          </Link>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <ImageCarousel images={galleryImages} alt={tour.name} />

              <div className="mt-9">
                <span className="text-xs tracking-wide text-accent uppercase">
                  {tour.dur}
                </span>
                <h1 className="mt-2 mb-2 font-serif text-[32px] font-medium text-deep-green sm:text-4xl">
                  {tour.name}
                </h1>
                <div className="mb-6 text-[14.5px] text-faint">
                  {tour.loc} · {tour.alt}
                </div>
                <p className="max-w-[640px] text-base leading-relaxed text-body-alt">
                  {tour.desc}
                </p>

                <div className="mt-9">
                  <div className="mb-4 text-[13px] tracking-[0.1em] text-muted uppercase">
                    Tour Highlights
                  </div>
                  <ul className="grid max-w-[640px] grid-cols-1 gap-3 sm:grid-cols-2">
                    {tour.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-[14.5px] leading-relaxed text-body-alt"
                      >
                        <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="sticky top-24 rounded-lg bg-deep-green px-8 py-9">
              <div className="mb-5 text-[13px] tracking-[0.12em] text-accent uppercase">
                Book This Tour
              </div>
              <div className="mb-[6px] font-serif text-[22px] text-cream">
                {tour.name}
              </div>
              <p className="mb-6 text-[14.5px] leading-relaxed text-cream/75">
                {tour.dur} · {tour.loc}
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
