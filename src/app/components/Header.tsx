import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion"; // ou "motion/react"
import logoUrl from "../../imports/Logo.svg";

// Ajout de onHomeClick dans les props !
export function Header({ onHomeClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Nos Projets", href: "#projects" },
    { name: "Notre Équipe", href: "#team" },
    { name: "À Propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  // La fonction magique pour naviguer
  const handleNavClick = (e, href) => {
    e.preventDefault(); // Empêche le saut brusque par défaut du navigateur
    
    // 1. Fermer le menu mobile si on clique sur un lien
    setIsMobileMenuOpen(false);

    // 2. Ramener à la page d'accueil si on est sur "Voir tous les projets"
    if (onHomeClick) {
      onHomeClick();
    }

    // 3. Attendre 100ms que React affiche la page d'accueil, puis scroller
    setTimeout(() => {
      if (href === "#") {
        // Retour tout en haut pour le logo
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Scroll vers la section spécifique
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md py-4 shadow-md shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Le Logo redirige vers le haut */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, "#")} 
          className="flex items-center group cursor-pointer"
        >
          <img src={logoUrl} alt="Logo CodeFluent" className="h-30 md:h-38 w-auto object-contain" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-full transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] cursor-pointer"
          >
            Obtenir un Devis
          </a>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl border-t border-slate-800"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-slate-300 hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-6 py-3 bg-sky-500 text-slate-950 font-bold rounded-lg text-center mt-2"
            >
              Obtenir un Devis
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}