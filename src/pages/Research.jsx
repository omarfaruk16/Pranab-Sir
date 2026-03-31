import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { researchThemes } from "../data/content";
import ResearchData from "../components/Research/Research_data.jsx";

export default function Research() {
  

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
              Research
            </motion.h1>
            <motion.p
              className="mt-4 text-lg text-center text-navy-700 dark:text-neutral-stone"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Advancing governance scholarship through rigorous empirical{" "}
              <br className="hidden lg:block" />
              research, policy analysis, and cross-national comparative studies
            </motion.p>
          </div>

          <div className="col-span-12  mb-12">
            <motion.h1
              className="heading-serif text-4xl lg:text-2xl text-navy-900 dark:text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Research Overview
            </motion.h1>
            <motion.p
              className="mt-4 text-lg  text-navy-700 dark:text-neutral-stone"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Professor Panday's research agenda focuses on understanding and
              improving governance systems in developing countries, with
              particular emphasis on South Asia. His work bridges theoretical
              frameworks with practical policy applications, contributing to
              both academic discourse and real-world governance improvements.
              
            </motion.p>
          </div>

          <div className="col-span-12">
            <h2 className="font-serif text-2xl font-semibold text-navy-900 dark:text-white mb-6">
              Research clusters
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchThemes.map((theme) => (
                <motion.div
                  key={theme.id}
                  className={"p-6 rounded-2xl border cursor-pointer transition-all" }
                  
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                    {theme.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-stone dark:text-navy-400">
                    {theme.short}
                  </p>
                </motion.div>
              ))}
            </div>
            <ResearchData></ResearchData>
          </div>
        </div>
      </section>
    </div>
  );
}
