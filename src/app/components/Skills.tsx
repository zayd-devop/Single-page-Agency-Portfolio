import { motion } from "framer-motion"; // Ajusté pour la compatibilité standard
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Globe, 
  Layout, 
  StickyNote, 
  Figma, 
  Github, 
  Scale, 
  Hexagon 
} from "lucide-react";

const skills = [
  // Full Stack
  { name: "React", icon: Code2, color: "#61DAFB" },
  { name: "Redux", icon: Layers, color: "#764ABC" },
  { name: "Node.js", icon: Hexagon, color: "#339933" },
  { name: "Laravel", icon: Server, color: "#FF2D20" },
  { name: "MongoDB", icon: Database, color: "#47A248" },
  
  // Méthodologies & CMS
  { name: "Agile/Scrum", icon: Layout, color: "#0EA5E9" },
  { name: "Design Thinking", icon: StickyNote, color: "#F7DF1E" },
  { name: "WordPress", icon: Globe, color: "#21759B" },
  
  // Outils & Expertise
  { name: "Figma", icon: Figma, color: "#F24E1E" },
  { name: "Git / GitHub", icon: Github, color: "#E0E6ED" },
  { name: "Conformité Juridique", icon: Scale, color: "#00D1B2" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950 text-slate-200 relative overflow-hidden border-t border-slate-900">
      {/* Décoration d'arrière-plan - Effet Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-4">Stack Technique</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Outils & Méthodologies</h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
        Chez <span className="text-white font-semibold">Code Fluent</span>, nous transformons 
        <span className="text-sky-400 font-medium"> votre vision en code</span> grâce à une maîtrise 
        des technologies les plus modernes, garantissant des solutions fluides, innovantes et 
        parfaitement alignées sur vos enjeux métiers.
        </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex items-center gap-3 bg-slate-900/50 border border-slate-800 hover:border-sky-500/50 px-5 py-3 md:px-6 md:py-4 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] cursor-default"
            >
              <skill.icon 
                className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" 
                style={{ color: skill.color }} 
              />
              <span className="font-semibold text-base md:text-lg text-slate-300 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}