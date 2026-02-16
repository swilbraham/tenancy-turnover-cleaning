import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const areas = [
  { name: "Liverpool", description: "City centre, L1–L69", coords: "53.4084,-2.9916" },
  { name: "Birkenhead", description: "Wirral peninsula", coords: "53.3934,-3.0148" },
  { name: "Wirral", description: "Bebington, Heswall, West Kirby", coords: "53.3727,-3.0738" },
  { name: "Chester", description: "City centre & surrounds", coords: "53.1935,-2.8933" },
  { name: "Ellesmere Port", description: "CH65, CH66", coords: "53.2790,-2.8975" },
  { name: "Warrington", description: "Town centre & suburbs", coords: "53.3900,-2.5970" },
  { name: "St Helens", description: "WA9, WA10, WA11", coords: "53.4537,-2.7368" },
  { name: "Widnes", description: "WA8", coords: "53.3616,-2.7294" },
  { name: "Runcorn", description: "WA7", coords: "53.3420,-2.7335" },
  { name: "Southport", description: "PR8, PR9", coords: "53.6477,-2.9964" },
  { name: "Bootle", description: "L20, L30", coords: "53.4449,-2.9891" },
  { name: "Crosby", description: "L23", coords: "53.4871,-3.0343" },
];

export default function AreasMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeArea, setActiveArea] = useState(null);

  return (
    <section className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-emerald-400"
          >
            Coverage Area
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-[1.1] tracking-tight"
          >
            Covering{" "}
            <span className="italic text-emerald-400">Merseyside</span>{" "}
            & <span className="italic text-emerald-400">Cheshire</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-slate-400 font-sans text-base leading-relaxed"
          >
            We serve landlords, letting agents and tenants across the major towns
            and cities of Merseyside and Cheshire. If you're nearby but not listed — get in touch, we probably cover you too.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800">
              <iframe
                title="Areas we cover — Merseyside and Cheshire"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d304820.5631498199!2d-2.9!3d53.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk&maptype=roadmap"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "saturate(0.8) contrast(1.1)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Areas list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {areas.map((area, i) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  onMouseEnter={() => setActiveArea(i)}
                  onMouseLeave={() => setActiveArea(null)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 cursor-default ${
                    activeArea === i
                      ? "bg-emerald-600/10 border border-emerald-600/30"
                      : "bg-slate-900/40 border border-transparent hover:border-slate-700"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-300 ${
                    activeArea === i ? "bg-emerald-400" : "bg-slate-600"
                  }`} />
                  <div className="min-w-0">
                    <p className={`font-sans text-sm font-semibold transition-colors duration-300 ${
                      activeArea === i ? "text-emerald-400" : "text-white"
                    }`}>
                      {area.name}
                    </p>
                    <p className="font-sans text-xs text-slate-500 truncate">
                      {area.description}
                    </p>
                  </div>
                  <svg className={`w-4 h-4 ml-auto shrink-0 transition-all duration-300 ${
                    activeArea === i ? "text-emerald-400 opacity-100" : "text-slate-700 opacity-0"
                  }`} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </motion.div>
              ))}
            </div>

            <p className="mt-6 text-slate-500 font-sans text-xs leading-relaxed px-4">
              Don't see your area? We likely cover it. Contact us and we'll confirm.
            </p>

            <div className="mt-6 px-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25"
              >
                Check If We Cover Your Area
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
