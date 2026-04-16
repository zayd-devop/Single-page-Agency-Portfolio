import { Github, ExternalLink, Code, Scale, Download, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import ismontic from  "../../imports/ismontic.jpeg"; 
import login from  "../../imports/login.avif";
import para from  "../../imports/para.png";
import maintenance from  "../../imports/maintenance.png";

const allProjects = [
  {
    id: 1,
    title: "Application Cabinet d'Avocats",
    description: "Application de bureau pour la gestion centralisée des dossiers clients, de la facturation et de l'agenda. Solution sur mesure en Python.",
    tech: ["Python", "Tkinter", "MongoDB"],
    image: login,
    github: "https://github.com/yasu19-dev/Projet_Tkinter",
    demo: null,
  },
  {
    id: 2,
    title: "Site Vitrine maintenance industrielle",
    description: "Site vitrine pour une entreprise de maintenance industrielle, mettant en avant les services, les projets réalisés et les témoignages clients. Design moderne et responsive.",
    tech: ["React.js", "Framer Motion", "Context API"],
    image: maintenance,
    github: "https://github.com/zaid",
    demo: null,
  },
  {
    id: 3,
    title: "Clone Netflix",
    description: "Interface dynamique consommant l'API TMDb avec une gestion fluide des états et du catalogue.",
    tech: ["React.js", "API TMDb", "CSS Modules"],
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXRmbGl4fGVufDF8fHx8MTc3MjM3ODA4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    github: "https://github.com/yasu19-dev/projet-react-netflix",
    demo: "https://yasu19-dev.github.io/projet-react-netflix/",
  },
  {
    id: 4,
    title: "Parapharmacie E-commerce",
    description: "Boutique en ligne avec gestion de panier, sessions PHP et génération de factures PDF automatisées.",
    tech: ["PHP", "JavaScript", "MySQL"],
    image: para,
    github: "https://github.com/yasu19-dev/parapharmacie-ecommerce",
    demo: null,
  },
];

export function ProjectList() {
  return (
    <section className="py-24 bg-slate-950 text-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 text-sky-400 mb-4">
            <Code className="w-5 h-5" />
            <span className="font-semibold uppercase tracking-widest text-xs">Portfolio Complet</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Réalisations Concrètes</h2>
          <p className="text-slate-400 max-w-2xl">
            Découvrez l'ensemble de nos travaux, mêlant rigueur et innovation technique.
          </p>
        </div>

        {/* Séparateur */}
        <div className="flex items-center gap-4 py-8 mb-8">
          <div className="h-px bg-slate-800 flex-grow" />
          <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Projets Techniques</span>
          <div className="h-px bg-slate-800 flex-grow" />
        </div>

        {/* Grille technique */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col h-full">
              <div className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 text-[10px] font-medium text-sky-400 bg-sky-400/10 rounded border border-sky-400/20">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800">
                  <a href={project.github} className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"><Github size={16} /> Code</a>
                  {project.demo && <a href={project.demo} className="flex items-center gap-2 text-xs font-semibold text-sky-400 hover:underline"><ExternalLink size={14} /> Demo</a>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}