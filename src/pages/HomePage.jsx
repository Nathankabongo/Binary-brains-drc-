import React from "react";
import { Link } from "../router";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Partners from "../components/Partners";
import {
  Trophy,
  HardHat,
  Cpu,
  Shield,
  ArrowRight,
  Sparkles,
  Layers,
  Award,
  Users,
  Target,
  Terminal,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Live Tech & Partner Ticker */}
      <Marquee />

      {/* 3. Qui sommes-nous ? / Présentation Sommaire */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass text-xs font-semibold uppercase tracking-wider text-blue-600 border border-blue-200/60 shadow-sm">
              <Target className="w-3.5 h-3.5 text-blue-500" />
              L'Entreprise &amp; la Vision
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              L'ingénierie congolaise au service de la <br />
              <span className="gradient-text">sécurité et de l'innovation</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Binary Brains</strong> est une entreprise technologique congolaise engagée dans la transformation
              de la sécurité au sein du secteur minier et industriel. Face aux défis majeurs tels que l’insuffisance
              de surveillance, les accidents fréquents et l’absence de suivi en temps réel sur les sites miniers, nous
              avons développé un écosystème global de surveillance intelligente dédié à la protection des vies humaines.
            </p>

            <div className="pt-2">
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-2xl border border-blue-200/60 transition-all text-sm group"
              >
                <span>Découvrir notre histoire &amp; notre vision</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="glass-card p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <HardHat className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Sécurité Minière
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Télémétrie et casques connectés pour surveiller en temps réel la santé et la sécurité des mineurs.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Cyberdéfense
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Audits offensifs, durcissement et tests d'intrusion par notre escouade d'élite Flag Hunters.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                IoT &amp; Embarqué
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Conception de capteurs intelligents et d'architectures matérielles robustes adaptées au terrain.
              </p>
            </div>

            <div className="glass-card p-6 rounded-3xl border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display text-base font-bold text-slate-900">
                Formation &amp; RSE
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hackathons, ateliers de code et encadrement des jeunes talents pour l'avenir de la RDC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Réalisations Phares (Teaser vers /realisations) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass text-xs font-semibold uppercase tracking-wider text-blue-600 border border-blue-200/60 shadow-sm">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              Distinctions &amp; Victoires
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Nos réalisations phares <br />
              <span className="gradient-text">sur le terrain et en compétition</span>
            </h2>
          </div>
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            <span>Explorer toutes nos réalisations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Realisation 1: Ulinzi ExpoCut 9 */}
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-500/[0.04] to-transparent p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-amber-500/60 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-amber-400/40">
                <img
                  src="/realisations/expocut-ulinzi-1ere-place.jpg"
                  alt="Ulinzi 1ère Place ExpoCut 9"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-amber-500 text-slate-950 shadow-md">
                  1ère Place ExpoCut 2026
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-600 font-semibold">
                  Sécurité Minière &bull; Projet Ulinzi
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  Surveillance connectée des mines
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3">
                  Solution IoT intelligente primée à ExpoCut 2026 / EXPUN 9 pour prévenir les accidents et protéger les vies en milieu minier.
                </p>
              </div>
            </div>
            <Link
              to="/realisations"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:text-amber-700"
            >
              <span>En savoir plus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Realisation 2: Flag Hunters CTF */}
          <div className="rounded-3xl border border-red-500/30 bg-slate-950 text-white p-6 sm:p-7 flex flex-col justify-between hover:shadow-2xl hover:border-red-500/70 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md bg-black border border-red-500/40 p-4 flex items-center justify-center">
                <img
                  src="/realisations/flag-hunters-logo.png"
                  alt="Flag Hunters Emblem"
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_0_12px_rgba(239,68,68,0.5)] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-red-600 text-white shadow-md">
                  Multi-Victoires CTF
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold">
                  Cyberdéfense &bull; Division Élite
                </span>
                <h3 className="font-display text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  L'équipe « Flag Hunters »
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 line-clamp-3">
                  Champions de compétitions Capture The Flag (CTF) : reverse-engineering, cryptanalyse et hacking éthique au service de la nation.
                </p>
              </div>
            </div>
            <Link
              to="/realisations"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300"
            >
              <span>Voir les victoires CTF</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Realisation 3: Forum Génie Scientifique 2026 */}
          <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/[0.04] to-transparent p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-blue-500/60 transition-all duration-300 group">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200">
                <img
                  src="/realisations/forum-genie-scientifique-2026.png"
                  alt="Forum du Génie Scientifique 2026"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-blue-600 text-white shadow-md">
                  Forum National 2026
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                  Recherche &bull; Stand Robotique
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Forum du Génie Scientifique
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-3">
                  Sélection et participation remarquée au Salon National du Génie Scientifique Congolais célébrant les inventeurs et innovateurs de la RDC.
                </p>
              </div>
            </div>
            <Link
              to="/realisations"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700"
            >
              <span>Découvrir la participation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Équipe & Gouvernance (Teaser vers /equipe) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30">
              <Users className="w-3.5 h-3.5" /> Organisation &bull; 3 Pôles d'Excellence
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Les cerveaux derrière Binary Brains
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Une gouvernance claire et structurée : la <strong>Direction Générale</strong> (DG Nathan Kabongo, DGA Benie-juliette Tuasansilu),
              l'équipe <strong>Dev &amp; IoT</strong> (Merveille, Exaucée, Israel) et l'escouade offensive <strong>Flag Hunters</strong> (Delss, Descart, Dan, Arsene).
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/equipe"
                className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-semibold rounded-xl text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2"
              >
                <span>Découvrir toute l'équipe (3 pôles)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-sm border border-slate-700 transition-all flex items-center gap-2"
              >
                <span>Nos services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Partenaires Institutionnels & Technologiques */}
      <Partners />

      {/* 7. Appel à l'action final / Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-card border border-blue-200/80 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto shadow-md shadow-blue-500/25">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
            Prêt à transformer vos opérations avec nous ?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Que ce soit pour sécuriser un site minier, réaliser un audit de cybersécurité ou développer une solution sur mesure, nos équipes sont à votre écoute.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all"
            >
              <span>Accéder à la page de contact</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
