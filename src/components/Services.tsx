import { Rocket, TrendingUp, Users, Building2 } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Rocket,
      title: "Accélération Business",
      description: "Contribuer à l'attractivité économique et commerciale des pays africains à forte capacité de résilience.",
      features: [
        "Analyse des marchés émergents",
        "Stratégies d'expansion commerciale",
        "Formation aux meilleures pratiques",
        "Réseaux d'affaires internationaux"
      ]
    },
    {
      icon: TrendingUp,
      title: "Facilitation d'Investissement",
      description: "Stimuler la coopération intercontinentale, en créant des passerelles entre entreprises africaines et partenaires internationaux.",
      features: [
        "Mise en relation investisseurs/entreprises",
        "Due diligence et évaluation",
        "Structures d'investissement adaptées",
        "Accompagnement juridique et fiscal"
      ]
    },
    {
      icon: Users,
      title: "Engagement Diaspora",
      description: "Mobiliser la diaspora africaine, en incitant ses investissements productifs et en valorisant son rôle stratégique.",
      features: [
        "Programmes d'investissement diaspora",
        "Réseaux de compétences",
        "Transfert de technologies",
        "Mentorat et coaching"
      ]
    },
    {
      icon: Building2,
      title: "Soutien au Développement",
      description: "Fournir un appui-conseil stratégique aux entreprises et gouvernements pour tirer parti des opportunités émergentes.",
      features: [
        "Conseil en stratégie d'entreprise",
        "Politiques publiques",
        "Formation des dirigeants",
        "Études de faisabilité"
      ]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Network Background */}
      <div className="absolute inset-0">
        <div className="network-grid opacity-20"></div>
        
        {/* Network Connections */}
        <div className="network-connections">
          <div className="network-connection" style={{top: '20%', left: '5%', width: '25%', transform: 'rotate(20deg)'}}></div>
          <div className="network-connection" style={{top: '60%', right: '8%', width: '30%', transform: 'rotate(-25deg)'}}></div>
          <div className="network-connection" style={{bottom: '25%', left: '10%', width: '35%', transform: 'rotate(15deg)'}}></div>
        </div>
        
        {/* Network Nodes */}
        <div className="network-node animate-network-node" style={{top: '15%', left: '8%'}}></div>
        <div className="network-node animate-network-node" style={{top: '35%', right: '12%', animationDelay: '0.7s'}}></div>
        <div className="network-node animate-network-node" style={{bottom: '30%', left: '15%', animationDelay: '1.4s'}}></div>
        <div className="network-node animate-network-node" style={{bottom: '15%', right: '20%', animationDelay: '2.1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services d&apos;Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous offrons des solutions complètes pour renforcer les liens économiques 
            entre l&apos;Afrique et le reste du monde
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 group relative overflow-hidden"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-afrinexus-red p-3 rounded-xl group-hover:scale-110 transition-transform animate-network-pulse">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-afrinexus-red rounded-full mr-3 flex-shrink-0 animate-network-pulse-dot" style={{animationDelay: `${featureIndex * 0.2}s`}}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Network Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-afrinexus-red rounded-full animate-network-pulse-dot opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-afrinexus-red rounded-full animate-network-pulse-dot opacity-40" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-afrinexus-red to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-network-flow"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-afrinexus-red to-afrinexus-red-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à transformer votre vision en réalité ?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Découvrez comment nos services peuvent accélérer votre croissance et renforcer vos liens avec l&apos;Afrique
            </p>
            <a
              href="#contact"
              className="bg-white text-afrinexus-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Démarrer un projet
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
