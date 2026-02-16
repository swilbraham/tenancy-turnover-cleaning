import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const guaranteePoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Professional-standard clean",
    description:
      "Our clean meets the standards expected by inventory clerks and deposit protection schemes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
      </svg>
    ),
    title: "Free re-clean if needed",
    description:
      "If any element of the clean is flagged during the check-out inspection, we'll return and re-clean it at no extra charge.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
    title: "Cleaning receipt provided",
    description:
      "You'll receive a detailed receipt of all work carried out — evidence you can share with your landlord or agent if needed.",
  },
];

export default function DepositGuarantee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-emerald-700 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="shield-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M40 10 L40 10 C50 15, 55 20, 55 30 C55 45, 40 55, 40 55 C40 55, 25 45, 25 30 C25 20, 30 15, 40 10Z" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#shield-pattern)" />
        </svg>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top row: Message + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Main message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Shield icon */}
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>

            <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-emerald-200">
              For Tenants
            </span>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-white leading-[1.1] tracking-tight">
              Deposit Return{" "}
              <span className="italic text-emerald-200">Guarantee</span>
            </h2>
            <p className="mt-6 text-emerald-100 font-sans text-lg leading-relaxed">
              Book our end-of-tenancy clean and if cleaning is cited as a
              reason for any deposit deduction, we'll return and re-clean the
              affected areas free of charge.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-sans font-semibold px-7 py-3.5 rounded-full hover:bg-emerald-50 transition-all duration-300 hover:shadow-lg"
              >
                Protect Your Deposit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
              <a
                href="tel:07724564683"
                className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-sans font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                Call Us
              </a>
            </div>
          </motion.div>

          {/* Right: Carpet cleaning image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-emerald-950/40">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80&auto=format"
                alt="Professional carpet cleaning in progress"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 lg:-left-6 bg-white rounded-xl shadow-lg px-5 py-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-sm font-bold text-slate-900">Full Deposit</p>
                  <p className="font-sans text-xs text-slate-500">Returned</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: Guarantee detail cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
          {guaranteePoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-200">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-emerald-100/80 font-sans text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exclusions note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 text-emerald-200/60 font-sans text-xs leading-relaxed text-center max-w-3xl mx-auto"
        >
          * Deposit Return Guarantee applies to cleaning-related deductions
          only. The guarantee covers re-cleaning of areas included in the
          original booking. It does not cover damage, wear and tear, missing
          items, or issues unrelated to cleaning. Re-clean must be requested
          within 72 hours of the check-out inspection. Full terms available
          on request.
        </motion.p>
      </div>
    </section>
  );
}
