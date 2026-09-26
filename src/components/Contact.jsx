import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "IoT & Télémétrie",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        service: "IoT & Télémétrie",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-semibold uppercase tracking-[0.15em] text-rose-600">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
            Contact &amp; Échange
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Parlons de votre <span className="gradient-text">projet technologique</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Vous avez un projet en IoT, un besoin d'audit en cybersécurité ou vous souhaitez organiser
            un événement ou une formation dans votre structure ? Notre équipe est prête à échanger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (4 cards like Numex) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Téléphone &amp; WhatsApp
                </p>
                <a
                  href="tel:+243824104260"
                  className="text-base font-bold text-slate-800 hover:text-blue-600 transition-colors block"
                >
                  +243 824 104 260
                </a>
                <p className="text-xs text-slate-400">Disponible pour appels et messages</p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Adresse Email
                </p>
                <a
                  href="mailto:binarybrainsdrc@gmail.com"
                  className="text-base font-bold text-slate-800 hover:text-blue-600 transition-colors truncate block"
                >
                  binarybrainsdrc@gmail.com
                </a>
                <p className="text-xs text-slate-400">Réponse garantie sous 24h ouvrées</p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Siège &amp; Localisation
                </p>
                <p className="text-base font-bold text-slate-800">Kinshasa, RD Congo</p>
                <p className="text-xs text-slate-400">Interventions sur tout le territoire national</p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Horaires d'ouverture
                </p>
                <p className="text-base font-bold text-slate-800">Lundi — Samedi : 08h00 - 18h00</p>
                <p className="text-xs text-slate-400">Permanence technique pour urgences 24/7</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card-hover p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Message transmis avec succès !
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Merci d'avoir contacté Binary Brains. Un membre de notre équipe prendra contact
                    avec vous dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Jean Mukendi"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                        Adresse Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                      Domaine d'intérêt / Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm"
                    >
                      <option value="IoT & Télémétrie">IoT, Télémétrie &amp; Geofencing</option>
                      <option value="Cybersécurité">Cybersécurité &amp; Chiffrement des données</option>
                      <option value="Développement">Développement Logiciel Web / Mobile</option>
                      <option value="IA & Cartographie">Intelligence Artificielle &amp; Cartographie</option>
                      <option value="Formation">Formation, MasterClass &amp; Partenariat Événement</option>
                      <option value="Autre">Autre demande spécifique</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">
                      Votre Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Décrivez brièvement votre projet ou votre besoin..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer le message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
