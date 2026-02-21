"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, X, ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "./section-heading"
import AnimatedReveal from "./animated-reveal"

type Certificate = {
  id: number
  title: string
  code: string
  type: string
  date: string
  image: string
  track: "Foundations" | "Backend"
}

const certificates: Certificate[] = [
  // ---- Foundations Track ----
  {
    id: 4,
    title: "Algorithms & Problem-Solving Level 1 Solutions",
    code: "04",
    type: "Completion",
    date: "2024-09-03",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-LBtnsotlfcYOts8ZbXHtn44XC9BrrJ.jpg",
    track: "Foundations",
  },
  {
    id: 5,
    title: "Algorithms & Problem-Solving Level 2",
    code: "05",
    type: "Graduation",
    date: "2025-02-09",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-Tqn0j4fU2OBahbEurrXRelc2OSkef6.jpg",
    track: "Foundations",
  },
  {
    id: 6,
    title: "Introduction to Programming Using C++ Level 2",
    code: "06",
    type: "Attendance",
    date: "2025-01-24",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-pq1n3hD89N9KkdRnVrrb9WUhY6VDPH.jpg",
    track: "Foundations",
  },
  {
    id: 7,
    title: "Algorithms & Problem Solving Level 3",
    code: "07",
    type: "Attendance",
    date: "2025-05-31",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-3jVyUPObNQt0p7WQp8qkuXgXNFdVDB.jpg",
    track: "Foundations",
  },
  {
    id: 8,
    title: "Algorithms & Problem Solving Level 4",
    code: "08",
    type: "Completion",
    date: "2025-07-03",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-Gej808msYUkWVdsDvZjz9Ei6gYyDqo.jpg",
    track: "Foundations",
  },
  {
    id: 9,
    title: "Foundations Level 2",
    code: "09",
    type: "Attendance",
    date: "2025-06-28",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-tyrH37RszGwd2oK09OIWSnnf6oTJtJ.jpg",
    track: "Foundations",
  },
  {
    id: 10,
    title: "OOP as it Should Be (Concepts)",
    code: "10",
    type: "Attendance",
    date: "2025-02-21",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-DBupHvzogvHrXLJeIjqz4FngavsI1R.jpg",
    track: "Foundations",
  },
  {
    id: 11,
    title: "Data Structures - Level 1",
    code: "12",
    type: "Completion",
    date: "2025-06-20",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-5iDplZDfCvQ5wf68P6i0tM4tIwUpRI.jpg",
    track: "Foundations",
  },
  // ---- Backend Track ----
  {
    id: 13,
    title: "Database Level 1 - SQL (Concepts and Practice)",
    code: "15",
    type: "Graduation",
    date: "2025-03-03",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-gwnWcdW3OZill13chMfaUeR6BIjyNb.jpg",
    track: "Backend",
  },
  {
    id: 14,
    title: "C# - Level 1",
    code: "14",
    type: "Completion",
    date: "2025-08-15",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-tW2P60Zuiw1ZdWarVyOi0ZupRsIlbF.jpg",
    track: "Backend",
  },
  {
    id: 15,
    title: "Database - SQL (Projects & Practice)",
    code: "17",
    type: "Completion",
    date: "2025-08-15",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-A96j6v2VBAEsOI5Klzps2xpVkEAsAt.jpg",
    track: "Backend",
  },
   {
    id: 16,
    title: "OOP As It Should Be In C#",
    code: "16",
    type: "Completion",
    date: "2025-9-10",
    image:"OOP-CSharp.png",
    track: "Backend",
  },
   {
    id: 17,
    title: "C# Mastering Course For Intermediates",
    code: "18",
    type: "Completion",
    date: "2025-12-7",
    image:"CSharpI.jpg",
    track: "Backend",
  },
   {
    id: 18,
    title: "C# Basics: From Zero to First Applications",
    code: "19",
    type: "Completion",
    date: "2025-10-23",
    image:"CSharpII.jpg",
    track: "Backend",
  },
  {
    id: 19,
    title: "C# Mastering Course For Professionals",
    code: "20",
    type: "Graduation",
    date: "2025-12-12",
    image:"CSharpIII.jpg",
    track: "Backend",
  },
  
]

const tracks = ["All", "Foundations", "Backend"] as const

function getBadgeColor(type: string) {
  switch (type) {
    case "Completion":
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
    case "Graduation":
      return "bg-amber-500/15 text-amber-400 border-amber-500/30"
    case "Attendance":
      return "bg-primary/15 text-primary border-primary/30"
    default:
      return "bg-primary/15 text-primary border-primary/30"
  }
}

export default function Certificates() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [activeTrack, setActiveTrack] = useState<(typeof tracks)[number]>("All")

  const filtered =
    activeTrack === "All"
      ? certificates
      : certificates.filter((c) => c.track === activeTrack)

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    if (filtered.length === 0) return
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % filtered.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [filtered.length])

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goCarouselNext = () => {
    if (filtered.length > 0) {
      setCarouselIndex((carouselIndex + 1) % filtered.length)
    }
  }

  const goCarouselPrev = () => {
    if (filtered.length > 0) {
      setCarouselIndex((carouselIndex - 1 + filtered.length) % filtered.length)
    }
  }

  const goNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filtered.length)
    }
  }

  const goPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + filtered.length) % filtered.length
      )
    }
  }

  return (
    <section id="certificates" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          badge="Certificates"
          title="Certifications & Achievements"
          description="Certificates earned from ProgrammingAdvices covering foundational programming and backend track courses."
        />

        {/* Track Filter Tabs */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => {
                setActiveTrack(track)
                setCarouselIndex(0)
                setSelectedIndex(null)
              }}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                activeTrack === track
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border/50 bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {track}
              <span className="ml-1.5 text-xs opacity-60">
                {track === "All"
                  ? certificates.length
                  : certificates.filter((c) => c.track === track).length}
              </span>
            </button>
          ))}
        </div>

        {/* Rotating Carousel */}
        <div className="mb-12">
          <div className="relative h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="sync">
                {filtered.length > 0 && (
                  <motion.div
                    key={filtered[carouselIndex].id}
                    initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className="absolute w-full max-w-lg h-full"
                    onClick={() => openLightbox(carouselIndex)}
                    style={{ perspective: "1000px" }}
                  >
                    <div className="group relative w-full h-full overflow-hidden rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer">
                      {/* Certificate Image */}
                      <div className="relative w-full h-full overflow-hidden bg-secondary/30">
                        <img
                          src={filtered[carouselIndex].image}
                          alt={`Certificate: ${filtered[carouselIndex].code} - ${filtered[carouselIndex].title}`}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                      </div>

                      {/* Certificate Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Award
                                size={16}
                                className="flex-shrink-0 text-primary"
                              />
                              <span className="text-sm text-muted-foreground">
                                {filtered[carouselIndex].date}
                              </span>
                            </div>
                            <h3 className="mt-2 text-base font-semibold leading-snug text-foreground">
                              {filtered[carouselIndex].code} -{" "}
                              {filtered[carouselIndex].title}
                            </h3>
                          </div>
                          <span
                            className={`mt-1 flex-shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${getBadgeColor(filtered[carouselIndex].type)}`}
                          >
                            {filtered[carouselIndex].type}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={goCarouselPrev}
                className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-16 md:-translate-x-20 flex items-center justify-center rounded-full bg-secondary/80 p-3 text-muted-foreground backdrop-blur-sm transition-all hover:text-foreground hover:bg-secondary md:hover:scale-110"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goCarouselNext}
                className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-16 md:translate-x-20 flex items-center justify-center rounded-full bg-secondary/80 p-3 text-muted-foreground backdrop-blur-sm transition-all hover:text-foreground hover:bg-secondary md:hover:scale-110"
                aria-label="Next certificate"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {filtered.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCarouselIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`rounded-full transition-all ${
                  index === carouselIndex
                    ? "bg-primary h-2.5 w-8"
                    : "bg-border/50 hover:bg-border h-2 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {carouselIndex + 1} / {filtered.length}
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 flex items-center gap-1 rounded-lg bg-secondary/80 px-3 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
                aria-label="Close lightbox"
              >
                <X size={16} />
                Close
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-secondary/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-secondary/80 p-2 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
                aria-label="Next certificate"
              >
                <ChevronRight size={20} />
              </button>

              {/* Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border/50 bg-card">
                <img
                  src={filtered[selectedIndex].image}
                  alt={`Certificate: ${filtered[selectedIndex].code} - ${filtered[selectedIndex].title}`}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>

              {/* Info bar */}
              <div className="mt-3 flex items-center justify-between rounded-lg bg-card/80 px-4 py-2 backdrop-blur-sm border border-border/50">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {filtered[selectedIndex].code} -{" "}
                    {filtered[selectedIndex].title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {filtered[selectedIndex].date}
                  </p>
                </div>
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${getBadgeColor(filtered[selectedIndex].type)}`}
                >
                  {filtered[selectedIndex].type}
                </span>
              </div>

              {/* Counter */}
              <p className="mt-2 text-center text-xs text-muted-foreground">
                {selectedIndex + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
