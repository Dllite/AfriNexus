'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Globe, TrendingUp, Users, Building2, Sparkles, Target, Zap } from 'lucide-react'

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('intro-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const features = [
    {
      icon: Globe,
      title: "Vision Panafricaine",
      description: "Connecter l'Afrique au monde entier",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Croissance Durable",
      description: "Développement économique soutenu",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Réseau Solide",
      description: "Communauté internationale active",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Building2,
      title: "Partenariats Stratégiques",
      description: "Collaborations institutionnelles",
      color: "from-orange-500 to-orange-600"
    }
  ]

  return (
    <section id="intro-section" className="py-20 bg-gradient-to-br from-white via-red-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-afrinexus-red opacity-5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-afrinexus-red opacity-5 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-afrinexus-red opacity-5 rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-afrinexus-red bg-opacity-10 rounded-full px-6 py-3 text-afrinexus-red text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Excellence & Innovation</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">L&apos;avenir de l&apos;Afrique</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-afrinexus-red to-red-400">
              commence ici
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment AfriNexus Forum transforme les opportunités en réalités, 
            créant un pont durable entre l&apos;Afrique et le reste du monde.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-100 group-hover:border-afrinexus-red group-hover:border-opacity-30">
                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-afrinexus-red transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-afrinexus-red to-red-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '500ms' }}>
          <div className="bg-gradient-to-r from-afrinexus-red to-red-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Target className="h-12 w-12 text-white mr-4" />
                <Zap className="h-12 w-12 text-yellow-300" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à transformer votre vision ?
              </h3>
              
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Rejoignez des centaines d&apos;entreprises et d&apos;investisseurs qui font confiance à AfriNexus Forum 
                pour leurs projets africains.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="group bg-white text-afrinexus-red px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span className="flex items-center">
                    Explorer nos services
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
                
                <a
                  href="#contact"
                  className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center hover:bg-white hover:text-afrinexus-red transition-all duration-300 hover:scale-105"
                >
                  <span>Démarrer un projet</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}