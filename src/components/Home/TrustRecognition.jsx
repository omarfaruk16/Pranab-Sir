import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { awards, partners } from '../../data/content'

export default function TrustRecognition() {
  return (
    <section className="section-padding bg-white dark:bg-navy-900/50">
      <div className="container-grid">
        <div className="col-span-12 mb-12">
          <h2 className="heading-serif text-3xl lg:text-4xl text-navy-900 dark:text-white">
            Trust & recognition
          </h2>
          <p className="mt-2 text-neutral-stone dark:text-navy-500 max-w-xl">
            Awards, fellowships, and partner organisations.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white mb-6">Awards</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                className="p-4 rounded-xl border border-neutral-mist dark:border-navy-700 bg-neutral-paper dark:bg-navy-800/60 transition-all duration-200 hover:shadow-lg hover:border-accent-emerald/30"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-emerald">
                  {a.type}
                </span>
                <p className="font-serif font-semibold text-navy-900 dark:text-white mt-1">{a.title}</p>
                <p className="text-sm text-neutral-stone dark:text-navy-400">{a.body} · {a.year}</p>
              </motion.div>
            ))}
          </div>
          <Link to="/awards" className="inline-block mt-4 text-accent-emerald dark:text-accent-emerald-light font-medium hover:underline">
            View all awards →
          </Link>
        </div>

        <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0">
          <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white mb-6">Partners & affiliations</h3>
          <div className="flex flex-wrap gap-3">
            {partners.map((p) => (
              <span
                key={p}
                className="px-4 py-2 rounded-lg bg-neutral-paper dark:bg-navy-800 border border-neutral-mist dark:border-navy-700 text-sm font-medium text-navy-700 dark:text-neutral-stone"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
