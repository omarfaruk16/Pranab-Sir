import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'

const COLLAB_OPTIONS = ['Policy research', 'Governance', 'Gender', 'Urban', 'Consultancy', 'PhD supervision', 'Other']

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-neutral-paper dark:bg-navy-950">
      <section className="section-padding">
        <div className="container-grid">
          <div className="col-span-12 text-center mb-12">
            <motion.h1
              className="heading-serif text-4xl lg:text-5xl text-navy-900 dark:text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Contact
            </motion.h1>
            <p className="mt-2 text-navy-700 dark:text-neutral-stone ">
              Get in touch for collaboration, supervision, or policy research.
            </p>
          </div>

          <div className="col-span-12 space-y-6">
            <div className="p-6 rounded-2xl border border-neutral-mist dark:border-navy-700 bg-white dark:bg-navy-800/60">
              <h2 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">Contact details</h2>
              <div className="mt-4 grid lg: lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4 space-y-3">
                <div className="">
                  <span className="text-sm dark:text-gray-300 dark:text-black w-16">Email</span>
                  <div className='flex justify-between'>
                    <a href={`mailto:${profile.email}`} className="text-accent-emerald hover:underline">{profile.email}</a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="text-xs px-2 py-1 rounded border border-navy-600 dark:border-navy-500 hover:bg-navy-100 dark:hover:bg-navy-700"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

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
          </div>


        </div>
      </section>
    </div>
  )
}
