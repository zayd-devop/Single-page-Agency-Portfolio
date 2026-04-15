import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import logoUrl from "../../imports/Logo.svg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.team"), href: "#team" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'fr' ? 'en' : 'fr');
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
       <a href='' className="flex items-center group">
  <div className="shadow-lg transition-transform group-hover:scale-120">
    <img 
      src={logoUrl} 
      alt="Logo PFE PIE" 
      className="h-30 md:h-38 w-auto object-contain" 
    />
  </div>
</a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors border border-slate-700 hover:border-sky-500 rounded-full px-3 py-1.5"
            aria-label="Change language"
          >
            <Globe size={16} />
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>

          <a
            href="#contact"
            className="px-6 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-full transition-all hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]"
          >
            {t("nav.quote")}
          </a>
        </nav>

        {/* Mobile Toggle & Language */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-medium text-slate-300 border border-slate-700 rounded-full px-2 py-1"
          >
            <Globe size={14} />
            {lang.toUpperCase()}
          </button>
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
                className="text-base font-medium text-slate-300 hover:text-sky-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 bg-sky-500 text-slate-950 font-bold rounded-lg text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.quote")}
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
