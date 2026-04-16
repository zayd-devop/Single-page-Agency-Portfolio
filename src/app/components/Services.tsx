import React from "react";
import { motion } from "framer-motion"; // Ajuste selon ton import (motion/react ou framer-motion)
import { Layout, Server, Database, Sparkles } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Layout size={32} />,
      title: "Front-end Development",
      description: "Conception d'interfaces modernes et réactives mettant l'accent sur l'expérience utilisateur et la performance.",
      tags: ["React.js", "Redux", "UI/UX Design"],
    },
    {
      icon: <Server size={32} />,
      title: "Back-end Development",
      description: "Architecture serveur robuste et scalable pour gérer des logiques métiers complexes et des intégrations fluides.",
      tags: ["Laravel", "Node.js", "API REST"],
    },
    {
      icon: <Database size={32} />,
      title: "Gestion de Données",
      description: "Conception et optimisation de structures de données performantes adaptées aux besoins de vos applications.",
      tags: ["MongoDB", "PostgreSQL", "Modélisation"],
    },
    {
      icon: <Sparkles size={32} />,
      title: "LegalTech Solutions",
      description: "Expertise unique fusionnant droit et technologie pour digitaliser les processus juridiques et administratifs.",
      tags: ["Automatisation", "Sécurité", "Conformité"],
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-4">Notre Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Compétences Numériques Complètes
          </h3>
        </div>

        {/* Passage à 3 ou 4 colonnes selon tes envies, ici 4 pour inclure l'expertise métier */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(14,165,233,0.1)] relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-colors"></div>
              
              <div className="text-sky-400 mb-6 bg-slate-950 w-16 h-16 rounded-xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs font-medium px-2.5 py-1 bg-slate-950 text-slate-300 rounded border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}