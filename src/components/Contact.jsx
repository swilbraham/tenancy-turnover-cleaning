import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const propertyTypes = [
  "1-2 Bed Flat",
  "3 Bed House",
  "4+ Bed House",
  "HMO / Shared House",
  "Commercial",
  "Other",
];

const serviceOptions = [
  "Full Deep Clean",
  "Oven Cleaning",
  "Carpet Cleaning",
  "Deep Clean + Oven",
  "Deep Clean + Carpet",
  "Complete Package (All)",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    // Let the form submit to formsubmit.cc normally
    // We show a thank-you state after a short delay
    setTimeout(() => setSubmitted(true), 100);
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Copy */}
          <div className="lg:col-span-5 lg:pt-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-emerald-400"
            >
              Get a Quote
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-serif text-4xl sm:text-5xl font-medium text-white leading-[1.1] tracking-tight"
            >
              Ready for a{" "}
              <span className="italic text-emerald-400">spotless</span>{" "}
              turnover?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-slate-400 font-sans text-base leading-relaxed"
            >
              Whether you're a landlord, letting agent or tenant moving out —
              tell us about your property and we'll get back to you with a
              clear, no-obligation quote. Usually within a few hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 space-y-6"
            >
              {/* Phone */}
              <a
                href="tel:07724564683"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-emerald-600/10 border border-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-sans font-semibold group-hover:text-emerald-400 transition-colors">
                    07724 564683
                  </p>
                  <p className="text-slate-500 font-sans text-sm">
                    Call for an instant quote
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:simonwilbraham@sky.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-emerald-600/10 border border-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-sans font-semibold group-hover:text-emerald-400 transition-colors">
                    simonwilbraham@sky.com
                  </p>
                  <p className="text-slate-500 font-sans text-sm">
                    Email us anytime
                  </p>
                </div>
              </a>

              {/* Coverage */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-600/10 border border-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-sans font-semibold">
                    Merseyside & Cheshire
                  </p>
                  <p className="text-slate-500 font-sans text-sm">
                    Liverpool, Wirral, Chester, Warrington & more
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-10 lg:p-12 text-center">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="mt-6 font-serif text-2xl text-white font-medium">
                  Thank you!
                </h3>
                <p className="mt-3 text-slate-400 font-sans">
                  We've received your enquiry and will get back to you with a
                  quote shortly — usually within a few hours.
                </p>
              </div>
            ) : (
              <form
                action="https://formsubmit.co/simonwilbraham@sky.com"
                method="POST"
                onSubmit={handleSubmit}
                className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 lg:p-10"
              >
                {/* FormSubmit config */}
                <input type="hidden" name="_subject" value="New Quote Request — Tenancy Turnover Cleaning" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: "none" }} />

                <div className="space-y-6">
                  {/* I am a... */}
                  <div>
                    <label className="block text-sm font-sans font-medium text-slate-300 mb-3">
                      I am a...
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {["Landlord", "Letting Agent", "Tenant Moving Out", "Tenant Moving In"].map((type) => (
                        <label key={type} className="relative cursor-pointer">
                          <input type="radio" name="enquiry_type" value={type} required className="peer sr-only" />
                          <span className="inline-block px-4 py-2 bg-slate-800/60 border border-slate-700 text-slate-400 font-sans text-sm rounded-xl transition-all peer-checked:bg-emerald-600/20 peer-checked:border-emerald-600 peer-checked:text-emerald-400 hover:border-slate-600">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-sans font-medium text-slate-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-sans font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="07xxx xxxxxx"
                        className="w-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-sans font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Property type & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="property_type" className="block text-sm font-sans font-medium text-slate-300 mb-2">
                        Property Type
                      </label>
                      <select
                        id="property_type"
                        name="property_type"
                        required
                        className="w-full bg-slate-800/60 border border-slate-700 text-white font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-slate-500">
                          Select type
                        </option>
                        {propertyTypes.map((type) => (
                          <option key={type} value={type} className="bg-slate-800">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-sans font-medium text-slate-300 mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full bg-slate-800/60 border border-slate-700 text-white font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled className="text-slate-500">
                          Select service
                        </option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service} className="bg-slate-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Property location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-sans font-medium text-slate-300 mb-2">
                      Property Location (Town / Postcode)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      placeholder="e.g. Liverpool L1, Chester CH1"
                      className="w-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-sans font-medium text-slate-300 mb-2">
                      Additional Details{" "}
                      <span className="text-slate-500">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Any specific requirements, preferred dates, or additional information..."
                      className="w-full bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold text-base py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-600/30 flex items-center justify-center gap-2"
                  >
                    Request Your Free Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>

                  <p className="text-center text-slate-500 font-sans text-xs mt-3">
                    No spam, no obligation. We'll respond within a few hours.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
