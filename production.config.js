// Configuration de production pour AfriNexus Forum
module.exports = {
  // Variables d'environnement
  env: {
    NODE_ENV: 'production',
    NEXT_PUBLIC_SITE_URL: 'https://afrinexus-forum.org',
    NEXT_PUBLIC_IMAGE_DOMAINS: 'localhost,afrinexus-forum.org',
    NEXT_PUBLIC_CACHE_TTL: '3600'
  },
  
  // Configuration Next.js
  nextConfig: {
    images: {
      domains: ['localhost', 'afrinexus-forum.org'],
      unoptimized: true
    },
    // Optimisations de production
    compress: true,
    poweredByHeader: false,
    generateEtags: false,
    // Configuration du cache
    onDemandEntries: {
      maxInactiveAge: 25 * 1000,
      pagesBufferLength: 2,
    }
  }
}
