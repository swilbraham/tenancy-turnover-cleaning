import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "We manage over 200 properties across Liverpool and Wirral. Tenancy Turnover Cleaning is the only company we trust for our end-of-tenancy cleans. Consistent, reliable, and the properties always look immaculate.",
    author: "Sarah Mitchell",
    role: "Director, Merseyside Lettings Group",
    type: "landlord",
    rating: 5,
  },
  {
    quote:
      "I was moving out of my flat in Liverpool and panicking about the state of the oven and carpets. They came in, did everything in one visit, and I got my full deposit back. Worth every penny.",
    author: "Emma Clarke",
    role: "Tenant, Liverpool",
    type: "tenant",
    rating: 5,
  },
  {
    quote:
      "Fast, thorough and fairly priced. They fitted us in at short notice when we needed a turnover clean between tenants in Warrington. The property was spotless and ready to show within 48 hours. Highly recommend.",
    author: "Karen O'Brien",
    role: "Property Manager, Cheshire Homes",
    type: "landlord",
    rating: 5,
  },
  {
    quote:
      "My letting agent recommended Tenancy Turnover when I moved out of a shared house in Birkenhead. The place needed serious work and they handled the lot — saved me hours of stress during an already hectic week.",
    author: "Ryan Hughes",
    role: "Tenant, Wirral",
    type: "tenant",
    rating: 5,
  },
  {
    quote:
      "I was dreading the state of my rental after a long-term tenant moved out. The team had it looking brand new in under a day — ovens, carpets, the lot. Saved me so much stress and the new tenants were thrilled.",
    author: "James Hartley",
    role: "Landlord, Chester",
    type: "landlord",
    rating: 5,
  },
  {
    quote:
      "Booked them for an end-of-tenancy clean on my flat in Chester before handing the keys back. The standard was incredible — my landlord actually messaged to say it was the cleanest he'd ever seen the place. Full deposit returned.",
    author: "Sophie Williams",
    role: "Tenant, Chester",
    type: "tenant",
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-slate-50">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs font-sans font-semibold uppercase tracking-[0.2em] text-emerald-700"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] tracking-tight"
            >
              Trusted by landlords{" "}
              <span className="italic text-slate-500">and tenants</span> alike
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-2 text-sm font-sans text-slate-500"
          >
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <span className="font-medium text-slate-700">5.0</span> average rating
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 h-px bg-slate-200 origin-left"
        />

        {/* Testimonials grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
              onMouseEnter={() => setActive(i)}
              className={`relative bg-white rounded-2xl p-8 lg:p-10 border transition-all duration-500 ${
                active === i
                  ? "border-emerald-200 shadow-xl shadow-emerald-100/50"
                  : "border-slate-200/80 hover:border-slate-300"
              }`}
            >
              {/* Quote mark */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-emerald-100"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
              </svg>

              <div className="flex items-center gap-3 mb-4">
                <StarRating rating={testimonial.rating} />
                <span className={`text-[10px] font-sans font-semibold uppercase tracking-[0.12em] px-2 py-0.5 rounded-full ${
                  testimonial.type === "tenant"
                    ? "bg-amber-50 text-amber-700"
                    : "bg-slate-100 text-slate-600"
                }`}>
                  {testimonial.type === "tenant" ? "Tenant" : "Landlord"}
                </span>
              </div>
              <blockquote className="font-sans text-base text-slate-700 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  testimonial.type === "tenant"
                    ? "bg-gradient-to-br from-amber-500 to-amber-600"
                    : "bg-gradient-to-br from-emerald-600 to-emerald-700"
                }`}>
                  <span className="text-white font-serif text-sm font-semibold">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-slate-900">
                    {testimonial.author}
                  </p>
                  <p className="font-sans text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
