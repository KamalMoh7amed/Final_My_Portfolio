"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  glareEnabled?: boolean
}

export default function TiltCard({
  children,
  className = "",
  glareEnabled = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    const rotateX = (y - 0.5) * -12
    const rotateY = (x - 0.5) * 12

    setTransform({ rotateX, rotateY })
    setGlare({ x: x * 100, y: y * 100, opacity: 0.15 })
  }

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 })
    setGlare({ x: 50, y: 50, opacity: 0 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: transform.rotateX,
        rotateY: transform.rotateY,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      {glareEnabled && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          animate={{ opacity: glare.opacity }}
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.2), transparent 60%)`,
          }}
        />
      )}
    </motion.div>
  )
}
