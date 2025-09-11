/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router est maintenant stable dans Next.js 14
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
  },
  // Configuration pour réduire l'utilisation des ressources
  swcMinify: true,
  // Limiter le nombre de workers pour éviter les limitations de threads
  experimental: {
    // optimizeCss: true, // Disabled due to critters module issues
    workerThreads: false, // Disable worker threads to reduce resource usage
    cpus: 1, // Limit to 1 CPU core
  },
  // Configuration webpack pour réduire l'utilisation des ressources
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: {
            minChunks: 1,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      }
    }
    return config
  },
}

module.exports = nextConfig
