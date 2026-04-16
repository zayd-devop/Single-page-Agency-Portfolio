import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import logoUrl from "../../imports/Logo.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <a href="#" className="flex items-center group">
            <img src={logoUrl} alt="Logo" className="h-8 md:h-38 w-auto object-contain" />
          </a>

          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} CodeFluent. Tous droits réservés. Tangier, Morocco.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/code-fluent/" 
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
    href="mailto:contact.codefluent@gmail.com"
    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors"
    aria-label="Email"
  >
    <Mail size={18} />
        </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
