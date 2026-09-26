import React, { useState } from "react";
import {
  Shield,
  Trophy,
  Award,
  Zap,
  MapPin,
  Camera,
  ZoomIn,
  X,
  CheckCircle2,
  HardHat,
  Flag,
  Flame,
  Terminal,
  Cpu,
  Layers,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Newspaper,
  Share2,
} from "lucide-react";

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState(null);

  const stats = [
    {
      value: "1ère Place",
      label: "ExpoCut 2026 (EXPUN 9)",
      detail: "Projet Ulinzi - Sécurité Minière",
      icon: Trophy,
      color: "text-amber-500",
      border: "border-amber-500/30",
      bg: "bg-amber-50/80",
    },
    {
      value: "Multi-Victoires",
      label: "Compétitions CTF",
      detail: "Podiums sous l'étendard Flag Hunters",
      icon: Flag,
      color: "text-red-500",
      border: "border-red-500/25",
      bg: "bg-red-50/80",
    },
    {
      value: "Forum 2026",
      label: "Génie Scientifique",
      detail: "Stand Robotique & Technologie",
      icon: Cpu,
      color: "text-blue-600",
      border: "border-blue-500/25",
      bg: "bg-blue-50/80",
    },
    {
      value: "ISIPA DemoTech",
      label: "Excellence & Prototypage",
      detail: "Démonstrations d'ingénierie logicielle",
      icon: Award,
      color: "text-purple-600",
      border: "border-purple-500/25",
      bg: "bg-purple-50/80",
    },
  ];

  const categories = [
    { id: "all", label: "Toutes nos réalisations" },
    { id: "mines", label: "Sécurité Minière & Projet Ulinzi" },
    { id: "genie", label: "Forum du Génie Scientifique 2026" },
    { id: "ctf", label: "CTF & Flag Hunters" },
    { id: "isipa", label: "Concours DemoTech ISIPA" },
  ];

  return (
    <section id="realisations" className="py-24 relative overflow-hidden">
      {/* Anchor for backward compatibility with #evenements */}
      <span id="evenements" className="absolute -top-24"></span>

      {/* Decorative background grid and gradients */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/[0.04] rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 border border-blue-200/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            Réalisations &amp; Événements
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Nos réalisations concrètes, <br className="hidden sm:inline" />
            <span className="gradient-text">distinctions &amp; victoires</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            De la consécration du projet <strong>Ulinzi</strong> au salon ExpoCut 2026 à notre sélection officielle
            au <strong>Forum du Génie Scientifique 2026</strong>, découvrez l’excellence de Binary Brains
            dans l’IoT industriel, la sécurité minière et la cyberdéfense.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className={`relative glass-card p-6 rounded-3xl border ${s.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${s.bg} ${s.color} shadow-sm`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mt-1">
                    {s.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {s.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
                  : "glass text-slate-600 hover:text-slate-900 hover:bg-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* DIFFERENTIATED SHOWCASE CARDS */}
        {/* ========================================================================= */}
        <div className="space-y-12">

          {/* CARD 1: SÉCURITÉ DU SECTEUR MINIER & PROJET ULINZI (1ÈRE PLACE EXPOCUT 2026 / EXPUN 9) */}
          {(selectedCategory === "all" || selectedCategory === "mines") && (
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/[0.05] via-slate-900/[0.02] to-blue-500/[0.05] p-6 sm:p-10 shadow-2xl shadow-slate-900/[0.05] transition-all duration-500 hover:border-amber-500/70">
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500"></div>

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Text Content Column */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-sm shadow-amber-500/20">
                      <Trophy className="w-3.5 h-3.5" />
                      1ère Place &bull; ExpoCut Édition 9
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      Solution : Ulinzi
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      Ulinzi : Surveillance intelligente &amp; protection des vies humaines en milieu minier
                    </h3>
                    <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                      <strong>Binary Brains</strong> est une entreprise technologique congolaise engagée dans la transformation
                      de la sécurité au sein du secteur minier. En réponse à des défis majeurs tels que l’insuffisance
                      de la surveillance, les accidents fréquents et l’absence de suivi en temps réel sur les sites miniers,
                      nous avons développé <strong>Ulinzi</strong>, un écosystème global de surveillance intelligente dédié à la protection
                      des vies humaines.
                    </p>
                    <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                      Porté par <strong>Nathan Kabongo</strong>, le projet <strong>Ulinzi</strong> a été couronné par la <strong>1ère place</strong> lors de la prestigieuse 9ᵉ édition de l’Exposition des Universités de la RDC (<strong>EXPUNRDC — ExpoCut 2026</strong>), validant l'impact capital de cette technologie pour les exploitants et travailleurs miniers.
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1.5 font-bold text-xs">
                        01
                      </div>
                      <div className="text-xs font-bold text-slate-900">Suivi Temps Réel</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Télémétrie continue des agents.
                      </div>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 font-bold text-xs">
                        02
                      </div>
                      <div className="text-xs font-bold text-slate-900">Zéro Accident</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Détection prédictive des risques.
                      </div>
                    </div>
                    <div className="p-3 rounded-2xl bg-white/90 border border-slate-200/80 shadow-sm">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5 font-bold text-xs">
                        03
                      </div>
                      <div className="text-xs font-bold text-slate-900">EPI Connectés</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        Casques &amp; capteurs IoT robustes.
                      </div>
                    </div>
                  </div>

                  {/* External Press & Media Links */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href="https://www.zolanews.net/expocut-2026-nathan-kabongo-remporte-la-premiere-place-avec-ulinzi-une-solution-connectee-dediee-a-la-securite-miniere/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all duration-300 group"
                    >
                      <Newspaper className="w-4 h-4" />
                      <span>Lire l'article de presse Zola News</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <a
                      href="https://www.facebook.com/share/166dhvC6WzH/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all duration-300"
                    >
                      <Share2 className="w-4 h-4 text-blue-600" />
                      <span>Publication officielle</span>
                    </a>
                  </div>
                </div>

                {/* Dual Photos: ExpoCut 9 Award + Mine Field Team */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Photo 1: ExpoCut 9 1ère Place Nathan Kabongo */}
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/realisations/expocut-ulinzi-1ere-place.jpg",
                        caption:
                          "ExpoCut 2026 (Édition 9 EXPUNRDC) : Nathan Kabongo remporte la 1ère Place avec le projet Ulinzi pour la sécurité minière.",
                        title: "1ère Place ExpoCut 2026 — Nathan Kabongo (Ulinzi)",
                        tag: "EXPUNRDC Édition 9",
                      })
                    }
                    className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl border-2 border-amber-400/80 aspect-square hover:scale-[1.02] transition-all duration-500"
                  >
                    <img
                      src="/realisations/expocut-ulinzi-1ere-place.jpg"
                      alt="Affiche Nathan Kabongo Première Place ExpoCut 9 Ulinzi"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 inline-block mb-1">
                        Lauréat 1ère Place
                      </span>
                      <p className="text-xs font-semibold drop-shadow-md">
                        ExpoCut 9 : Nathan Kabongo &amp; Ulinzi
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Photo 2: Mine Field Team */}
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/realisations/securite-miniere.jpg",
                        caption:
                          "L'équipe d'ingénieurs Binary Brains prête pour le déploiement sur les sites miniers (EPI, casques et gilets réfléchissants).",
                        title: "Équipe Terrain & Déploiement Minier",
                        tag: "Secteur Minier RDC",
                      })
                    }
                    className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-slate-200 aspect-square hover:scale-[1.02] transition-all duration-500"
                  >
                    <img
                      src="/realisations/securite-miniere.jpg"
                      alt="Équipe Binary Brains en équipement minier"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white inline-block mb-1">
                        Équipe Déploiement
                      </span>
                      <p className="text-xs font-semibold drop-shadow-md">
                        Surveillance &amp; Sécurité Terrain
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CARD 2: FORUM DU GÉNIE SCIENTIFIQUE CONGOLAIS 2026 (RECONNAISSANCE D'ÉTAT & RECHERCHE) */}
          {(selectedCategory === "all" || selectedCategory === "genie") && (
            <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 bg-gradient-to-br from-blue-900/[0.04] via-emerald-500/[0.02] to-slate-900/[0.03] p-6 sm:p-10 shadow-xl transition-all duration-500 hover:border-blue-500/60">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Photo Stand Robotique & Technologie */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/realisations/forum-genie-scientifique-2026.png",
                        caption:
                          "Stand 'ROBOTIQUE ET TECHNOLOGIE' de Binary Brains lors du Forum du Génie Scientifique 2026 en présence des autorités ministérielles et partenaires.",
                        title: "Forum du Génie Scientifique 2026",
                        tag: "Robotique & Technologie",
                      })
                    }
                    className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-2xl border-2 border-white/80 transition-all duration-500 hover:scale-[1.02]"
                  >
                    <img
                      src="/realisations/forum-genie-scientifique-2026.png"
                      alt="Stand Robotique et Technologie au Forum du Génie Scientifique 2026"
                      className="w-full h-80 sm:h-96 lg:h-[430px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent"></div>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-5 h-5" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold bg-emerald-500 text-slate-950 mb-2">
                        Stand : Robotique &amp; Technologie &bull; Forum 2026
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-slate-200">
                        Présentation de nos innovations au Ministère de l'Enseignement Supérieur, Universitaire, Recherche Scientifique et Innovations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text Column */}
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      <Cpu className="w-3.5 h-3.5" />
                      Grand Salon National
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      Édition 2026 &bull; Kinshasa RDC
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      Forum du Génie Scientifique 2026 : Au cœur de l'innovation nationale
                    </h3>
                    <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                      Sélection et participation officielle au <strong>Forum du Génie Scientifique Congolais 2026</strong>,
                      le rassemblement national de référence célébrant les chercheurs, inventeurs et bâtisseurs de la technologie de demain.
                      Au sein du stand <strong>« Robotique et Technologie »</strong>, <strong>Binary Brains</strong> a affirmé
                      la vitalité de l'ingénierie nationale à travers ses innovations de rupture en surveillance industrielle,
                      traitement de données, IoT et cybersécurité.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                      <div className="font-display text-sm font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Reconnaissance Officielle
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Échanges directs avec les délégations ministérielles et les figures de la recherche congolaise.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                      <div className="font-display text-sm font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                        Souveraineté Technologique
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Démonstration de matériels et algorithmes développés en RDC pour les défis critiques du pays.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CARD 3: CYBERSÉCURITÉ CTF & VICTOIRES "FLAG HUNTERS" (CYBER TERMINAL DARK DESIGN) */}
          {(selectedCategory === "all" || selectedCategory === "ctf") && (
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white p-6 sm:p-10 shadow-2xl border border-red-500/30 transition-all duration-500 hover:border-red-500/60">
              {/* Cyber Grid Background & Red Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-8">
                <div className="flex items-center gap-2 font-mono text-xs text-red-400">
                  <Terminal className="w-4 h-4 text-red-500" />
                  <span>SEC_OPS://FLAG_HUNTERS.BIN</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Text and Terminal Description */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/40">
                      <Trophy className="w-3.5 h-3.5 text-red-400" />
                      Victoires en Compétitions CTF
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                      Team : Flag Hunters
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                      L'équipe d'élite <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">« Flag Hunters »</span> &amp; les victoires en CTF
                    </h3>
                    <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                      Sous le blason prestigieux de <strong>Flag Hunters</strong>, la division cybersécurité
                      de <strong>Binary Brains</strong> s'impose lors des compétitions <strong>CTF (Capture The Flag)</strong>.
                      Grâce à une maîtrise pointue du reverse-engineering, de la cryptanalyse, de l'exploitation web et
                      du durcissement d'infrastructures, notre escouade a remporté de multiples victoires et distinctions,
                      défendant la souveraineté numérique avec une précision chirurgicale.
                    </p>
                  </div>

                  {/* Terminal Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-red-500/20">
                      <div className="text-red-400 font-bold">1er Rang / Champions</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Podiums CTF remportés</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-emerald-400 font-bold">Exploitation &amp; Web</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Bypass &amp; Root flags</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 col-span-2 sm:col-span-1">
                      <div className="text-sky-400 font-bold">Cryptographie</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Analyse de protocoles</div>
                    </div>
                  </div>

                  {/* SudoCTF Official Competition Links */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-400 mb-2.5 flex items-center gap-1.5 uppercase tracking-wider">
                      <Terminal className="w-3.5 h-3.5 text-red-500" />
                      <span>Plateforme &amp; Archives SudoCTF :</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <a
                        href="https://www.sudoctf.com/saison-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-white bg-slate-900 hover:bg-red-600/20 border border-slate-700 hover:border-red-500/60 transition-all duration-300 group"
                      >
                        <span className="text-red-400 font-bold">&gt;</span>
                        <span>SudoCTF Saison 1</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                      </a>

                      <a
                        href="https://www.sudoctf.com/saison-1/galerie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-white bg-slate-900 hover:bg-red-600/20 border border-slate-700 hover:border-red-500/60 transition-all duration-300 group"
                      >
                        <Camera className="w-3.5 h-3.5 text-red-400" />
                        <span>Galerie Saison 1</span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                      </a>

                      <a
                        href="https://www.sudoctf.com/saison-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-white bg-gradient-to-r from-red-600/30 to-orange-600/20 hover:from-red-600/50 hover:to-orange-600/40 border border-red-500/50 hover:border-red-500 transition-all duration-300 group shadow-lg shadow-red-950/40"
                      >
                        <Flame className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                        <span>SudoCTF Saison 2</span>
                        <ExternalLink className="w-3 h-3 text-red-300 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Dual Visual Showcase: Logo Flag Hunters + Photo Victoire CTF */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                  {/* Blason Flag Hunters */}
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/realisations/flag-hunters-logo.png",
                        caption:
                          "Emblème officiel de l'équipe de cybersécurité Flag Hunters de Binary Brains : la force offensive et défensive CTF.",
                        title: "Logo Flag Hunters",
                        tag: "Cyber Division",
                      })
                    }
                    className="sm:col-span-5 relative rounded-2xl overflow-hidden cursor-pointer bg-black border border-red-500/40 p-4 flex flex-col items-center justify-center group shadow-xl hover:border-red-500 transition-all duration-300"
                  >
                    <div className="relative w-full aspect-square flex items-center justify-center">
                      <img
                        src="/realisations/flag-hunters-logo.png"
                        alt="Logo Flag Hunters"
                        className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(239,68,68,0.4)] group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-400 flex items-center justify-center gap-1">
                        <Flag className="w-3 h-3" /> Flag Hunters Emblem
                      </span>
                    </div>
                  </div>

                  {/* Photo Victoire CTF */}
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/realisations/ctf-victoire.jpg",
                        caption:
                          "Célébration et remise des prix : l'équipe Binary Brains / Flag Hunters récompensée lors du tournoi Capture The Flag.",
                        title: "Victoire au Concours CTF",
                        tag: "Champions CTF",
                      })
                    }
                    className="sm:col-span-7 relative rounded-2xl overflow-hidden cursor-pointer border border-slate-700/80 group shadow-xl hover:border-red-500/50 transition-all duration-300"
                  >
                    <img
                      src="/realisations/ctf-victoire.jpg"
                      alt="Victoire de l'équipe au concours CTF"
                      className="w-full h-56 sm:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-red-600 text-white font-bold mb-1">
                        <Trophy className="w-3 h-3" /> Podiums &amp; Trophées
                      </span>
                      <p className="text-xs text-slate-200 line-clamp-2">
                        Les membres de l'équipe arborant leurs badges de compétition et récompenses CTF.
                      </p>
                    </div>

                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CARD 4: CONCOURS DEMOTECH ORGANISÉ PAR L'ISIPA */}
          {(selectedCategory === "all" || selectedCategory === "isipa") && (
            <div className="relative rounded-3xl overflow-hidden glass-card border border-purple-200/70 p-6 sm:p-10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-purple-300">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Text Content */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                      <Award className="w-3.5 h-3.5" />
                      Concours Académique &amp; Tech
                    </span>
                    <span className="text-xs font-mono text-slate-400">ISIPA Kinshasa</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Concours DemoTech organisé par l'ISIPA
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Participation remarquée de <strong>Binary Brains</strong> au prestigieux concours <strong>DemoTech organisé par l’ISIPA</strong>.
                    Nos ingénieurs y ont présenté des démonstrations en direct et des prototypes fonctionnels alliant
                    cybersécurité offensive/défensive (Ethical Hacking) et architectures logicielles souveraines,
                    remportant les éloges du jury académique et des experts du secteur.
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-3 py-1 rounded-lg bg-purple-50 text-purple-700 font-semibold border border-purple-200/60">
                      #DemoTechISIPA
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60">
                      #EthicalHackerSquad
                    </span>
                    <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60">
                      #InnovationCongolaise
                    </span>
                  </div>
                </div>

                {/* Dual Photos: Campus ISIPA car + Ethical Hacker shirts */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Photo 1: Équipe devant le véhicule ISIPA */}
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/realisations/equipe-isipa-demotech.jpg",
                        caption:
                          "L'équipe Binary Brains au grand complet sur le campus de l'ISIPA avec le véhicule officiel et le cadre commémoratif.",
                        title: "Délégation Binary Brains à l'ISIPA",
                        tag: "Campus ISIPA",
                      })
                    }
                    className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-slate-200 aspect-[4/3] hover:scale-[1.02] transition-all duration-500"
                  >
                    <img
                      src="/realisations/equipe-isipa-demotech.jpg"
                      alt="Équipe Binary Brains devant la voiture ISIPA"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-semibold drop-shadow-md">
                        Délégation à l'ISIPA
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Photo 2: Maillots Ethical Hacker */}
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: "/realisations/demotech-isipa.png",
                        caption:
                          "L'équipe en t-shirts officiels 'ETHICAL HACKER' lors des épreuves et démonstrations du concours DemoTech ISIPA.",
                        title: "Équipe Ethical Hacker — DemoTech ISIPA",
                        tag: "Ethical Hacking",
                      })
                    }
                    className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-slate-200 aspect-[4/3] hover:scale-[1.02] transition-all duration-500"
                  >
                    <img
                      src="/realisations/demotech-isipa.png"
                      alt="Équipe Binary Brains en t-shirts Ethical Hacker"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-xs font-semibold drop-shadow-md">
                        Ethical Hacker Squad
                      </p>
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Lightbox Modal High Definition */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 border-t border-slate-800 text-white">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-600 text-white font-bold">
                  {lightboxImage.tag}
                </span>
                <h4 className="text-base font-bold text-white">
                  {lightboxImage.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
