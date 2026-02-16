import { motion } from "framer-motion";

const footerLinks = {
  Services: [
    { label: "Deep Cleaning", href: "#services" },
    { label: "Oven Cleaning", href: "#services" },
    { label: "Carpet Cleaning", href: "#services" },
    { label: "Get a Quote", href: "#contact" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  Areas: [
    { label: "Liverpool", href: "#about" },
    { label: "Wirral & Birkenhead", href: "#about" },
    { label: "Chester & Ellesmere Port", href: "#about" },
    { label: "Warrington & St Helens", href: "#about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Tenancy Turnover Cleaning"
                className="h-12 w-auto brightness-0 invert"
              />
            </a>
            <p className="mt-5 font-sans text-sm text-slate-500 leading-relaxed max-w-xs">
              Professional end-of-tenancy and deep cleaning services for
              landlords and letting agents across Merseyside and Cheshire.
            </p>

            {/* Call button */}
            <a
              href="tel:07724564683"
              className="mt-6 inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-emerald-700/25"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              Call Now — 07724 564683
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-2 lg:col-start-auto">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-slate-500 hover:text-emerald-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Tenancy Turnover Cleaning. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-sans text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Mobile sticky call button */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-3 safe-area-bottom">
        <div className="flex gap-3">
          <a
            href="tel:07724564683"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold text-sm py-3 rounded-xl transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            Call Now
          </a>
          <a
            href="#contact"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-sans font-semibold text-sm py-3 rounded-xl transition-all hover:bg-slate-100"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </footer>
  );
}
