import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/data";
import { getFolderImages } from "@/lib/cloudinary";

export async function Packages() {
  const covers = await Promise.all(
    packages.map(async (pack) => {
      const images = await getFolderImages(pack.cloudinaryFolder);
      return images[0] ?? pack.image;
    })
  );

  return (
    <section id="packages" className="px-6 py-24 md:px-10 lg:px-20 lg:py-[110px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12">
          <p className="mb-[14px] text-[13px] tracking-[0.2em] text-accent uppercase">
            Ecuador Packages
          </p>
          <h2 className="font-serif text-[28px] font-medium text-deep-green sm:text-3xl lg:text-4xl">
            Multi-day journeys, fully planned
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pack, i) => (
            <Link
              key={pack.slug}
              href={`/packages/${pack.slug}`}
              className="flex h-full flex-col overflow-hidden rounded-lg border border-deep-green/14 bg-card transition-shadow hover:shadow-[0_6px_20px_rgba(27,58,47,0.14)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={covers[i]}
                  alt={pack.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col px-7 py-8">
                <span className="mb-[14px] text-xs tracking-[0.12em] text-accent uppercase">
                  {pack.dest}
                </span>
                <h3 className="mb-[14px] font-serif text-2xl font-medium text-deep-green">
                  {pack.title}
                </h3>
                <p className="mb-6 flex-1 text-[14.5px] leading-relaxed text-body-alt">
                  {pack.desc}
                </p>
                <span className="border-t border-deep-green/14 pt-4 text-sm font-medium text-deep-green">
                  Check Itinerary →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
