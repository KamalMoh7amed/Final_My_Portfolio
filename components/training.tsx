"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, BookOpen, GraduationCap } from "lucide-react"
import SectionHeading from "./section-heading"
import AnimatedReveal from "./animated-reveal"
import TiltCard from "./tilt-card"

const training = {
  title: "Software Development - Full stack .Net Web Developer",
  description:
    "Rooted in .NET technologies, this profile reflects a solid foundation for data-driven applications. With a strong grasp of C#, the candidate is equipped with robust back-end development. Front-end proficiency is ensured through HTML5, JavaScript, and CSS3, creating a full-stack capability. Experience with the .NET Core Web API and MVC frameworks enables the creation of scalable, modern web services and applications, completing a versatile skill set for comprehensive .NET development.",
  courses: [
    "Prompt Engineering",
    "Introduction to SQL Server Programming",
    "Getting Started with Git and GitHub",
    "Programming in C#",
    "Programming in HTML5, JavaScript & CSS3",
    "Functional Documentation & Unit Testing",
    "Containerization basics using Docker",
    ".Net Core Web API",
    "Developing .NET Core MVC Web Applications",
    "Capstone Project",
  ],
}

export default function Training() {
  const [coursesOpen, setCoursesOpen] = useState(false)

  return (
    <section id="training" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Training"
          title="Professional Training"
          description="My specialized training program and the courses I've completed."
        />

        <AnimatedReveal>
          <div className="mx-auto max-w-3xl">
            <TiltCard className="overflow-hidden rounded-2xl">
              <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-start gap-4 p-6 pb-4">
                  <div className="flex-shrink-0 rounded-xl bg-primary/10 p-3">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {training.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="px-6 pb-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {training.description}
                  </p>
                </div>

                {/* Courses Accordion */}
                <div className="mx-6 mb-6 overflow-hidden rounded-xl border border-border/50 bg-secondary/30">
                  <button
                    onClick={() => setCoursesOpen(!coursesOpen)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-secondary/50"
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        Courses
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: coursesOpen ? 0 : 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronUp size={18} className="text-muted-foreground" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {coursesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/30 px-5 py-4">
                          <ul className="space-y-3">
                            {training.courses.map((course, index) => (
                              <motion.li
                                key={course}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: index * 0.05,
                                }}
                                className="flex items-center gap-3 text-sm text-muted-foreground"
                              >
                                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                {course}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </TiltCard>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}
