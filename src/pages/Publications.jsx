import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import { motion } from 'framer-motion'
import { useFilter } from '../context/FilterContext'
import { publicationsByType, allPublications, researchThemes } from '../data/content'

const TABS = [
  { id: 'books', label: 'Books' },
  { id: 'bookManuscripts', label: 'Book Manuscripts' },
  { id: 'chapters', label: 'Book Chapters' },
  { id: 'articles', label: 'Journal Articles' },
  { id: 'articlesUnderReview', label: 'Articles Under Review' },
  { id: 'reports', label: 'Research Reports' },
  { id: 'conference', label: 'Conference Papers' },
]

// ✅ helpers (fix year + tag filters)
const toYear = (y) => {
  if (y == null) return null
  const n = Number(String(y).match(/\d{4}/)?.[0])
  return Number.isFinite(n) ? n : null
}

const hasTag = (p, tag) => {
  if (!tag) return true
  const target = String(tag).toLowerCase()
  return (p.tags || []).some((t) => String(t).toLowerCase() === target)
}

function PublicationCard({ item, index, total }) {
  const [copied, setCopied] = useState(null)

  const apa = item.citation
    ? item.citation
    : `Panday, P. K. (${item.year}). ${item.title}. ${item.venue || ''}.`

  const copy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

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
        {item.title || 'Untitled'}
      </h3>

      <p className="text-sm text-neutral-stone dark:text-navy-400 mt-1">
        {item.authors ? `${item.authors} · ` : ''}
        {item.venue ? `${item.venue} ` : ''}
        {item.year ? `(${item.year})` : ''}
        {item.status ? (
          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-accent-emerald/15 text-accent-emerald">
            {item.status}
          </span>
        ) : null}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {(item.tags || []).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-neutral-mist/60 dark:bg-navy-700 text-navy-700 dark:text-neutral-stone"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        <button
          type="button"
          onClick={() => copy(apa, 'apa')}
          className="text-xs px-3 py-1.5 rounded border border-navy-600 dark:border-navy-500 hover:bg-navy-100 dark:hover:bg-navy-700 transition-colors"
        >
          {copied === 'apa' ? 'Copied!' : 'Copy Citation'}
        </button>

        {item.doi && (
          <a
            href={`https://doi.org/${item.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded border border-accent-emerald text-accent-emerald hover:bg-accent-emerald/10 transition-colors"
          >
            DOI
          </a>
        )}

        {item.url && !item.doi && (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1.5 rounded border border-accent-emerald text-accent-emerald hover:bg-accent-emerald/10 transition-colors"
          >
            Link
          </a>
        )}
      </div>

      {item.citation && (
        <p className="mt-4 text-sm text-neutral-stone dark:text-navy-400 leading-relaxed whitespace-pre-line">
          {item.citation}
        </p>
      )}
    </motion.div>
  )
}

export default function Publications() {
  const [tab, setTab] = useState('books')
  const [search, setSearch] = useState('')
  const [yearRange, setYearRange] = useState([1990, 2026])
  const [tagFilter, setTagFilter] = useState(null)
  const { researchThemeFilter } = useFilter()

  // ✅ Total count per category (overall totals)
  const tabCounts = useMemo(() => {
    const counts = {}
    TABS.forEach((t) => {
      counts[t.id] = (publicationsByType?.[t.id] || []).length
    })
    return counts
  }, [])

  // ✅ Fuse over all publications (works even if year/type formats vary)
  const fuse = useMemo(
    () =>
      new Fuse(allPublications, {
        keys: ['title', 'authors', 'venue', 'tags', 'citation', 'status'],
        threshold: 0.3,
      }),
    []
  )

  // ✅ Map theme -> tag (keep flexible)
  const themeToTag = {
    policy: 'Public Policy',
    urban: 'Urban',
    accountability: 'Accountability',
    gender: 'Gender',
    comparative: 'Governance',
    sdg: 'SDGs',      // ✅ your tags include “SDGs”
    digital: 'Digital Governance',
  }

  const items = useMemo(() => {
    const minY = Number(yearRange[0])
    const maxY = Number(yearRange[1])

    let list = publicationsByType[tab] || []

    // ✅ Search: search in allPublications, then keep only this tab
    if (search.trim()) {
      const results = fuse.search(search.trim())
      list = results
        .map((r) => r.item)
        .filter((p) => (p.type || tab) === tab) // ✅ handle missing type
    } else {
      // ✅ ensure items from publicationsByType have type for consistent logic
      list = list.map((p) => ({ ...p, type: p.type || tab }))
    }

    const tagForTheme = researchThemeFilter ? themeToTag[researchThemeFilter] : null

    return list
      .filter((p) => {
        const y = toYear(p.year)
        if (y == null) return true
        return y >= minY && y <= maxY
      })
      .filter((p) => !tagFilter || hasTag(p, tagFilter))
      .filter((p) => !tagForTheme || hasTag(p, tagForTheme))
  }, [tab, search, yearRange, tagFilter, researchThemeFilter, fuse])


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
              Publications
            </motion.h1>
            <p className="mt-2 text-navy-700 dark:text-neutral-stone max-w-xl">
              Books, manuscripts, journal articles, chapters, reports, and conference papers. Copy citation, open DOI.
            </p>
          </div>

          {/* Filters (keep same) */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">Search</label>
              <input
                type="search"
                placeholder="Title, author, keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800 text-navy-900 dark:text-white placeholder-neutral-stone focus:ring-2 focus:ring-accent-emerald focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">Year range</label>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  min={1980}
                  max={2030}
                  value={yearRange[0]}
                  onChange={(e) => setYearRange([Number(e.target.value), yearRange[1]])}
                  className="w-20 px-2 py-2 rounded border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800"
                />
                <span className="text-neutral-stone">–</span>
                <input
                  type="number"
                  min={1980}
                  max={2030}
                  value={yearRange[1]}
                  onChange={(e) => setYearRange([yearRange[0], Number(e.target.value)])}
                  className="w-20 px-2 py-2 rounded border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800"
                />
              </div>
            </div>

            {researchThemeFilter && (
              <p className="text-sm text-accent-emerald">
                Filtering by theme: {researchThemes.find((t) => t.id === researchThemeFilter)?.title}
              </p>
            )}
          </aside>

          {/* Results (keep same) */}
          <div className="col-span-12 lg:col-span-8 mt-8 lg:mt-0">
            <div className="flex flex-wrap gap-2 border-b border-neutral-mist dark:border-navy-700 pb-4 mb-6">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    tab === t.id ? 'bg-accent-emerald text-white' : 'hover:bg-neutral-mist/60 dark:hover:bg-navy-700'
                  }`}
                >
                  {t.label} <span className="ml-1 opacity-80">({tabCounts[t.id] ?? 0})</span>
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {items.length === 0 ? (
                <p className="text-neutral-stone dark:text-navy-400">No publications match the current filters.</p>
              ) : (
                <>
                  <p className="text-sm text-neutral-stone dark:text-navy-400">
                    Showing {items.length} result{items.length !== 1 ? 's' : ''}.
                  </p>

                  {items.map((item, index) => (
                    <PublicationCard key={item.id} item={item} index={index + 1} total={items.length} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
