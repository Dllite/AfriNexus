// Fonction pour envoyer un email via notre API SMTP
export const sendEmail = async (templateParams: {
  from_name: string
  from_email: string
  company?: string
  service?: string
  message: string
}) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: templateParams.from_name,
        email: templateParams.from_email,
        company: templateParams.company,
        service: templateParams.service,
        message: templateParams.message
      })
    })

    const result = await response.json()

    if (response.ok) {
      return { success: true, result }
    } else {
      return { success: false, error: result.error }
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return { success: false, error: 'Erreur de connexion' }
  }
}

// Fonction d'initialisation (pas nécessaire avec notre API)
export const initEmailJS = () => {
  // Pas d'initialisation nécessaire
}
