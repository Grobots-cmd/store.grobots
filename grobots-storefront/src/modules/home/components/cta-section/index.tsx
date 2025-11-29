"use client"

import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate main content
      gsap.fromTo(
        contentRef.current?.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          },
        }
      )

      // Animate stats
      gsap.fromTo(
        statsRef.current?.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 px-6 md:px-12 lg:px-16 bg-black overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto">
        <div ref={contentRef} className="text-center space-y-10 mb-20">
          {/* Main Heading */}
          <h2 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tighter max-w-5xl mx-auto">
            Transform your engineering experience with Grobots
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light tracking-tight">
            Join thousands of engineers and innovators who trust us for their
            robotics and automation needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <LocalizedClientLink href="/store">
              <Button
                size="xlarge"
                className="bg-white text-black hover:bg-gray-200 font-medium px-14 py-6 text-base rounded-none transition-all duration-300"
              >
                Start Shopping
              </Button>
            </LocalizedClientLink>
            <Button
              size="xlarge"
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black font-medium px-14 py-6 text-base rounded-none transition-all duration-300"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div ref={statsRef} className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-white/10">
          <div className="space-y-2 text-center pt-8">
            <div className="text-5xl font-semibold text-white tracking-tight">500+</div>
            <div className="text-white/50 font-light tracking-tight">Products Available</div>
          </div>
          <div className="space-y-2 text-center pt-8">
            <div className="text-5xl font-semibold text-white tracking-tight">15 Days</div>
            <div className="text-white/50 font-light tracking-tight">Global Delivery</div>
          </div>
          <div className="space-y-2 text-center pt-8">
            <div className="text-5xl font-semibold text-white tracking-tight">24/7</div>
            <div className="text-white/50 font-light tracking-tight">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
