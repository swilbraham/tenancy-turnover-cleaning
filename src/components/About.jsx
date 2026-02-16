import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Properties Cleaned" },
  { value: "48hr", label: "Average Turnaround" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "5.0", label: "Average Rating" },
];

const areas = [
  "Liverpool",
  "Wirral",
  "Chester",
  "Warrington",
  "St Helens",
  "Widnes",
  "Runcorn",
  "Ellesmere Port",
  "Birkenhead",
  "Southport",
  "Bootle",
  "Crosby",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Image + stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format"
                  alt="Clean, modern property interior"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 max-w-[220px]">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="font-serif text-2xl font-semibold text-emerald-700">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 font-sans text-[10px] uppercase tracking-wider text-slate-500">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 lg:pt-8">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-emerald-700"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-serif text-4xl sm:text-5xl font-medium text-slate-900 leading-[1.1] tracking-tight"
            >
              Local expertise,{" "}
              <span className="italic text-emerald-700">professional</span>{" "}
              standards
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 h-px w-20 bg-emerald-600 origin-left"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 space-y-5 font-sans text-base text-slate-600 leading-relaxed"
            >
              <p>
                Based in the heart of Merseyside, we specialise exclusively in
                end-of-tenancy and turnover cleaning for the rental property
                market. Whether you're a landlord preparing for your next
                let, a letting agent managing multiple properties, or a tenant
                moving out and wanting your full deposit back — we deliver a
                deep, comprehensive clean that meets check-out standards.
              </p>
              <p>
                Our team brings professional-grade equipment and eco-friendly
                products to every job. We're fully insured, DBS checked and
                committed to delivering a consistent standard across every
                property, every time. No corners cut, no excuses.
              </p>
            </motion.div>

            {/* Areas covered */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10"
            >
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Areas We Cover
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {areas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-700 font-sans text-sm rounded-full hover:bg-emerald-50 hover:text-emerald-700 transition-colors duration-300 cursor-default"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {[
                { label: "Fully Insured", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" },
                { label: "DBS Checked", icon: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" },
                { label: "Eco-Friendly", icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-slate-700">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span className="font-sans text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
