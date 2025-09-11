'use client'

import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import Partners from '../components/Partners'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import ProfileSelector from '../components/ProfileSelector'
import PersonalizedContent from '../components/PersonalizedContent'

export default function Home() {
  const [showProfileSelector, setShowProfileSelector] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)

  // Afficher le popup après 2 secondes si aucun profil n'est sélectionné
  useEffect(() => {
    const hasVisited = localStorage.getItem('afrinexus-forum-visited')
    const savedProfile = localStorage.getItem('afrinexus-forum-profile')
    
    if (savedProfile) {
      setSelectedProfile(savedProfile)
    } else if (!hasVisited) {
      const timer = setTimeout(() => {
        setShowProfileSelector(true)
        localStorage.setItem('afrinexus-forum-visited', 'true')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleProfileSelect = (profile: string) => {
    setSelectedProfile(profile)
    localStorage.setItem('afrinexus-forum-profile', profile)
  }

  const handleCloseProfileSelector = () => {
    setShowProfileSelector(false)
  }

  const handleProfileChange = () => {
    setShowProfileSelector(true)
  }

  return (
    <main className="min-h-screen">
      {/* SLIDER EN PREMIÈRE POSITION - AVANT TOUT */}
      <Hero />
      
      {/* Header fixe par-dessus le slider */}
      <Header onProfileChange={handleProfileChange} />
      
      {/* Contenu personnalisé basé sur le profil */}
      <PersonalizedContent selectedProfile={selectedProfile} />
      
                  <IntroSection />
                  <AboutSection />
                  <Services />
                  <Partners />
                  <Contact />
      <Footer />

      {/* Popup de sélection de profil */}
      <ProfileSelector
        isOpen={showProfileSelector}
        onClose={handleCloseProfileSelector}
        onProfileSelect={handleProfileSelect}
      />
    </main>
  )
}
