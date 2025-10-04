'use client'

import { useState, useEffect } from 'react'
import { Target, Eye, Heart, Users, Globe, Award, Quote, Star, CheckCircle } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'
import Image from 'next/image'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Responsabilité",
      description: "Intégrité, transparence et respect des principes éthiques dans toutes nos actions."
    },
    {
      icon: Globe,
      title: "Souveraineté",
      description: "Respecter la souveraineté des États africains et collaborer avec les gouvernements pour le développement."
    }
  ]

  return (
    <section id="about-section" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-red-900 to-gray-900' 
          : 'bg-gradient-to-br from-red-50 via-white to-red-50'
      }`}>
        <div className={`absolute inset-0 transition-all duration-1000 ${
          theme === 'dark' ? 'bg-black bg-opacity-40' : 'bg-white bg-opacity-60'
        }`}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-afrinexus-red to-red-600 opacity-10 rounded-full animate-float-3d"></div>
        <div className={`absolute top-40 right-20 w-16 h-16 rounded-full animate-float-delayed ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-white to-gray-200 opacity-5' 
            : 'bg-gradient-to-br from-afrinexus-red to-red-500 opacity-5'
        }`}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-br from-afrinexus-red to-red-600 opacity-15 rounded-full animate-float-slow"></div>
        
        {/* Network Grid Background */}
        <div className="network-grid opacity-30"></div>
        
        {/* Network Connections */}
        <div className="network-connections">
          {/* Diagonal connections */}
          <div className="network-connection" style={{top: '15%', left: '5%', width: '40%', transform: 'rotate(25deg)'}}></div>
          <div className="network-connection" style={{top: '70%', right: '10%', width: '35%', transform: 'rotate(-30deg)'}}></div>
          <div className="network-connection" style={{bottom: '25%', left: '15%', width: '30%', transform: 'rotate(45deg)'}}></div>
        </div>
        
        {/* Network Nodes */}
        <div className="network-node animate-network-node" style={{top: '10%', left: '8%'}}></div>
        <div className="network-node animate-network-node" style={{top: '30%', right: '12%', animationDelay: '0.8s'}}></div>
        <div className="network-node animate-network-node" style={{bottom: '30%', left: '20%', animationDelay: '1.6s'}}></div>
        <div className="network-node animate-network-node" style={{bottom: '15%', right: '25%', animationDelay: '2.4s'}}></div>
        <div className="network-node animate-network-node" style={{top: '60%', left: '60%', animationDelay: '3.2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-afrinexus-red bg-opacity-10 dark:bg-white dark:bg-opacity-10 backdrop-blur-sm rounded-full px-6 py-3 text-afrinexus-red dark:text-white text-sm font-medium mb-6 animate-fade-in-up">
            <Award className="h-5 w-5" />
            <span>À propos d&apos;AfriNexus Forum</span>
          </div>
          
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-gray-900 dark:text-white">Notre</span>
            <span className="block text-gradient-enhanced">Engagement</span>
          </h2>
          
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            AfriNexus Forum incarne l&apos;ambition panafricaine de créer des ponts économiques durables 
            entre l&apos;Afrique et le reste du monde, en favorisant la prospérité mutuelle.
          </p>
        </div>

        {/* Vision, Mission, Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          
          {/* Vision */}
          <div className={`glass-enhanced dark:glass-enhanced-dark p-8 rounded-3xl hover-lift-3d card-3d transition-all duration-1000 delay-100 relative overflow-hidden ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-network-pulse">
                <Eye className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Vision</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Devenir un catalyseur du développement économique durable en Afrique 
                en facilitant les partenariats stratégiques public-privé et en encourageant l&apos;attractivité des États africains.
              </p>
              
              {/* Network Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-network-pulse-dot opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-network-pulse-dot opacity-40" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300 animate-network-flow"></div>
            </div>
          </div>

          {/* Mission */}
          <div className={`glass-enhanced dark:glass-enhanced-dark p-8 rounded-3xl hover-lift-3d card-3d transition-all duration-1000 delay-200 relative overflow-hidden ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-network-pulse">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Notre Mission</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Créer des espaces d&apos;échange entre entreprises africaines et internationales, promouvoir les partenariats 
                public-privé, encourager les investissements de la diaspora et fournir des services de conseils 
                pour exploiter les opportunités économiques émergentes.
              </p>
              
              {/* Network Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full animate-network-pulse-dot opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-green-500 rounded-full animate-network-pulse-dot opacity-40" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300 animate-network-flow"></div>
            </div>
          </div>

          {/* Values */}
          <div className={`glass-enhanced dark:glass-enhanced-dark p-8 rounded-3xl hover-lift-3d card-3d transition-all duration-1000 delay-300 relative overflow-hidden ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-network-pulse">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nos Valeurs</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>Responsabilité :</strong> Agir avec intégrité, transparence et respect des principes éthiques. 
                <strong>Souveraineté :</strong> Respecter et défendre la souveraineté des États africains en collaborant 
                avec les gouvernements pour des politiques de développement durable.
              </p>
              
              {/* Network Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-network-pulse-dot opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-network-pulse-dot opacity-40" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300 animate-network-flow"></div>
            </div>
          </div>
        </div>

        {/* Detailed Values */}
        <div className="mb-20">
          <h3 className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Nos Valeurs Fondamentales
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className={`glass-enhanced dark:glass-enhanced-dark p-6 rounded-2xl hover-lift-3d card-3d transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-afrinexus-red to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{value.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* President's Message */}
        <div className={`glass-enhanced dark:glass-enhanced-dark p-8 md:p-12 rounded-3xl hover-lift-3d card-3d transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-afrinexus-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Quote className="h-12 w-12 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Le Mot du Président
            </h3>
            
            <blockquote className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8 italic">
              &ldquo;L&apos;Afrique possède un potentiel économique extraordinaire qui ne demande qu&apos;à être révélé. 
              Chez AfriNexus Forum, nous nous engageons à devenir un catalyseur du développement 
              économique durable en facilitant les partenariats stratégiques entre les secteurs public et privé. 
              Notre vision est de renforcer l&apos;attractivité des États africains et de créer des espaces d&apos;échange 
              fructueux entre les entreprises africaines et internationales.&rdquo;
            </blockquote>
            
            <div className="text-center">
              <p className="font-bold text-gray-900 dark:text-white text-xl">Ambassadeur ZOUNGUERE-SOKAMBI</p>
              <p className="text-afrinexus-red font-medium">Président d&apos;AfriNexus Forum</p>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-20">
          <h3 className={`text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Nos Réalisations Clés
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "50+", label: "Partenaires Stratégiques", icon: Users },
              { number: "15+", label: "Pays Africains", icon: Globe },
              { number: "100+", label: "Projets Réalisés", icon: CheckCircle }
            ].map((achievement, index) => (
              <div
                key={index}
                className={`text-center glass-enhanced dark:glass-enhanced-dark p-8 rounded-2xl hover-lift-3d card-3d transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-afrinexus-red to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{achievement.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
