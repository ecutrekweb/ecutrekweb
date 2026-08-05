import { AboutGuide } from "@/components/AboutGuide";
import { Footer } from "@/components/Footer";
import { FullDayTours } from "@/components/FullDayTours";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { Packages } from "@/components/Packages";
import { SpecialTourSection } from "@/components/SpecialTourSection";
import { Testimonials } from "@/components/Testimonials";
import { TripBuilder } from "@/components/TripBuilder";
import { fullDayTours, packages, specialTours } from "@/lib/data";
import { absoluteUrl, jsonLdScriptProps } from "@/lib/seo";

export const revalidate = 3600;

function itemListJsonLd() {
  const items = [
    ...fullDayTours.map((tour) => ({
      name: tour.name,
      url: absoluteUrl(`/tours/${tour.slug}`),
    })),
    ...packages.map((pack) => ({
      name: pack.title,
      url: absoluteUrl(`/packages/${pack.slug}`),
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export default function Home() {
  return (
    <>
      <script {...jsonLdScriptProps(itemListJsonLd())} />
      <Header />
      <main>
        <Hero />
        <Intro />
        <FullDayTours />
        <Packages />
        <TripBuilder />
        {specialTours.map((tour) => (
          <SpecialTourSection key={tour.title} tour={tour} />
        ))}
        <AboutGuide />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
