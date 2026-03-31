// src/pages/AdministrativeResponsibilities.jsx
import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Fuse from 'fuse.js'
import {
  Briefcase,
  Calendar,
  MapPin,
  Search,
  Sparkles,
  Building2,
  Tag,
} from 'lucide-react'
import { administrativeResponsibilities } from '../data/adminResponsibilitiesData'

const toYear = (y) => {
  if (y == null) return null
  const n = Number(String(y).match(/\d{4}/)?.[0])
  return Number.isFinite(n) ? n : null
}

const prettyYears = (item) => {
  const sy = toYear(item.startYear)
  const ey = item.endDateText === 'Present' ? 'Present' : toYear(item.endYear)
  if (!sy && !ey) return item.durationText || ''
  if (sy && ey) return `${sy} — ${ey}`
  return String(item.durationText || '')
}

const AdministrativeResponsibilities = () => {
  const [search, setSearch] = useState('')
  const [yearRange, setYearRange] = useState([1995, 2026])
  const [category, setCategory] = useState(null)

  // default selected = newest
  const defaultSelectedId = useMemo(() => {
    const sorted = [...administrativeResponsibilities].sort(
      (a, b) => (toYear(b.startYear) || 0) - (toYear(a.startYear) || 0)
    )
    return sorted[0]?.id || null
  }, [])

  const [selectedId, setSelectedId] = useState(defaultSelectedId)

  const allCategories = useMemo(() => {
    const set = new Set()
    administrativeResponsibilities.forEach((x) =>
      (x.categories || []).forEach((c) => set.add(c))
    )
    return Array.from(set).sort()
  }, [])

  const fuse = useMemo(
    () =>
      new Fuse(administrativeResponsibilities, {
        keys: ['title', 'org', 'durationText', 'description', 'categories', 'location'],
        threshold: 0.3,
      }),
    []
  )

  const filtered = useMemo(() => {
    const minY = Number(yearRange[0])
    const maxY = Number(yearRange[1])

    let list = administrativeResponsibilities

    if (search.trim()) list = fuse.search(search.trim()).map((r) => r.item)

    // year overlap
    list = list.filter((item) => {
      const s = toYear(item.startYear)
      const e = toYear(item.endYear)
      if (s == null || e == null) return true
      return s <= maxY && e >= minY
    })

    if (category) {
      const target = String(category).toLowerCase()
      list = list.filter((x) =>
        (x.categories || []).some((c) => String(c).toLowerCase() === target)
      )
    }

    // newest first
    return [...list].sort(
      (a, b) => (toYear(b.startYear) || 0) - (toYear(a.startYear) || 0)
    )
  }, [search, yearRange, category, fuse])

  const selected = useMemo(() => {
    const found = administrativeResponsibilities.find((x) => x.id === selectedId)
    // if selection filtered out, pick first visible
    if (!found) return filtered[0] || null
    return found
  }, [selectedId, filtered])

  // keep selection valid when filters change
  React.useEffect(() => {
    if (!selectedId) return
    const stillVisible = filtered.some((x) => x.id === selectedId)
    if (!stillVisible && filtered[0]) setSelectedId(filtered[0].id)
  }, [filtered, selectedId])

  return (
    <section className="py-20 bg-white dark:bg-navy-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-neutral-100 dark:border-navy-800 bg-gradient-to-br from-neutral-50 to-white dark:from-navy-900/40 dark:to-navy-950 p-8 md:p-10">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent-emerald/10 blur-3xl" />
          <div className="absolute -bottom-28 -left-24 w-72 h-72 rounded-full bg-accent-emerald/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-center justify-center gap-2 text-accent-emerald">
              <Sparkles className="w-5 h-5" />
              <p className="text-sm font-semibold tracking-wide">Service & Leadership</p>
            </div>

            <h2 className="mt-3 text-center text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white">
              Administrative Responsibilities
            </h2>

            <p className="mt-4 text-center text-neutral-stone dark:text-navy-400 max-w-3xl mx-auto">
              Key administrative roles and leadership responsibilities—organized for fast browsing,
              deep reading, and quick filtering.
            </p>

            {/* Controls */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Search */}
              <div className="lg:col-span-5">
                <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-stone" />
                  <input
                    type="search"
                    placeholder="Role, organization, keyword..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 dark:border-navy-800 bg-white dark:bg-navy-900/50 text-navy-900 dark:text-white placeholder-neutral-stone focus:ring-2 focus:ring-accent-emerald focus:border-transparent"
                  />
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
                    onChange={(e) => setYearRange([Number(e.target.value), yearRange[1]])}
                    className="w-24 px-3 py-2.5 rounded-xl border border-neutral-200 dark:border-navy-800 bg-white dark:bg-navy-900/50"
                  />
                  <span className="text-neutral-stone">–</span>
                  <input
                    type="number"
                    min={1950}
                    max={2035}
                    value={yearRange[1]}
                    onChange={(e) => setYearRange([yearRange[0], Number(e.target.value)])}
                    className="w-24 px-3 py-2.5 rounded-xl border border-neutral-200 dark:border-navy-800 bg-white dark:bg-navy-900/50"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="lg:col-span-3">
                <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-2">
                  Category
                </label>
                <select
                  value={category || ''}
                  onChange={(e) => setCategory(e.target.value || null)}
                  className="w-full px-3 py-2.5 rounded-xl border border-neutral-200 dark:border-navy-800 bg-white dark:bg-navy-900/50 text-navy-900 dark:text-white"
                >
                  <option value="">All</option>
                  {allCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category chips */}
            <div className="mt-5 flex flex-wrap gap-2 justify-center">
              <Chip active={!category} onClick={() => setCategory(null)}>
                All Categories
              </Chip>
              {allCategories.slice(0, 10).map((c) => (
                <Chip
                  key={c}
                  active={category === c}
                  onClick={() => setCategory(category === c ? null : c)}
                >
                  {c}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: List */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-neutral-100 dark:border-navy-800 bg-white dark:bg-navy-900/40 overflow-hidden">
              <div className="p-5 border-b border-neutral-100 dark:border-navy-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent-emerald" />
                  <h3 className="font-semibold text-navy-900 dark:text-white">
                    Roles <span className="text-neutral-stone font-normal">({filtered.length})</span>
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSearch('')
                    setCategory(null)
                    setYearRange([1995, 2026])
                  }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-navy-900/60 text-navy-700 dark:text-neutral-stone hover:bg-neutral-200 dark:hover:bg-navy-800 transition-colors"
                >
                  Reset
                </button>
              </div>

              <div className="max-h-[520px] overflow-auto p-2">
                {filtered.length === 0 ? (
                  <div className="p-6 text-center text-neutral-stone dark:text-navy-400">
                    No responsibilities match your filters.
                  </div>
                ) : (
                  filtered.map((item) => (
                    <ListItem
                      key={item.id}
                      item={item}
                      active={item.id === selectedId}
                      onClick={() => setSelectedId(item.id)}
                    />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* RIGHT: Spotlight Details */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-neutral-100 dark:border-navy-800 bg-white dark:bg-navy-900/40 overflow-hidden">
              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {selected ? (
                    <motion.div
                      key={selected.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-accent-emerald">
                            {selected.durationText || prettyYears(selected)}
                          </p>

                          <h3 className="mt-2 text-2xl md:text-3xl font-serif font-bold text-navy-900 dark:text-white">
                            {selected.title}
                          </h3>

                          <div className="mt-2 flex flex-wrap gap-3 text-sm text-neutral-stone dark:text-navy-400">
                            <span className="inline-flex items-center gap-2">
                              <Building2 className="w-4 h-4" />
                              {selected.org}
                            </span>

                            {selected.location && (
                              <span className="inline-flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {selected.location}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="shrink-0">
                          <div className="w-12 h-12 rounded-2xl bg-accent-emerald/10 flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-accent-emerald" />
                          </div>
                        </div>
                      </div>

                      {/* divider */}
                      <div className="mt-6 h-px bg-neutral-100 dark:bg-navy-800" />

                      {/* description */}
                      {selected.description && (
                        <p className="mt-6 text-base leading-relaxed text-navy-700 dark:text-neutral-stone">
                          {selected.description}
                        </p>
                      )}

                      {/* categories */}
                      <div className="mt-6">
                        <p className="text-sm font-medium text-navy-700 dark:text-neutral-stone flex items-center gap-2">
                          <Tag className="w-4 h-4 text-accent-emerald" />
                          Focus areas
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {(selected.categories || []).map((c) => (
                            <span
                              key={c}
                              className="text-xs px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-navy-900/70 text-navy-700 dark:text-neutral-stone border border-neutral-100 dark:border-navy-800"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* bottom CTA row */}
                      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <InfoTile
                          title="Years covered"
                          value={prettyYears(selected) || selected.durationText || '—'}
                        />
                        <InfoTile
                          title="Category count"
                          value={`${(selected.categories || []).length}`}
                        />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-10 text-center text-neutral-stone dark:text-navy-400"
                    >
                      Select a role from the left to view details.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mini Stats Bar */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard
                label="Total Roles"
                value={administrativeResponsibilities.length}
              />
              <StatCard label="Visible Now" value={filtered.length} />
              <StatCard label="Categories" value={allCategories.length} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Chip({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'text-xs px-3 py-1.5 rounded-xl transition-colors',
        active
          ? 'bg-accent-emerald text-white'
          : 'bg-neutral-100 dark:bg-navy-900/50 text-navy-700 dark:text-neutral-stone hover:bg-neutral-200 dark:hover:bg-navy-800',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

function ListItem({ item, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'w-full text-left p-4 rounded-2xl transition-all duration-200',
        active
          ? 'bg-accent-emerald/10 dark:bg-accent-emerald/15 border border-accent-emerald/30'
          : 'hover:bg-neutral-50 dark:hover:bg-navy-900/60 border border-transparent',
      ].join(' ')}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-accent-emerald">
            {item.durationText || prettyYears(item)}
          </p>
          <p className="mt-1 font-semibold text-navy-900 dark:text-white leading-snug">
            {item.title}
          </p>
          <p className="mt-1 text-xs text-neutral-stone dark:text-navy-400">
            {item.org}
          </p>
        </div>

        <div
          className={[
            'shrink-0 mt-1 w-2.5 h-2.5 rounded-full',
            active ? 'bg-accent-emerald' : 'bg-neutral-200 dark:bg-navy-800',
          ].join(' ')}
        />
      </div>
    </button>
  )
}

function InfoTile({ title, value }) {
  return (
    <div className="rounded-2xl border border-neutral-100 dark:border-navy-800 bg-neutral-50 dark:bg-navy-900/30 p-4">
      <p className="text-xs text-neutral-stone dark:text-navy-400">{title}</p>
      <p className="mt-1 font-semibold text-navy-900 dark:text-white">{value}</p>
    </div>
  )
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-neutral-100 dark:border-navy-800 bg-white dark:bg-navy-900/40 p-4">
      <p className="text-xs text-neutral-stone dark:text-navy-400">{label}</p>
      <p className="mt-1 text-xl font-semibold text-navy-900 dark:text-white">{value}</p>
    </div>
  )
}

export default AdministrativeResponsibilities