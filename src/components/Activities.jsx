import React, { useState } from "react";
import {
  Wifi,
  GraduationCap,
  Shield,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

export default function Activities() {
  const [activeTab, setActiveTab] = useState(0);

  const activities = [
    {
      id: "inclusion",
      tag: "Axe 01",
      title: "Inclusion Numérique & Hygiène Digitale",
      icon: Wifi,
      gradient: "from-blue-600 to-cyan-500",
      color: "text-blue-600",
      bgLight: "bg-blue-50",
      description:
        "Réduire la fracture numérique en République Démocratique du Congo par des campagnes de vulgarisation, des guides d'hygiène numérique et des ateliers de découverte des technologies ouvertes.",
      highlights: [
        "Sensibilisation aux bonnes pratiques de navigation sécurisée",
        "Ateliers d'initiation aux outils numériques pour jeunes et étudiants",
        "Promotion de l'accès équitable à l'information technologique",
      ],
      impact: "Plus de 500 jeunes sensibilisés aux opportunités du numérique.",
    },
    {
      id: "formation",
      tag: "Axe 02",
      title: "Formations Pratiques & Éducation Technologique",
      icon: GraduationCap,
      gradient: "from-purple-600 to-indigo-500",
      color: "text-purple-600",
      bgLight: "bg-purple-50",
      description:
        "Organisation de sessions immersives, Bootcamps et MasterClasses techniques : apprentissage du code, introduction aux microcontrôleurs IoT, administration système Linux et cybersécurité opérationnelle.",
      highlights: [
        "Bootcamps intensifs en développement web et mobile",
        "Ateliers pratiques avec capteurs et cartes IoT",
        "Mentorat individualisé et orientation vers les carrières tech",
      ],
      impact: "Dizaines de projets prototypés lors de nos sessions pratiques.",
    },
    {
      id: "securite",
      tag: "Axe 03",
      title: "Promotion du Chiffrement & Sécurité des Données",
      icon: Shield,
      gradient: "from-emerald-600 to-teal-500",
      color: "text-emerald-600",
      bgLight: "bg-emerald-50",
      description:
        "Binary Brains est un fervent défenseur du chiffrement et de la vie privée comme fondements du développement digital en Afrique. Organisation d'événements majeurs pour promouvoir la protection des données.",
      highlights: [
        "Célébration de la Journée Mondiale du Chiffrement à Kinshasa",
        "Conférences avec des experts de l'écosystème institutionnel et privé",
        "Démonstrations de protocoles cryptographiques et signatures numériques",
      ],
      impact: "Mobilisation de panels multisectoriels et d'acteurs de premier plan.",
    },
    {
      id: "industrie",
      tag: "Axe 04",
      title: "Solutions Technologiques & Projets Industriels",
      icon: Layers,
      gradient: "from-amber-600 to-orange-500",
      color: "text-amber-600",
      bgLight: "bg-amber-50",
      description:
        "Développement de briques technologiques adaptées au contexte africain : systèmes de géolocalisation pour flottes minières, dispositifs de traçabilité et plateformes d'analyse de données géoscientifiques.",
      highlights: [
        "Ingénierie de boîtiers IoT résistants aux environnements extrêmes",
        "Intégration d'algorithmes de cartographie prédictive (ML & GIS)",
        "Interopérabilité avec les systèmes d'information existants",
      ],
      impact: "Technologies conçues, testées et validées localement en RDC.",
    },
  ];

  return (
    <section id="activites" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.15em] text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Nos Activités Clés
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Promotion de <span className="gradient-text">l'innovation</span> en RDC
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Quatre axes stratégiques portés par l'équipe de Binary Brains pour dynamiser
            l'écosystème technologique, former les compétences et sécuriser les infrastructures.
          </p>
        </div>

        {/* Interactive Activity Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Pills (Left 4 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {activities.map((act, index) => {
              const Icon = act.icon;
              const isSelected = activeTab === index;
              return (
                <button
                  key={act.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-start gap-4 border ${
                    isSelected
                      ? "bg-white border-blue-200 shadow-xl shadow-blue-500/10 scale-[1.02]"
                      : "glass border-slate-200/60 hover:bg-white/80 opacity-80"
                  }`}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform ${
                      isSelected
                        ? `bg-gradient-to-br ${act.gradient} text-white shadow-md`
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-mono uppercase font-bold text-slate-400 block mb-0.5">
                      {act.tag}
                    </span>
                    <h3
                      className={`text-base font-bold truncate ${
                        isSelected ? "text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {act.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details Card (Right 7 cols) */}
          <div className="lg:col-span-7">
            {(() => {
              const current = activities[activeTab];
              const Icon = current.icon;
              return (
                <div className="glass-card p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl relative overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${current.gradient}`}
                  ></div>

                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${current.gradient} text-white flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {current.tag}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-slate-900">
                        {current.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-600 text-base leading-relaxed mb-8">
                    {current.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Actions &amp; Réalisations
                    </h4>
                    <div className="space-y-3">
                      {current.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      <strong>Impact direct :</strong> {current.impact}
                    </p>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
