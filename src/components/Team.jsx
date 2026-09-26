import React from "react";
import { Link } from "../router";
import {
  Mail,
  Shield,
  Cpu,
  Terminal,
  Trophy,
  Flag,
  Award,
  Sparkles,
  Quote,
  CheckCircle2,
  Lock,
  Layers,
  ArrowRight,
} from "lucide-react";

const LinkedinIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Team() {
  // 1. DIRECTION GÉNÉRALE
  const leadership = [
    {
      name: "Nathan KABONGO",
      role: "Directeur Général (DG) & Co-Fondateur",
      specialty: "Lead Cybersécurité, IoT Industriel & Systèmes Embarqués",
      badge: "Direction Générale &bull; Lauréat ExpoCut 2026",
      image: "/team/membre1.jpeg",
      initials: "NK",
      gradient: "from-blue-600 via-indigo-600 to-sky-500",
      accentBorder: "border-blue-500/40 hover:border-blue-500",
      bio: "Architecte en chef et visionnaire technique de Binary Brains. Concepteur du projet Ulinzi (solution connectée de sécurité minière ayant remporté la 1ère place à ExpoCut 2026), il pilote la recherche appliquée, la souveraineté matérielle et la stratégie d'ingénierie globale de l'entreprise.",
      tags: ["Direction Stratégique", "IoT Industriel", "Projet Ulinzi", "Systèmes Embarqués"],
    },
    {
      name: "Benie-juliette TUASANSILU",
      role: "Directrice Générale Adjointe (DGA) & Co-Fondatrice",
      specialty: "Cybersécurité, Administration Système & Gouvernance IT",
      badge: "Direction Générale Adjointe &bull; Gouvernance",
      image: "/team/membre2.jpeg",
      initials: "BT",
      gradient: "from-purple-600 via-pink-600 to-indigo-600",
      accentBorder: "border-purple-500/40 hover:border-purple-500",
      bio: "Co-pilote des opérations stratégiques et garant de la résilience des infrastructures. Experte en durcissement de systèmes d'exploitation, conformité des accès aux données et pilotage des initiatives d'hygiène numérique auprès des institutions et entreprises.",
      tags: ["Direction Opérationnelle", "SysAdmin", "Sécurité Réseau", "Conformité IT"],
    },
  ];

  // 2. ÉQUIPE BINARY BRAINS DEV & IOT
  const devIotTeam = [
    {
      name: "Merveille NSANZA",
      role: "Ingénieur Full-Stack & Cloud Architecture",
      image: "/team/membre5.jpg",
      initials: "MN",
      gradient: "from-blue-600 to-cyan-500",
      bio: "Spécialiste de la conception complète d'applications d'entreprise résilientes : APIs distribuées, pipelines cloud haute disponibilité et dashboards de télémétrie temps réel pour les flux de données IoT.",
      tags: ["Full-Stack", "Cloud & DevOps", "APIs Temps Réel", "Bases Distribuées"],
    },
    {
      name: "Exaucée LUMEYA",
      role: "Lead UX/UI Designer & Expérience Produit",
      image: "/team/membre3.jpeg",
      initials: "EL",
      gradient: "from-sky-500 to-cyan-600",
      bio: "Architecte de l'expérience utilisateur et des interfaces homme-machine. Elle transforme des protocoles industriels et des flux de données complexes en interfaces claires, ergonomiques et instinctives.",
      tags: ["UX Research", "UI Design System", "Data Viz", "Ergonomie Métier"],
    },
    {
      name: "Israel ASUMANI",
      role: "Développeur Web, Graphiste & Prompt Engineer",
      image: "/team/membre4.jpeg",
      initials: "IA",
      gradient: "from-emerald-500 to-teal-600",
      bio: "Spécialiste du développement web réactif moderne, de l'ingénierie de prompts IA pour l'optimisation des flux de travail et de la direction artistique des supports visuels.",
      tags: ["Web Dev", "Prompt Engineering", "IA Générative", "Identité Visuelle"],
    },
  ];

  // 3. ÉQUIPE BINARY BRAINS CYBERSÉCURITÉ : FLAG HUNTERS
  const flagHuntersTeam = [
    {
      name: "Delss MASSEVO",
      role: "Spécialiste Offensive Security & Web Exploitation",
      initials: "DM",
      gradient: "from-red-600 to-rose-600",
      bio: "Chasseur de vulnérabilités et spécialiste des tests d'intrusion web. Expert dans le contournement de mécanismes défensifs, l'analyse des failles d'authentification et la capture de flags stratégiques.",
      tags: ["Web Exploitation", "Penetration Testing", "Offensive Ops", "CTF Player"],
    },
    {
      name: "Descart NIMY",
      role: "Analyste Reverse Engineering & Sécurité Binaire",
      initials: "DN",
      gradient: "from-rose-600 to-orange-600",
      bio: "Expert du bas niveau, du désassemblage de code compilé et de la rétro-ingénierie logicielle et matérielle. Spécialiste de l'analyse des firmwares IoT et de la recherche d'exploits binaires.",
      tags: ["Reverse Engineering", "Binary Security", "Firmware Analysis", "Assembly / C"],
    },
    {
      name: "Dan MALUMA",
      role: "Ingénieur Cyberdéfense & Sécurité Réseau",
      initials: "DM",
      gradient: "from-red-700 to-amber-600",
      bio: "Spécialiste de la détection d'intrusions, du durcissement d'équipements réseaux et de la réponse aux incidents. Il assure la protection périmétrique et la résilience opérationnelle des systèmes.",
      tags: ["Network Hardening", "Défense Active", "Surveillance SOC", "Incident Response"],
    },
    {
      name: "Arsene MUMBERE",
      role: "Cryptanalyste & Sécurité des Systèmes Distribués",
      initials: "AM",
      gradient: "from-red-600 to-purple-600",
      bio: "Analyste cryptographique focalisé sur la robustesse des protocoles chiffrés, l'intégrité des communications et la résolution d'épreuves de chiffrement complexes en compétition CTF.",
      tags: ["Cryptanalyse", "Protocoles Sécurisés", "Maths Appliquées", "CTF Champion"],
    },
  ];

  return (
    <section id="equipe" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.15em] text-blue-600 border border-blue-200/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            Organisation &bull; Gouvernance &bull; Talents
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            L'organisation &amp; les talents de <br />
            <span className="gradient-text">Binary Brains</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Une structure d'ingénierie agile articulée autour de trois pôles complémentaires :
            la <strong>Direction Générale</strong>, l'équipe <strong>Dev &amp; IoT</strong> et l'escouade d'élite en cybersécurité <strong>Flag Hunters</strong>.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. DIRECTION GÉNÉRALE (DG & DGA) */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 mb-2 border border-blue-200/60">
                <Shield className="w-3.5 h-3.5 text-blue-600" />
                Pôle 01 &bull; Gouvernance Stratégique
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Direction Générale
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Pilotage stratégique, supervision exécutive, recherche appliquée et gouvernance des partenariats industriels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl glass-card border ${leader.accentBorder} p-6 sm:p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 group overflow-hidden`}
              >
                {/* Accent Top Gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${leader.gradient}`}
                ></div>

                <div>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                    {/* Portrait Photo */}
                    <div className="relative flex-shrink-0">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-xl border-2 border-white group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-600 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Leader Meta */}
                    <div className="text-center sm:text-left space-y-1.5 flex-1 min-w-0">
                      <span
                        className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200/60"
                        dangerouslySetInnerHTML={{ __html: leader.badge }}
                      ></span>
                      <h4 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                        {leader.name}
                      </h4>
                      <div
                        className={`text-xs sm:text-sm font-bold bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent`}
                      >
                        {leader.role}
                      </div>
                      <p className="text-xs text-slate-500 font-medium">
                        {leader.specialty}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {leader.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 text-slate-700 font-medium border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400 font-mono">
                      Binary Brains RDC
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href="mailto:binarybrainsdrc@gmail.com"
                        className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors"
                        title="Envoyer un email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <Link
                        to="/contact"
                        className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors"
                        title="Contacter"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ÉQUIPE BINARY BRAINS DEV & IOT */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-cyan-700 mb-2 border border-cyan-200/60">
                <Cpu className="w-3.5 h-3.5 text-cyan-600" />
                Pôle 02 &bull; Ingénierie Logicielle &amp; Matérielle
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Équipe Dev &amp; IoT
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Architecture logicielle, microservices, capteurs connectés, ergonomie produit et intégration d'intelligence artificielle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {devIotTeam.map((member, idx) => (
              <div
                key={idx}
                className="group relative glass-card-hover p-6 sm:p-7 rounded-3xl overflow-hidden flex flex-col justify-between text-center border border-slate-200/80"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                <div className="flex flex-col items-center">
                  <div className="relative mb-5">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-md">
                      <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    </div>
                  </div>

                  <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h4>
                  <span
                    className={`text-xs font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}
                  >
                    {member.role}
                  </span>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {member.bio}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                    {member.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 text-slate-600 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-slate-100">
                    <a
                      href="mailto:binarybrainsdrc@gmail.com"
                      className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors"
                      title="Envoyer un email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="https://github.com/Merveille5/binary"
                      target="_blank"
                      rel="noreferrer"
                      className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <Link
                      to="/contact"
                      className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors"
                      title="LinkedIn / Contact"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. ÉQUIPE CYBERSÉCURITÉ : FLAG HUNTERS */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="relative rounded-3xl bg-slate-950 text-white p-6 sm:p-10 border border-red-500/30 overflow-hidden shadow-2xl">
            {/* Cyber Glow & Ambient Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[130px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none"></div>

            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-8">
              <div className="flex items-center gap-2 font-mono text-xs text-red-400">
                <Terminal className="w-4 h-4 text-red-500" />
                <span>SEC_OPS://FLAG_HUNTERS_ROSTER.SYS</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
            </div>

            {/* Division Header with Emblem */}
            <div className="grid lg:grid-cols-12 gap-8 items-center mb-10 pb-8 border-b border-slate-800/60">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/20 text-red-400 border border-red-500/30">
                  <Flag className="w-3.5 h-3.5 text-red-400" />
                  Pôle 03 &bull; Division Cybersécurité &amp; CTF
                </div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  Équipe Cybersécurité : <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">« Flag Hunters »</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  L'escouade d'élite offensive et défensive de <strong>Binary Brains</strong>.
                  Spécialistes de la chasse aux vulnérabilités, de l'audit d'intrusion et de la cryptanalyse,
                  ils représentent notre force de frappe lors des compétitions <strong>Capture The Flag (CTF)</strong> nationales et internationales.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 font-bold">
                    #FlagHuntersSquad
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                    #EthicalHacking
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800">
                    #SudoCTFChampions
                  </span>
                </div>
              </div>

              {/* Official Flag Hunters Logo Emblem */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-black border border-red-500/50 p-4 flex items-center justify-center shadow-xl shadow-red-950/50 group">
                  <img
                    src="/realisations/flag-hunters-logo.png"
                    alt="Logo Flag Hunters"
                    className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold">
                      Flag Hunters
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Flag Hunters Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {flagHuntersTeam.map((h, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800/90 hover:border-red-500/50 p-5 flex flex-col justify-between transition-all duration-300 group shadow-lg"
                >
                  <div className="space-y-4">
                    {/* Member Cyber Avatar / Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white font-mono font-bold text-base shadow-md shadow-red-950">
                        {h.initials}
                      </div>
                      <span className="text-[10px] font-mono text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/20">
                        OPERATOR 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                        {h.name}
                      </h4>
                      <p className="text-xs font-mono text-red-400 font-semibold mt-1">
                        {h.role}
                      </p>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {h.bio}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800">
                    <div className="flex flex-wrap gap-1">
                      {h.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 text-slate-400 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision Quote Banner */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 rounded-3xl border border-slate-200/80 shadow-md text-center relative overflow-hidden">
            <Quote className="w-8 h-8 text-blue-500/20 mx-auto mb-3" />
            <p className="text-slate-700 text-sm sm:text-base font-medium italic leading-relaxed mb-4">
              « L'Afrique n'est pas seulement consommatrice de technologies : avec nos talents et notre
              compréhension intime du terrain, nous sommes capables de concevoir des solutions
              d'ingénierie et de sécurité qui rivalisent avec les meilleurs standards mondiaux. »
            </p>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              L'Équipe Fondatrice &bull; Binary Brains RDC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
