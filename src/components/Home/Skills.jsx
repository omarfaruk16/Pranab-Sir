import React from "react";
import { skillsData } from "../../data/content";


const Skills = () => {
  return (
    <section className="heading-serif bg-[#0b0f1a] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-serif text-4xl font-extrabold text-white mb-16 text-center tracking-tight">
          Key <span className="text-green-400">Skills</span> & Competencies
        </h2>
        {/* Responsive Grid: 3 items per row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="relative bg-[#13192a] border border-white/5 rounded-3xl p-8 pt-14 shadow-2xl transition-all duration-300 hover:border-green-400/30 group"
            >
              {/* Checkmark Icon (Top Right) */}
              <div className="absolute top-6 right-8">
                <svg
                  className="w-5 h-5 text-green-500/40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              

              {/* Content */}
              <div className="flex flex-col h-full">
                <h3 className="text-white text-2xl font-bold mb-4 tracking-tight">
                  {skill.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {skill.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
