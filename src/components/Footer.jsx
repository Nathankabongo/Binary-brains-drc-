import React from "react";
import { Link } from "../router";
import { Mail, ArrowUp, Heart, Globe } from "lucide-react";

const LinkedinIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Top Gradient Separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 inline-flex">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-transparent flex items-center justify-center">
                <img
                  src="/logo.jpeg"
                  alt="Binary Brains Logo"
                  className="w-full h-full object-contain rounded-lg mix-blend-screen"
                />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Binary Brains
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Binary Brains œuvre pour la transformation technologique en République Démocratique
              du Congo : sécurité minière (projet Ulinzi), cybersécurité, Internet des Objets (IoT)
              et ingénierie logicielle au service de la nation et de la jeunesse.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="mailto:binarybrainsdrc@gmail.com"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Merveille5/binary"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase font-bold tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-blue-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="hover:text-blue-400 transition-colors">
                  Réalisations &amp; Victoires
                </Link>
              </li>
              <li>
                <Link to="/activites" className="hover:text-blue-400 transition-colors">
                  Activités
                </Link>
              </li>
            </ul>
          </div>

          {/* Événements & Réalisations */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase font-bold tracking-widest text-white">
              Réalisations Phares
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/realisations" className="hover:text-blue-400 transition-colors">
                  Projet Ulinzi (ExpoCut 9)
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="hover:text-blue-400 transition-colors">
                  Génie Scientifique 2026
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="hover:text-blue-400 transition-colors">
                  CTF Flag Hunters
                </Link>
              </li>
              <li>
                <Link to="/realisations" className="hover:text-blue-400 transition-colors">
                  DemoTech ISIPA
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations & Légal */}
          <div className="space-y-3">
            <h4 className="font-display text-xs uppercase font-bold tracking-widest text-white">
              Contact &amp; Équipe
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Nous Contacter
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="hover:text-blue-400 transition-colors">
                  L'Équipe Fondatrice
                </Link>
              </li>
              <li>
                <span className="text-slate-500">Kinshasa, RD Congo</span>
              </li>
              <li>
                <span className="text-slate-500">+243 824 104 260</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} Binary Brains DRC. Fait avec{" "}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> en RD Congo.
          </p>

          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md"
            title="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
