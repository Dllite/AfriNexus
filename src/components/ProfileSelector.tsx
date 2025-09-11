'use client'

import { useState, useEffect } from 'react'
import { X, TrendingUp, Rocket, Users, Building2, ArrowRight, Globe } from 'lucide-react'

interface ProfileSelectorProps {
  isOpen: boolean
  onClose: () => void
  onProfileSelect: (profile: string) => void
}

export default function ProfileSelector({ isOpen, onClose, onProfileSelect }: ProfileSelectorProps) {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)

  const profiles = [
    {
      id: 'investisseur',
      title: 'Investisseur',
      description: 'Opportunités d\'investissement en Afrique',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600'
    },
    {
      id: 'entrepreneur',
      title: 'Entrepreneur',
      description: 'Accélération et support business',
      icon: Rocket,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      iconColor: 'text-green-600'
    },
    {
      id: 'diaspora',
      title: 'Diaspora',
      description: 'Connexion et contribution au continent',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      iconColor: 'text-purple-600'
    },
    {
      id: 'gouvernement',
      title: 'Gouvernement',
      description: 'Partenariats publics-privés',
      icon: Building2,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-600'
    }
  ]

  const handleProfileClick = (profileId: string) => {
    setSelectedProfile(profileId)
  }

  const handleContinue = () => {
    if (selectedProfile) {
      onProfileSelect(selectedProfile)
    }
    onClose()
  }

  const handleSkip = () => {
    onClose()
  }

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-afrinexus-red to-afrinexus-red-dark text-white p-8 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 mr-3" />
            <h2 className="text-3xl font-bold">AfriNexus Forum</h2>
          </div>
          
          <p className="text-xl opacity-90">
            Sélectionnez votre profil pour une expérience personnalisée
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => handleProfileClick(profile.id)}
                className={`
                  relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105
                  ${selectedProfile === profile.id 
                    ? `border-afrinexus-red bg-red-50 shadow-lg` 
                    : `${profile.borderColor} ${profile.bgColor} hover:shadow-md`
                  }
                `}
              >
                <div className="flex items-start space-x-4">
                  <div className={`
                    p-3 rounded-lg transition-colors
                    ${selectedProfile === profile.id 
                      ? 'bg-afrinexus-red text-white' 
                      : `bg-white ${profile.iconColor}`
                    }
                  `}>
                    <profile.icon className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {profile.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>

                {/* Selection indicator */}
                {selectedProfile === profile.id && (
                  <div className="absolute top-4 right-4">
                    <div className="w-6 h-6 bg-afrinexus-red rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContinue}
              disabled={!selectedProfile}
              className={`
                px-8 py-3 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300
                ${selectedProfile 
                  ? 'bg-afrinexus-red text-white hover:bg-afrinexus-red-dark shadow-lg hover:shadow-xl' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              Continuer avec {selectedProfile ? profiles.find(p => p.id === selectedProfile)?.title : 'sélection'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button
              onClick={handleSkip}
              className="px-8 py-3 rounded-lg font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Continuer sans sélection
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Vous pourrez modifier votre profil à tout moment depuis votre tableau de bord
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
