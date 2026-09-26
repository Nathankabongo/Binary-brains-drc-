import React from "react";
import { Target, Users, BookOpen, TrendingUp, ArrowUpRight } from "lucide-react";

export default function About() {
  const cards = [
    {
      badge: "Vision",
      title: "Notre Vision",
      icon: Target,
      iconBg: "from-blue-500 to-indigo-600",
      accent: "from-blue-500 to-indigo-600",
      description:
        "Devenir la référence africaine dans l'ingénierie de pointe en connectant le monde physique et le numérique. Nous bâtissons des solutions intelligentes et robustes capables d'opérer avec fiabilité dans les environnements les plus exigeants.",
      tags: ["Innovation", "Excellence", "RDC & Afrique"],
    },
    {
      badge: "Modèle Hybride",
      title: "R&D Industrielle & Impact Social",
      icon: Users,
      iconBg: "from-sky-500 to-cyan-600",
      accent: "from-sky-500 to-cyan-600",
      description:
        "Notre force réside dans la synergie entre nos services B2B (suivi de flotte, cybersécurité, cartographie prédictive) et notre engagement citoyen : chaque réalisation industrielle contribue à financer des sessions de formation et des hackathons pour la jeunesse congolaise.",
      tags: ["Synergie B2B", "RSE", "Impact Durable"],
    },
    {
      badge: "Contexte Local",
      title: "Répondre aux Défis du Terrain",
      icon: BookOpen,
      iconBg: "from-emerald-500 to-teal-600",
      accent: "from-emerald-500 to-teal-600",
      description:
        "L'Afrique centrale fait face à des défis uniques : zones enclavées, manque de connectivité temps réel et enjeux critiques de sécurité des données. Nous créons des outils adaptés aux réalités du terrain, conçus par des ingénieurs locaux pour un impact tangible.",
      tags: ["Souveraineté", "Solutions Locales", "Résilience"],
    },
    {
      badge: "Futur",
      title: "Horizon 2030 : L'Afrique Connectée",
      icon: TrendingUp,
      iconBg: "from-amber-500 to-orange-600",
      accent: "from-amber-500 to-orange-600",
      description:
        "Binary Brains s'engage activement pour faire du numérique un puissant levier d'émancipation économique. Notre feuille de route inclut le déploiement d'écosystèmes IoT industriels, la formation de milliers de talents et la promotion active de l'hygiène numérique.",
      tags: ["Horizon 2030", "Croissance", "Autonomie"],
    },
  ];

  return (
    <section id="apropos" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            À propos de nous
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Le numérique au <span className="gradient-text">cœur</span> de notre communauté
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <strong>Binary Brains</strong> est une entreprise technologique congolaise engagée dans la transformation
            de la sécurité au sein du secteur minier. En réponse à des défis majeurs tels que l’insuffisance de la
            surveillance, les accidents fréquents et l’absence de suivi en temps réel sur les sites miniers, nous avons
            développé un écosystème global de surveillance intelligente dédié à la protection des vies humaines.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative glass-card-hover p-6 sm:p-8 rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                {/* Accent top gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accent} opacity-80`}
                ></div>

                {/* Ambient glow inside card */}
                <div
                  className={`absolute -top-16 -right-16 w-36 h-36 rounded-full bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                ></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center text-white shadow-md shadow-slate-900/10 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200/60">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-50 text-slate-600 border border-slate-200/60"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
