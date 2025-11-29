"use client"

import { Button } from "@medusajs/ui"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-white flex items-center overflow-hidden">
      <div className="relative w-full px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-semibold text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tighter text-black">
              Engineering Without Limits
            </h1>

            <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-light tracking-tight max-w-xl">
              Premium robotics equipment and 3D printing solutions for the next generation of innovators.
            </p>

            <div className="flex flex-wrap gap-4">
              <LocalizedClientLink href="/store">
                <Button
                  size="xlarge"
                  className="bg-black text-white hover:bg-black/80 font-medium px-12 py-6 text-base rounded-none transition-all duration-300"
                >
                  Shop Now
                </Button>
              </LocalizedClientLink>
              <Button
                size="xlarge"
                className="bg-transparent text-black border-2 border-black hover:bg-black hover:text-white font-medium px-12 py-6 text-base rounded-none transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[500px] lg:h-[700px] order-first lg:order-last">
            <div className="relative w-full h-full">
              <Image
                src="/download-Photoroom.png"
                alt="Robotics Equipment"
                fill
                className="object-cover"
                priority
                quality={100}
              />
              <div className="absolute inset-0 border border-black/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
