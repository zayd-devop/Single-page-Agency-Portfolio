import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-sky-500"></div>
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase">{t('about.badge')}</h2>
            <div className="h-[1px] w-12 bg-sky-500"></div>
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {t('about.title1')} <span className="text-slate-400">{t('about.title2')}</span> {t('about.title3')} <span className="text-slate-400">{t('about.title4')}</span>.
          </h3>
          
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            {t('about.desc')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
