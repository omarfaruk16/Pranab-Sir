import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaBook } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { Link } from "react-router-dom";
import { profile } from "../../data/content";
import hero_img from "../../images/hero.webp"; 
import Resume_Pranab from "../../assets/Resume_Pranab Panday.pdf"

function Typewriter({ text, speed = 80, delay = 400 }) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(start);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (display.length >= text.length) return;
    const t = setTimeout(
      () => setDisplay(text.slice(0, display.length + 1)),
      speed,
    );
    return () => clearTimeout(t);
  }, [started, display, text, speed]);

  return <span>{display}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-stretch justify-center overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0 bg-mesh opacity-100" aria-hidden />
      <div className="absolute inset-0 bg-navy-950/85" aria-hidden />
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        animate={{ opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />

      <div className="flex mt-4 mx-4 md:flex-row flex-col items-center justify-center relative z-10">
        <motion.div
          className="col-span-12 lg:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 space-y-2">
            <p className="text-sm sm:text-base">
              <span className="text-accent-emerald-light font-medium">
                Professor
              </span>
              <span className="text-neutral-mist">
                {" "}
                • Department of Public Administration, University of Rajshahi
              </span>
            </p>
            <p className="text-sm sm:text-base">
              <span className="text-accent-emerald-light font-medium">
                Adjunct Professor 
              </span>
              <span className="text-neutral-mist">
                {" "}
                • Central Queensland University, Australia 
              </span>
            </p>
            {/* <p className="text-sm sm:text-base">
              <span className="text-accent-emerald-light font-medium">
                Research Associate
              </span>
              <span className="text-neutral-mist">
                {" "}
                • Centre for Urban Studies
              </span>
            </p> */}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight min-h-[1.2em]">
            <Typewriter text={profile.name} speed={100} delay={300} />
            <span
              className="inline-block w-0.5 h-[0.9em] bg-accent-emerald ml-0.5 align-middle animate-pulse"
              aria-hidden
            />
          </h1>
          <p className="mt-2 text-xl text-neutral-mist">{profile.title}</p>
          <p className="mt-4 text-neutral-stone text-lg max-w-xl leading-relaxed">
            {profile.mission}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={Resume_Pranab}
              download
              className="inline-flex items-center px-5 py-3 rounded-lg bg-accent-emerald text-white font-medium hover:bg-accent-emerald-light transition-all shadow-lg shadow-accent-emerald/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2 -ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                />
              </svg>
              Download CV
            </a>
            <Link
              to="/publications"
              className="inline-flex items-center px-5 py-3 rounded-lg border border-navy-600 text-neutral-mist hover:border-accent-emerald hover:text-white transition-colors"
            >
              View Publications
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* ScholarImpact Card: Citations */}
            <div className="bg-navy-700/40 rounded-lg px-4 py-3 flex flex-col items-center">
              <span className="text-accent-emerald text-2xl font-semibold flex items-center gap-2">
                {/* Icon: Quote/Scholar/Citation */}
                <AiFillSafetyCertificate />
                <CountUp
                  end={profile.scholarImpact?.citations ?? 1838}
                  duration={1.5}
                />
              </span>
              <span className="text-neutral-mist text-xs mt-1">Citations</span>
            </div>
            {/* ScholarImpact Card: h-index */}
            <div className="bg-navy-700/40 rounded-lg px-4 py-3 flex flex-col items-center">
              <span className="text-accent-emerald text-2xl font-semibold flex items-center gap-2">
                {/* Icon: BarChart/h-index */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-1 text-accent-emerald"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 20V10M12 20v-6m6 6V4"
                  />
                </svg>
                <CountUp
                  end={profile.scholarImpact?.hIndex ?? 21}
                  duration={1.5}
                />
              </span>
              <span className="text-neutral-mist text-xs mt-1">h-index</span>
            </div>
            {/* ScholarImpact Card: Years Experience */}
            <div className="bg-navy-700/40 rounded-lg px-4 py-3 flex flex-col items-center">
              <span className="text-accent-emerald text-2xl font-semibold flex gap-2 items-center">
                {/* Icon: Graduation Cap */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-1 text-accent-emerald"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0 0H7m5 0h5"
                  />
                </svg>
                <CountUp
                  end={profile.scholarImpact?.yearsExperience ?? 27}
                  duration={1.5}
                />
              </span>
              <span className="text-neutral-mist text-xs mt-1">Years Exp</span>
            </div>
            {/* ScholarImpact Card: Books */}
            <div className="bg-navy-700/40 rounded-lg px-4 py-3 flex flex-col items-center">
              <span className="text-accent-emerald text-2xl font-semibold flex gap-2 items-center">
                {/* Icon: Book */}
                <FaBook />
                <CountUp
                  end={profile.scholarImpact?.books ?? 19}
                  duration={1.5}
                />
              </span>
              <span className="text-neutral-mist text-xs mt-1">Books</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-12 lg:col-span-5 mt-12 lg:mt-0 flex items-end justify-center lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-md flex items-end">
            <img
              src={ hero_img }
              alt={profile.name}
              className="w-full h-auto object-contain drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
