import React, { useState, useEffect } from "react";
import { Link, useLocation } from "../router";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Accueil", path: "/", hash: "#accueil" },
    { name: "À propos", path: "/a-propos", hash: "#apropos" },
    { name: "Services", path: "/services", hash: "#services" },
    { name: "Réalisations", path: "/realisations", hash: "#evenements" },
    { name: "Activités", path: "/activites", hash: "#activites" },
    { name: "Équipe", path: "/equipe", hash: "#equipe" },
    { name: "Contact", path: "/contact", hash: "#contact" },
  ];

  const handleLinkClick = (link, e) => {
    if (location.pathname === "/") {
      const targetId = link.hash.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState({}, "", link.hash);
        setIsOpen(false);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm shadow-slate-900/5 py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.pushState({}, "", "#accueil");
              }
            }}
            className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-transparent">
              <img
                src="/logo.jpeg"
                alt="Binary Brains"
                className="w-full h-full object-contain mix-blend-multiply"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg text-slate-900 tracking-tight flex items-center gap-1.5">
                Binary Brains
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
                Tech &amp; Innovation RDC
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/60 shadow-sm shadow-slate-900/[0.02]">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (location.pathname === "/" && location.hash === link.hash);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => handleLinkClick(link, e)}
                  className={`relative px-3 py-1.5 text-xs sm:text-[13px] font-medium rounded-full transition-all duration-300 group ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              onClick={(e) => {
                if (location.pathname === "/") {
                  const el = document.getElementById("contact");
                  if (el) {
                    e.preventDefault();
                    el.scrollIntoView({ behavior: "smooth" });
                    window.history.pushState({}, "", "#contact");
                  }
                }
              }}
              className="group px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2"
            >
              <span>Nous contacter</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-slate-200/80 bg-white/95 backdrop-blur-2xl shadow-xl animate-fadeIn">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (location.pathname === "/" && location.hash === link.hash);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    handleLinkClick(link, e);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <Link
                to="/contact"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    const el = document.getElementById("contact");
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState({}, "", "#contact");
                    }
                  }
                  setIsOpen(false);
                }}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl text-center flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
              >
                <span>Nous contacter</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
