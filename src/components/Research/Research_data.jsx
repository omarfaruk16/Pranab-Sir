import { useMemo, useState } from 'react'
import Fuse from 'fuse.js'
import { motion } from 'framer-motion'
import { researchGrants, consultancyExperiences } from '../../data/research_data.js'

/**
 * Research page (same layout + UX as Publications):
 * - Tabs (with total counts)
 * - Search
 * - Year range
 * - Category filter
 * - Cards with copy button
 */

const TABS = [
  { id: 'grants', label: 'Research Grants' },
  { id: 'consultancy', label: 'Consultancy Experiences' },
]

const toYear = (y) => {
  if (y == null) return null
  const n = Number(String(y).match(/\d{4}/)?.[0])
  return Number.isFinite(n) ? n : null
}

const hasCategory = (item, cat) => {
  if (!cat) return true
  const target = String(cat).toLowerCase()
  return (item.categories || []).some((c) => String(c).toLowerCase() === target)
}

function ResearchCard({ item, index, total }) {
  const [copied, setCopied] = useState(null)

  const citation = useMemo(() => {
    const lines = []
    if (item.title) lines.push(item.title)
    if (item.sponsor) lines.push(`Sponsor: ${item.sponsor}`)
    if (item.durationText) lines.push(`Duration: ${item.durationText}`)
    if (item.budget) lines.push(`Budget: ${item.budget}`)
    if (item.role) lines.push(`Role: ${item.role}`)
    if (item.collaborators?.length) lines.push(`Collaborators: ${item.collaborators.join(', ')}`)
    if (item.objective) lines.push(`Objective: ${item.objective}`)
    if (item.categories?.length) lines.push(`Categories: ${item.categories.join(', ')}`)
    return lines.join('\n')
  }, [item])

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
        {item.sponsor ? `${item.sponsor} · ` : ''}
        {item.durationText ? `${item.durationText} ` : ''}
        {toYear(item.startYear) || toYear(item.endYear) ? (
          <span className="ml-1 opacity-80">
            ({item.startYear}
            {item.endYear && item.endYear !== item.startYear ? `–${item.endYear}` : ''})
          </span>
        ) : null}

        {item.type ? (
          <span className="ml-2 text-xs px-2 py-0.5 rounded bg-accent-emerald/15 text-accent-emerald">
            {item.type === 'grant' ? 'Grant' : 'Consultancy'}
          </span>
        ) : null}
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
          onClick={() => copy(citation, 'copy')}
          className="text-xs px-3 py-1.5 rounded border border-navy-600 dark:border-navy-500 hover:bg-navy-100 dark:hover:bg-navy-700 transition-colors"
        >
          {copied === 'copy' ? 'Copied!' : 'Copy Details'}
        </button>
      </div>

      {/* full details */}
      <p className="mt-4 text-sm text-neutral-stone dark:text-navy-400 leading-relaxed whitespace-pre-line">
        {citation}
      </p>
    </motion.div>
  )
}

export default function ResearchData() {
  const [tab, setTab] = useState('grants')
  const [search, setSearch] = useState('')
  const [yearRange, setYearRange] = useState([2000, 2026])
  const [categoryFilter, setCategoryFilter] = useState(null)

  // normalize + add listType to support fuse + filtering
  const grants = useMemo(
    () => (researchGrants || []).map((g) => ({ ...g, listType: 'grants', type: g.type || 'grant' })),
    []
  )
  const consultancy = useMemo(
    () =>
      (consultancyExperiences || []).map((c) => ({
        ...c,
        listType: 'consultancy',
        type: c.type || 'consultancy',
      })),
    []
  )

  const allItems = useMemo(() => [...grants, ...consultancy], [grants, consultancy])

  // totals per tab
  const tabCounts = useMemo(() => {
    return {
      grants: grants.length,
      consultancy: consultancy.length,
    }
  }, [grants.length, consultancy.length])

  // categories for filter chips
  const allCategories = useMemo(() => {
    const set = new Set()
    allItems.forEach((i) => (i.categories || []).forEach((c) => set.add(c)))
    return Array.from(set).sort()
  }, [allItems])

  // fuse over all items (search title/sponsor/year text)
  const fuse = useMemo(
    () =>
      new Fuse(allItems, {
        keys: ['title', 'sponsor', 'durationText', 'objective', 'categories', 'budget', 'role', 'collaborators'],
        threshold: 0.3,
        ignoreLocation: true,
      }),
    [allItems]
  )

  const items = useMemo(() => {
    const minY = Number(yearRange[0])
    const maxY = Number(yearRange[1])

    // base list by tab
    let list = tab === 'grants' ? grants : consultancy

    // search globally then limit to tab
    if (search.trim()) {
      const results = fuse.search(search.trim()).map((r) => r.item)
      list = results.filter((x) => x.listType === tab)
    }

    // year overlap filter (important for ranges)
    list = list.filter((x) => {
      const sy = toYear(x.startYear) ?? toYear(x.year) ?? toYear(x.durationText)
      const ey = toYear(x.endYear) ?? sy
      if (sy == null && ey == null) return true
      const start = sy ?? ey
      const end = ey ?? sy
      return start <= maxY && end >= minY
    })

    // category filter
    if (categoryFilter) {
      list = list.filter((x) => hasCategory(x, categoryFilter))
    }

    return list
  }, [tab, grants, consultancy, search, fuse, yearRange, categoryFilter])

  return (
    <div className="bg-neutral-paper dark:bg-navy-950 min-h-screen">
      <section className="section-padding">
        <div className="container-grid">

          {/* Filters (same style as Publications) */}
          <aside className="col-span-12 lg:col-span-4 space-y-6">
            <div>
              <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">Search</label>
              <input
                type="search"
                placeholder="Title, sponsor, keyword..."
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
          </aside>

          {/* Results (same style as Publications) */}
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
                <p className="text-neutral-stone dark:text-navy-400">No items match the current filters.</p>
              ) : (
                <>
                  <p className="text-sm text-neutral-stone dark:text-navy-400">
                    Showing {items.length} result{items.length !== 1 ? 's' : ''}.
                  </p>

                  {items.map((item, index) => (
                    <ResearchCard key={item.id} item={item} index={index + 1} total={items.length} />
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