import React from "react";
import { Link } from "../router";
import Activities from "../components/Activities";
import { Sparkles, ArrowRight, HeartHandshake, BookOpen, Users } from "lucide-react";

export default function ActivitiesPage() {
  return (
    <div className="pt-24 pb-16 space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-wider text-purple-600 border border-purple-200/60 shadow-sm mb-4">
          <Sparkles className="w-3.5 h-3.5 text-purple-500 animate-pulse" />
          Engagement &bull; Éducation &bull; RSE
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Nos activités &amp; notre engagement pour <br />
          <span className="gradient-text">l'émergence des talents congolais</span>
        </h1>
        <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Au-delà de nos projets industriels, nous œuvrons activement à la démocratisation des savoirs technologiques :
          ateliers de code, sensibilisation à l'hygiène numérique et organisation de compétitions stimulantes.
        </p>
      </section>

      {/* Main Activities Component */}
      <Activities />

      {/* Community Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200/80 text-center max-w-4xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto shadow-md">
            <HeartHandshake className="w-7 h-7" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Vous souhaitez co-organiser un atelier ou parrainer un défi tech ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Nous collaborons régulièrement avec les universités, instituts supérieurs et entreprises partenaires pour concevoir des programmes à fort impact éducatif.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-2xl shadow-lg transition-all"
            >
              <span>Proposer un partenariat éducatif</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
