import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pain from "./components/Pain";
import Services from "./components/Services";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import DepositGuarantee from "./components/DepositGuarantee";
import AreasMap from "./components/AreasMap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <Services />
        <Process />
        <Testimonials />
        <DepositGuarantee />
        <About />
        <AreasMap />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-a-quote" element={<LandingPage />} />
      </Routes>
    </>
  );
}
