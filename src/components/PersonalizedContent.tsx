'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Rocket, Users, Building2, Globe, ArrowRight } from 'lucide-react'

interface PersonalizedContentProps {
  selectedProfile: string | null
}

export default function PersonalizedContent({ selectedProfile }: PersonalizedContentProps) {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    if (selectedProfile) {
      setShowWelcome(true)
      // Masquer le message de bienvenue après 5 secondes
      const timer = setTimeout(() => {
        setShowWelcome(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [selectedProfile])

  const getProfileInfo = (profile: string) => {
    switch (profile) {
      case 'investisseur':
        return {
          title: 'Investisseur',
          icon: TrendingUp,
          color: 'text-blue-600',
          bgColor: 'bg-blue-50',
          borderColor: 'border-blue-200',
          description: 'Découvrez les opportunités d\'investissement en Afrique',
          features: [
            'Portfolio d\'opportunités d\'investissement',
            'Analyse de marché et due diligence',
            'Réseau d\'entreprises africaines',
            'Accompagnement juridique et fiscal'
          ],
          cta: 'Explorer les opportunités',
          ctaLink: '#services'
        }
      case 'entrepreneur':
        return {
          title: 'Entrepreneur',
          icon: Rocket,
          color: 'text-green-600',
          bgColor: 'bg-green-50',
          borderColor: 'border-green-200',
          description: 'Accélérez votre croissance avec notre support business',
          features: [
            'Programmes d\'accélération',
            'Mentorat et coaching',
            'Réseau de partenaires',
            'Accès aux financements'
          ],
          cta: 'Démarrer l\'accélération',
          ctaLink: '#services'
        }
      case 'diaspora':
        return {
          title: 'Diaspora',
          icon: Users,
          color: 'text-purple-600',
          bgColor: 'bg-purple-50',
          borderColor: 'border-purple-200',
          description: 'Connectez-vous et contribuez au développement du continent',
          features: [
            'Programmes d\'investissement diaspora',
            'Transfert de compétences',
            'Réseaux de la diaspora',
            'Projets de développement communautaire'
          ],
          cta: 'Rejoindre la diaspora',
          ctaLink: '#contact'
        }
      case 'gouvernement':
        return {
          title: 'Gouvernement',
          icon: Building2,
          color: 'text-orange-600',
          bgColor: 'bg-orange-50',
          borderColor: 'border-orange-200',
          description: 'Développez des partenariats publics-privés efficaces',
          features: [
            'Stratégies de développement',
            'Partenariats internationaux',
            'Formation des dirigeants',
            'Politiques d\'attractivité'
          ],
          cta: 'Créer un partenariat',
          ctaLink: '#contact'
        }
      default:
        return null
    }
  }

  const profileInfo = selectedProfile ? getProfileInfo(selectedProfile) : null

  if (!selectedProfile || !profileInfo) return null

  return (
    <>
      {/* Welcome Message */}
      {showWelcome && (
        <div className="fixed top-20 right-4 z-40 animate-slide-in">
          <div className={`${profileInfo.bgColor} ${profileInfo.borderColor} border-2 p-4 rounded-lg shadow-lg max-w-sm`}>
            <div className="flex items-center space-x-3">
              <profileInfo.icon className={`h-6 w-6 ${profileInfo.color}`} />
              <div>
                <h4 className="font-semibold text-gray-900">Bienvenue, {profileInfo.title} !</h4>
                <p className="text-sm text-gray-600">Contenu personnalisé activé</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Personalized Banner */}
      <div className={`${profileInfo.bgColor} ${profileInfo.borderColor} border-l-4 py-6 px-8 mb-8`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg bg-white ${profileInfo.color}`}>
              <profileInfo.icon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {profileInfo.description}
              </h3>
              <p className="text-gray-600">
                Découvrez nos services spécialement conçus pour les {profileInfo.title.toLowerCase()}s
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Personalized Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h4 className="text-xl font-bold text-gray-900 mb-6">
            Services personnalisés pour {profileInfo.title}s
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profileInfo.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${profileInfo.color.replace('text-', 'bg-')}`}></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={profileInfo.ctaLink}
              className="bg-afrinexus-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-afrinexus-red-dark transition-colors inline-flex items-center"
            >
              {profileInfo.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
