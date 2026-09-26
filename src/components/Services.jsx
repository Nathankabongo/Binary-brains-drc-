import React from "react";
import {
  Wifi,
  Shield,
  Code,
  Cpu,
  Cloud,
  GraduationCap,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "IoT, Télémétrie & Geofencing",
      icon: Wifi,
      iconBg: "from-blue-500 to-indigo-600",
      accent: "from-blue-500 to-indigo-600",
      description:
        "Solutions matérielles et logicielles connectées pour le suivi d'engins, la télémétrie en temps réel et la surveillance des concessions minières ou réserves protégées par maillage hexagonal Uber H3.",
      features: [
        "Barrières virtuelles (Geofencing CAMI / ZEA)",
        "Télémétrie autonome NMEA / Traccar",
        "Système anti-collision d'engins lourds",
        "Capteurs industriels & Edge Computing",
      ],
    },
    {
      number: "02",
      title: "Cybersécurité & Chiffrement",
      icon: Shield,
      iconBg: "from-sky-500 to-cyan-600",
      accent: "from-sky-500 to-cyan-600",
      description:
        "Protection des systèmes d'information et des données sensibles face aux cybermenaces. Implémentation du chiffrement de bout en bout et audits de conformité pour entreprises et institutions.",
      features: [
        "Audit de sécurité & tests d'intrusion",
        "Chiffrement des communications & données",
        "Gestion des identités & contrôle d'accès",
        "Sensibilisation & hygiène numérique",
      ],
    },
    {
      number: "03",
      title: "Développement Web & Mobile",
      icon: Code,
      iconBg: "from-emerald-500 to-teal-600",
      accent: "from-emerald-500 to-teal-600",
      description:
        "Conception sur mesure d'applications web modernes, d'APIs robustes et de solutions mobiles ergonomiques adaptées aux conditions réseau africaines (offline-first, performance).",
      features: [
        "Plateformes SaaS & Portails métiers",
        "Applications mobiles iOS & Android",
        "Dashboards d'analyse temps réel",
        "Intégration d'APIs & Microservices",
      ],
    },
    {
      number: "04",
      title: "IA & Cartographie Prédictive",
      icon: Cpu,
      iconBg: "from-purple-500 to-indigo-600",
      accent: "from-purple-500 to-indigo-600",
      description:
        "Modélisation géoscientifique avancée et vision par ordinateur. Analyse automatisée des données satellitaires, magnétiques et géochimiques pour le ciblage minier et la surveillance environnementale.",
      features: [
        "Algorithmes WoE, Random Forest & Réseaux de neurones",
        "Détection automatisée de chantiers artisanaux",
        "Interpolation implicite 3D (GemPy, RBF)",
        "Analyse multicritère spatiale (GIS)",
      ],
    },
    {
      number: "05",
      title: "Cloud Computing & DevOps",
      icon: Cloud,
      iconBg: "from-amber-500 to-orange-600",
      accent: "from-amber-500 to-orange-600",
      description:
        "Accompagnement dans la migration et l'optimisation des infrastructures cloud. Réduction des coûts d'investissement matériel tout en garantissant disponibilité et résilience maximale.",
      features: [
        "Architectures Cloud hybrides & résilientes",
        "Pipelines CI/CD & Déploiement continu",
        "Conteneurisation Docker & orchestration",
        "Monitoring 24/7 & sauvegardes automatisées",
      ],
    },
    {
      number: "06",
      title: "Formations & Conseil Stratégique",
      icon: GraduationCap,
      iconBg: "from-rose-500 to-pink-600",
      accent: "from-rose-500 to-pink-600",
      description:
        "Programmes intensifs de montée en compétences, MasterClasses spécialisées et conseil stratégique pour réussir la transformation numérique de vos équipes et organisations.",
      features: [
        "MasterClasses Cybersécurité & Données",
        "Ateliers pratiques IoT & Développement",
        "Conseil en stratégie de transformation digitale",
        "Accompagnement de startups technologiques",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-50/60">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
            Services &amp; Solutions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Nos domaines <span className="gradient-text">d'intervention</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nous combinons ingénierie matérielle, architectures logicielles et sciences des données
            pour fournir des solutions à fort impact opérationnel et technologique.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative glass-card-hover p-7 rounded-3xl overflow-hidden flex flex-col justify-between"
              >
                {/* Top Number indicator */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-display text-4xl font-extrabold text-slate-200 group-hover:text-blue-500/20 transition-colors">
                    {item.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5 mb-6">
                    {item.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link & line */}
                <div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/btn"
                    >
                      <span>Demander une solution</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
