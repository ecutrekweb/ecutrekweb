import Image from "next/image";
import { WHATSAPP_HREF } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-[560px] items-end h-[92vh]">
      <div className="absolute inset-0">
        <Image
          src="/images/cuencaBCK.jpeg"
          alt="Cuenca's cathedral at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,38,30,0.88)_0%,rgba(18,38,30,0.35)_55%,rgba(18,38,30,0.15)_100%)]" />
      </div>
      <div className="relative z-[2] max-w-[900px] px-6 pb-12 md:px-10 md:pb-16 lg:px-20 lg:pb-[88px]">
        <p className="mb-[18px] text-sm tracking-[0.22em] text-white uppercase [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]">
          Private Journeys Through Ecuador
        </p>
        <h1 className="mb-6 font-serif text-[38px] font-medium leading-[1.08] text-cream sm:text-5xl lg:text-[68px] [text-shadow:0px_2px_8px_rgba(0,0,0,0.6)]">
          Personalized tours designed for travelers of all ages
        </h1>
        <p className="mb-9 max-w-[560px] text-lg leading-relaxed text-cream/86 [text-shadow:0px_2px_5px_rgba(0,0,0,0.6)]">
          Experience breathtaking destinations, rich traditions, and
          unforgettable moments tailored to your preferences.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#tours"
            className="rounded-lg bg-accent-btn px-8 py-4 text-[15px] font-medium tracking-wide text-white hover:bg-accent-btn-hover"
          >
            Explore Tours
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cream/50 px-8 py-4 text-[15px] font-medium tracking-wide text-white hover:bg-cream/10"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
