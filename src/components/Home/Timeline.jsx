import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { teachingExperience } from "../../data/content";

function TimelineCard({ item, side = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "w-full max-w-md",
        "p-6 rounded-2xl",
        "bg-white dark:bg-navy-800/60",
        "border border-neutral-mist dark:border-navy-700",
        "shadow-sm hover:shadow-lg hover:border-accent-emerald/30",
        "transition-all duration-200",
        "text-left",
        side === "right" ? "lg:ml-auto" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="text-accent-emerald dark:text-accent-emerald-light font-semibold text-lg">
          {item.period}
        </span>
        <span className="text-neutral-400 dark:text-neutral-500 shrink-0 pt-1">
          <ChevronRight className="w-5 h-5" />
        </span>
      </div>

      <p className="font-serif text-xl font-semibold text-navy-900 dark:text-white mt-2">
        {item.role}
      </p>
      <p className="text-sm text-neutral-stone dark:text-navy-400 mt-1">
        {item.org}
      </p>

      {/* Responsibilities Section */}
      <div className="mt-4">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-navy-900 dark:text-white mb-2 opacity-70">
          Responsibilities
        </h4>
        <ul className="space-y-1 list-disc list-inside">
          {item.responsibilities.map((res, i) => (
            <li key={i} className="text-xs text-neutral-stone dark:text-navy-400 leading-relaxed">
              {res}
            </li>
          ))}
        </ul>
      </div>

      {/* Contributions Section */}
      <div className="mt-4 pt-4 border-t border-neutral-mist dark:border-navy-700">
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-accent-emerald dark:text-accent-emerald-light mb-2">
          Significant Contributions
        </h4>
        <ul className="space-y-1 list-disc list-inside">
          {item.significantContributions.map((con, i) => (
            <li key={i} className="text-xs text-neutral-stone dark:text-navy-400 italic leading-relaxed">
              {con}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section className="section-padding bg-neutral-paper dark:bg-navy-950">
      <div className="container-grid">
        {/* Header */}
        <div className="col-span-12 text-center mb-16">
          <h2 className="heading-serif text-3xl lg:text-4xl text-navy-900 dark:text-white">
            Teaching <span className="text-green-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-accent-emerald mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-neutral-stone dark:text-navy-500 max-w-xl mx-auto">
            A distinguished career in Public Administration, fostering academic growth and institutional excellence.
          </p>
        </div>

        {/* Body */}
        <div className="col-span-12 lg:col-span-10 lg:col-start-2 relative">
          
          {/* Desktop View */}
          <div className="hidden lg:block relative">
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-neutral-mist/70 dark:bg-navy-600"
              aria-hidden
            />

            <div className="space-y-14">
              {teachingExperience.map((item, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                  <div
                    key={`${item.role}-${item.period}-${idx}`}
                    className="grid grid-cols-[1fr_auto_1fr] items-center"
                  >
                    <div className="pr-10 flex justify-end">
                      {isLeft ? (
                        <TimelineCard item={item} side="left" />
                      ) : (
                        <div className="w-full max-w-md" />
                      )}
                    </div>

                    <div className="relative flex justify-center z-10">
                      <div
                        className="w-3 h-3 rounded-full bg-accent-emerald border-4 border-white dark:border-navy-950 shadow"
                        aria-hidden
                      />
                    </div>

                    <div className="pl-10 flex justify-start">
                      {!isLeft ? (
                        <TimelineCard item={item} side="right" />
                      ) : (
                        <div className="w-full max-w-md" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden pl-8 relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-neutral-mist/60 dark:bg-navy-600"
              aria-hidden
            />
            <div className="space-y-8">
              {teachingExperience.map((item, idx) => (
                <div key={`${item.role}-${idx}`} className="relative">
                  <div
                    className="absolute left-0 top-6 w-3 h-3 rounded-full bg-accent-emerald border-4 border-white dark:border-navy-950 -translate-x-[1.625rem] z-10"
                    aria-hidden
                  />
                  <TimelineCard item={item} side="left" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}