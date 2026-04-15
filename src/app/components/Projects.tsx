import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import secreen from '../../imports/image.png'
export function Projects() {
  const { t } = useLanguage();
  
  const mainProject = {
    title: "ISMONTIC Pedagogical ERP",
    category: t('projects.cat.erp'),
    description: t('projects.p1.desc'),
    tags: ["React", "Laravel", "MySQL", "Agile"],
    image: secreen,
  };

  const otherProjects = [
    {
      title: "FinTech Mobile App",
      category: t('projects.cat.mobile'),
      description: t('projects.p2.desc'),
      tags: ["React Native", "Node.js", "GraphQL"],
      image: "https://images.unsplash.com/photo-1762340276397-db7ca4ee6ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzY3JlZW4lMjBkYXJrJTIwbW9kZXJufGVufDF8fHx8MTc3NjI0OTU1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Lumina E-Commerce",
      category: t('projects.cat.eco'),
      description: t('projects.p3.desc'),
      tags: ["Next.js", "Tailwind", "Stripe"],
      image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWduJTIwbW9ja3Vwc3xlbnwxfHx8fDE3NzYyNDk1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-4">{t('projects.badge')}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {t('projects.title')}
            </h3>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium transition-colors">
            {t('projects.viewAll')} <ExternalLink size={18} />
          </a>
        </div>

        {/* Featured Main Project */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 mb-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 flex flex-col justify-center">
              <span className="text-sky-400 text-sm font-semibold mb-4 block tracking-wider uppercase">
                {mainProject.category}
              </span>
              <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {mainProject.title}
              </h4>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {mainProject.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {mainProject.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-slate-950 border border-slate-800 text-slate-300 rounded-md text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <div className="absolute inset-0 bg-sky-500/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <img 
                src={mainProject.image} 
                alt={mainProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <span className="text-sky-400 text-xs font-semibold mb-3 block tracking-wider uppercase">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-slate-950 text-slate-300 rounded text-xs font-medium border border-slate-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-sky-400 font-medium">
            {t('projects.viewAll')} <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
