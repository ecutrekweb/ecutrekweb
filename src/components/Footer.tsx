import Image from "next/image";
import Link from "next/link";

import { WHATSAPP_DISPLAY, WHATSAPP_HREF } from "@/lib/data";

export function Footer() {
  return (
    <footer
      id="contact"
      className="bg-deep-green-dark px-6 pt-16 pb-10 md:px-10 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 border-b border-cream/12 pb-10 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/ecutrek-logo.png"
              alt="EcuTrek"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full"
            />
            <span className="font-brand text-xl text-cream">EcuTrek</span>
          </div>
          <p className="mt-4 max-w-[320px] text-[14.5px] leading-relaxed text-cream/60">
            Personalized travel and trekking experiences across Ecuador,
            guided with 28 years of local expertise.
          </p>
        </div>
        <div>
          <div className="mb-4 text-[13px] tracking-[0.12em] text-accent uppercase">
            Contact
          </div>
          <p className="mb-2 text-[14.5px] text-cream/75">
            {WHATSAPP_DISPLAY}
          </p>
          <p className="mb-4 text-[14.5px] text-cream/75">
            ecutrek@hotmail.com
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-accent-btn px-5 py-[10px] text-sm font-medium tracking-wide text-white hover:bg-accent-btn-hover"
          >
            Message on WhatsApp
          </a>
        </div>
        <div>
          <div className="mb-4 text-[13px] tracking-[0.12em] text-accent uppercase">
            Explore
          </div>
          <div className="flex flex-col gap-[10px]">
            <Link href="/#tours" className="text-[14.5px] text-cream/75">
              Full Day Tours
            </Link>
            <Link href="/#packages" className="text-[14.5px] text-cream/75">
              Ecuador Packages
            </Link>
            <a
              href="https://www.tripadvisor.es/UserReviewEdit-g294308-d26455191-Ecutrek-Quito_Pichincha_Province.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14.5px] text-cream/75"
            >
              Review Us on TripAdvisor
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-3 pt-6">
        <span className="text-[13px] text-cream/45">Ecutrek 2026</span>
      </div>
    </footer>
  );
}
