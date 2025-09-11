'use client'

import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Globe, TrendingUp, Users, Building2, Play, ChevronLeft, ChevronRight, Star, Award, Target, Zap } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import TypingEffect from './TypingEffect'
import CursorEffects from './CursorEffects'
import { useMouseInteractions, useMagneticElement } from '../hooks/useMouseInteractions'
import Image from 'next/image'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  
  // Refs for interactive elements
  const logoRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  
  // Mouse interactions
  useMouseInteractions({
    enableTrail: true,
    enableParallax: true,
    enableMagnetic: true,
    enableTilt: true
  })
  
  // Apply magnetic effect to logo
  useMagneticElement(logoRef, 0.2)
  
  // Apply tilt effect to service cards
  useEffect(() => {
    const applyTiltEffect = (element: HTMLElement, strength: number = 8) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const tiltX = ((e.clientY - centerY) / rect.height) * strength
        const tiltY = ((e.clientX - centerX) / rect.width) * -strength

        element.style.setProperty('--tilt-x', `${tiltX}deg`)
        element.style.setProperty('--tilt-y', `${tiltY}deg`)
      }

      const handleMouseLeave = () => {
        element.style.setProperty('--tilt-x', '0deg')
        element.style.setProperty('--tilt-y', '0deg')
      }

      element.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }

    const cleanupFunctions: (() => void)[] = []
    
    cardRefs.current.forEach((card) => {
      if (card) {
        const cleanup = applyTiltEffect(card, 8)
        cleanupFunctions.push(cleanup)
      }
    })

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup())
    }
  }, [])

  const slides = [
    {
      title: "Renforcer les liens économiques",
      subtitle: "entre l'Afrique et le monde",
      description: "Afrinexus crée des synergies solides pour la prospérité du continent africain",
      image: "🌍",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Accélération Business",
      subtitle: "pour l'attractivité économique",
      description: "Contribuons à l'attractivité économique des pays africains à forte capacité de résilience",
      image: "🚀",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Facilitation d'Investissement",
      subtitle: "coopération intercontinentale",
      description: "Stimulons la coopération entre entreprises africaines et partenaires internationaux",
      image: "📈",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Engagement Diaspora",
      subtitle: "mobilisation stratégique",
      description: "Mobilisons la diaspora africaine pour des investissements productifs",
      image: "👥",
      color: "from-purple-500 to-purple-600"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="accueil" className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto interactive-bg">
      {/* Cursor Effects */}
      <CursorEffects 
        enableTrail={true}
        enableGlow={true}
        enableRipple={true}
        trailColor="#dc2626"
        glowColor="#dc2626"
        rippleColor="#dc2626"
      />
      {/* Enhanced Animated Background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-red-900 to-gray-900' 
          : 'bg-gradient-to-br from-red-50 via-white to-red-100'
      }`}>
        <div className={`absolute inset-0 transition-all duration-1000 ${
          theme === 'dark' ? 'bg-black bg-opacity-40' : 'bg-white bg-opacity-30'
        }`}></div>
        
        {/* Enhanced Floating Elements with 3D Effects and Parallax */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-afrinexus-red to-red-600 opacity-30 rounded-full animate-float-3d shadow-2xl parallax-element"></div>
        <div className={`absolute top-40 right-20 w-16 h-16 rounded-full animate-float-delayed shadow-xl parallax-slow ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-white to-gray-200 opacity-20' 
            : 'bg-gradient-to-br from-afrinexus-red to-red-500 opacity-20'
        }`}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-afrinexus-red to-red-600 opacity-40 rounded-full animate-float-slow shadow-lg parallax-element"></div>
        <div className={`absolute top-1/2 right-10 w-8 h-8 rounded-full animate-scale-pulse shadow-lg parallax-fast ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-white to-gray-300 opacity-30' 
            : 'bg-gradient-to-br from-afrinexus-red to-red-500 opacity-30'
        }`}></div>
        
        {/* Additional 3D Elements */}
        <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-afrinexus-red opacity-20 rounded-full animate-rotate-3d"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-white opacity-30 rounded-full animate-glow-pulse"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 right-1/4 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-afrinexus-red opacity-20 animate-float"></div>
        <div className="absolute bottom-16 left-1/3 w-10 h-10 bg-afrinexus-red opacity-15 rotate-45 animate-float-delayed"></div>
        
        {/* Network Grid Background */}
        <div className="network-grid"></div>
        
        {/* Network Connections */}
        <div className="network-connections">
          {/* Horizontal connections */}
          <div className="network-connection" style={{top: '20%', left: '10%', width: '30%', transform: 'rotate(15deg)'}}></div>
          <div className="network-connection" style={{top: '60%', right: '15%', width: '25%', transform: 'rotate(-20deg)'}}></div>
          <div className="network-connection" style={{bottom: '30%', left: '20%', width: '35%', transform: 'rotate(10deg)'}}></div>
          
          {/* Vertical connections */}
          <div className="network-connection" style={{top: '10%', left: '30%', height: '40%', width: '1px', transform: 'rotate(90deg)'}}></div>
          <div className="network-connection" style={{top: '40%', right: '25%', height: '30%', width: '1px', transform: 'rotate(90deg)'}}></div>
        </div>
        
        {/* Network Nodes */}
        <div className="network-node animate-network-node" style={{top: '15%', left: '12%'}}></div>
        <div className="network-node animate-network-node" style={{top: '25%', right: '18%', animationDelay: '0.5s'}}></div>
        <div className="network-node animate-network-node" style={{bottom: '35%', left: '25%', animationDelay: '1s'}}></div>
        <div className="network-node animate-network-node" style={{bottom: '20%', right: '30%', animationDelay: '1.5s'}}></div>
        <div className="network-node animate-network-node" style={{top: '50%', left: '50%', animationDelay: '2s'}}></div>
        
        {/* Orbiting Network Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-afrinexus-red rounded-full opacity-60 animate-network-orbit"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-3 h-3 bg-white rounded-full opacity-40 animate-network-orbit" style={{animationDelay: '10s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center">
            
            {/* Left Content */}
            <div className={`space-y-3 sm:space-y-4 lg:space-y-6 xl:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              
              {/* Enhanced Logo and Title Section */}
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 xl:space-y-6">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-4 xl:space-x-6 mb-3 sm:mb-4 lg:mb-6 xl:mb-8">
                  <div className="relative" ref={logoRef}>
                    <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center animate-bounce-in shadow-2xl hover-lift-3d p-2 sm:p-3 lg:p-4 magnetic tilt-3d">
                      <Image
                        src={theme === 'dark' ? "/logo-light.png" : "/logo-dark.png"}
                        alt="AfriNexus Forum Logo"
                        width={120}
                        height={120}
                        className="object-contain transition-all duration-300 w-full h-full"
                        priority
                        onError={(e) => {
                          // Fallback vers le logo principal si l'image n'existe pas
                          const target = e.target as HTMLImageElement;
                          target.src = '/logo.png';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 bg-gradient-to-br from-afrinexus-red to-red-600 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <div className="text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight animate-slide-up-3d">
                      <TypingEffect 
                        texts={["AfriNexus Forum"]}
                        speed={200}
                        deleteSpeed={100}
                        pauseTime={1000}
                        className="text-gray-900 dark:text-white font-bold"
                      />
                    </h1>
                    <p className="text-sm sm:text-lg lg:text-xl text-afrinexus-red font-semibold animate-fade-in-up-delayed-2">
                      Association Panafricaine d&apos;Excellence
                    </p>
                  </div>
                </div>
                
                <div className="inline-flex items-center space-x-2 sm:space-x-3 glass-enhanced dark:glass-enhanced-dark rounded-full px-4 sm:px-6 py-2 sm:py-3 text-afrinexus-red dark:text-white text-xs sm:text-sm font-medium animate-fade-in-up-delayed-3 hover-lift-3d">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 animate-scale-pulse" />
                  <span>
                    <TypingEffect 
                      texts={[
                        "Renforcer les liens économiques",
                        "Créer des opportunités",
                        "Développer des partenariats",
                        "Construire l'avenir"
                      ]}
                      speed={80}
                      deleteSpeed={60}
                      pauseTime={2000}
                      className="text-afrinexus-red dark:text-white font-medium"
                    />
                  </span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in-up-delayed-4">
                  <span className="block text-gray-900 dark:text-white">entre l&apos;Afrique</span>
                  <span className="block text-gradient-enhanced animate-shimmer">
                    et <TypingEffect 
                      texts={[
                        "le monde",
                        "l'Europe", 
                        "l'Amérique",
                        "l'Asie",
                        "l'Océanie"
                      ]}
                      speed={150}
                      deleteSpeed={100}
                      pauseTime={2000}
                      className="text-gradient-enhanced"
                    />
                  </span>
                </h2>
                
                <p className="text-sm sm:text-lg lg:text-xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl animate-fade-in-up-delayed-5">
                  AfriNexus Forum est une association panafricaine qui œuvre pour renforcer les liens économiques 
                  entre l&apos;Afrique et le reste du monde. Nous créons des <TypingEffect 
                    texts={[
                      "synergies solides",
                      "partenariats durables", 
                      "connexions stratégiques",
                      "alliances gagnantes"
                    ]}
                    speed={100}
                    deleteSpeed={80}
                    pauseTime={2500}
                    className="text-afrinexus-red font-semibold"
                  /> pour la prospérité du continent.
                </p>
              </div>

              {/* Enhanced CTA Buttons with 3D Effects */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 animate-fade-in-up-delayed-4">
                <a
                  href="#services"
                  className="group relative bg-gradient-to-r from-afrinexus-red to-red-600 text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl font-bold text-sm sm:text-base lg:text-lg flex items-center justify-center overflow-hidden transition-all duration-500 hover-lift-3d animate-glow-pulse"
                >
                  <span className="relative z-10 flex items-center">
                    Découvrir nos services
                    <ArrowRight className="ml-1 sm:ml-2 lg:ml-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                
                <a
                  href="#contact"
                  className="group relative glass-enhanced dark:glass-enhanced-dark border-2 border-afrinexus-red text-afrinexus-red dark:text-white px-4 sm:px-6 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-5 rounded-2xl font-bold text-sm sm:text-base lg:text-lg flex items-center justify-center hover:bg-afrinexus-red hover:text-white transition-all duration-500 hover-lift-3d"
                >
                  <span className="flex items-center">
                    <Play className="mr-1 sm:mr-2 lg:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform duration-300" />
                    Nous rejoindre
                  </span>
                </a>
              </div>

              {/* Enhanced Stats with 3D Effects */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 xl:gap-6 pt-3 sm:pt-4 lg:pt-6 xl:pt-8 animate-fade-in-up-delayed-5">
                {[
                  { number: "50+", label: "Partenaires", icon: Award },
                  { number: "15+", label: "Pays", icon: Globe },
                  { number: "100+", label: "Projets", icon: Target },
                  { number: "5+", label: "Années", icon: Zap }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="glass-enhanced dark:glass-enhanced-dark rounded-2xl p-2 sm:p-3 lg:p-4 xl:p-6 hover-lift-3d card-3d">
                      <div className="relative">
                        <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 text-afrinexus-red mx-auto mb-1 sm:mb-2 lg:mb-3 group-hover:scale-125 transition-transform duration-300 animate-scale-pulse" />
                        <div className="text-base sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-afrinexus-red transition-colors duration-300">{stat.number}</div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                        <div className="absolute inset-0 bg-gradient-to-br from-afrinexus-red to-red-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Enhanced 3D Visual Elements */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Enhanced Service Cards with Advanced 3D Effects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {[
                  { icon: Globe, title: "Accélération Business", desc: "Attractivité économique", delay: "delay-100", color: "from-blue-500 to-blue-600" },
                  { icon: TrendingUp, title: "Facilitation d'Investissement", desc: "Coopération intercontinentale", delay: "delay-200", color: "from-green-500 to-green-600" },
                  { icon: Users, title: "Engagement Diaspora", desc: "Mobilisation africaine", delay: "delay-300", color: "from-purple-500 to-purple-600" },
                  { icon: Building2, title: "Soutien au Développement", desc: "Appui-conseil stratégique", delay: "delay-400", color: "from-orange-500 to-orange-600" }
                ].map((service, index) => (
                  <div
                    key={index}
                    ref={(el) => { cardRefs.current[index] = el; }}
                    className={`group glass-enhanced dark:glass-enhanced-dark p-3 sm:p-4 lg:p-6 rounded-2xl hover-lift-3d card-3d transition-all duration-500 animate-fade-in-up ${service.delay} relative overflow-hidden magnetic tilt-3d float-cursor`}
                  >
                    <div className="relative">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-network-pulse`}>
                        <service.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg group-hover:text-afrinexus-red transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{service.desc}</p>
                      
                      {/* Network Connection Dots */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-afrinexus-red rounded-full animate-network-pulse-dot opacity-60"></div>
                      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-afrinexus-red rounded-full animate-network-pulse-dot opacity-40" style={{animationDelay: '1s'}}></div>
                      
                      {/* Network Flow Lines */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-afrinexus-red to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-network-flow"></div>
                      <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-transparent via-afrinexus-red to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                      
                      {/* Enhanced Hover Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                      <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Floating Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-afrinexus-red to-red-600 opacity-20 rounded-full animate-float-3d shadow-2xl"></div>
              <div className={`absolute -bottom-8 -left-8 w-24 h-24 rounded-full animate-float-delayed shadow-xl ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-white to-gray-200 opacity-15' 
                  : 'bg-gradient-to-br from-afrinexus-red to-red-500 opacity-15'
              }`}></div>
              <div className="absolute top-1/2 -right-4 w-16 h-16 bg-gradient-to-br from-afrinexus-red to-red-600 opacity-20 rounded-full animate-glow-pulse shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-afrinexus-red scale-125' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-opacity-20 transition-all duration-300 z-20"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-opacity-20 transition-all duration-300 z-20"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
      </button>
    </section>
  )
}
