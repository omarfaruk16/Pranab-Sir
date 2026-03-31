import { motion } from 'framer-motion'
import { consultancyList } from '../data/content'

export default function Consultancy() {
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
              Consultancy
            </motion.h1>
            <p className="mt-2 text-navy-700 dark:text-neutral-stone max-w-xl">
              50+ consultancy assignments (national and international) — baseline studies, evaluations, policy advisory.
            </p>
          </div>

          <div className="col-span-12 space-y-6">
            {consultancyList.map((c, i) => (
              <motion.div
                key={`${c.org}-${c.period}`}
                className="p-6 rounded-2xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60 transition-all duration-200 hover:shadow-lg hover:border-accent-emerald/30"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex flex-wrap justify-between gap-2">
                  <p className="font-serif text-xl font-semibold text-navy-900 dark:text-white">{c.org}</p>
                  <p className="text-sm text-neutral-stone dark:text-navy-400">{c.period}</p>
                </div>
                <p className="text-accent-emerald dark:text-accent-emerald-light font-medium mt-1">{c.role}</p>
                <p className="mt-2 text-navy-700 dark:text-neutral-stone"><strong>Objective:</strong> {c.objective}</p>
                <p className="mt-1 text-navy-700 dark:text-neutral-stone"><strong>Deliverables:</strong> {c.deliverables}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
