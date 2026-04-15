import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'nav.services': 'Services',
    'nav.projects': 'Our Projects',
    'nav.team': 'Our Team',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.quote': 'Get a Quote',
    
    // Hero
    'hero.badge': 'Premium Digital Solutions',
    'hero.title1': 'Your Vision.',
    'hero.title2': 'Our Code.',
    'hero.desc': 'CodeFluent is a dedicated team of full-stack developers and designers turning your ambitious ideas into high-performance web solutions and digital tools.',
    'hero.explore': 'Explore Our Portfolio',
    'hero.talk': "Let's Talk",
    'hero.scroll': 'Scroll',

    // About
    'about.badge': 'Who We Are',
    'about.title1': 'Bridging the gap between',
    'about.title2': 'business vision',
    'about.title3': 'and',
    'about.title4': 'technical execution',
    'about.desc': 'We are a specialized digital cabinet focused on bespoke web creation and management tools. We engineer scalable, secure, and beautiful solutions with fluent code that powers your business growth.',

    // Services
    'services.badge': 'Our Expertise',
    'services.title': 'Comprehensive Digital Competences',
    'services.web.title': 'Web Development',
    'services.web.desc': 'High-performance applications built with React, Laravel, and Next.js for scale and speed.',
    'services.ui.title': 'UI/UX Design',
    'services.ui.desc': 'Pixel-perfect, responsive designs created in Figma that guarantee intuitive user experiences.',
    'services.erp.title': 'Custom Tools (ERP)',
    'services.erp.desc': 'Bespoke management platforms and CRMs to streamline your complex business processes.',
    'services.agile.title': 'Agile Management',
    'services.agile.desc': 'Iterative, transparent project delivery ensuring alignment with your business goals at every step.',

    // Projects
    'projects.badge': 'Our Projects',
    'projects.title': 'Featured Case Studies',
    'projects.viewAll': 'View All Projects',
    'projects.viewCase': 'View Case Study',
    'projects.cat.erp': 'Management Platform',
    'projects.cat.mobile': 'Mobile Application',
    'projects.cat.eco': 'E-Commerce',
    'projects.p1.desc': "Development of a comprehensive digital platform for ISMONTIC. The project integrates a modern institutional showcase website for the general public, coupled with a custom-built pedagogical management system (ERP) digitalizing the Management, Instructor, and Trainee workspaces.",
    'projects.p2.desc': 'A secure, sleek mobile banking experience allowing users to track expenses and invest seamlessly.',
    'projects.p3.desc': 'A high-conversion luxury retail storefront with dynamic inventory synchronization.',

    // Team
    'team.badge': 'Competences',
    'team.title': 'The Minds Behind CodeFluent',
    'team.r1': 'Lead Developer',
    'team.e1': 'Global Logic, Architecture, Security',
    'team.r2': 'Functional Developer',
    'team.e2': 'Business Logic, Forms, Responsive',
    'team.r3': 'UI & Data Developer',
    'team.e3': 'User Interfaces, Data Vis, Identity',

    // Contact
    'contact.badge': 'Contact',
    'contact.title': 'Ready to Build Your Vision?',
    'contact.desc': "Let's discuss your next project. Our team is ready to engineer a digital solution that propels your business forward.",
    'contact.email': 'Email Us',
    'contact.call': 'Call Us',
    'contact.visit': 'Visit Us',
    'contact.form.name': 'Name',
    'contact.form.namePh': 'John Doe',
    'contact.form.email': 'Email',
    'contact.form.emailPh': 'john@example.com',
    'contact.form.subject': 'Subject',
    'contact.form.subjectPh': 'Project Inquiry',
    'contact.form.msg': 'Message',
    'contact.form.msgPh': 'Tell us about your project...',
    'contact.form.send': 'Send Message',

    // Footer
    'footer.rights': 'All rights reserved.'
  },
  fr: {
    // Header
    'nav.services': 'Services',
    'nav.projects': 'Nos Projets',
    'nav.team': 'Notre Équipe',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.quote': 'Obtenir un Devis',
    
    // Hero
    'hero.badge': 'Solutions Numériques Premium',
    'hero.title1': 'Your Vision.',
    'hero.title2': 'Our Code.',
    'hero.desc': 'CodeFluent est une équipe dévouée de développeurs et designers full-stack transformant vos idées ambitieuses en solutions web et outils numériques ultra-performants.',
    'hero.explore': 'Explorer Notre Portfolio',
    'hero.talk': 'Parlons-en',
    'hero.scroll': 'Défiler',

    // About
    'about.badge': 'Qui Sommes-Nous',
    'about.title1': 'Faire le pont entre',
    'about.title2': 'la vision métier',
    'about.title3': 'et',
    'about.title4': "l'exécution technique",
    'about.desc': 'Nous sommes un cabinet digital spécialisé dans la création d\'outils web et de gestion sur-mesure. Nous développons des solutions évolutives, sécurisées et élégantes avec un code fluide qui propulse la croissance de votre entreprise.',

    // Services
    'services.badge': 'Notre Expertise',
    'services.title': 'Compétences Numériques Complètes',
    'services.web.title': 'Développement Web',
    'services.web.desc': 'Applications ultra-performantes conçues avec React, Laravel et Next.js pour plus de scalabilité et de vitesse.',
    'services.ui.title': 'Design UI/UX',
    'services.ui.desc': 'Designs responsives et au pixel près créés sur Figma qui garantissent des expériences utilisateur intuitives.',
    'services.erp.title': 'Outils Sur-Mesure (ERP)',
    'services.erp.desc': 'Plateformes de gestion et CRM sur-mesure pour simplifier vos processus métiers complexes.',
    'services.agile.title': 'Gestion Agile',
    'services.agile.desc': 'Livraison de projet itérative et transparente assurant un alignement avec vos objectifs commerciaux à chaque étape.',

    // Projects
    'projects.badge': 'Nos Projets',
    'projects.title': 'Études de Cas Phares',
    'projects.viewAll': 'Voir Tous Les Projets',
    'projects.viewCase': "Voir l'Étude de Cas",
    'projects.cat.erp': 'Plateforme de Gestion',
    'projects.cat.mobile': 'Application Mobile',
    'projects.cat.eco': 'E-Commerce',
    'projects.p1.desc':"Développement d'une plateforme numérique complète pour l'ISMONTIC. Le projet intègre un site vitrine institutionnel moderne pour le grand public, couplé à un système de gestion pédagogique (ERP) sur mesure digitalisant les espaces Direction, Formateurs et Stagiaires.",
    'projects.p2.desc': 'Une expérience bancaire mobile sécurisée et élégante permettant aux utilisateurs de suivre leurs dépenses et d\'investir facilement.',
    'projects.p3.desc': 'Une vitrine e-commerce de luxe à fort taux de conversion avec synchronisation dynamique des stocks.',

    // Team
    'team.badge': 'Compétences',
    'team.title': 'Les Esprits Derrière CodeFluent',
    'team.r1': 'Développeuse Lead',
    'team.e1': 'Logique Globale, Architecture, Sécurité',
    'team.r2': 'Développeur Fonctionnel',
    'team.e2': 'Logique Métier, Formulaires, Responsive',
    'team.r3': 'Développeuse UI & Données',
    'team.e3': 'Interfaces Utilisateur, Data Vis, Identité',

    // Contact
    'contact.badge': 'Contact',
    'contact.title': 'Prêt à Concrétiser Votre Vision ?',
    'contact.desc': 'Discutons de votre prochain projet. Notre équipe est prête à concevoir une solution numérique qui propulsera votre entreprise.',
    'contact.email': 'Écrivez-nous',
    'contact.call': 'Appelez-nous',
    'contact.visit': 'Visitez-nous',
    'contact.form.name': 'Nom',
    'contact.form.namePh': 'Jean Dupont',
    'contact.form.email': 'Email',
    'contact.form.emailPh': 'jean@exemple.com',
    'contact.form.subject': 'Sujet',
    'contact.form.subjectPh': 'Demande de Projet',
    'contact.form.msg': 'Message',
    'contact.form.msgPh': 'Parlez-nous de votre projet...',
    'contact.form.send': 'Envoyer le Message',

    // Footer
    'footer.rights': 'Tous droits réservés.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('fr');

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
