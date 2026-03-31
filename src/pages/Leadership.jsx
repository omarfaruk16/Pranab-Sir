import { motion } from 'framer-motion'
import { leadership } from '../data/content'

export default function Leadership() {
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
              Leadership & Service
            </motion.h1>
            <p className="mt-2 text-navy-700 dark:text-neutral-stone max-w-xl">
              Administrative responsibilities, editorial/advisory roles, and committees.
            </p>
          </div>

          <div className="col-span-12 space-y-6">
            {leadership.map((l) => (
              <motion.div
                key={`${l.role}-${l.org}`}
                className="p-6 rounded-2xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="font-serif text-xl font-semibold text-navy-900 dark:text-white">{l.role}</p>
                <p className="text-accent-emerald dark:text-accent-emerald-light font-medium mt-1">{l.org} · {l.period}</p>
                <ul className="mt-3 list-disc list-inside text-navy-700 dark:text-neutral-stone space-y-1">
                  {(l.outcomes || []).map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
