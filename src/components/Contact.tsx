'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, Globe, Users, TrendingUp, Building2, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { initEmailJS, sendEmail } from '../lib/emailjs'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  // Initialiser EmailJS au montage du composant
  useEffect(() => {
    initEmailJS()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation basique
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error')
      setStatusMessage('Veuillez remplir tous les champs obligatoires.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const result = await sendEmail({
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        service: formData.service,
        message: formData.message
      })

      if (result.success) {
        setSubmitStatus('success')
        setStatusMessage('Message envoyé avec succès ! Nous vous contacterons bientôt.')
        setFormData({ name: '', email: '', company: '', message: '', service: '' })
      } else {
        setSubmitStatus('error')
        setStatusMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage('Erreur lors de l\'envoi du message. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const services = [
    'Accélération Business',
    'Facilitation d\'Investissement',
    'Engagement Diaspora',
    'Soutien au Développement',
    'Autre'
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prêt à renforcer les liens économiques entre l&apos;Afrique et le monde ? 
            Contactez-nous pour discuter de votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-afrinexus-red p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@afrinexus-forum.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-afrinexus-red p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Téléphone</h4>
                    <p className="text-gray-600">+237 694 922 094</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-afrinexus-red p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Adresse</h4>
                    <p className="text-gray-600">
                      Moyenne Corniche<br />
                      Versant Résidence Ambassadeur USA<br />
                      Bangui, République Centrafricaine
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl border border-red-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Pourquoi choisir AfriNexus Forum ?
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-afrinexus-red" />
                  <span className="text-gray-700">Réseau panafricain étendu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-afrinexus-red" />
                  <span className="text-gray-700">Expertise multidisciplinaire</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-afrinexus-red" />
                  <span className="text-gray-700">Résultats mesurables</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building2 className="h-5 w-5 text-afrinexus-red" />
                  <span className="text-gray-700">Partenariats stratégiques</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-lg border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Envoyez-nous un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrinexus-red focus:border-transparent transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrinexus-red focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise/Organisation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrinexus-red focus:border-transparent transition-colors"
                  placeholder="Nom de votre entreprise"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service d&apos;intérêt
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrinexus-red focus:border-transparent transition-colors"
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrinexus-red focus:border-transparent transition-colors resize-none"
                  placeholder="Décrivez votre projet ou vos besoins..."
                />
              </div>

              {/* Status Message */}
              {submitStatus !== 'idle' && (
                <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                  submitStatus === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span className="text-sm font-medium">{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center group transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-afrinexus-red hover:bg-afrinexus-red-dark hover:shadow-lg'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
