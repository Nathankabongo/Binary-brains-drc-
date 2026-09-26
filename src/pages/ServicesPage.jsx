import React from "react";
import { Link } from "../router";
import Services from "../components/Services";
import {
  Sparkles,
  ArrowRight,
  Search,
  Cpu,
  Rocket,
  Headphones,
  CheckCircle2,
} from "lucide-react";

export default function ServicesPage() {
  const steps = [
    {
      step: "01",
      title: "Diagnostic & Immersion Terrain",
      description:
        "Évaluation rigoureuse des besoins opérationnels, audit des vulnérabilités et analyse des contraintes environnementales du site.",
      icon: Search,
    },
    {
      step: "02",
      title: "Conception & Prototypage Rapide",
      description:
        "Développement de solutions matérielles et logicielles sur mesure, validation en laboratoire et tests d'effort.",
      icon: Cpu,
    },
    {
      step: "03",
      title: "Déploiement & Télémétrie Sécurisée",
      description:
        "Installation sur site, formation des équipes locales et mise en route de la supervision en temps réel.",
      icon: Rocket,
    },
    {
      step: "04",
      title: "Suivi Continu & Maintenance Active",
      description:
        "Monitoring 24/7, mises à jour cryptographiques et amélioration continue des algorithmes de détection.",
      icon: Headphones,
    },
  ];

  return (
    <div className="pt-24 pb-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider text-blue-600 border border-blue-200/60 shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
          Expertise Technologique &amp; Métier
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Des services d'ingénierie taillés pour les <br />
          <span className="gradient-text">environnements les plus exigeants</span>
        </h1>
        <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          De l'Internet des Objets (IoT) en milieu minier aux audits offensifs de cybersécurité,
          nous créons des solutions sur mesure qui garantissent sécurité, productivité et souveraineté des données.
        </p>
      </section>

      {/* Services Component */}
      <Services />

      {/* Methodology Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Notre Démarche Opérationnelle
          </h2>
          <p className="text-sm text-slate-600">
            Un processus éprouvé qui garantit un déploiement sans friction et des résultats mesurables sur le terrain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-slate-200/80 shadow-sm relative group hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors mb-4 font-mono">
                  {st.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-600 to-sky-500 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-500/20">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
              Un besoin spécifique pour votre entreprise ?
            </h3>
            <p className="text-blue-100 text-sm max-w-xl">
              Consultez nos experts pour une analyse personnalisée et recevez une proposition technique détaillée sous 48h.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-2xl shadow-md transition-all flex items-center gap-2 flex-shrink-0"
          >
            <span>Demander un échange</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
