// src/pages/AcademicAwards.jsx
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Fuse from "fuse.js";
import { ChevronRight } from "lucide-react";
import { academicAwards } from "../data/awards";

const AcademicAwards = () => {
  const [typeFilter, setTypeFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [yearRange, setYearRange] = useState([1990, 2026]);

  const typeLabel = (t) => {
    if (!t) return "All";
    if (t === "award") return "Award";
    if (t === "fellowship") return "Fellowship";
    if (t === "scholarship") return "Scholarship";
    if (t === "studentship") return "Studentship";
    return String(t).charAt(0).toUpperCase() + String(t).slice(1);
  };

  const toYear = (y) => {
    if (y == null) return null;
    const n = Number(String(y).match(/\d{4}/)?.[0]);
    return Number.isFinite(n) ? n : null;
  };

  const FILTERS = useMemo(
    () => [
      { id: "all", label: "All" },
      { id: "award", label: "Awards" },
      { id: "fellowship", label: "Fellowships" },
      { id: "scholarship", label: "Scholarships" },
      { id: "studentship", label: "Studentships" },
    ],
    [],
  );

  const counts = useMemo(() => {
    const map = { all: academicAwards.length };
    FILTERS.forEach((f) => {
      if (f.id === "all") return;
      map[f.id] = academicAwards.filter((x) => x.type === f.id).length;
    });
    return map;
  }, [FILTERS]);

  const fuse = useMemo(
    () =>
      new Fuse(academicAwards, {
        // ✅ use your edited keys idea
        keys: [
          "title",
          "awardingBody",
          "durationText",
          "description",
          "categories",
        ],
        threshold: 0.3,
      }),
    [],
  );

  const items = useMemo(() => {
    const minY = Number(yearRange[0]);
    const maxY = Number(yearRange[1]);

    let list = academicAwards;

    // search
    if (search.trim()) list = fuse.search(search.trim()).map((r) => r.item);

    // type
    if (typeFilter !== "all") list = list.filter((x) => x.type === typeFilter);

    // ✅ overlap range filter (same logic you used before)
    list = list.filter((item) => {
      const s = toYear(item.startYear ?? item.year);
      const e = toYear(item.endYear ?? item.year);
      if (s == null || e == null) return true;
      return s <= maxY && e >= minY;
    });

    // newest first
    return [...list].sort(
      (a, b) =>
        (toYear(b.year ?? b.startYear) || 0) -
        (toYear(a.year ?? a.startYear) || 0),
    );
  }, [typeFilter, search, yearRange, fuse]);

  return (
    <section className="py-20 bg-white dark:bg-navy-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white">
            Academic Honor & Awards
          </h2>
          <p className="mt-3 text-neutral-stone dark:text-navy-400">
            Awards, fellowships, scholarships, and studentships
          </p>
          <div className="w-20 h-1.5 bg-accent-emerald mx-auto mt-4 rounded-full" />
        </div>

        {/* Filters Row (like your Education page style) */}
        <div className="mb-10 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Search */}
          <div className="lg:col-span-5">
            <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">
              Search
            </label>
            <input
              type="search"
              placeholder="Title, awarding body, keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-navy-800 bg-white dark:bg-navy-900/50 text-navy-900 dark:text-white placeholder-neutral-stone focus:ring-2 focus:ring-accent-emerald focus:border-transparent"
            />
          </div>

          {/* Type pills */}
          <div className="lg:col-span-7">
            <label className=" block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">
              Type
            </label>
            <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setTypeFilter(f.id)}
                  className={[
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    typeFilter === f.id
                      ? "bg-accent-emerald text-white"
                      : "bg-neutral-100 dark:bg-navy-900/50 text-navy-700 dark:text-neutral-stone hover:bg-neutral-200 dark:hover:bg-navy-800",
                  ].join(" ")}
                >
                  {f.label}{" "}
                  <span className="ml-1 opacity-80">({counts[f.id] ?? 0})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Year range */}
          <div className="lg:col-span-4">
            <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">
              Year range
            </label>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                min={1950}
                max={2035}
                value={yearRange[0]}
                onChange={(e) =>
                  setYearRange([Number(e.target.value), yearRange[1]])
                }
                className="w-24 px-2 py-2 rounded border border-neutral-200 dark:border-navy-800 bg-white dark:bg-navy-900/50"
              />
              <span className="text-neutral-stone">–</span>
              <input
                type="number"
                min={1950}
                max={2035}
                value={yearRange[1]}
                onChange={(e) =>
                  setYearRange([yearRange[0], Number(e.target.value)])
                }
                className="w-24 px-2 py-2 rounded border border-neutral-200 dark:border-navy-800 bg-white dark:bg-navy-900/50"
              />
            </div>
          </div>

          
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-neutral-200 dark:bg-navy-800" />

          {items.length === 0 ? (
            <p className="text-center text-neutral-stone dark:text-navy-400 py-12">
              No awards match the current filters.
            </p>
          ) : (
            items.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id || `${item.title}-${index}`}
                  className="relative mb-12 flex justify-start md:justify-between items-center w-full"
                >
                  {/* Desktop Left Side */}
                  <div className="hidden md:block w-[45%]">
                    {isEven && (
                      <TimelineCard item={item} typeLabel={typeLabel} />
                    )}
                  </div>

                  {/* Dot */}
                  <div className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 z-20">
                    <div className="w-3.5 h-3.5 bg-accent-emerald rounded-full border-2 border-white dark:border-navy-950 shadow-sm" />
                  </div>

                  {/* Content Side */}
                  <div className="pl-10 md:pl-0 w-full md:w-[45%]">
                    {!isEven ? (
                      <TimelineCard item={item} typeLabel={typeLabel} />
                    ) : (
                      <div className="md:hidden">
                        <TimelineCard item={item} typeLabel={typeLabel} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

const TimelineCard = ({ item, typeLabel }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-navy-900/50 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-navy-800 hover:shadow-xl dark:hover:bg-navy-800/80 transition-all duration-300 group"
  >
    <div className="flex items-start justify-between gap-4">
      <span className="text-accent-emerald dark:text-accent-emerald-light font-semibold text-lg">
        {item.year ?? item.startYear ?? ""}
      </span>
      <span className="text-neutral-400 dark:text-neutral-500 shrink-0 pt-1">
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>

    <p className="font-serif text-xl font-semibold text-navy-900 dark:text-white mt-2">
      {item.title || "Untitled"}
    </p>

    <p className="text-sm text-neutral-stone dark:text-navy-400 mt-1">
      {item.awardingBody || ""}
      {item.durationText ? ` · ${item.durationText}` : ""}
    </p>

    <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium bg-accent-emerald/15 dark:bg-accent-emerald/25 text-accent-emerald dark:text-accent-emerald-light">
      {typeLabel(item.type)}
    </span>

    {item.description && (
      <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-navy-800">
        <p className="text-xs md:text-sm text-neutral-stone dark:text-navy-400 italic leading-relaxed">
          {item.description}
        </p>
      </div>
    )}
  </motion.div>
);

export default AcademicAwards;
