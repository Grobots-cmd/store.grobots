"use client"

import Image from "next/image"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    title: "Superior Performance",
    description: "High-precision components engineered for demanding applications. Every product meets strict quality standards and performance benchmarks, ensuring reliable operation in professional and educational environments.",
    icon: "⚡"
  },
  {
    title: "Smart Integration",
    description: "Seamless compatibility with popular platforms like Arduino, Raspberry Pi, and industry-standard protocols. Our equipment works together, making complex projects simpler and more accessible.",
    icon: "🔌"
  },
  {
    title: "Built to Last",
    description: "Industrial-grade durability backed by manufacturer warranties. We select products that withstand intensive use, reducing downtime and maintenance costs for long-term value.",
    icon: "🛡️"
  },
  {
    title: "Innovation Ready",
    description: "Stay ahead with the latest technology. We continuously update our catalog with cutting-edge innovations in robotics and 3D printing, helping you push boundaries and explore new possibilities.",
    icon: "🚀"
  },
]

export default function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content from left
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      )

      // Animate image from right
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 md:px-12 lg:px-16 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-12">
            <h2 className="font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tighter">
              Unmatched quality, smart features, innovative technologies
            </h2>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="group p-6 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    {feature.icon && (
                      <span className="text-3xl flex-shrink-0 mt-1">{feature.icon}</span>
                    )}
                    <div>
                      <h3 className="font-semibold text-xl text-white mb-2 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed tracking-tight text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <LocalizedClientLink href="/store">
                <Button
                  size="xlarge"
                  className="bg-white text-black hover:bg-white/80 font-medium px-12 py-6 text-base rounded-none transition-all duration-300"
                >
                  Discover Technology
                </Button>
              </LocalizedClientLink>
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="relative h-[400px] md:h-[600px] overflow-hidden">
            <Image
              src="/download-Photoroom.png"
              alt="Advanced Technology"
              fill
              className="object-contain grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
