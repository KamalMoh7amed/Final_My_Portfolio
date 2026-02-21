"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/50 px-6 py-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {"© 2026 Kamal Mohamed Saber. All rights reserved."}
        </p>
        <p className="text-sm text-muted-foreground">
          /* {"Built with Next.js & Tailwind"} */
        </p>
      </div>
    </motion.footer>
  )
}
