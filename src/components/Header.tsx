'use client'

import { useState } from 'react'
import { Menu, X, User, Sun, Moon, Phone, Mail, MapPin, Globe } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import { useLanguage } from '../contexts/LanguageContext'
import Image from 'next/image'

interface HeaderProps {
  onProfileChange?: () => void
}

export default function Header({ onProfileChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Contact Bar - Desktop */}
      <div className="bg-afrinexus-red text-white py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+237 694 922 094</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@afrinexus-forum.org</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Bangui, République Centrafricaine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Bar - Mobile */}
      <div className="bg-afrinexus-red text-white py-1 lg:hidden">
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <Phone className="h-3 w-3" />
                <span>+237 694 922 094</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="h-3 w-3" />
                <span>contact@afrinexus-forum.org</span>
              </div>
            </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-56 h-40 relative flex items-center justify-center">
                <Image
                  src={theme === 'dark' ? "/logo-light.png" : "/logo-dark.png"}
                  alt="AfriNexus Forum Logo"
                  width={224}
                  height={160}
                  className="object-contain transition-all duration-300"
                  priority
                  onError={(e) => {
                    // Fallback vers le logo principal si l'image n'existe pas
                    const target = e.target as HTMLImageElement;
                    target.src = '/logo.png';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#accueil" className="text-gray-900 dark:text-white hover:text-afrinexus-red px-3 py-2 text-sm font-medium transition-colors">
                {t('nav.home')}
              </a>
              <a href="#about-section" className="text-gray-900 dark:text-white hover:text-afrinexus-red px-3 py-2 text-sm font-medium transition-colors">
                {t('nav.about')}
              </a>
              <a href="#services" className="text-gray-900 dark:text-white hover:text-afrinexus-red px-3 py-2 text-sm font-medium transition-colors">
                {t('nav.services')}
              </a>
              <a href="#partenaires" className="text-gray-900 dark:text-white hover:text-afrinexus-red px-3 py-2 text-sm font-medium transition-colors">
                {t('nav.partners')}
              </a>
              <a href="#contact" className="text-gray-900 dark:text-white hover:text-afrinexus-red px-3 py-2 text-sm font-medium transition-colors">
                {t('nav.contact')}
              </a>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="relative group flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 hover:from-afrinexus-red hover:to-red-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
              title={language === 'fr' ? 'Switch to English' : 'Passer au français'}
            >
              <div className="relative">
                <Globe className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-afrinexus-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <span className="text-sm font-semibold tracking-wide">{language === 'fr' ? 'EN' : 'FR'}</span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-afrinexus-red to-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={theme === 'light' ? 'Passer au mode sombre' : 'Passer au mode clair'}
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            
            {onProfileChange && (
              <button
                onClick={onProfileChange}
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-afrinexus-red transition-colors"
                title="Changer de profil"
              >
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">{t('nav.profile')}</span>
              </button>
            )}
            <a
              href="#contact"
              className="bg-afrinexus-red text-white px-6 py-2 rounded-lg hover:bg-afrinexus-red-dark transition-colors font-medium"
            >
              {t('nav.contactUs')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-white hover:text-afrinexus-red focus:outline-none focus:text-afrinexus-red transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <a
                href="#accueil"
                className="text-gray-900 dark:text-white hover:text-afrinexus-red block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </a>
              <a
                href="#about-section"
                className="text-gray-900 dark:text-white hover:text-afrinexus-red block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </a>
              <a
                href="#services"
                className="text-gray-900 dark:text-white hover:text-afrinexus-red block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </a>
              <a
                href="#partenaires"
                className="text-gray-900 dark:text-white hover:text-afrinexus-red block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.partners')}
              </a>
              <a
                href="#contact"
                className="text-gray-900 dark:text-white hover:text-afrinexus-red block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </a>
              {/* Mobile Language Toggle */}
              <div className="flex items-center justify-between px-3 py-2 mt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Langue</span>
                </div>
                <button
                  onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                  className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-gradient-to-r from-afrinexus-red to-red-600 text-white hover:from-red-600 hover:to-red-700 transition-all duration-300"
                >
                  <span className="text-sm font-semibold">{language === 'fr' ? 'EN' : 'FR'}</span>
                </button>
              </div>
              
              <a
                href="#contact"
                className="bg-afrinexus-red text-white block px-3 py-2 text-base font-medium rounded-lg mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contactUs')}
              </a>
            </div>
          </div>
        )}
        </div>
      </div>
    </header>
  )
}
