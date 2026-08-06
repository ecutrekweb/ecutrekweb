const STATS = [
  { value: "28", label: "Years guiding travelers across Ecuador" },
  { value: "15+", label: "Curated destinations, from Sierra to Amazon" },
  { value: "100%", label: "Private, personalized itineraries" },
  { value: "5", label: "Average TripAdvisor rating" },
];

export function Intro() {
  return (
    <section className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 py-24 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-20 lg:py-[110px]">
      <div>
        <p className="mb-4 text-[13px] tracking-[0.2em] text-accent uppercase">
          Since 1998
        </p>
        <h2 className="mb-[22px] font-serif text-[28px] font-medium leading-tight text-deep-green sm:text-4xl lg:text-[42px]">
          Every landscape has a story. We take the time to tell it well.
        </h2>
        <p className="max-w-[520px] text-[17px] leading-[1.75] text-body">
          From the cobbled markets of Otavalo to the crater lakes of the Sierra
          and the islands of Galápagos, our trips are built around unhurried
          mornings, real conversations, and a guide who knows the terrain like a
          second home.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-[44px] text-deep-green">
              {stat.value}
            </div>
            <div className="mt-[6px] text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
