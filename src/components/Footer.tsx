import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-40 h-30 relative">
                            <Image
                              src="/logo-light.png"
                              alt="AfriNexus Forum Logo"
                              width={160}
                              height={120}
                              className="object-contain transition-all duration-300"
                              onError={(e) => {
                                // Fallback vers le logo principal si l'image n'existe pas
                                const target = e.target as HTMLImageElement;
                                target.src = '/logo.png';
                              }}
                            />
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              AfriNexus Forum est une association panafricaine œuvrant pour renforcer les liens économiques 
              entre l&apos;Afrique et le reste du monde.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-afrinexus-red transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-afrinexus-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-afrinexus-red transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-afrinexus-red transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-afrinexus-red transition-colors">
                  Accélération Business
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-afrinexus-red transition-colors">
                  Facilitation d&apos;Investissement
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-afrinexus-red transition-colors">
                  Engagement Diaspora
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-afrinexus-red transition-colors">
                  Soutien au Développement
                </a>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partenaires</h3>
            <ul className="space-y-2">
              <li>
                <a href="#partenaires" className="text-gray-300 hover:text-afrinexus-red transition-colors">
                  Union Africaine
                </a>
              </li>
              <li>
                <a href="#partenaires" className="text-gray-300 hover:text-afrinexus-red transition-colors">
                  La BEDEAC
                </a>
              </li>
              <li>
                <a href="#partenaires" className="text-gray-300 hover:text-afrinexus-red transition-colors">
                  La CEEAC
                </a>
              </li>
              <li>
                <a href="#partenaires" className="text-gray-300 hover:text-afrinexus-red transition-colors">
                  La CEMAC
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-afrinexus-red" />
                <span className="text-gray-300 text-sm">contact@afrinexus-forum.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-afrinexus-red" />
                <span className="text-gray-300 text-sm">+237 694 922 094</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-afrinexus-red mt-1" />
                <div className="text-gray-300 text-sm">
                  <div>Moyenne Corniche</div>
                  <div>Versant Résidence Ambassadeur USA</div>
                  <div>Bangui, République Centrafricaine</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 AfriNexus Forum. Tous droits réservés.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-afrinexus-red transition-colors text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-afrinexus-red transition-colors text-sm">
                Conditions d&apos;utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-afrinexus-red transition-colors text-sm">
                Mentions légales
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-center">
              <div className="text-gray-500 text-xs">
                Conçu et réalisé par{' '}
                <a 
                  href="https://osiris-spacetech.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-afrinexus-red hover:text-red-400 transition-colors font-medium"
                >
                  Osiris Corporation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
