"use client"

import { useState, useCallback } from "react"
import Loader from "@/components/loader"
import ParticleBackground from "@/components/particle-background"
import ScrollProgress from "@/components/scroll-progress"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Services from "@/components/services"
import Training from "@/components/training"
import Education from "@/components/education"
import Certificates from "@/components/certificates"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  const [loaded, setLoaded] = useState(false)

  const handleLoadComplete = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <>
      <Loader onComplete={handleLoadComplete} />
      <main
        className="relative min-h-screen bg-background"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease" }}
      >
        <ParticleBackground />
        <ScrollProgress />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Services />
          <Training />
          <Education />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}
