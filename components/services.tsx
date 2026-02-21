"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Server,
  Database,
  Layers,
} from "lucide-react"
import SectionHeading from "./section-heading"
import AnimatedReveal from "./animated-reveal"

const services = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Building dynamic and high-performance web applications using modern Microsoft technologies, from user interface to backend logic, ensuring seamless user experience and robust performance.",
    icon: Globe,
    features: [
      "ASP.NET MVC Architecture",
      "HTML5 & CSS3 Responsive Design",
      "C# Business Logic Implementation",
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    id: 2,
    title: "Backend & API Development",
    description:
      "Developing strong and secure backend systems and building Web APIs that enable integration between different systems, while adhering to clean code standards and best practices.",
    icon: Server,
    features: [
      "RESTful Web API Design",
      "Advanced C# Programming",
      "LINQ & Entity Framework Integration",
    ],
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    id: 3,
    title: "Database Management & Design",
    description:
      "Designing and managing efficient relational databases that ensure data integrity and fast retrieval, with expertise in handling different database engines and optimization strategies.",
    icon: Database,
    features: [
      "SQL Server & MySQL Databases",
      "Database Schema & Modeling",
      "Data Integrity & Optimization",
    ],
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
  },
  {
    id: 4,
    title: "Custom Software Solutions",
    description:
      "Providing comprehensive solutions to clients starting from requirement analysis through to final system delivery, whether it's a web application, desktop system, or utility tools.",
    icon: Layers,
    features: [
      "End-to-End System Delivery",
      "Console Applications & Tools",
      "Client Requirement Analysis",
    ],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="What I Offer"
          title="My Services"
          description="Comprehensive development solutions tailored to meet your business needs and technical requirements."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <AnimatedReveal key={service.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  className={`group relative h-full overflow-hidden rounded-2xl border ${service.borderColor} bg-card/40 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15`}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col p-6 lg:p-8">
                    {/* Icon Container */}
                    <div className="mb-6 inline-flex items-center justify-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative inline-flex items-center justify-center rounded-2xl bg-secondary/60 p-4 backdrop-blur-md transition-all group-hover:bg-primary/30"
                      >
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <Icon className="relative h-8 w-8 text-primary transition-colors group-hover:text-primary/80" />
                      </motion.div>
                    </div>

                    {/* Title Section */}
                    <div className="mb-4">
                      <h3 className="font-display text-lg font-bold text-foreground transition-colors md:text-xl lg:text-2xl">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-muted-foreground/90">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mt-auto space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3 text-sm text-muted-foreground transition-colors"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                            className="mt-1.5 flex-shrink-0 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/60 shadow-lg shadow-primary/30 transition-all group-hover:shadow-primary/50"
                          />
                          <span className="pt-0.5 group-hover:text-foreground/90 transition-colors">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                  </div>
                </motion.div>
              </AnimatedReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
