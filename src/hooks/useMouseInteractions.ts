'use client'

import { useState, useEffect, useRef } from 'react'

interface MousePosition {
  x: number
  y: number
}

interface UseMouseInteractionsOptions {
  enableTrail?: boolean
  enableParallax?: boolean
  enableMagnetic?: boolean
  enableTilt?: boolean
  trailLength?: number
  parallaxStrength?: number
  magneticStrength?: number
  tiltStrength?: number
}

export function useMouseInteractions(options: UseMouseInteractionsOptions = {}) {
  const {
    enableTrail = true,
    enableParallax = true,
    enableMagnetic = true,
    enableTilt = true,
    trailLength = 20,
    parallaxStrength = 0.5,
    magneticStrength = 0.3,
    tiltStrength = 10
  } = options

  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [trail, setTrail] = useState<MousePosition[]>([])
  const trailRef = useRef<MousePosition[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Update trail
      if (enableTrail) {
        trailRef.current.push(newPosition)
        if (trailRef.current.length > trailLength) {
          trailRef.current.shift()
        }
        setTrail([...trailRef.current])
      }

      // Update CSS custom properties for parallax and magnetic effects
      if (enableParallax || enableMagnetic) {
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        const deltaX = (newPosition.x - centerX) * parallaxStrength
        const deltaY = (newPosition.y - centerY) * parallaxStrength

        document.documentElement.style.setProperty('--mouse-x', `${deltaX}px`)
        document.documentElement.style.setProperty('--mouse-y', `${deltaY}px`)
      }

      // Update CSS custom properties for tilt effects
      if (enableTilt) {
        const centerX = window.innerWidth / 2
        const centerY = window.innerHeight / 2
        const tiltX = ((newPosition.y - centerY) / centerY) * tiltStrength
        const tiltY = ((newPosition.x - centerX) / centerX) * -tiltStrength

        document.documentElement.style.setProperty('--tilt-x', `${tiltX}deg`)
        document.documentElement.style.setProperty('--tilt-y', `${tiltY}deg`)
      }
    }

    const handleMouseLeave = () => {
      // Reset properties when mouse leaves
      document.documentElement.style.setProperty('--mouse-x', '0px')
      document.documentElement.style.setProperty('--mouse-y', '0px')
      document.documentElement.style.setProperty('--tilt-x', '0deg')
      document.documentElement.style.setProperty('--tilt-y', '0deg')
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      const currentAnimationFrame = animationFrameRef.current
      if (currentAnimationFrame) {
        cancelAnimationFrame(currentAnimationFrame)
      }
    }
  }, [enableTrail, enableParallax, enableMagnetic, enableTilt, trailLength, parallaxStrength, magneticStrength, tiltStrength])

  return {
    mousePosition,
    trail,
    createCursorEffect: (element: HTMLElement, type: 'ripple' | 'glow' | 'follow') => {
      const rect = element.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      const effect = document.createElement('div')
      effect.className = `cursor-${type}`
      effect.style.left = `${x}px`
      effect.style.top = `${y}px`
      effect.style.position = 'fixed'
      effect.style.pointerEvents = 'none'
      effect.style.zIndex = '9999'

      document.body.appendChild(effect)

      setTimeout(() => {
        document.body.removeChild(effect)
      }, 1000)
    }
  }
}

// Hook for magnetic elements
export function useMagneticElement(ref: React.RefObject<HTMLElement>, strength: number = 0.3) {
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      element.style.setProperty('--mouse-x', `${deltaX}px`)
      element.style.setProperty('--mouse-y', `${deltaY}px`)
    }

    const handleMouseLeave = () => {
      element.style.setProperty('--mouse-x', '0px')
      element.style.setProperty('--mouse-y', '0px')
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref, strength])
}

// Hook for tilt elements
export function useTiltElement(ref: React.RefObject<HTMLElement>, strength: number = 10) {
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const tiltX = ((e.clientY - centerY) / rect.height) * strength
      const tiltY = ((e.clientX - centerX) / rect.width) * -strength

      element.style.setProperty('--tilt-x', `${tiltX}deg`)
      element.style.setProperty('--tilt-y', `${tiltY}deg`)
    }

    const handleMouseLeave = () => {
      element.style.setProperty('--tilt-x', '0deg')
      element.style.setProperty('--tilt-y', '0deg')
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref, strength])
}

