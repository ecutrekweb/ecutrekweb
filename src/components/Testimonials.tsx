import Image from "next/image";
import { testimonials } from "@/lib/data";

function Star() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#FFB800">
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6l-6.1 3.4 1.5-6.8-5.2-4.7 6.9-.7L12 2.5z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-deep-green px-6 py-24 md:px-10 lg:px-20 lg:py-[110px]"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-[14px] text-[13px] tracking-[0.2em] text-accent uppercase">
              Traveler Reviews
            </p>
            <h2 className="mb-4 font-serif text-[28px] font-medium text-cream sm:text-3xl lg:text-4xl">
              What travelers say
            </h2>
            <div className="flex items-center gap-3">
              <div className="rounded-md bg-white px-4 py-[10px]">
                <Image
                  src="/tripLogo.png"
                  alt="TripAdvisor"
                  width={140}
                  height={79}
                  className="h-15 w-auto"
                />
              </div>
              <div className="flex items-center gap-[3px]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
            </div>
          </div>
          <a
            href="https://www.tripadvisor.com/Attraction_Review-g294308-d26455191-Reviews-Ecutrek-Quito_Pichincha_Province.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent"
          >
            More reviews on TripAdvisor →
          </a>
        </div>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.name}
              className="rounded-lg border border-cream/14 bg-cream/[0.06] px-[26px] py-[30px]"
            >
              <p className="mb-[22px] font-serif text-base italic leading-relaxed text-cream/90">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="text-[14.5px] font-medium text-cream">
                {review.name}
              </div>
              <div className="text-[13px] text-accent">
                {review.title} · {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
