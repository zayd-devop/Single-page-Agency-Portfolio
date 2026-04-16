import React from "react";
import { motion } from "motion/react";


export function About() {
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
          {/* Badge de section */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-sky-500"></div>
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase">À Propos de Code Fluent</h2>
            <div className="h-[1px] w-12 bg-sky-500"></div>
          </div>
          
          {/* Titre Principal */}
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Allier la <span className="text-sky-400 text-glow">fluidité du design</span> à la puissance de <span className="text-slate-400">l'innovation digitale</span>.
          </h3>
          
          
          {/* Texte de description */}
          <div className="space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed">
            <p>
              Code Fluent est une agence de développement web spécialisée dans la création de plateformes sur mesure. 
              Nous croyons fermement que la technologie doit être au service de la stratégie, et non l'inverse.
            </p>
            
            {/* Slogan mis en avant */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <p className="text-2xl md:text-3xl font-semibold text-white italic">
                "Your Vision, Our Code."
              </p>
              <p className="text-sm uppercase tracking-wider text-sky-500 mt-2 font-medium">
                Notre Engagement
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}