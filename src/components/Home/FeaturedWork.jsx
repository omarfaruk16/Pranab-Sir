import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { featuredWork } from '../../data/content'

function CopyCitation({ item, type }) {
  const [copied, setCopied] = useState(false)
  const cite = type === 'book'
    ? `${item.title} (${item.year}).`
    : type === 'article'
    ? `Panday, P. K. (${item.year}). ${item.title}. ${item.venue || ''}.`
    : `${item.title}. ${item.org}, ${item.year}.`

  const copy = () => {
    navigator.clipboard.writeText(cite)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="text-xs px-2 py-1 rounded border border-navy-600 dark:border-navy-500 text-navy-700 dark:text-neutral-stone hover:bg-navy-100 dark:hover:bg-navy-700 transition-colors"
    >
      {copied ? 'Copied!' : 'Copy citation'}
    </button>
  )
}

function ItemCard({ item, type, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <motion.div
      layout
      className="rounded-xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60 overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-accent-emerald/30"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
    >
      <div className="p-5">
        <div className="flex justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-serif font-semibold text-navy-900 dark:text-white">{item.title}</h3>
            <p className="text-sm text-neutral-stone dark:text-navy-400 mt-0.5">
              {type === 'book' && item.year}
              {type === 'article' && `${item.venue}, ${item.year}`}
              {type === 'project' && `${item.org}, ${item.year}`}
            </p>
          </div>
          <div className="flex flex-col gap-1 flex-shrink-0">
            <CopyCitation item={item} type={type} />
            {item.doi && (
              <a href={`https://doi.org/${item.doi}`} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-emerald hover:underline">
                DOI
              </a>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="mt-3 text-sm font-medium text-accent-emerald dark:text-accent-emerald-light hover:underline"
        >
          {open ? 'Hide' : 'Why it matters'}
        </button>
        <AnimatePresence>
          {open && item.why && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="text-sm text-neutral-stone dark:text-navy-400 mt-2"
            >
              {item.why}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function FeaturedWork() {
  return (
    <section className="section-padding bg-white dark:bg-navy-900/50">
      <div className="container-grid">
        <div className="col-span-12 mb-12">
          <h2 className="heading-serif text-3xl lg:text-4xl text-navy-900 dark:text-white">
            Featured work
          </h2>
          <p className="mt-2 text-neutral-stone dark:text-navy-500 max-w-xl">
            Curated books, journal articles, and policy/consultancy highlights.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white mb-4">Recent books</h3>
          <div className="space-y-4">
            {featuredWork.books.map((item) => (
              <ItemCard key={item.id} item={item} type="book" />
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0">
          <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white mb-4">Top articles</h3>
          <div className="space-y-4">
            {featuredWork.articles.map((item) => (
              <ItemCard key={item.id} item={item} type="article" />
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 mt-8 lg:mt-0">
          <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white mb-4">Key projects</h3>
          <div className="space-y-4">
            {featuredWork.projects.map((item) => (
              <ItemCard key={item.id} item={item} type="project" />
            ))}
          </div>
        </div>

        <div className="col-span-12 mt-8">
          <Link to="/publications" className="inline-flex items-center text-accent-emerald dark:text-accent-emerald-light font-medium hover:underline">
            View all publications →
          </Link>
        </div>
      </div>
    </section>
  )
}
