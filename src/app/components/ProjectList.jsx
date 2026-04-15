import { Github, ExternalLink, Code, Scale, Download, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const allProjects = [
  {
    id: 1,
    title: "Application Cabinet d'Avocats",
    description: "Application de bureau pour la gestion centralisée des dossiers clients, de la facturation et de l'agenda. Solution sur mesure en Python.",
    tech: ["Python", "Tkinter", "MongoDB"],
    image: "Lien_Vers_Image",
    github: "https://github.com/yasu19-dev/Projet_Tkinter",
    demo: null,
  },
  {
    id: 2,
    title: "Plateforme Tribunal",
    description: "Digitalisation des procédures de référés. Système complet de suivi pour une meilleure efficacité judiciaire.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    image: "Lien_Vers_Image",
    github: "https://github.com/yasu19-dev/Plateforme_Tribunal",
    demo: null,
  },
  {
    id: 3,
    title: "Clone Netflix",
    description: "Interface dynamique consommant l'API TMDb avec une gestion fluide des états et du catalogue.",
    tech: ["React.js", "API TMDb", "CSS Modules"],
    image: "Lien_Vers_Image",
    github: "https://github.com/yasu19-dev/projet-react-netflix",
    demo: "https://yasu19-dev.github.io/projet-react-netflix/",
  },
  {
    id: 4,
    title: "Amazigh Quiz",
    description: "Site interactif avec animations fluides utilisant Framer Motion pour la promotion de la culture Amazighe.",
    tech: ["React.js", "Framer Motion", "Context API"],
    image: "Lien_Vers_Image",
    github: "https://github.com/yasu19-dev/amazigh-quiz",
    demo: null,
  },
  {
    id: 5,
    title: "Parapharmacie E-commerce",
    description: "Boutique en ligne avec gestion de panier, sessions PHP et génération de factures PDF automatisées.",
    tech: ["PHP", "JavaScript", "MySQL"],
    image: "Lien_Vers_Image",
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
            Découvrez l'ensemble de mes travaux, mêlant rigueur juridique et innovation technique.
          </p>
        </div>

        {/* Excellence Académique (Tes Mémoires) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mémoire Master */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900 border border-sky-500/30 rounded-xl p-8 flex flex-col h-full relative group">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-slate-950 rounded-full border border-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.1)]">
                <Scale className="w-8 h-8 text-sky-400" />
              </div>
              <span className="bg-sky-500 text-slate-950 font-bold px-3 py-1 rounded-full text-[10px] uppercase">Excellence Académique</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Mémoire de Master - Droit Privé</h3>
            <p className="text-slate-400 italic border-l-2 border-sky-500 pl-4 mb-6">La dématérialisation des procédures judiciaires et son rôle dans la promotion de l'investissement.</p>
            <a href="/memoire.pdf" className="mt-auto flex items-center justify-center gap-2 py-3 bg-slate-950 border border-sky-500 text-sky-400 rounded-lg font-semibold hover:bg-sky-500 hover:text-white transition-all"><Download size={18} /> Télécharger (PDF)</a>
          </motion.div>

          {/* Projet Licence */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-slate-900 border border-slate-800 rounded-xl p-8 flex flex-col h-full group hover:border-sky-500/30 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-slate-950 rounded-full border border-slate-800 group-hover:border-sky-500 transition-all">
                <GraduationCap className="w-8 h-8 text-slate-400 group-hover:text-sky-400" />
              </div>
              <span className="bg-slate-800 text-slate-400 px-3 py-1 rounded-full text-[10px] uppercase">Fondations Juridiques</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">PFE Licence - Droit</h3>
            <p className="text-slate-400 italic border-l-2 border-slate-800 group-hover:border-sky-500 pl-4 mb-6 transition-all">L'indemnisation du retard du débiteur - Cas de la Covid-19.</p>
            <a href="/pfe.pdf" className="mt-auto flex items-center justify-center gap-2 py-3 bg-slate-950 border border-slate-800 text-slate-400 rounded-lg font-semibold hover:border-sky-500 hover:text-sky-400 transition-all"><Download size={18} /> Télécharger (PDF)</a>
          </motion.div>
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