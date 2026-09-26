import React from "react";
import {
  Shield,
  Wifi,
  Cpu,
  Terminal,
  Database,
  Lock,
  Binary,
  Code,
  Zap,
} from "lucide-react";

export default function Marquee() {
  const items = [
    { label: "Cybersécurité & Chiffrement", icon: Shield, color: "text-blue-500" },
    { label: "Internet des Objets (IoT)", icon: Wifi, color: "text-sky-500" },
    { label: "Intelligence Artificielle", icon: Cpu, color: "text-purple-500" },
    { label: "01001 Binary Brains RDC", icon: Binary, color: "text-blue-600" },
    { label: "Traçabilité & Smart Contracts", icon: Lock, color: "text-emerald-500" },
    { label: "Geofencing & Cartographie", icon: Terminal, color: "text-amber-500" },
    { label: "Cloud & DevOps", icon: Database, color: "text-indigo-500" },
    { label: "Développement Web & Mobile", icon: Code, color: "text-rose-500" },
    { label: "Innovation Technologique", icon: Zap, color: "text-cyan-500" },
  ];

  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative py-8 overflow-hidden bg-slate-50/50 border-y border-slate-200/60">
      {/* Edge Gradients for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center">
        {duplicatedItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 px-6 py-2.5 mx-2.5 rounded-full glass whitespace-nowrap shadow-sm hover:shadow-md hover:bg-white transition-all duration-300 cursor-default"
            >
              <Icon className={`w-4 h-4 ${item.color}`} />
              <span className="text-xs sm:text-sm font-medium font-mono text-slate-700">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
