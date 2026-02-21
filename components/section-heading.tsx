"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  badge: string
  title: string
  description: string
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
        {badge}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
        {description}
      </p>
    </motion.div>
  )
}
