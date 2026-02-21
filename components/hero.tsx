"use client"

import { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import MagneticButton from "./magnetic-button"
import TiltCard from "./tilt-card"

const stats = [
  { value: "+5", label: "Technologies Mastered" },
  { value: "+2", label: "Major Projects" },
  { value: "2nd", label: "Place Award" },
]

const roles = [".NET Backend Engineering","Deploma Full Stack IN DEPI"]

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 50, pauseDelay = 1800) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const tick = useCallback(() => {
    const currentWord = words[wordIndex]

    if (!isDeleting) {
      // Typing
      const nextText = currentWord.slice(0, text.length + 1)
      setText(nextText)
      if (nextText === currentWord) {
        // Finished typing, pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseDelay)
        return
      }
    } else {
      // Deleting
      const nextText = currentWord.slice(0, text.length - 1)
      setText(nextText)
      if (nextText === "") {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
        return
      }
    }
  }, [text, wordIndex, isDeleting, words, pauseDelay])

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed
    const timer = setTimeout(tick, speed)
    return () => clearTimeout(timer)
  }, [tick, isDeleting, typingSpeed, deletingSpeed])

  return text
}

export default function Hero() {
  const displayedRole = useTypewriter(roles, 80, 50, 1800)

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <TiltCard className="flex flex-col items-center overflow-hidden rounded-2xl border border-border/50 bg-card/60 p-8 backdrop-blur-xl">
            <div className="mb-4 h-52 w-52 overflow-hidden rounded-2xl ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
              <Image
                src="/profile.png"
                alt="Kamal Mohamed Saber"
                width={208}
                height={208}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <h2 className="text-center font-display text-lg font-bold text-foreground">
              Kamal Mohammed Saber
            </h2>
            {/* Typewriter subtitle */}
            <div className="mt-1 flex h-6 items-center justify-center">
              <p className="text-center text-sm text-primary">
                {displayedRole}
                <span className="ml-0.5 inline-block w-[2px] animate-blink bg-primary" style={{ height: "1em" }} />
              </p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/kamal-mohamed-58a110337/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/KamalMoh7amed", label: "GitHub" },
                { icon: Mail, href: "mailto:Kamkaamm5@gmail.com", label: "Email" },
              ].map((social) => (
                <MagneticButton
                  key={social.label}
                  strength={0.3}
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex rounded-lg bg-secondary/80 p-2 text-muted-foreground backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25">
                    <social.icon size={18} />
                  </a>
                </MagneticButton>
              ))}
            </div>
          </TiltCard>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex-1"
        >
          <motion.h1
            className="font-display text-5xl font-bold leading-tight text-foreground md:text-7xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block text-primary"
            >
              .NET
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="inline-block text-foreground/20"
            >
              Backend
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block"
            >
              Engineer
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            I am a .NET Backend Engineer maintainable backend
            systems using ASP.NET Core, Entity Framework Core, and SQL Server.
          </motion.p>

          {/* Stats */}
          {/* <div className="mt-8 flex gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <p className="font-display text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-8 flex gap-4"
          >
            <MagneticButton strength={0.2}>
              <a href="#projects" className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30">
                View Projects
                <ArrowDown size={16} />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a href="#contact" className="flex rounded-lg border border-border/50 bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-secondary">
                {"Let's Talk"}
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
