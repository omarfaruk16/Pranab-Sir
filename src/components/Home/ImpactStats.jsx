import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, BookOpen, FileText, Quote, Award, Check } from 'lucide-react'
import { impactStats } from '../../data/content'

const iconMap = { GraduationCap, Briefcase, BookOpen, FileText, Quote, Award }

function AnimatedCounter({ value, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    const end = value
    const startTime = performance.now()
    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function ImpactStats() {
  return (
    <section className="section-padding bg-white dark:bg-navy-900/50 border-y border-neutral-mist/50 dark:border-navy-700/50">
      <div className="container-grid">
        <div className="col-span-12 mb-12">
          <h2 className="heading-serif text-center text-3xl lg:text-4xl text-navy-900 dark:text-white">
            At a glance of my <span className="text-green-400">Impacts</span>
          </h2>
        </div>
        <div className="col-span-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {impactStats.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Quote
            return (
              <motion.div
                key={stat.label}
                className="relative p-6 rounded-2xl bg-neutral-paper dark:bg-navy-800/60 border border-neutral-mist/60 dark:border-navy-700/60 shadow-sm flex flex-col transition-all duration-200 hover:shadow-lg hover:border-accent-emerald/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="flex items-start justify-between">
                  <span className="p-2 rounded-lg bg-accent-emerald/10 dark:bg-accent-emerald/20 text-accent-emerald dark:text-accent-emerald-light">
                    <Icon className="w-5 h-5" />
                  </span>
                  {stat.verified && (
                    <span className="text-accent-emerald" title="Verified from CV">
                      <Check className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-accent-emerald dark:text-accent-emerald-light mt-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-navy-700 dark:text-neutral-stone">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
