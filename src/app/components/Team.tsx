import React from "react";
import { motion } from "motion/react";
import { Shield, Layers, PenTool } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Team() {
  const { t } = useLanguage();
  
  const team = [
    {
      name: "Yasmine",
      role: t('team.r1'),
      expertise: t('team.e1'),
      icon: <Shield size={18} className="text-sky-400" />,
      image: "https://images.unsplash.com/photo-1771072426488-87e6bbcc0cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0JTIwZGFyayUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzc2MjQ5NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Zaid",
      role: t('team.r2'),
      expertise: t('team.e2'),
      icon: <Layers size={18} className="text-sky-400" />,
      image: "https://images.unsplash.com/photo-1765776830139-72b2184dae5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NjE1MjE4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Aya",
      role: t('team.r3'),
      expertise: t('team.e3'),
      icon: <PenTool size={18} className="text-sky-400" />,
      image: "https://images.unsplash.com/photo-1759873911583-f492fdb1ba21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvbWFuJTIwcG9ydHJhaXQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzYyNDk1NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-4">{t('team.badge')}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            {t('team.title')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden hover:border-sky-500/30 transition-colors"
            >
              <div className="aspect-square overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                <div className="absolute inset-0 bg-sky-900/20 mix-blend-multiply group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center bg-slate-950">
                <h4 className="text-2xl font-bold text-white mb-1">{member.name}</h4>
                <p className="text-sky-400 font-medium text-sm mb-4">{member.role}</p>
                <div className="w-12 h-[1px] bg-slate-800 mx-auto mb-4"></div>
                <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                  {member.icon}
                  <span>{member.expertise}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
