"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import AnimatedReveal from "./animated-reveal"

export default function About() {
  const stats = [
    { number: "+5", label: "Technologies Mastered" },
    { number: "+2", label: "Major Projects" },
    { number: "2nd", label: "Place Award" },
  ]

  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="GET TO KNOW ME"
          title="About Me"
          description=""
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Code Icon */}
          <AnimatedReveal delay={0} direction="left">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.08 }}
                className="relative"
              >
                {/* Animated Background Glow */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 40px 10px rgba(59, 130, 246, 0.2)",
                      "0 0 80px 20px rgba(34, 211, 238, 0.3)",
                      "0 0 40px 10px rgba(59, 130, 246, 0.2)",
                    ],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-3xl"
                />

                {/* Gradient Background */}
                <motion.div
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                    rotate: [0, 360],
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 to-cyan-500/30 rounded-3xl blur-3xl"
                />

                {/* Border Container with Gradient */}
                <motion.div
                  animate={{
                    borderColor: [
                      "rgba(59, 130, 246, 0.3)",
                      "rgba(34, 211, 238, 0.6)",
                      "rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative flex h-64 w-64 items-center justify-center rounded-3xl border-2 bg-card/40 backdrop-blur-md transition-all hover:bg-card/60"
                  style={{
                    boxShadow:
                      "inset 0 0 30px rgba(59, 130, 246, 0.1), 0 0 20px rgba(59, 130, 246, 0.15)",
                  }}
                >
                  {/* Animated Brackets */}
                  <div className="relative flex items-center justify-center gap-4">
                    {/* Left Bracket */}
                    <motion.div
                      animate={{
                        x: [-5, 0, -5],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-7xl font-bold text-primary"
                    >
                      &lt;
                    </motion.div>

                    {/* Center Slash */}
                    <motion.div
                      animate={{
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-6xl font-bold text-cyan-400"
                    >
                      /
                    </motion.div>

                    {/* Right Bracket */}
                    <motion.div
                      animate={{
                        x: [5, 0, 5],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                      className="text-7xl font-bold text-primary"
                    >
                      &gt;
                    </motion.div>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{
                          x: Math.random() * 256 - 128,
                          y: Math.random() * 256 - 128,
                          opacity: 0,
                        }}
                        animate={{
                          x: Math.random() * 256 - 128,
                          y: Math.random() * 256 - 128,
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 3 + i,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute h-1 w-1 rounded-full bg-primary"
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedReveal>

          {/* Right: Content */}
          <AnimatedReveal delay={0.1} direction="right">
            <div className="space-y-6">
              {/* Main Description */}
              <div className="space-y-4">
                <p className="text-lg font-medium leading-relaxed text-foreground">
                  A passionate{" "}
                  <span className="font-semibold text-primary">
                    Full-Stack Developer
                  </span>{" "}
                  specializing in{" "}
                  <span className="font-semibold text-primary">
                    C# & ASP.NET Core
                  </span>
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  I'm a dedicated Full-Stack Developer with hands-on experience
                  in designing, developing, and maintaining modern web
                  applications. I specialize in building robust solutions using
                  the .NET stack (ASP.NET Core, C#, Entity Framework, SQL Server).
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  My journey began with a solid foundation in computer science
                  fundamentals. Since then, I've completed multiple intensive
                  training programs and built diverse projects — from
                  e-commerce platforms to hospital management systems and custom
                  business solutions.
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.span
                      className="text-3xl font-bold text-primary"
                      whileHover={{ scale: 1.2 }}
                    >
                      {stat.number}
                    </motion.span>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  )
}
