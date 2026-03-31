import { motion } from "framer-motion";
import { researchThemes } from "../data/content";
import { Link } from "react-router-dom";
import about from "../images/about.webp";  

export default function About() {
  return (
    <div className="bg-neutral-paper dark:bg-navy-950">
      <section className="section-padding">
        <div className="container-grid">
          <div className="col-span-12 lg:col-span-8">
            <motion.h1
              className="heading-serif text-4xl lg:text-5xl text-navy-900 dark:text-white"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h1>
            <motion.p
              className="mt-6 text-lg text-navy-700 dark:text-neutral-stone leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              I am an experienced academic with 27 years of expertise in
              teaching and conducting research in Public Administration, Public
              Policy and Management. Currently, I hold the position of a
              Professor at the University of Rajshahi in Bangladesh. I served as
              an Adjunct Professor at Central Queensland University in Australia
              for three years. Presently I hold the post of an Associate of the
              Research Centre for Sustainable Hong Kong (RCSHH) at the City
              University of Hong Kong. I am well-known for extensive knowledge
              and proficiency in analysing public policies, urban policies and
              development, gender and governance, and comparative public
              administration. Having comprehensive expertise in curriculum
              creation, quality assurance, and academic leadership, I have made
              substantial contributions to the progress of higher education in
              Bangladesh and other regions. I have extensively published my
              research in internationally recognised journals that undergo
              rigorous evaluation by experts in the field. Additionally, I have
              served in editorial and advisory capacities for several academic
              publications. I have participated in more than 50 national and
              international consultation projects, specifically focusing on
              urban and local government, social accountability, and women's
              political engagement. With a solid dedication to furthering
              knowledge through creative research and focused teaching, I aim to
              contribute to effective public policy solutions that tackle global
              concerns.
            </motion.p>
            <div className="mt-10 flex items-center gap-4">
              <div className="">
                <Link
                  to="/research"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-accent-emerald text-white font-medium hover:bg-accent-emerald-light transition-colors"
                >
                  My Research
                </Link>
              </div>
              <div className="">
                <Link
                  to="/awards"
                  className="inline-flex items-center px-5 py-3 rounded-lg bg-navy-800/60 text-white font-medium border-1 border-navy-700"
                >
                  Achievement
                </Link>
              </div>
            </div>
          </div>
          <aside className="col-span-12 lg:col-span-4 mt-12 lg:mt-0">
            <div className="pb-10">
              <img
                className="rounded-xl"
                src={about}
                alt=""
              />
            </div>
            <div className="sticky top-24 p-6 rounded-2xl bg-white dark:bg-navy-800/60 border border-neutral-mist dark:border-navy-700 transition-all duration-200 hover:shadow-lg hover:border-accent-emerald/30">
              <h3 className="font-serif text-xl font-semibold text-navy-900 dark:text-white">
                Research pillars
              </h3>
              <ul className="mt-4 space-y-2">
                {researchThemes.map((t) => (
                  <li
                    key={t.id}
                    className="text-sm text-navy-700 dark:text-neutral-stone"
                  >
                    {t.title}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
