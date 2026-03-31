import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { researchThemes } from '../../data/content'

const icons = {
  Policy: '📋',
  Urban: '🏙️',
  Accountability: '✓',
  Gender: '⚧',
  Comparative: '🌐',
  SDG: '♻️',
}

export default function ResearchThemes() {
  return (
    <section className="section-padding bg-neutral-paper dark:bg-navy-950">
      <div className="container-grid">
        <div className="col-span-12 mb-12">
          <h2 className="heading-serif text-3xl lg:text-4xl text-navy-900 dark:text-white">
            Research themes
          </h2>
          <p className="mt-2 text-neutral-stone dark:text-navy-500 max-w-xl">
            Lab-grade pillars that define my research — explore in depth on the Research page.
          </p>
        </div>
        <div className="col-span-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchThemes.map((theme, i) => (
            <motion.div
              key={theme.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <div className="w-full text-left p-6 rounded-2xl border transition-all duration-200 bg-white dark:bg-navy-800/60 border-neutral-mist dark:border-navy-700 group-hover:border-accent-emerald/50 group-hover:shadow-lg">
                <span className="text-2xl" aria-hidden>{icons[theme.icon] || '•'}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold">{theme.title}</h3>
                <p className="mt-2 text-sm text-neutral-stone dark:text-navy-400">{theme.short}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="col-span-12 mt-8">
          <Link
            to="/research"
            className="inline-flex items-center text-accent-emerald dark:text-accent-emerald-light font-medium hover:underline"
          >
            Explore research in depth →
          </Link>
        </div>
      </div>
    </section>
  )
}
