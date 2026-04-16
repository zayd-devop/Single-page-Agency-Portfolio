import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';
import { ProjectList } from './components/ProjectList';

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 antialiased">
      <Header onHomeClick={() => setShowAllProjects(false)} />
      
      <main>
        {showAllProjects ? (
          // Si on a cliqué sur "Voir tous les projets"
          <div className="pt-20"> {/* Padding pour ne pas être caché par le header */}
            <ProjectList />
          </div>
        ) : (
          // La Landing Page normale
          <>
            <Hero />
            <About />
            <Services />
            <Skills />
            {/* On passe la fonction au composant Projects pour changer l'état */}
            <Projects onViewAll={() => setShowAllProjects(true)} />
            <Team />
            <Contact />
          </>
        )}
      </main>
      
      <Footer />
    </div>
   
  );
}
