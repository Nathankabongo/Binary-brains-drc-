import React from "react";
import { Link } from "../router";
import Team from "../components/Team";
import { Sparkles, Users, Award, Shield, ArrowRight } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="pt-24 pb-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider text-blue-600 border border-blue-200/60 shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
          Les Cerveaux Derrière Binary Brains
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Une équipe pluridisciplinaire d'ingénieurs, <br />
          <span className="gradient-text">hackers éthiques &amp; créateurs</span>
        </h1>
        <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Des passionnés de technologie alliant rigueur en cybersécurité, maîtrise des systèmes embarqués connectés
          et sensibilité design pour résoudre des problématiques à grande échelle en RDC.
        </p>
      </section>

      {/* Main Team Component */}
      <Team />

      {/* Team Values & Synergy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
              Synergie &amp; Esprit d'Équipe
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">
              Une culture d'excellence, de partage et de compétition
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Qu'il s'agisse de déployer des capteurs sur un site minier ou de capturer des drapeaux lors d'un tournoi CTF international, nos membres partagent une même exigence : transformer chaque défi technique en victoire collective.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold rounded-2xl shadow-lg transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Collaborer avec l'équipe</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
