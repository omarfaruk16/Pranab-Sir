import { motion } from 'framer-motion'
import { courses, supervision } from '../data/content'

export default function Teaching() {
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
              Teaching & Supervision
            </motion.h1>
            <p className="mt-2 text-navy-700 dark:text-neutral-stone max-w-xl">
              Courses by level and doctoral/MPhil supervision.
            </p>
          </div>

          <div className="col-span-12">
            <h2 className="font-serif text-2xl font-semibold text-navy-900 dark:text-white mb-6">Teaching</h2>
            <div className="space-y-8">
              {['undergrad', 'masters', 'phd'].map((level) => (
                <div key={level}>
                  <h3 className="text-lg font-semibold text-navy-800 dark:text-neutral-mist capitalize mb-4">
                    {level === 'undergrad' ? 'Undergraduate' : level === 'masters' ? 'Masters' : 'PhD'}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(courses[level] || []).map((c) => (
                      <motion.div
                        key={c.title}
                        className="p-5 rounded-xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60 transition-all duration-200 hover:shadow-lg hover:border-accent-emerald/30"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -4 }}
                        viewport={{ once: true }}
                      >
                        <p className="font-serif font-semibold text-navy-900 dark:text-white">{c.title}</p>
                        <p className="text-sm text-neutral-stone dark:text-navy-400 mt-1"><strong>Outcomes:</strong> {c.outcomes}</p>
                        <p className="text-sm text-neutral-stone dark:text-navy-400 mt-1"><strong>Topics:</strong> {c.topics}</p>
                        <p className="text-sm text-neutral-stone dark:text-navy-400 mt-1"><strong>Assessment:</strong> {c.assessment}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 mt-16">
            <h2 className="font-serif text-2xl font-semibold text-navy-900 dark:text-white mb-6">Supervision</h2>
            <h3 className="text-lg font-semibold text-navy-800 dark:text-neutral-mist mb-4">Degrees awarded</h3>
            <ul className="space-y-3">
              {supervision.completed.map((s) => (
                <li key={s.title} className="p-4 rounded-xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60">
                  <span className="text-xs font-semibold text-accent-emerald">{s.degree}</span>
                  <p className="font-serif font-semibold text-navy-900 dark:text-white mt-1">{s.title}</p>
                  <p className="text-sm text-neutral-stone dark:text-navy-400">{s.student} · {s.year}</p>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-navy-800 dark:text-neutral-mist mt-8 mb-4">Examiner roles</h3>
            <ul className="space-y-2">
              {supervision.examiner.map((e) => (
                <li key={e.org} className="text-navy-700 dark:text-neutral-stone">{e.role}, {e.org} ({e.period})</li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 mt-12 p-6 rounded-2xl bg-accent-emerald/10 dark:bg-accent-emerald/20 border border-accent-emerald/30">
            <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">Prospective students</h3>
            <p className="mt-2 text-navy-700 dark:text-neutral-stone">
              I welcome applications for PhD and MPhil supervision in public policy, governance, urban studies, gender and governance, and social accountability. Please see the Contact page to express your interest and discuss fit.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
