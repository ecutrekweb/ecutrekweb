import Image from "next/image";

export function AboutGuide() {
  return (
    <section id="about" className="px-6 py-24 md:px-10 lg:px-20 lg:py-[110px]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div className="relative aspect-square w-full max-w-[340px] justify-self-start overflow-hidden rounded-full">
          <Image
            src="/images/CErazo.jpg"
            alt="Portrait of Cristian Erazo"
            fill
            sizes="340px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-4 text-[13px] tracking-[0.2em] text-accent uppercase">
            About Your Guide
          </p>
          <h2 className="mb-[18px] font-serif text-[28px] font-medium text-deep-green sm:text-3xl lg:text-4xl">
            Cristian Erazo
          </h2>
          <p className="mb-[22px] text-[15px] text-muted">
            28 Years as a Tourist Guide · Bachelor&apos;s Degree in National
            Tourism Guiding
          </p>
          <p className="max-w-[600px] text-[16.5px] leading-[1.8] text-body">
            A former mountaineering guide graduate, Cristian has spent nearly
            three decades leading travelers across Ecuador&apos;s volcanoes,
            cloud forests and islands — known equally for his safety-first
            approach on the trail and his gift for logistics off it.
          </p>
        </div>
      </div>
    </section>
  );
}
