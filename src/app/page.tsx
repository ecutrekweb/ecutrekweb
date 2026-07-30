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
import { specialTours } from "@/lib/data";

export const revalidate = 3600;

export default function Home() {
  return (
    <>
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
