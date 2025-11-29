"use client"

import Image from "next/image"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function PromotionalSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftBannerRef = useRef<HTMLDivElement>(null)
  const rightBannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [leftBannerRef.current, rightBannerRef.current],
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Banner - Image with Overlay */}
          <div ref={leftBannerRef} className="relative h-[500px] md:h-[600px] overflow-hidden group">
            <Image
              src="/11.jpg"
              alt="New Arrivals"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-12 text-white">
              <div className="space-y-4">
                <h3 className="font-semibold text-4xl md:text-5xl tracking-tighter">
                  New Arrivals
                </h3>
                <p className="text-lg text-white/90 font-light tracking-tight">
                  Discover the latest robotics innovations
                </p>
                <LocalizedClientLink href="/store">
                  <Button
                    size="large"
                    className="bg-white text-black hover:bg-gray-200 font-medium px-10 py-5 rounded-none transition-all duration-300 mt-4"
                  >
                    Shop Now
                  </Button>
                </LocalizedClientLink>
              </div>
            </div>
          </div>

          {/* Right Banner - Text Only */}
          <div ref={rightBannerRef} className="relative h-[500px] md:h-[600px] bg-black overflow-hidden flex items-center justify-center group hover:bg-black/90 transition-colors duration-500">
            <div className="text-center space-y-8 px-8">
              <div className="text-white/60 text-xs font-medium uppercase tracking-widest">
                Limited Time Offer
              </div>
              <h3 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-white tracking-tighter leading-none">
                Special<br/>Robotics<br/>Bundle
              </h3>
              <p className="text-xl text-white/80 font-light tracking-tight">Save up to 30%</p>
              <LocalizedClientLink href="/store">
                <Button
                  size="large"
                  className="bg-white text-black hover:bg-white/80 font-medium px-10 py-5 rounded-none transition-all duration-300"
                >
                  Explore Deals
                </Button>
              </LocalizedClientLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
