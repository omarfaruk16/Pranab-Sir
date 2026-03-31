import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ResearchData from "../components/Research/Research_data.jsx";

export default function Research() {
  

  return (
    <div className="bg-neutral-paper dark:bg-navy-950">
      <section className="section-padding">
        <div className="container-grid">
          <div className="col-span-12 text-center ">
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

          <div className="col-span-12">
            <ResearchData></ResearchData>
          </div>
        </div>
      </section>
    </div>
  );
}
