import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, service, message } = await request.json()

    // Validation des champs obligatoires
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont obligatoires' },
        { status: 400 }
      )
    }

    // Configuration SMTP avec fetch (alternative à nodemailer)
    const smtpData = {
      host: 'node38-ca.n0c.com',
      port: 587,
      secure: false,
      auth: {
        user: 'contact@afrinexus-forum.org',
        pass: 'V;s8k7=EVv'
      },
      from: 'contact@afrinexus-forum.org',
      to: 'contact@afrinexus-forum.org',
      replyTo: email,
      subject: `Nouveau message de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Nouveau Message de Contact</h1>
            <p style="margin: 5px 0 0 0; font-size: 16px;">AfriNexus Forum</p>
          </div>
          
          <div style="padding: 30px; background-color: #f9f9f9;">
            <h2 style="color: #dc2626; margin-top: 0;">Informations du contact</h2>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p><strong>Nom :</strong> ${name}</p>
              <p><strong>Email :</strong> ${email}</p>
              ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
              ${service ? `<p><strong>Service d'intérêt :</strong> ${service}</p>` : ''}
            </div>
            
            <h3 style="color: #dc2626;">Message</h3>
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626;">
              <p style="white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
          </div>
          
          <div style="background-color: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">Ce message a été envoyé depuis le formulaire de contact du site AfriNexus Forum</p>
            <p style="margin: 5px 0 0 0;">Date : ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
      text: `
        Nouveau message de contact - AfriNexus Forum
        
        Informations du contact :
        - Nom : ${name}
        - Email : ${email}
        ${company ? `- Entreprise : ${company}` : ''}
        ${service ? `- Service d'intérêt : ${service}` : ''}
        
        Message :
        ${message}
        
        Date : ${new Date().toLocaleString('fr-FR')}
      `
    }

    // Pour l'instant, on simule l'envoi d'email
    // En production, vous devrez configurer un service SMTP externe
    console.log('Email à envoyer:', {
      to: smtpData.to,
      from: smtpData.from,
      subject: smtpData.subject,
      replyTo: smtpData.replyTo
    })

    // Simulation d'un envoi réussi
    // TODO: Intégrer un vrai service SMTP (SendGrid, Mailgun, etc.)
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { message: 'Email envoyé avec succès' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    )
  }
}
