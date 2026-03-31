import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'

const COLLAB_OPTIONS = ['Policy research', 'Governance', 'Gender', 'Urban', 'Consultancy', 'PhD supervision', 'Other']

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', interests: [] })

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleInterest = (item) => {
    setForm((f) => ({ ...f, interests: f.interests.includes(item) ? f.interests.filter((i) => i !== item) : [...f.interests, item] }))
  }

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
              Contact
            </motion.h1>
            <p className="mt-2 text-navy-700 dark:text-neutral-stone max-w-xl">
              Get in touch for collaboration, supervision, or policy research.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60">
              <h2 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">Contact details</h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm dark:text-gray-300 dark:text-black w-16">Email</span>
                  <a href={`mailto:${profile.email}`} className="text-accent-emerald hover:underline">{profile.email}</a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="text-xs px-2 py-1 rounded border border-navy-600 dark:border-navy-500 hover:bg-navy-100 dark:hover:bg-navy-700"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div>
                  <span className="text-sm dark:text-gray-300 dark:text-black block">Office</span>
                  <p className="text-navy-700 dark:text-neutral-stone">{profile.office}</p>
                </div>
                <div>
                  <span className="text-sm dark:text-gray-300 dark:text-black block">Address</span>
                  <p className="text-navy-700 dark:text-neutral-stone">{profile.address}</p>
                </div>
                {
                  profile.mobile && (
                    <div>
                      <span className="text-sm dark:text-gray-300 text-black block">Mobile</span>
                      <div className="text-navy-700 dark:text-neutral-stone">
                        {profile.mobile.map((mobile, i) => (
                          <div key={i}>{mobile}</div>
                        ))}
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
            {profile.calendlyUrl && (
              <a
                href={profile.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-3 rounded-lg bg-accent-emerald text-white font-medium hover:bg-accent-emerald-light transition-colors"
              >
                Book a meeting (Calendly)
              </a>
            )}
          </div>

          <div className="col-span-12 lg:col-span-7">
            <motion.form
              className="p-6 rounded-2xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <h2 className="font-serif text-xl font-semibold text-navy-900 dark:text-white mb-4">Send a message</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-1">Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-1">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-1">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-1">Collaboration interests</label>
                <div className="flex flex-wrap gap-2">
                  {COLLAB_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => toggleInterest(opt)}
                      className={`px-3 py-1.5 rounded-lg text-sm ${form.interests.includes(opt) ? 'bg-accent-emerald text-white' : 'bg-neutral-mist/60 dark:bg-navy-700 hover:bg-navy-200 dark:hover:bg-navy-600'}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-navy-700 dark:text-neutral-stone mb-1">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800"
                  required
                />
              </div>
              <p className="mt-2 text-xs text-neutral-stone dark:text-navy-400">
                This form is for display; add a backend or Formspree/Netlify Forms for spam protection and delivery.
              </p>
              <button
                type="submit"
                className="mt-4 px-5 py-3 rounded-lg bg-accent-emerald text-white font-medium hover:bg-accent-emerald-light transition-colors"
              >
                Send message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  )
}
