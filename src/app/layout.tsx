import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageProvider } from '../contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://afrinexus-forum.org'),
  title: 'AfriNexus Forum - Renforcer les liens économiques entre l\'Afrique et le monde',
  description: 'AfriNexus Forum est une association panafricaine qui œuvre pour renforcer les liens économiques entre l\'Afrique et le reste du monde.',
  keywords: 'Afrique, économie, investissement, diaspora, coopération, développement, AfriNexus Forum',
  authors: [{ name: 'AfriNexus Forum' }],
  openGraph: {
    title: 'AfriNexus Forum - Renforcer les liens économiques entre l\'Afrique et le monde',
    description: 'Association panafricaine pour la coopération économique et le développement',
    type: 'website',
    url: 'https://afrinexus-forum.org',
    siteName: 'AfriNexus Forum',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'AfriNexus Forum Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AfriNexus Forum - Renforcer les liens économiques entre l\'Afrique et le monde',
    description: 'Association panafricaine pour la coopération économique et le développement',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MDK638TK');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDK638TK"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
