import React from "react";
import { Router, Routes, Route, Navigate } from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Dedicated Page Files
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import RealisationsPage from "./pages/RealisationsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-800 relative selection:bg-blue-600 selection:text-white flex flex-col">
        {/* Background Decorative Mesh Pattern */}
        <div className="fixed inset-0 pointer-events-none mesh-gradient z-0"></div>
        <div className="fixed inset-0 pointer-events-none tech-grid opacity-30 z-0"></div>

        {/* Global Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/realisations" element={<RealisationsPage />} />
            <Route path="/activites" element={<ActivitiesPage />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
