import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1759771963975-8a4885446f1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBibHVlJTIwdGVjaCUyMHBhcnRpY2xlfGVufDF8fHx8MTc3NjI0OTU1NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Abstract Tech Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Solutions Numériques Premium
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Your Vision. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              Our Code.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            CodeFluent est une équipe dévouée de développeurs et designers full-stack transformant vos idées ambitieuses en solutions web et outils numériques ultra-performants.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-full transition-all flex items-center gap-2 text-lg w-full sm:w-auto justify-center hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
            >
              Explorer Notre Portfolio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-slate-700 hover:border-sky-500 hover:bg-slate-900 text-white font-bold rounded-full transition-all flex items-center justify-center text-lg w-full sm:w-auto"
            >
              Parlons-en
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}