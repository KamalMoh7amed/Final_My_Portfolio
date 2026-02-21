"use client"

import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"
import SectionHeading from "./section-heading"
import AnimatedReveal from "./animated-reveal"
import MagneticButton from "./magnetic-button"

const socialLinks = [
  {
    label: "Email Me",
    icon: Mail,
    href: "mailto:KamKaamm5@gmail.com",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kamal-mohamed-saber/",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/KamalMoh7amed/KamalMoh7amed",
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:kamal@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`
    window.open(mailtoLink)
  }

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Work Together"
          description="I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
        />

        {/* Social Links */}
        <AnimatedReveal>
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <MagneticButton
                key={link.label}
                strength={0.2}
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg border border-border/50 bg-card/60 px-5 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-secondary hover:shadow-lg hover:shadow-primary/5">
                  <link.icon size={16} />
                  {link.label}
                </a>
              </MagneticButton>
            ))}
          </div>
        </AnimatedReveal>

        {/* Contact Form */}
        <AnimatedReveal delay={0.1}>
          <div className="mx-auto max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-border/50 bg-card/60 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none backdrop-blur-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-border/50 bg-card/60 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none backdrop-blur-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary/30"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-border/50 bg-card/60 px-4 py-3 text-sm text-foreground placeholder-muted-foreground outline-none backdrop-blur-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary/30"
                  placeholder="Your message..."
                />
              </div>
              <MagneticButton strength={0.1} className="w-full">
                <button
                  type="submit"
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </MagneticButton>
            </form>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}
