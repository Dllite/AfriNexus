'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

interface AdaptiveLogoProps {
  width: number
  height: number
  className?: string
  alt?: string
  priority?: boolean
}

export default function AdaptiveLogo({ 
  width, 
  height, 
  className = "object-contain transition-all duration-300",
  alt = "AfriNexus Forum Logo",
  priority = false
}: AdaptiveLogoProps) {
  const { theme } = useTheme()
  const [currentSrc, setCurrentSrc] = useState<string>('')
  const [hasError, setHasError] = useState(false)

  // Détermine le logo à utiliser selon le thème
  const getLogoSrc = () => {
    if (hasError) return '/logo.png' // Fallback vers le logo principal
    
    if (theme === 'dark') {
      return '/logo.png' // Logo pour mode sombre
    } else {
      return '/logo-light.png' // Logo pour mode clair
    }
  }

  const handleError = () => {
    console.log('Logo failed to load, falling back to main logo')
    setHasError(true)
    setCurrentSrc('/logo.png')
  }

  const handleLoad = () => {
    setHasError(false)
  }

  return (
    <Image
      src={getLogoSrc()}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={handleError}
      onLoad={handleLoad}
    />
  )
}

