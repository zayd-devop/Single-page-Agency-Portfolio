import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ismontic from  "../../imports/ismontic.jpeg"; 
import login from  "../../imports/login.avif";


export function Projects({ onViewAll }) {
  // Le projet mis en avant (ton PFE de fin d'études)
  const mainProject = {
    title: "Gestion Pédagogique (PFE)",
    category: "ERP & Cloud",
    description: "Digitalisation complète de l'ISMONTIC. Ce projet pilote intègre un site vitrine institutionnel et un ERP sur mesure centralisant les espaces Direction, Formateurs et Stagiaires.",
    tags: ["React", "Tailwind CSS", "Laravel", "MySQL"],
    image: ismontic,
  };

  // Les deux autres projets pour la grille de la landing page
  const featuredProjects = [
    {
      title: "Application Cabinet d'Avocats",
      category: "LegalTech",
      description: "Application de bureau pour la gestion centralisée des dossiers clients, de la facturation et de l'agenda du cabinet. Une solution sur mesure pour optimiser l'organisation interne.",
      tags: ["Python", "Tkinter", "MongoDB"],
      image: login,
    },
    {
      title: "Clone Netflix",
      category: "Front-end & API",
      description: "Reproduction fidèle de l'interface utilisateur de Netflix avec consommation d'API pour l'affichage dynamique des catalogues de films et séries.",
      tags: ["React.js", "API TMDb", "CSS Modules"],
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4fGVufDF8fHx8MTc3MjM3ODA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-4">Nos Réalisations</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Études de Cas Phares</h3>
          </div>
          
          {/* CORRECTION ICI : Le bouton Desktop utilise maintenant onViewAll */}
          <button 
            onClick={onViewAll} 
            className="hidden md:flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors cursor-pointer"
          >
            Voir Tous Les Projets <ExternalLink size={18} />
          </button>
        </div>

        {/* Featured Main Project (PFE) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <span className="text-sky-400 text-sm font-semibold mb-4 block tracking-wider uppercase">{mainProject.category}</span>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">{mainProject.title}</h4>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">{mainProject.description}</p>
              <div className="flex flex-wrap gap-3 mb-10">
                {mainProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 rounded-md text-sm font-medium">{tag}</span>
                ))}
              </div>
              <a href="https://github.com/yasu19-dev" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-lg transition-colors w-fit">
                Voir sur GitHub
              </a>
            </div>
            
            {/* CORRECTION ICI : Remplacement de object-cover par object-contain avec du padding */}
            <div className="relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden bg-slate-950/50 p-4 lg:p-8 flex items-center justify-center">
              <img 
                src={mainProject.image} 
                alt={mainProject.title} 
                className="w-full h-full object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
        </motion.div>

        {/* Grille des autres projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Affichage limité à 2 projets dans la landing page pour garder un beau design */}
          {featuredProjects.slice(0, 2).map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.6 }} className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col">
              
              {/* Ajout de object-cover object-top pour les petites cartes pour voir le haut du site */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                />
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <span className="text-sky-400 text-xs font-semibold mb-3 block tracking-wider uppercase">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-950 text-slate-300 rounded text-xs font-medium border border-slate-800">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button 
            onClick={onViewAll}
            className="inline-flex items-center gap-2 text-sky-400 font-medium"
          >
            Voir Tous Les Projets <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}