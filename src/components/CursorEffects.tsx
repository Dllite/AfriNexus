'use client'

import { useEffect, useRef } from 'react'
import { useMouseInteractions } from '../hooks/useMouseInteractions'

interface CursorEffectsProps {
  enableTrail?: boolean
  enableGlow?: boolean
  enableRipple?: boolean
  trailColor?: string
  glowColor?: string
  rippleColor?: string
}

export default function CursorEffects({
  enableTrail = true,
  enableGlow = true,
  enableRipple = true,
  trailColor = '#dc2626',
  glowColor = '#dc2626',
  rippleColor = '#dc2626'
}: CursorEffectsProps) {
  const { mousePosition, trail, createCursorEffect } = useMouseInteractions({
    enableTrail,
    enableParallax: true,
    enableMagnetic: true,
    enableTilt: true
  })

  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (enableGlow && glowRef.current) {
      glowRef.current.style.left = `${mousePosition.x}px`
      glowRef.current.style.top = `${mousePosition.y}px`
    }
  }, [mousePosition, enableGlow])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (enableRipple) {
        const element = e.target as HTMLElement
        createCursorEffect(element, 'ripple')
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [enableRipple, createCursorEffect])

  return (
    <>
      {/* Cursor Glow */}
      {enableGlow && (
        <div
          ref={glowRef}
          className="cursor-glow"
          style={{
            background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)'
          }}
        />
      )}

      {/* Cursor Trail */}
      {enableTrail && trail.map((position, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: position.x,
            top: position.y,
            background: trailColor,
            opacity: (index + 1) / trail.length * 0.7,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${index * 0.05}s`
          }}
        />
      ))}
    </>
  )
}

