import React from "react";
import { Handshake, Building2, Landmark, GraduationCap, Globe, CheckCircle2 } from "lucide-react";

export default function Partners() {
  const partnerTypes = [
    {
      icon: Building2,
      title: "Partenariats Technologiques",
      desc: "Opérateurs télécoms, centres de données & fournisseurs IoT",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: GraduationCap,
      title: "Collaborations Académiques",
      desc: "Universités et instituts supérieurs d'ingénierie en RDC",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Landmark,
      title: "Écosystème & Hubs Tech",
      desc: "Incubateurs, espaces d'innovation et communautés open source",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: Globe,
      title: "Réseaux & Coalitions Internationales",
      desc: "Initiatives mondiales pour le chiffrement et la sécurité",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  const partnersList = [
    { name: "Orange Digital Center", type: "Hub Technologique & Innovation" },
    { name: "Internet Society (ISOC)", type: "Gouvernance & Infrastructure Internet" },
    { name: "Global Encryption Coalition", type: "Coalition Mondiale pour le Chiffrement" },
    { name: "Universités & Facultés Polytechniques", type: "Partenariats Éducatifs RDC" },
    { name: "Entreprises & Opérateurs Miniers", type: "Solutions Télémétrie & Traçabilité" },
    { name: "Communautés Tech & Développeurs RDC", type: "Open Source & Hackathons" },
  ];

  return (
    <section id="partenaires" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              Partenaires &amp; Écosystème
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Découvrez avec qui <br />
              <span className="gradient-text">nous collaborons</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Nous croyons en la force du collectif. En unissant nos forces avec des entreprises,
              des institutions universitaires, des incubateurs et des coalitions mondiales,
              nous accélérons l'impact technologique au cœur du continent africain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {partnerTypes.map((pt, i) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl glass border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${pt.bg} ${pt.color}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-800 leading-tight">
                        {pt.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Partner Badges */}
          <div className="lg:col-span-6">
            <div className="glass-card p-8 rounded-3xl border border-slate-200/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Handshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Réseau &amp; Synergies Actives
                  </h3>
                  <p className="text-xs text-slate-400">
                    Acteurs engagés à nos côtés pour l'innovation
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {partnersList.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md flex items-center justify-between transition-all duration-300 group"
                  >
                    <div>
                      <div className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {p.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5 font-medium">
                        {p.type}
                      </div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
