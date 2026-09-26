import React from "react";
import { Link } from "../router";
import About from "../components/About";
import {
  ShieldCheck,
  Cpu,
  Users,
  Target,
  ArrowRight,
  HardHat,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      title: "Souveraineté Technologique",
      description:
        "Concevoir et fabriquer localement en RDC des solutions matérielles et logicielles indépendantes et résilientes.",
      icon: Cpu,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Préservation des Vies Humaines",
      description:
        "Faire de la sécurité des travailleurs miniers et industriels un impératif non négociable grâce à la télémétrie intelligente.",
      icon: HardHat,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Excellence & Intégrité Cyber",
      description:
        "Défendre les données sensibles et les infrastructures critiques selon les standards internationaux les plus rigoureux.",
      icon: ShieldCheck,
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      title: "Transmission aux Générations Futures",
      description:
        "Former la jeunesse congolaise aux métiers de la cybersécurité, de l'IoT et du développement de solutions durables.",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <div className="pt-24 pb-16 space-y-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider text-blue-600 border border-blue-200/60 shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
          Notre Histoire &amp; Notre Mission
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Bâtir l'avenir numérique &amp; <br />
          <span className="gradient-text">sécuriser l'industrie en Afrique</span>
        </h1>
        <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Née de la conviction que la technologie doit répondre aux urgences concrètes du continent,
          <strong> Binary Brains</strong> conjugue ingénierie de pointe, sécurité minière et impact communautaire en République Démocratique du Congo.
        </p>
      </section>

      {/* Main About Component Content */}
      <About />

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Nos Valeurs Fondatrices
          </h2>
          <p className="text-sm text-slate-600">
            Les principes qui guident chaque prototype, chaque audit de sécurité et chaque déploiement sur le terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${val.bg} ${val.color} mb-4`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/equipe"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all"
          >
            <span>Rencontrer les ingénieurs de l'équipe</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
