import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Deep Cleaning",
    description:
      "A top-to-bottom, intensive clean of the entire property. Every surface scrubbed, every corner reached — kitchens, bathrooms, bedrooms, living areas and hallways left spotless and ready for viewing.",
    features: ["All rooms cleaned to professional standard", "Skirting boards, light fittings & switches", "Kitchen units inside and out", "Bathroom descaling & sanitisation"],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&auto=format",
  },
  {
    number: "02",
    title: "Oven Cleaning",
    description:
      "Specialist oven cleaning that restores even the most neglected ovens to near-new condition. We use professional-grade, non-caustic products safe for all oven types.",
    features: ["Full oven interior deep clean", "Racks, trays & glass door", "Hob & extractor cleaning", "Non-toxic, fume-free products"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&auto=format",
  },
  {
    number: "03",
    title: "Carpet Cleaning",
    description:
      "Hot water extraction and professional stain removal that lifts ground-in dirt, eliminates odours and revives tired carpets. Ideal for rental properties between tenancies.",
    features: ["Hot water extraction method", "Stain & odour removal", "Fast drying times", "All carpet types catered for"],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&auto=format",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-emerald-700"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight"
            >
              Everything your property{" "}
              <span className="italic text-emerald-700">needs</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-emerald-700 hover:text-emerald-600 transition-colors group"
            >
              Get a bespoke quote
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 h-px bg-slate-200 origin-left"
        />

        {/* Services list — editorial layout */}
        <div className="mt-16 lg:mt-20 space-y-20 lg:space-y-28">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? "lg:col-start-8 lg:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-serif text-6xl font-bold text-white/20">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`lg:col-span-6 ${
                  i % 2 === 1 ? "lg:col-start-1 lg:order-1 lg:row-start-1" : "lg:col-start-7"
                }`}
              >
                <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {service.number}
                </span>
                <h3 className="mt-3 font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-slate-600 font-sans text-base leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-700 font-sans text-sm">
                      <svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
