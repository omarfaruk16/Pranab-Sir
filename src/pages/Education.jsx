import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react'; // Using Lucide for the Chevron
import { educationTimeline } from "../data/content.js";

const EducationJourney = () => {
  // Helper to format category labels
  const categoryLabel = (cat) => cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <section className="py-20 bg-white dark:bg-navy-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 dark:text-white">
            Education & Research
          </h2>
          <div className="w-20 h-1.5 bg-accent-emerald mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line: Adjusted for dark mode */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-0.5 bg-neutral-200 dark:bg-navy-800" />

          {educationTimeline.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className="relative mb-12 flex justify-start md:justify-between items-center w-full">
                
                {/* Desktop Left Side */}
                <div className="hidden md:block w-[45%]">
                   {isEven && <TimelineCard item={item} categoryLabel={categoryLabel} />}
                </div>

                {/* The Timeline Dot */}
                <div className="absolute left-[9px] md:left-1/2 md:-translate-x-1/2 z-20">
                  <div className="w-3.5 h-3.5 bg-accent-emerald rounded-full border-2 border-white dark:border-navy-950 shadow-sm" />
                </div>

                {/* Content Side */}
                <div className="pl-10 md:pl-0 w-full md:w-[45%]">
                   {!isEven ? (
                     <TimelineCard item={item} categoryLabel={categoryLabel} />
                   ) : (
                     <div className="md:hidden">
                        <TimelineCard item={item} categoryLabel={categoryLabel} />
                     </div>
                   )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Refactored Sub-component with your specific Dark/Light mode classes
const TimelineCard = ({ item, }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-navy-900/50 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-navy-800 hover:shadow-xl dark:hover:bg-navy-800/80 transition-all duration-300 group"
  >
    <div className="flex items-start justify-between gap-4">
      <span className="text-accent-emerald dark:text-accent-emerald-light font-semibold text-lg">
        {item.period}
      </span>
      <span className="text-neutral-400 dark:text-neutral-500 shrink-0 pt-1">
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </span>
    </div>

    <p className="font-serif text-xl font-semibold text-navy-900 dark:text-white mt-2">
      {item.role}
    </p>
    <p className="text-sm text-neutral-stone dark:text-navy-400 mt-1">
      {item.org}
    </p>
    

    {item.achievements && (
      <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-navy-800">
        {item.achievements.map((ach, i) => (
          <p key={i} className="text-xs md:text-sm text-neutral-stone dark:text-navy-400 italic leading-relaxed">
            {ach}
          </p>
        ))}
      </div>
    )}
  </motion.div>
);

export default EducationJourney;