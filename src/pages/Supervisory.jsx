import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import { motion } from "framer-motion";
import { supervisionByType, allSupervision } from "../data/supervisory_data";

const TABS = [
  { id: "awarded", label: "Degrees Awarded" },
  { id: "examiner", label: "Examiner (Dissertations)" },
];

const toYear = (y) => {
  if (y == null) return null;
  const n = Number(String(y).match(/\d{4}/)?.[0]);
  return Number.isFinite(n) ? n : null;
};

const hasCategory = (item, cat) => {
  if (!cat) return true;
  const target = String(cat).toLowerCase();
  return (item.categories || []).some(
    (c) => String(c).toLowerCase() === target,
  );
};

function SupervisionCard({ item, index, total }) {
  const [copied, setCopied] = useState(null);

  const details = useMemo(() => {
    const lines = [];
    if (item.student) lines.push(`Student: ${item.student}`);
    if (item.degree) lines.push(`Degree: ${item.degree}`);
    if (item.title) lines.push(`Dissertation Title: ${item.title}`);
    if (item.enrolledAt) lines.push(`Enrolled at: ${item.enrolledAt}`);
    if (item.university) lines.push(`University: ${item.university}`);
    if (item.awardingAuthority)
      lines.push(`Awarding Authority: ${item.awardingAuthority}`);
    if (item.year) lines.push(`Year: ${item.year}`);
    if (item.categories?.length)
      lines.push(`Categories: ${item.categories.join(", ")}`);
    return lines.join("\n");
  }, [item]);

  const copy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <motion.div
      layout
      className="p-5 rounded-xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60 transition-all duration-200 hover:shadow-lg hover:border-accent-emerald/30"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -2 }}
    >
      <p className="text-xs font-semibold text-accent-emerald dark:text-accent-emerald-light mb-2">
        Result {index} of {total}
      </p>

      <h3 className="font-serif font-semibold text-navy-900 dark:text-white">
        {item.student || "Unnamed"}
      </h3>

      <p className="text-sm text-neutral-stone dark:text-navy-400 mt-1">
        {item.degree ? `${item.degree} · ` : ""}
        {item.university ? `${item.university} ` : ""}
        {item.year ? `(${item.year})` : ""}
        <span className="ml-2 text-xs px-2 py-0.5 rounded bg-accent-emerald/15 text-accent-emerald">
          {item.type === "examiner" ? "Examiner" : "Awarded"}
        </span>
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {(item.categories || []).map((cat) => (
          <span
            key={cat}
            className="text-xs px-2 py-0.5 rounded bg-neutral-mist/60 dark:bg-navy-700 text-navy-700 dark:text-neutral-stone"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <button
          type="button"
          onClick={() => copy(details, "copy")}
          className="text-xs px-3 py-1.5 rounded border border-navy-600 dark:border-navy-500 hover:bg-navy-100 dark:hover:bg-navy-700 transition-colors"
        >
          {copied === "copy" ? "Copied!" : "Copy Details"}
        </button>
      </div>

      <p className="mt-4 text-sm text-neutral-stone dark:text-navy-400 leading-relaxed whitespace-pre-line">
        {details}
      </p>
    </motion.div>
  );
}

export default function Supervision() {
  const [tab, setTab] = useState("awarded");
  const [search, setSearch] = useState("");
  const [yearRange, setYearRange] = useState([2010, 2026]);
  const [categoryFilter, setCategoryFilter] = useState(null);

  // tab counts
  const tabCounts = useMemo(() => {
    const counts = {};
    TABS.forEach((t) => {
      counts[t.id] = (supervisionByType?.[t.id] || []).length;
    });
    return counts;
  }, []);

  // categories
  const allCategories = useMemo(() => {
    const set = new Set();
    allSupervision.forEach((i) =>
      (i.categories || []).forEach((c) => set.add(c)),
    );
    return Array.from(set).sort();
  }, []);

  // fuse search (student/title/university/year text)
  const fuse = useMemo(
    () =>
      new Fuse(allSupervision, {
        keys: [
          "student",
          "degree",
          "title",
          "university",
          "enrolledAt",
          "awardingAuthority",
          "year",
          "categories",
        ],
        threshold: 0.3,
        ignoreLocation: true,
      }),
    [],
  );

  const items = useMemo(() => {
    const minY = Number(yearRange[0]);
    const maxY = Number(yearRange[1]);

    let list = supervisionByType[tab] || [];

    // search over all then keep tab
    if (search.trim()) {
      const results = fuse.search(search.trim()).map((r) => r.item);
      list = results.filter((x) => x.listType === tab || x.type === tab);
    } else {
      // ensure type/listType present
      list = list.map((x) => ({
        ...x,
        type: x.type || tab,
        listType: x.listType || tab,
      }));
    }

    return list
      .filter((x) => {
        const y = toYear(x.year);
        if (y == null) return true;
        return y >= minY && y <= maxY;
      })
      .filter((x) => !categoryFilter || hasCategory(x, categoryFilter));
  }, [tab, search, yearRange, categoryFilter, fuse]);

  return (
    <div className="bg-neutral-paper dark:bg-navy-950 min-h-screen">
      <section className="section-padding">
        <div className="container-grid">
          <div className="col-span-12 mb-8">
            <motion.h1
              className="heading-serif text-4xl lg:text-5xl text-navy-900 dark:text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Supervision & Examination
            </motion.h1>
            <p className="mt-2 text-navy-700 dark:text-neutral-stone max-w-xl">
              Degrees awarded and dissertation examinations. Search by student,
              title, university; filter by year range and categories.
            </p>
          </div>

          {/* Filters */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">
                Search
              </label>
              <input
                type="search"
                placeholder="Student, title, university..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white placeholder-neutral-stone focus:ring-2 focus:ring-accent-emerald focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">
                Year range
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  min={1980}
                  max={2030}
                  value={yearRange[0]}
                  onChange={(e) =>
                    setYearRange([Number(e.target.value), yearRange[1]])
                  }
                  className="w-20 px-2 py-2 rounded border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800"
                />
                <span className="text-neutral-stone">–</span>
                <input
                  type="number"
                  min={1980}
                  max={2030}
                  value={yearRange[1]}
                  onChange={(e) =>
                    setYearRange([yearRange[0], Number(e.target.value)])
                  }
                  className="w-20 px-2 py-2 rounded border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800"
                />
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="col-span-12 lg:col-span-8 mt-8 lg:mt-0">
            <div className="flex flex-wrap gap-2 border-b border-neutral-mist dark:border-navy-700 pb-4 mb-6">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    tab === t.id
                      ? "bg-accent-emerald text-white"
                      : "hover:bg-neutral-mist/60 dark:hover:bg-navy-700"
                  }`}
                >
                  {t.label}{" "}
                  <span className="ml-1 opacity-80">
                    ({tabCounts[t.id] ?? 0})
                  </span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {items.length === 0 ? (
                <p className="text-neutral-stone dark:text-navy-400">
                  No items match the current filters.
                </p>
              ) : (
                <>
                  <p className="text-sm text-neutral-stone dark:text-navy-400">
                    Showing {items.length} result{items.length !== 1 ? "s" : ""}
                    .
                  </p>

                  {items.map((item, index) => (
                    <SupervisionCard
                      key={item.id}
                      item={item}
                      index={index + 1}
                      total={items.length}
                    />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
