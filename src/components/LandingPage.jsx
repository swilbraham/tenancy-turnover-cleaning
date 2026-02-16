import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const serviceOptions = [
  "Full Deep Clean",
  "Oven Cleaning",
  "Carpet Cleaning",
  "Deep Clean + Oven",
  "Deep Clean + Carpet",
  "Complete Package (All)",
];

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll come back and re-clean at no extra cost.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "48hr Turnaround",
    description: "Most properties cleaned within 48 hours of booking.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
    title: "Fixed Pricing",
    description: "Clear, upfront quotes with no hidden fees or surprises.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
    title: "Professional Grade",
    description: "Industrial equipment and eco-friendly products on every job.",
  },
];

const quickTestimonials = [
  {
    quote: "Got my full deposit back thanks to Tenancy Turnover. Worth every penny.",
    author: "Emma C.",
    role: "Tenant, Liverpool",
  },
  {
    quote: "Our go-to for every turnover. Consistent, reliable, immaculate.",
    author: "Sarah M.",
    role: "Lettings Director",
  },
  {
    quote: "They fitted us in at short notice. Property spotless within 48 hours.",
    author: "Karen O.",
    role: "Property Manager",
  },
];

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setTimeout(() => setSubmitted(true), 100);
  }

  return (
    <div className="min-h-screen bg-white antialiased">
      {/* Sticky top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between h-14">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Tenancy Turnover Cleaning"
              className="h-9 w-auto brightness-0 invert"
            />
          </a>
          <div className="flex items-center gap-3">
            <a href="tel:07724564683" className="hidden sm:flex items-center gap-1.5 text-emerald-400 font-sans text-sm font-medium hover:text-emerald-300 transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              07724 564683
            </a>
            <a href="#landing-form" className="bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-sm font-semibold px-4 py-2 rounded-full transition-all">
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Hero — split layout */}
      <section className="relative pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          {/* Left: Content */}
          <div className="flex items-center px-6 sm:px-10 lg:px-16 xl:px-20 py-16 lg:py-0 bg-white order-2 lg:order-1">
            <div className="max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 mb-6"
              >
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-emerald-700 text-xs font-sans font-medium">Merseyside & Cheshire</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl xl:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight"
              >
                Professional end-of-tenancy{" "}
                <span className="italic text-emerald-700">cleaning</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-6 text-slate-600 font-sans text-lg leading-relaxed"
              >
                Deep cleaning, oven cleaning and carpet cleaning — for
                landlords, letting agents and tenants across Liverpool, Wirral,
                Chester, Warrington and beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <a
                  href="#landing-form"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/30"
                >
                  Get Your Free Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
                </a>
                <a
                  href="tel:07724564683"
                  className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:border-slate-400 text-slate-700 font-sans font-medium px-7 py-3.5 rounded-full transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call Now
                </a>
              </motion.div>

              {/* Trust markers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-slate-500 font-sans text-sm"
              >
                {["Fully Insured", "DBS Checked", "Satisfaction Guaranteed"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative min-h-[300px] lg:min-h-0 order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&auto=format"
              alt="Clean modern property interior"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:bg-gradient-to-r lg:from-white/20 lg:via-transparent lg:to-transparent" />
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="bg-slate-950 py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white tracking-tight">
              Why choose <span className="italic text-emerald-400">us?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-emerald-600/10 border border-emerald-600/20 rounded-xl flex items-center justify-center text-emerald-400">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-white">{benefit.title}</h3>
                <p className="mt-2 text-slate-400 font-sans text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-emerald-700">Our Services</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">
              Complete turnover cleaning
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Deep Cleaning",
                description: "Every room, every surface — kitchens, bathrooms, bedrooms and living areas cleaned to check-out standard.",
                image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format",
              },
              {
                title: "Oven Cleaning",
                description: "Professional-grade restoration for even the most neglected ovens. Non-toxic products, near-new results.",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&auto=format",
              },
              {
                title: "Carpet Cleaning",
                description: "Hot water extraction that lifts ground-in dirt, removes stains and eliminates odours. Fast drying times.",
                image: "/carpet-cleaning.jpg",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <h3 className="font-serif text-xl font-medium text-slate-900">{service.title}</h3>
                <p className="mt-2 text-slate-600 font-sans text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickTestimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="font-sans text-slate-700 text-base italic leading-relaxed">"{t.quote}"</p>
                <footer className="mt-3">
                  <span className="font-sans text-sm font-semibold text-slate-900">{t.author}</span>
                  <span className="text-slate-400 mx-1.5">&middot;</span>
                  <span className="font-sans text-sm text-slate-500">{t.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form section */}
      <section id="landing-form" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-emerald-700">Free Quote</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">
              Get your quote in minutes
            </h2>
            <p className="mt-3 text-slate-500 font-sans">
              Fill in the details below and we'll get back to you — usually within a few hours.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-200 rounded-2xl p-10 text-center"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-7 h-7 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-slate-900 font-medium">Thank you!</h3>
              <p className="mt-2 text-slate-600 font-sans">We've received your enquiry and will be in touch shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              action="https://formsubmit.co/simonwilbraham@sky.com"
              method="POST"
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 p-8 sm:p-10"
            >
              <input type="hidden" name="_subject" value="New Landing Page Quote — Tenancy Turnover Cleaning" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: "none" }} />

              <div className="space-y-5">
                {/* I am a... */}
                <div>
                  <label className="block text-sm font-sans font-medium text-slate-700 mb-2.5">I am a...</label>
                  <div className="flex flex-wrap gap-2">
                    {["Landlord", "Letting Agent", "Tenant Moving Out", "Tenant Moving In"].map((type) => (
                      <label key={type} className="relative cursor-pointer">
                        <input type="radio" name="enquiry_type" value={type} required className="peer sr-only" />
                        <span className="inline-block px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 font-sans text-sm rounded-xl transition-all peer-checked:bg-emerald-50 peer-checked:border-emerald-500 peer-checked:text-emerald-700 hover:border-slate-300 cursor-pointer">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="lp-name" className="block text-sm font-sans font-medium text-slate-700 mb-1.5">Full Name</label>
                    <input type="text" id="lp-name" name="name" required placeholder="Your name" className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label htmlFor="lp-phone" className="block text-sm font-sans font-medium text-slate-700 mb-1.5">Phone Number</label>
                    <input type="tel" id="lp-phone" name="phone" required placeholder="07xxx xxxxxx" className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all" />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="lp-email" className="block text-sm font-sans font-medium text-slate-700 mb-1.5">Email Address</label>
                  <input type="email" id="lp-email" name="email" required placeholder="you@example.com" className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all" />
                </div>

                {/* Service & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="lp-service" className="block text-sm font-sans font-medium text-slate-700 mb-1.5">Service Required</label>
                    <select id="lp-service" name="service" required className="w-full bg-slate-50 border border-slate-200 text-slate-900 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all appearance-none" defaultValue="">
                      <option value="" disabled>Select service</option>
                      {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="lp-location" className="block text-sm font-sans font-medium text-slate-700 mb-1.5">Property Location</label>
                    <input type="text" id="lp-location" name="location" required placeholder="e.g. Liverpool L1" className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="lp-message" className="block text-sm font-sans font-medium text-slate-700 mb-1.5">
                    Additional Details <span className="text-slate-400">(optional)</span>
                  </label>
                  <textarea id="lp-message" name="message" rows={3} placeholder="Property size, preferred dates, specific requirements..." className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 font-sans text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all resize-none" />
                </div>

                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold text-base py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/25 flex items-center justify-center gap-2">
                  Request Your Free Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>

                <p className="text-center text-slate-400 font-sans text-xs">No spam. No obligation. We'll respond within a few hours.</p>
              </div>
            </motion.form>
          )}
        </div>
      </section>

      {/* Bottom CTA bar */}
      <section className="bg-emerald-700 py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
            Ready for a spotless property?
          </h2>
          <p className="mt-3 text-emerald-100 font-sans text-base">
            Call us now or request your free, no-obligation quote today.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="tel:07724564683" className="inline-flex items-center gap-2 bg-white text-emerald-700 font-sans font-semibold px-7 py-3 rounded-full hover:bg-emerald-50 transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              07724 564683
            </a>
            <Link to="/" className="text-emerald-100 hover:text-white font-sans text-sm underline underline-offset-4 transition-colors">
              View our full website
            </Link>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-slate-950 py-8">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Tenancy Turnover Cleaning. All rights reserved.
          </p>
          <Link to="/" className="font-sans text-xs text-slate-500 hover:text-slate-400 transition-colors">
            Visit full website &rarr;
          </Link>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3">
        <div className="flex gap-3">
          <a href="tel:07724564683" className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-sans font-semibold text-sm py-3 rounded-xl transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Call Now
          </a>
          <a href="#landing-form" className="flex-1 inline-flex items-center justify-center bg-slate-900 text-white font-sans font-semibold text-sm py-3 rounded-xl transition-all">
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}
