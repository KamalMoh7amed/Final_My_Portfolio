"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import MagneticButton from "./magnetic-button"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Training", href: "#training" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/50 bg-background/60 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <MagneticButton strength={0.2}>
          <a href="#about" className="font-display text-lg font-bold text-foreground">
            Kamal Mohamed Saber
          </a>
        </MagneticButton>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <MagneticButton key={link.href} strength={0.15}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-secondary/40 hover:text-foreground"
              >
                {link.label}
              </a>
            </MagneticButton>
          ))}
          <div className="h-6 w-px bg-border/30 mx-2" />
          <MagneticButton strength={0.2}>
            <a
              href="/Cv.pdf"
              download
              className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-card/50 px-3 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-secondary"
            >
              <Download size={14} />
              CV
            </a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a href="#contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25">
              Hire Me
            </a>
          </MagneticButton>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border/50 bg-background/80 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/Cv.pdf"
                download
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-lg border border-border/50 bg-card/50 px-4 py-2 text-sm font-medium text-foreground"
              >
                <Download size={14} />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
