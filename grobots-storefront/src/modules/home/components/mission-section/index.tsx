"use client"

import Image from "next/image"
import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading words
      const words = headingRef.current?.querySelectorAll('.word')
      gsap.fromTo(
        words,
        { opacity: 0.2, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 1,
          },
        }
      )

      // Animate description
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 px-6 md:px-12 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Large Text */}
        <div className="relative">
          <h2 ref={headingRef} className="font-semibold text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-tighter text-black">
            <span className="word inline-block">From</span>{' '}
            <span className="word inline-block">pioneering</span>{' '}
            <span className="word inline-block relative">
              <span className="relative z-10">robotics</span>
              <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 w-[120px] h-[120px] md:w-[200px] md:h-[200px] opacity-20 z-0">
                <Image
                  src="/11.jpg"
                  alt="Robotics"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </span>{' '}
            <span className="word inline-block">to</span>
            <br />
            <span className="word inline-block">designing</span>{' '}
            <span className="word inline-block">state-of-the-art</span>
            <br />
            <span className="word inline-block">equipment,</span>{' '}
            <span className="word inline-block text-black/30">innovation</span>{' '}
            <span className="word inline-block text-black/30">that</span>{' '}
            <span className="word inline-block text-black/30">inspires.</span>
          </h2>

          {/* Bottom Description */}
          <div className="mt-20 md:mt-32 max-w-3xl">
            <p ref={descRef} className="text-xl md:text-2xl text-black/60 leading-relaxed font-light tracking-tight mb-8">
              Since 2020, Grobots has been empowering innovators worldwide with cutting-edge 
              robotics equipment and 3D printing technology. From students building their first 
              robot to professionals developing industrial solutions, we provide the tools, 
              knowledge, and support to turn ambitious ideas into reality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-black/70">
              <div className="flex items-start gap-3">
                <span className="text-black text-xl">✓</span>
                <div>
                  <strong className="text-black">Premium Equipment</strong>
                  <p className="text-sm mt-1">From 50+ global brand partners</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-xl">✓</span>
                <div>
                  <strong className="text-black">Expert Support</strong>
                  <p className="text-sm mt-1">Technical consultation included</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-xl">✓</span>
                <div>
                  <strong className="text-black">Fast Delivery</strong>
                  <p className="text-sm mt-1">Worldwide in 15 days or less</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-black text-xl">✓</span>
                <div>
                  <strong className="text-black">Training Programs</strong>
                  <p className="text-sm mt-1">Workshops and tutorials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
