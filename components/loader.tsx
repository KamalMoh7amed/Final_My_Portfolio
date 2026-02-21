"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setVisible(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [progress])

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        onComplete()
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [visible, onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <span className="font-display text-4xl font-bold text-foreground md:text-5xl">
              {"Welcome to My Portfolio"}
            </span>
            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-border">
              <motion.div
                className="h-full rounded-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
            <span className="text-xs font-medium tracking-widest text-muted-foreground">
              {Math.min(Math.round(progress), 100)}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
