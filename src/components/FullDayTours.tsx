import Image from "next/image";
import Link from "next/link";
import { fullDayTours } from "@/lib/data";
import { getFolderImages } from "@/lib/cloudinary";

export async function FullDayTours() {
  const covers = await Promise.all(
    fullDayTours.map(async (tour) => {
      const images = await getFolderImages(tour.cloudinaryFolder);
      return images[0] ?? tour.image;
    })
  );

  return (
    <section id="tours" className="bg-cream-alt px-6 py-24 md:px-10 lg:px-20 lg:py-[110px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-[14px] text-[13px] tracking-[0.2em] text-accent uppercase">
              Full Day Tours
            </p>
            <h2 className="font-serif text-[28px] font-medium text-deep-green sm:text-3xl lg:text-4xl">
              Day trips from Quito
            </h2>
          </div>
          <p className="max-w-[380px] text-[15px] text-muted">
            Comfortable, private day excursions — ideal for stretching your
            legs between longer journeys.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {fullDayTours.map((tour, i) => (
            <Link
              key={tour.slug}
              href={`/tours/${tour.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-lg bg-card shadow-[0_1px_3px_rgba(27,58,47,0.08)] transition-shadow hover:shadow-[0_6px_20px_rgba(27,58,47,0.14)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={covers[i]}
                  alt={tour.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col px-5 pt-[22px] pb-[22px]">
                <div className="mb-[6px] flex items-baseline justify-between">
                  <h3 className="font-serif text-xl font-medium text-deep-green">
                    {tour.name}
                  </h3>
                  <span className="text-xs tracking-wide text-accent uppercase">
                    {tour.dur}
                  </span>
                </div>
                <div className="mb-3 text-[13px] text-faint">
                  {tour.loc} · {tour.alt}
                </div>
                <p className="mb-5 flex-1 text-[14.5px] leading-relaxed text-body-alt">
                  {tour.desc}
                </p>
                <span className="mt-1 block rounded-md bg-deep-green/50 px-4 py-[10px] text-center text-sm font-medium text-white">
                  See More Detail →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
