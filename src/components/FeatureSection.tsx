import { ImageCarousel } from "@/components/ImageCarousel";
import { WHATSAPP_HREF } from "@/lib/data";

type FeatureSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  imageAlt: string;
  imageOnLeft?: boolean;
  dark?: boolean;
};

export function FeatureSection({
  eyebrow,
  title,
  subtitle,
  description,
  images,
  imageAlt,
  imageOnLeft = false,
  dark = false,
}: FeatureSectionProps) {
  const textBlock = (
    <div>
      <p className="mb-4 text-[13px] tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2
        className={`mb-5 font-serif text-[28px] font-medium sm:text-4xl lg:text-[42px] ${
          dark ? "text-cream" : "text-deep-green"
        }`}
      >
        {title}
      </h2>
      <p className="mb-5 text-[15px] tracking-wide text-accent">{subtitle}</p>
      <p
        className={`mb-7 max-w-[460px] text-base leading-relaxed ${
          dark ? "text-cream/82" : "text-body"
        }`}
      >
        {description}
      </p>
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-block rounded-lg px-[30px] py-[15px] text-sm font-medium tracking-wide ${
          dark ? "bg-accent-btn text-white hover:bg-accent-btn-hover" : "bg-deep-green text-white"
        }`}
      >
        Book This Tour
      </a>
    </div>
  );

  const imageBlock = <ImageCarousel images={images} alt={imageAlt} />;

  return (
    <section
      className={`px-6 py-24 md:px-10 lg:px-20 lg:py-[110px] ${
        dark ? "bg-deep-green" : "bg-cream-alt"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {imageOnLeft ? (
          <>
            <div className="order-1">{imageBlock}</div>
            <div className="order-2">{textBlock}</div>
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
