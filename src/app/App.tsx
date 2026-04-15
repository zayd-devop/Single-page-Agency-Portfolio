import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-slate-950 min-h-screen text-slate-300 antialiased selection:bg-sky-500/30 selection:text-sky-200">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
