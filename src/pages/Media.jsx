import { useState } from 'react'
import { motion } from 'framer-motion'
import { talks } from '../data/content'

export default function Media() {
  const [themeFilter, setThemeFilter] = useState('all')
  const themes = ['all', ...new Set(talks.map((t) => t.theme))]
  const filtered = themeFilter === 'all' ? talks : talks.filter((t) => t.theme === themeFilter)

  return (
    <div className="bg-neutral-paper dark:bg-navy-950">
      <section className="section-padding">
        <div className="container-grid">
          <div className="col-span-12 mb-12">
            <motion.h1
              className="heading-serif text-4xl lg:text-5xl text-navy-900 dark:text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Media & Talks
            </motion.h1>
            <p className="mt-2 text-navy-700 dark:text-neutral-stone max-w-xl">
              Keynotes, webinars, and conference presentations.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {themes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setThemeFilter(t)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${themeFilter === t ? 'bg-accent-emerald text-white' : 'bg-white dark:bg-navy-800 border border-neutral-mist dark:border-navy-700 hover:border-accent-emerald/50'}`}
                >
                  {t === 'all' ? 'All' : t}
                </button>
              ))}
            </div>
          </div>

          <div className="col-span-12 space-y-6">
            {filtered.map((talk) => (
              <motion.article
                key={talk.title}
                className="p-6 rounded-2xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60 transition-all duration-200 hover:shadow-lg hover:border-accent-emerald/30"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-semibold text-accent-emerald uppercase tracking-wider">{talk.type}</span>
                <h2 className="font-serif text-xl font-semibold text-navy-900 dark:text-white mt-2">{talk.title}</h2>
                <p className="text-sm text-neutral-stone dark:text-navy-400 mt-1">{talk.event} · {talk.date}</p>
                <p className="text-sm text-navy-700 dark:text-neutral-stone mt-2">Theme: {talk.theme}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
