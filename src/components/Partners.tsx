import { Building2, Globe, Users, TrendingUp } from 'lucide-react'

export default function Partners() {
  const partners = [
    {
      name: "Union Africaine",
      description: "Organisation continentale pour l'intégration et le développement de l'Afrique",
      icon: Globe,
      type: "Institution Continentale"
    },
    {
      name: "La BEDEAC",
      description: "Banque de Développement des États de l'Afrique Centrale",
      icon: Building2,
      type: "Institution Financière"
    },
    {
      name: "La CEEAC",
      description: "Communauté Économique des États de l'Afrique Centrale",
      icon: Users,
      type: "Organisation Régionale"
    },
    {
      name: "La CEMAC",
      description: "Communauté Économique et Monétaire de l'Afrique Centrale",
      icon: TrendingUp,
      type: "Union Monétaire"
    }
  ]

  return (
    <section id="partenaires" className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Partenaires Stratégiques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les institutions les plus influentes d&apos;Afrique 
            pour maximiser l&apos;impact de nos actions
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 group text-center"
            >
              <div className="mb-4">
                <div className="bg-afrinexus-red p-4 rounded-full w-16 h-16 mx-auto group-hover:scale-110 transition-transform">
                  <partner.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {partner.name}
              </h3>
              
              <p className="text-sm text-afrinexus-red font-medium mb-3">
                {partner.type}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-red-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pourquoi nos partenariats font la différence
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-afrinexus-red bg-opacity-10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-afrinexus-red" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Portée Continentale</h4>
              <p className="text-sm text-gray-600">
                Accès à un réseau continental pour maximiser l&apos;impact de vos projets
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-afrinexus-red bg-opacity-10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-afrinexus-red" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Légitimité Institutionnelle</h4>
              <p className="text-sm text-gray-600">
                Reconnaissance et soutien des plus hautes instances africaines
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-afrinexus-red bg-opacity-10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-afrinexus-red" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Croissance Accélérée</h4>
              <p className="text-sm text-gray-600">
                Accès privilégié aux opportunités d&apos;investissement et de développement
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Intéressé par un partenariat avec AfriNexus Forum ?
          </p>
          <a
            href="#contact"
            className="bg-afrinexus-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-afrinexus-red-dark transition-colors inline-flex items-center"
          >
            Devenir Partenaire
          </a>
        </div>
      </div>
    </section>
  )
}
