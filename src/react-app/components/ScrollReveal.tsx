import { ReactNode, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  rootMargin?: string
}

/**
 * Composant pour révéler progressivement les éléments au scroll
 * Supporte différentes directions d'animation et paramètres personnalisables
 */
export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px'
  }, ref) => {
    const { elementRef, isVisible } = useScrollAnimation({
      threshold,
      rootMargin,
      triggerOnce: true
    })

    // Définir les variantes d'animation selon la direction
    const variants = {
      hidden: {
        opacity: 0,
        y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
        x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
        scale: direction === 'fade' ? 0.8 : 1
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration,
          delay
        }
      }
    }

    return (
      <motion.div
        ref={(node) => {
          elementRef.current = node
          if (typeof ref === 'function') {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    )
  }
)

ScrollReveal.displayName = 'ScrollReveal'