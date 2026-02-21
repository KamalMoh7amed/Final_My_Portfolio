"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import AnimatedReveal from "./animated-reveal"



export default function TechStack() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Capabilities"
          title="Tech Stack"
          description="A visual overview of the technologies I've mastered."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Technical Skills with Progress Bars */}
          <AnimatedReveal delay={0} direction="left">
            <div className="space-y-8">
              {/* Technical Skills Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-primary/20 text-primary">
                  <span className="text-sm font-bold">&lt;/&gt;</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">Technical Skills</h3>
              </div>

              {/* Progress Bar Skills */}
              <div className="space-y-6">
                {[
                  { name: "C# & OOP", percentage: 90 },
                  { name: "ASP.NET Core", percentage: 85 },
                  { name: "SQL Server", percentage: 88 },
                  { name: "Entity Framework", percentage: 85 },
                  { name: "Web APIs", percentage: 90 },
                  { name: "HTML/CSS/Bootstrap", percentage: 85 },
                ].map((skill, idx) => (
                  <AnimatedReveal key={skill.name} delay={idx * 0.08}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary/40">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-500 shadow-lg shadow-primary/50"
                        />
                      </div>
                    </motion.div>
                  </AnimatedReveal>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          {/* Right Column: Tools, Languages, Soft Skills */}
          <AnimatedReveal delay={0.1} direction="right">
            <div className="space-y-10">
              {/* Tools & Technologies */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-primary/20 text-primary text-lg">
                    ✨
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Tools & Technologies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Visual Studio",
                    "Git",
                    "Postman",
                    "SQL Server Management",
                    "Figma",
                    ".NET 8",
                  ].map((tool) => (
                    <motion.span
                      key={tool}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary/90 hover:border-primary/60 hover:bg-primary/20 transition-all cursor-default"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-primary/20 text-primary text-lg">
                    🌐
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Arabic — Native",
                    "English — Intermediate",
                  ].map((lang) => (
                    <motion.span
                      key={lang}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary/90 hover:border-primary/60 hover:bg-primary/20 transition-all cursor-default"
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center h-6 w-6 rounded-lg bg-primary/20 text-primary text-lg">
                    💼
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Soft Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Problem Solving",
                    "Team Collaboration",
                    "Fast Learner",
                    "Time Management",
                    "Attention to Detail",
                    "Adaptability",
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary/90 hover:border-primary/60 hover:bg-primary/20 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  )
}
