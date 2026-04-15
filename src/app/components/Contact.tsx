import React from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Concrétiser Votre Vision ?
            </h3>
            <p className="text-lg text-slate-400 mb-12 max-w-md">
              Discutons de votre prochain projet. Notre équipe est prête à concevoir une solution numérique qui propulsera votre entreprise.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-sky-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Écrivez-nous</h5>
                  <p className="text-slate-400">hello@codefluent.agency</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-sky-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Appelez-nous</h5>
                  <p className="text-slate-400">+212 (0) 5 55 55 55 55</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-sky-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">Visitez-nous</h5>
                  <p className="text-slate-400">Technopark, Tangier, Morocco</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 shadow-xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">Nom</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-600"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-600"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Sujet</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-600"
                  placeholder="Demande de Projet"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-600 resize-none"
                  placeholder="Parlez-nous de votre projet..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]"
              >
                Envoyer le Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}