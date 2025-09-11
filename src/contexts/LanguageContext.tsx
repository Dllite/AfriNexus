'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'fr' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Traductions
const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.partners': 'Partenaires',
    'nav.contact': 'Contact',
    'nav.profile': 'Profil',
    'nav.contactUs': 'Nous contacter',
    
    // Hero Section
    'hero.title': 'AfriNexus Forum',
    'hero.subtitle': 'Association Panafricaine d\'Excellence',
    'hero.badge': 'Renforcer les liens économiques',
    'hero.mainTitle': 'entre l\'Afrique',
    'hero.description': 'AfriNexus Forum est une association panafricaine qui œuvre pour renforcer les liens économiques entre l\'Afrique et le reste du monde. Nous créons des',
    'hero.cta.discover': 'Découvrir nos services',
    'hero.cta.join': 'Nous rejoindre',
    
    // About Section
    'about.title': 'Notre Engagement',
    'about.subtitle': 'AfriNexus Forum incarne l\'ambition panafricaine de créer des ponts économiques durables entre l\'Afrique et le reste du monde, en favorisant la prospérité mutuelle.',
    'about.vision.title': 'Notre Vision',
    'about.vision.content': 'Devenir un catalyseur incontournable du développement économique durable en Afrique en facilitant les partenariats stratégiques public-privé et en encourageant l\'attractivité des États africains.',
    'about.mission.title': 'Notre Mission',
    'about.mission.content': 'Créer des espaces d\'échange entre entreprises africaines et internationales, promouvoir les partenariats public-privé, encourager les investissements de la diaspora et fournir des services de conseils pour exploiter les opportunités économiques émergentes.',
    'about.values.title': 'Nos Valeurs',
    'about.values.content': 'Responsabilité : Agir avec intégrité, transparence et respect des principes éthiques. Souveraineté : Respecter et défendre la souveraineté des États africains en collaborant avec les gouvernements pour des politiques de développement durable.',
    'about.president.title': 'Le Mot de l\'Ambassadeur',
    'about.president.quote': 'L\'Afrique possède un potentiel économique extraordinaire qui ne demande qu\'à être révélé. Chez AfriNexus Forum, nous nous engageons à devenir un catalyseur incontournable du développement économique durable en facilitant les partenariats stratégiques entre les secteurs public et privé. Notre vision est de renforcer l\'attractivité des États africains et de créer des espaces d\'échange fructueux entre les entreprises africaines et internationales.',
    'about.president.signature': 'Ambassadeur ZOUNGUERE-SOKAMBI',
    'about.president.association': 'Association Panafricaine',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à renforcer les liens économiques entre l\'Afrique et le monde ? Contactez-nous pour discuter de votre projet.',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.address': 'Adresse',
    'contact.form.title': 'Envoyez-nous un message',
    'contact.form.name': 'Nom complet',
    'contact.form.email': 'Email',
    'contact.form.company': 'Entreprise/Organisation',
    'contact.form.service': 'Service d\'intérêt',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le message',
    
    // Footer
    'footer.description': 'Association panafricaine œuvrant pour renforcer les liens économiques entre l\'Afrique et le reste du monde.',
    'footer.services.title': 'Nos Services',
    'footer.partners.title': 'Partenaires',
    'footer.contact.title': 'Contact',
    'footer.copyright': '© 2024 AfriNexus Forum. Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions d\'utilisation',
    'footer.legal': 'Mentions légales'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.partners': 'Partners',
    'nav.contact': 'Contact',
    'nav.profile': 'Profile',
    'nav.contactUs': 'Contact Us',
    
    // Hero Section
    'hero.title': 'AfriNexus Forum',
    'hero.subtitle': 'Pan-African Excellence Association',
    'hero.badge': 'Strengthening economic ties',
    'hero.mainTitle': 'between Africa',
    'hero.description': 'AfriNexus Forum is a pan-African association working to strengthen economic ties between Africa and the rest of the world. We create',
    'hero.cta.discover': 'Discover our services',
    'hero.cta.join': 'Join us',
    
    // About Section
    'about.title': 'Our Commitment',
    'about.subtitle': 'AfriNexus Forum embodies the pan-African ambition to create sustainable economic bridges between Africa and the rest of the world, fostering mutual prosperity.',
    'about.vision.title': 'Our Vision',
    'about.vision.content': 'Become an essential catalyst for sustainable economic development in Africa by facilitating strategic public-private partnerships and encouraging the attractiveness of African states.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'Create exchange spaces between African and international companies, promote public-private partnerships, encourage diaspora investments and provide advisory services to exploit emerging economic opportunities.',
    'about.values.title': 'Our Values',
    'about.values.content': 'Responsibility: Act with integrity, transparency and respect for ethical principles. Sovereignty: Respect and defend the sovereignty of African states by collaborating with governments for sustainable development policies.',
    'about.president.title': 'Ambassador\'s Message',
    'about.president.quote': 'Africa has extraordinary economic potential that just needs to be revealed. At AfriNexus Forum, we are committed to becoming an essential catalyst for sustainable economic development by facilitating strategic partnerships between public and private sectors. Our vision is to strengthen the attractiveness of African states and create fruitful exchange spaces between African and international companies.',
    'about.president.signature': 'Ambassador ZOUNGUERE-SOKAMBI',
    'about.president.association': 'Pan-African Association',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to strengthen economic ties between Africa and the world? Contact us to discuss your project.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.form.title': 'Send us a message',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company/Organization',
    'contact.form.service': 'Service of interest',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    
    // Footer
    'footer.description': 'Pan-African association working to strengthen economic ties between Africa and the rest of the world.',
    'footer.services.title': 'Our Services',
    'footer.partners.title': 'Partners',
    'footer.contact.title': 'Contact',
    'footer.copyright': '© 2024 AfriNexus Forum. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.legal': 'Legal Notice'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('afrinexus-language') as Language
      if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('afrinexus-language', lang)
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
