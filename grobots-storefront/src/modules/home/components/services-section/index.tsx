"use client"

import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: "3D Printing Solutions",
    description: "Professional-grade 3D printers, filaments, and accessories. From rapid prototyping to small-batch production, we offer complete additive manufacturing solutions with expert guidance on material selection and print optimization.",
    number: "01",
    features: ["FDM & Resin Printers", "Premium Filaments", "Technical Support"]
  },
  {
    title: "Robotics Equipment",
    description: "Comprehensive selection of microcontrollers, sensors, actuators, motors, and complete robot kits. We stock only tested, reliable components from industry-leading brands, perfect for education, research, and industrial applications.",
    number: "02",
    features: ["Arduino & Raspberry Pi", "Industrial Components", "Robot Kits"]
  },
  {
    title: "Global Delivery",
    description: "Fast, reliable shipping to 50+ countries with full tracking and insurance. Your order reaches you safely in 15 days or less, backed by our customer satisfaction guarantee and responsive support team.",
    number: "03",
    features: ["15-Day Delivery", "50+ Countries", "Fully Insured"]
  },
  {
    title: "Training & Education",
    description: "Expert-led workshops, online tutorials, and comprehensive documentation. Master robotics fundamentals, advanced automation techniques, and 3D printing best practices through hands-on learning with industry professionals.",
    number: "04",
    features: ["Online Workshops", "Video Tutorials", "Project Guides"]
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      )

      // Animate service cards
      const cards = cardsRef.current?.children
      gsap.fromTo(
        cards,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 ref={headingRef} className="font-semibold text-4xl md:text-5xl lg:text-6xl text-black mb-4 tracking-tighter leading-tight max-w-4xl mx-auto">
            Designed for seamless innovation and advanced technology.
          </h2>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 md:p-10 hover:bg-black transition-colors duration-500"
            >
              <div className="text-sm font-medium text-black/30 mb-6 group-hover:text-white/60 transition-colors tracking-tight">
                {service.number}
              </div>
              <h3 className="font-semibold text-2xl mb-4 text-black group-hover:text-white transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-black/60 leading-relaxed group-hover:text-white/80 transition-colors font-light tracking-tight mb-6">
                {service.description}
              </p>
              {service.features && (
                <div className="space-y-2 mt-6 pt-6 border-t border-black/5 group-hover:border-white/10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-black/50 group-hover:text-white/60">
                      <span className="w-1 h-1 rounded-full bg-black/30 group-hover:bg-white/50"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <LocalizedClientLink href="/store">
            <Button
              size="xlarge"
              className="bg-black text-white hover:bg-black/80 font-medium px-12 py-6 text-base rounded-none transition-all duration-300"
            >
              Explore Services
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}
