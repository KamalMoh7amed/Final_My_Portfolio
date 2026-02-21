"use client"

import { GraduationCap } from "lucide-react"
import SectionHeading from "./section-heading"
import AnimatedReveal from "./animated-reveal"
import TiltCard from "./tilt-card"

export default function Education() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Education"
          title="Academic Journey"
          description="My educational background and qualifications."
        />

        <AnimatedReveal>
          <div className="mx-auto max-w-2xl">
            <TiltCard>
              <div className="rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-xl bg-primary/10 p-3">
                    <GraduationCap size={24} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary">
                      2023 - Present
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                      Computer Science Student
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      Studying Computer Science with a focus on backend
                      development and software engineering principles. Building
                      hands-on experience through academic projects using
                      ASP.NET Core, EF Core, and SQL Server.
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}
