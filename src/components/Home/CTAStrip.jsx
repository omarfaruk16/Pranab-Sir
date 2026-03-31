import { motion } from 'framer-motion'
import { profile } from '../../data/content'

export default function CTAStrip() {
  return (
    <section className="section-padding bg-navy-900 text-white">
      <div className="container-grid">
        <motion.div
          className="col-span-12 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold">
            Interested in collaboration, supervision, or policy research?
          </h2>
          <p className="mt-4 text-neutral-mist">
            Get in touch for PhD supervision, consultancy, or research partnerships.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center px-5 py-3 rounded-lg bg-accent-emerald text-white font-medium hover:bg-accent-emerald-light transition-colors"
            >
              Email
            </a>
            <a
              href={profile.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-navy-600 text-neutral-mist hover:border-accent-emerald hover:text-white transition-colors"
            >
              Google Scholar
            </a>
            <a
              href={profile.researchGateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-navy-600 text-neutral-mist hover:border-accent-emerald hover:text-white transition-colors"
            >
              ResearchGate
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center px-5 py-3 rounded-lg border border-navy-600 text-neutral-mist hover:border-accent-emerald hover:text-white transition-colors"
            >
              Download CV
            </a>
            {profile.calendlyUrl && (
              <a
                href={profile.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 rounded-lg border border-navy-600 text-neutral-mist hover:border-accent-emerald hover:text-white transition-colors"
              >
                Book a meeting
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
