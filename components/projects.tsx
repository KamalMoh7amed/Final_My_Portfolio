"use client"

import { ExternalLink, Award, Zap, Target, CheckCircle } from "lucide-react"
import SectionHeading from "./section-heading"
import AnimatedReveal from "./animated-reveal"
import TiltCard from "./tilt-card"

const projects = [
  {
    title: "Hospital Management System",
    year: "Jan 2025 - Present",
    challenge:
      "Build a comprehensive platform to streamline patient care, doctor management, appointments, medical records, prescriptions, and payment processing in a single integrated system.",
    action:
      "Developed a full-stack ASP.NET Core MVC application with a well-structured relational database (SQL Server), implemented real-time dashboard stats, patient search functionality, and integrated PDF report generation with a responsive Bootstrap UI.",
    result:
      "Delivered a production-ready hospital management system that reduces administrative overhead, improves patient data accessibility, and provides real-time insights through an intuitive dashboard.",
    technologies: [
      "ASP.NET Core MVC",
      "EF Core",
      "SQL Server",
      "Bootstrap",
      "C#",
    ],
    badge: null,
    link: "https://github.com/KamalMoh7amed/Hospital-Project-Final",
  },
  {
    title: "E-Commerce RESTful API",
    year: "Mar - May 2025",
    challenge:
      "Create a secure, scalable Web API that handles product management, shopping cart operations, wishlist functionality, and order management with robust authentication and session persistence.",
    action:
      "Built an ASP.NET Core Web API with JWT-secured endpoints, implemented database-backed session management, designed clear API contracts following RESTful principles, and created Shopping Cart & Wishlist modules from scratch with proper data integrity.",
    result:
      "Delivered a frontend-ready, enterprise-grade API that supports e-commerce operations with secure authentication, real-time cart management, and scalable architecture that earned 2nd Place in competition.",
    technologies: [
      "ASP.NET Core Web API",
      "JWT Auth",
      "SQL Server",
      "EF Core",
      "C#",
    ],
    badge: "2nd Place",
    link: "https://github.com/KamalMoh7amed/ECommerce-Platform",
  },
]

function BadgeIcon({ type }: { type: string }) {
  switch (type) {
    case "Challenge":
      return <Target className="h-4 w-4" />
    case "Action":
      return <Zap className="h-4 w-4" />
    case "Result":
      return <CheckCircle className="h-4 w-4" />
    default:
      return null
  }
}

function getBadgeStyles(type: string) {
  switch (type) {
    case "Challenge":
      return "bg-red-500/15 text-red-400 border-red-500/30"
    case "Action":
      return "bg-yellow-500/15 text-yellow-400 border-yellow-500/30"
    case "Result":
      return "bg-green-500/15 text-green-400 border-green-500/30"
    default:
      return "bg-primary/15 text-primary border-primary/30"
  }
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="My Portfolio"
          title="Featured Projects"
          description="A collection of projects I've worked on, showcasing the challenge, action taken, and results achieved."
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <AnimatedReveal
              key={project.title}
              delay={index * 0.15}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <TiltCard className="h-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
                >
                  {/* Project header */}
                  <div className="relative flex items-center justify-between border-b border-border/30 bg-secondary/20 px-6 py-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <span className="mt-1 inline-block text-xs text-muted-foreground">
                        {project.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {project.badge && (
                        <div className="flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow-lg shadow-primary/25">
                          <Award size={12} />
                          {project.badge}
                        </div>
                      )}
                      <div className="rounded-lg bg-primary/10 p-2.5 backdrop-blur-sm group-hover:bg-primary/20 transition-colors">
                        <ExternalLink size={16} className="text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Challenge, Action, Result sections */}
                  <div className="space-y-4 p-6">
                    {/* Challenge */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${getBadgeStyles("Challenge")}`}
                        >
                          <BadgeIcon type="Challenge" />
                          Challenge
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground pl-2">
                        {project.challenge}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${getBadgeStyles("Action")}`}
                        >
                          <BadgeIcon type="Action" />
                          Action
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground pl-2">
                        {project.action}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="space-y-2 pt-2">
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${getBadgeStyles("Result")}`}
                        >
                          <BadgeIcon type="Result" />
                          Result
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground pl-2">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="border-t border-border/30 px-6 py-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-secondary/60 px-2.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm hover:bg-secondary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </TiltCard>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
