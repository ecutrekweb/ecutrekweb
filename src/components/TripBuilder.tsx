"use client";

import { useState } from "react";
import {
  WHATSAPP_NUMBER,
  defaultDays,
  defaultSelectedDestinations,
  destinationNames,
} from "@/lib/data";
import { DateRangeCalendar, formatDateRange } from "@/components/DateRangeCalendar";

const MIN_DAYS = 1;
const MAX_DAYS = 21;
const MIN_TRAVELERS = 1;
const MAX_TRAVELERS = 20;

export function TripBuilder() {
  const [selected, setSelected] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(defaultSelectedDestinations.map((name) => [name, true]))
  );
  const [days, setDays] = useState(defaultDays);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [travelers, setTravelers] = useState(2);
  const [otherDestination, setOtherDestination] = useState("");

  const toggle = (name: string) =>
    setSelected((prev) => ({ ...prev, [name]: !prev[name] }));

  const chosen = [
    ...destinationNames.filter((name) => selected[name]),
    ...(otherDestination.trim() ? [otherDestination.trim()] : []),
  ];

  const selectionSummary = chosen.length
    ? chosen.join(" · ")
    : "Select at least one destination to build your itinerary.";

  const dateRangeLabel = formatDateRange(startDate, endDate);

  const tripText = `Hi! I'd like a custom ${days}-day tour for ${travelers} ${
    travelers === 1 ? "person" : "people"
  }${dateRangeLabel ? `, from ${dateRangeLabel}` : ""}${
    chosen.length ? ` including: ${chosen.join(", ")}` : ""
  }.`;
  const customWhatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    tripText
  )}`;

  return (
    <section
      id="custom-tour"
      className="bg-cream-alt px-6 py-24 md:px-10 lg:px-20 lg:py-[110px]"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 max-w-[640px]">
          <p className="mb-[14px] text-[13px] tracking-[0.2em] text-accent uppercase">
            Build Your Trip
          </p>
          <h2 className="mb-4 font-serif text-[28px] font-medium text-deep-green sm:text-3xl lg:text-4xl">
            Design Your Own Tour
          </h2>
          <p className="text-base leading-relaxed text-body-alt">
            Pick the destinations that call to you and the number of days
            you have — we&apos;ll shape a private itinerary around it.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-4 text-[13px] tracking-[0.1em] text-muted uppercase">
              Choose Destinations
            </div>
            <div className="mb-9 flex flex-wrap gap-3">
              {destinationNames.map((name) => {
                const isSelected = !!selected[name];
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => toggle(name)}
                    aria-pressed={isSelected}
                    className={`rounded-full border px-5 py-[11px] text-[14.5px] font-medium text-white transition-colors ${
                      isSelected
                        ? "border-accent-btn bg-accent-btn"
                        : "border-deep-green bg-deep-green/85 hover:bg-deep-green"
                    }`}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
            <input
              type="text"
              value={otherDestination}
              onChange={(e) => setOtherDestination(e.target.value)}
              placeholder="Other place o destination"
              className="mb-9 w-full max-w-[420px] rounded-lg border border-deep-green/30 bg-cream px-4 py-[11px] text-[15px] text-deep-green outline-none placeholder:text-muted focus:border-deep-green"
            />
            <div className="mb-4 text-[13px] tracking-[0.1em] text-muted uppercase">
              Number of Days
            </div>
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setDays((d) => Math.max(d - 1, MIN_DAYS))}
                aria-label="Decrease days"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-deep-green bg-deep-green text-xl text-white"
              >
                −
              </button>
              <span className="min-w-[60px] text-center font-serif text-3xl text-deep-green">
                {days}
              </span>
              <button
                type="button"
                onClick={() => setDays((d) => Math.min(d + 1, MAX_DAYS))}
                aria-label="Increase days"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-deep-green bg-deep-green text-xl text-white"
              >
                +
              </button>
              <span className="text-[14.5px] text-muted">days in Ecuador</span>
            </div>

            <div className="mt-9 mb-4 text-[13px] tracking-[0.1em] text-muted uppercase">
              Travel Dates
            </div>
            <DateRangeCalendar
              startDate={startDate}
              endDate={endDate}
              onChange={(start, end) => {
                setStartDate(start);
                setEndDate(end);
              }}
            />

            <div className="mt-9 mb-4 text-[13px] tracking-[0.1em] text-muted uppercase">
              Number of Travelers
            </div>
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() =>
                  setTravelers((t) => Math.max(t - 1, MIN_TRAVELERS))
                }
                aria-label="Decrease travelers"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-deep-green bg-deep-green text-xl text-white"
              >
                −
              </button>
              <span className="min-w-[60px] text-center font-serif text-3xl text-deep-green">
                {travelers}
              </span>
              <button
                type="button"
                onClick={() =>
                  setTravelers((t) => Math.min(t + 1, MAX_TRAVELERS))
                }
                aria-label="Increase travelers"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-deep-green bg-deep-green text-xl text-white"
              >
                +
              </button>
              <span className="text-[14.5px] text-muted">
                {travelers === 1 ? "person" : "people"}
              </span>
            </div>
          </div>
          <div className="sticky top-24 rounded-lg bg-deep-green px-8 py-9">
            <div className="mb-5 text-[13px] tracking-[0.12em] text-accent uppercase">
              Your Custom Itinerary
            </div>
            <div className="mb-[6px] font-serif text-[22px] text-cream">
              {days} Days
            </div>
            <div className="mb-4 text-[14.5px] text-cream/75">
              {dateRangeLabel ?? "Dates to be decided"} ·{" "}
              {travelers} {travelers === 1 ? "traveler" : "travelers"}
            </div>
            <p className="mb-6 min-h-[44px] text-[14.5px] leading-relaxed text-cream/75">
              {selectionSummary}
            </p>
            <a
              href={customWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg bg-accent-btn px-6 py-[15px] text-center text-sm font-medium tracking-wide text-white hover:bg-accent-btn-hover"
            >
              Send My Selection via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
