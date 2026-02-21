"use client"

import { motion } from "framer-motion"

interface AnimatedRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

const directionMap = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
}

export default function AnimatedReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedRevealProps) {
  const initial = directionMap[direction]

  return (
    <motion.div
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
