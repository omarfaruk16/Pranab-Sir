import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { homeawards } from '../../data/content'

export default function TrustRecognition() {
  return (
    <section className="section-padding bg-white dark:bg-navy-900/50">
      <div className="container-grid">
        <div className="col-span-12 mb-12">
          <h2 className="heading-serif text-3xl lg:text-4xl text-center text-navy-900 dark:text-white">
            Academic Honor <span className="text-green-400">And</span> Awards
          </h2>
           <div className="w-16 h-1 bg-accent-emerald mx-auto mt-4 rounded-full" />

          <div className="col-span-12 mt-10 lg:col-span-6">
            <div className="grid sm:grid-cols-4 gap-4">
              {homeawards.map((a, i) => (
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
                  <p className="text-sm text-neutral-stone dark:text-navy-400">{a.provider} · {a.year}</p>
                </motion.div>
              ))}
            </div>
            <Link to="/awards" className="inline-block mt-4 text-accent-emerald dark:text-accent-emerald-light font-medium hover:underline">
              View all awards →
            </Link>
          </div>
        </div>


      </div>
    </section>
  )
}



