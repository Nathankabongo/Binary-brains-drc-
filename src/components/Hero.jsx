import React from "react";
import { Link } from "../router";
import {
  ArrowUpRight,
  Shield,
  Wifi,
  Cpu,
  CodeXml,
  Network,
  Globe,
  Sparkles,
  Layers,
  Trophy,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background Glows & Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[450px] md:w-[650px] h-[450px] md:h-[650px] rounded-full bg-blue-500/[0.07] blur-[130px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-sky-400/[0.08] blur-[130px]"></div>
        <div className="absolute top-[35%] right-[25%] w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full bg-indigo-500/[0.04] blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-xs sm:text-sm font-medium shadow-sm shadow-blue-500/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-slate-700 font-semibold">
                Innovation & Solutions Numériques en Afrique
              </span>
            </div>

            {/* Giant Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold leading-[1.04] tracking-tight text-slate-900">
              La technologie &amp; <br />
              <span className="gradient-text">l'ingénierie locale</span> <br />
              au service du progrès.
            </h1>

            {/* Subtitle / Pitch */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mx-auto lg:mx-0">
              <strong>Binary Brains</strong> est une entreprise technologique congolaise engagée dans la transformation
              de la sécurité au sein du secteur minier et industriel. Face aux défis critiques de surveillance,
              d'accidents et d'isolement sur les sites, nous développons des écosystèmes intelligents dédiés à la protection
              des vies humaines, à la cybersécurité et à l'IoT de pointe.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <Layers className="w-5 h-5 text-sky-200" />
                <span>Découvrir nos solutions</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                to="/realisations"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl glass hover:bg-white text-slate-700 hover:text-slate-900 font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>Nos réalisations &amp; victoires</span>
                <span className="text-blue-500">→</span>
              </Link>
            </div>

            {/* Key Figures / Counter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200/80">
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">
                  350+
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                  Participants
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">
                  15+
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                  Projets Livrés
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">
                  20+
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                  Partenaires
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text">
                  5+
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                  Domaines Clés
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Radar & Floating Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-[340px] sm:w-[420px] md:w-[460px] aspect-square">
              {/* Radial Ambient Glow */}
              <div className="absolute inset-[-10%] bg-gradient-to-br from-blue-600/15 via-sky-400/10 to-transparent rounded-full blur-[90px]"></div>

              {/* Animated Radar Graphic SVG */}
              <svg viewBox="0 0 500 500" className="absolute inset-0 w-full h-full" fill="none">
                <defs>
                  <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.7" />
                    <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
                  </linearGradient>
                </defs>

                {/* Expanding pulse circles */}
                <circle cx="250" cy="250" r="60" stroke="#2563EB" strokeWidth="0.8" opacity="0.2">
                  <animate attributeName="r" values="60;220" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0" dur="4s" repeatCount="indefinite" />
                </circle>
                <circle cx="250" cy="250" r="60" stroke="#0284C7" strokeWidth="0.8" opacity="0.2">
                  <animate attributeName="r" values="60;220" dur="4s" begin="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0" dur="4s" begin="2s" repeatCount="indefinite" />
                </circle>

                {/* Orbit rings */}
                <circle
                  cx="250"
                  cy="250"
                  r="210"
                  stroke="url(#orbitGrad)"
                  strokeWidth="0.8"
                  strokeDasharray="4 8"
                  opacity="0.2"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="150"
                  stroke="url(#orbitGrad)"
                  strokeWidth="0.8"
                  strokeDasharray="6 6"
                  opacity="0.25"
                />
                <circle
                  cx="250"
                  cy="250"
                  r="90"
                  stroke="#3B82F6"
                  strokeWidth="1"
                  opacity="0.15"
                />

                {/* Crosshairs */}
                <line x1="250" y1="30" x2="250" y2="470" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.3" />
                <line x1="30" y1="250" x2="470" y2="250" stroke="#94A3B8" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.3" />
              </svg>

              {/* Central Glowing Logo Orb */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-sky-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/90 backdrop-blur-2xl border border-white/80 shadow-2xl flex items-center justify-center p-3">
                    <img
                      src="/logo.jpeg"
                      alt="Binary Brains"
                      className="w-full h-full object-contain rounded-2xl drop-shadow-md mix-blend-multiply"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Cybersécurité */}
              <div className="absolute -top-2 left-6 z-30 floating-element">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/[0.04]">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Cybersécurité</div>
                    <div className="text-[10px] text-slate-400 font-mono">Chiffrement &amp; Audit</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: IoT & Télémétrie */}
              <div className="absolute top-1/4 -right-6 z-30 floating-element-delayed">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/[0.04]">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">IoT &amp; Geofencing</div>
                    <div className="text-[10px] text-slate-400 font-mono">Suivi Flotte &amp; Mines</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: IA & Data */}
              <div className="absolute bottom-16 -left-8 z-30 floating-element-slow">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/[0.04]">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">IA &amp; Géosciences</div>
                    <div className="text-[10px] text-slate-400 font-mono">Cartographie Prédictive</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 4: Full-Stack Dev */}
              <div className="absolute -bottom-4 right-10 z-30 floating-element">
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-900/[0.04]">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <CodeXml className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Développement Web</div>
                    <div className="text-[10px] text-slate-400 font-mono">Apps &amp; Plateformes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
