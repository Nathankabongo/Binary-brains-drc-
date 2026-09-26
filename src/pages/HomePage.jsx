import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import Events from "../components/Events";
import Activities from "../components/Activities";
import Team from "../components/Team";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* 1. Hero Showcase */}
      <Hero />

      {/* 2. Live Tech & Partner Ticker */}
      <Marquee />

      {/* 3. About Binary Brains */}
      <About />

      {/* 4. Core Services & Engineering */}
      <Services />

      {/* 5. Realisations, ExpoCut Ulinzi, Génie Scientifique 2026, CTF Flag Hunters */}
      <Events />

      {/* 6. Activities & Community */}
      <Activities />

      {/* 7. Structured Team (DG, Dev & IoT, Cybersécurité Flag Hunters) */}
      <Team />

      {/* 8. Institutional & Tech Partners */}
      <Partners />

      {/* 9. Contact & Inquiries */}
      <Contact />
    </div>
  );
}
