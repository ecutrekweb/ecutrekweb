"use client";

import { useEffect, useRef, useState } from "react";

type DateRangeCalendarProps = {
  startDate: string | null;
  endDate: string | null;
  onChange: (startDate: string | null, endDate: string | null) => void;
};

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const toISO = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const fromISO = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

const startOfDay = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const formatShort = (iso: string) =>
  fromISO(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

export function formatDateRange(startDate: string | null, endDate: string | null) {
  if (!startDate) return null;
  if (!endDate || endDate === startDate) return formatShort(startDate);
  return `${formatShort(startDate)} – ${formatShort(endDate)}`;
}

export function DateRangeCalendar({
  startDate,
  endDate,
  onChange,
}: DateRangeCalendarProps) {
  const [open, setOpen] = useState(false);
  const [hoverISO, setHoverISO] = useState<string | null>(null);
  const [viewDate, setViewDate] = useState(() =>
    startDate ? fromISO(startDate) : new Date()
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const today = startOfDay(new Date());

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleSelect = (iso: string) => {
    if (!startDate || (startDate && endDate)) {
      onChange(iso, null);
      return;
    }
    if (iso < startDate) {
      onChange(iso, startDate);
    } else {
      onChange(startDate, iso);
    }
    setOpen(false);
  };

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const leadingBlanks = firstOfMonth.getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const cells: (Date | null)[] = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: totalDays }, (_, i) => new Date(year, month, i + 1)),
  ];

  const rangeStart = startDate;
  const rangeEnd =
    startDate && !endDate ? hoverISO : endDate ?? null;

  const label = formatDateRange(startDate, endDate);

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex min-w-[260px] items-center gap-3 rounded-lg border border-deep-green/30 bg-cream px-4 py-[11px] text-left text-[15px] text-deep-green transition-colors hover:border-deep-green focus:outline-none focus:border-deep-green"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="shrink-0 text-deep-green/70"
        >
          <rect
            x="3"
            y="5"
            width="18"
            height="16"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M3 9.5H21"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M8 3V6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16 3V6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <span className={label ? "text-deep-green" : "text-muted"}>
          {label ?? "Select start and finish dates"}
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+8px)] z-30 w-[300px] rounded-lg border border-deep-green/15 bg-cream p-4 shadow-[0_12px_32px_rgba(18,38,30,0.18)]">
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous month"
              onClick={() => setViewDate(new Date(year, month - 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-md text-deep-green hover:bg-deep-green/10"
            >
              ‹
            </button>
            <div className="font-serif text-[15px] text-deep-green">
              {viewDate.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </div>
            <button
              type="button"
              aria-label="Next month"
              onClick={() => setViewDate(new Date(year, month + 1, 1))}
              className="flex h-8 w-8 items-center justify-center rounded-md text-deep-green hover:bg-deep-green/10"
            >
              ›
            </button>
          </div>

          <div className="mb-1 grid grid-cols-7">
            {WEEKDAYS.map((d) => (
              <div
                key={d}
                className="flex h-8 items-center justify-center text-[11px] tracking-[0.05em] text-muted uppercase"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-y-1">
            {cells.map((date, i) => {
              if (!date) return <div key={`b-${i}`} />;
              const iso = toISO(date);
              const isPast = date < today;
              const isStart = rangeStart === iso;
              const isEnd = rangeEnd === iso;
              const inRange =
                !!rangeStart &&
                !!rangeEnd &&
                iso > (rangeStart < rangeEnd ? rangeStart : rangeEnd) &&
                iso < (rangeStart < rangeEnd ? rangeEnd : rangeStart);
              const isToday = toISO(today) === iso;
              const isEdge = isStart || isEnd;

              return (
                <div key={iso} className="relative flex justify-center py-[2px]">
                  {inRange && (
                    <div className="absolute inset-y-0 left-0 right-0 bg-deep-green/12" />
                  )}
                  <button
                    type="button"
                    disabled={isPast}
                    onClick={() => handleSelect(iso)}
                    onMouseEnter={() => setHoverISO(iso)}
                    className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full text-[13.5px] transition-colors ${
                      isPast
                        ? "cursor-not-allowed text-deep-green/25"
                        : isEdge
                        ? "bg-accent-btn font-medium text-white"
                        : isToday
                        ? "border border-deep-green/50 text-deep-green hover:bg-deep-green/10"
                        : "text-deep-green hover:bg-deep-green/10"
                    }`}
                  >
                    {date.getDate()}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-deep-green/10 pt-3">
            <span className="text-[12.5px] text-muted">
              {!startDate
                ? "Pick a start date"
                : !endDate
                ? "Pick a finish date"
                : formatDateRange(startDate, endDate)}
            </span>
            {(startDate || endDate) && (
              <button
                type="button"
                onClick={() => onChange(null, null)}
                className="text-[12.5px] font-medium text-accent-dark hover:underline"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
