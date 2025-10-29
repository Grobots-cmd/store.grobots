import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-screen w-full border-b border-ui-border-base relative bg-ui-bg-subtle p-4">
      <div className="w-full h-full flex items-center justify-center bg-black rounded-t-3xl p-2">
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-t-xl">
          {/* Background Image Layer */}
          <div className="w-full h-full">
            <div className="h-full w-full z-[1] relative">
              <Image
                src="/download.png"
                alt="Hero Image"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Massive Hero Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 lg:p-16 pointer-events-none">
            {/* Main Title - Large and Bold */}
            <div className="flex-1 flex items-center">
              <span className="text-[10vw] md:text-[12vw] font-bold text-white z-[2] leading-[0.9] tracking-tighter">
                XeRun<br />XR10 Pro
              </span>
            </div>

            {/* Bottom Content - Interactive Elements */}
            <div className="z-[3] pointer-events-auto space-y-6 max-w-4xl">
              {/* Tagline */}
              <p className="text-lg md:text-xl text-white/90 font-medium">
                Professional-grade 1/10-scale sensored brushless ESC engineered for competitive RC racing
              </p>

              {/* Key Specs - Compact Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm md:text-base">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-white/60 text-xs">Current</div>
                  <div className="text-white font-semibold">160A / 1200A</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-white/60 text-xs">Battery</div>
                  <div className="text-white font-semibold">2-3S LiPo</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-white/60 text-xs">BEC</div>
                  <div className="text-white font-semibold">6V/7.4V @ 4A</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-white/60 text-xs">Profiles</div>
                  <div className="text-white font-semibold">10 Programs</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-white/60 text-xs">Connect</div>
                  <div className="text-white font-semibold">WiFi Enabled</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <div className="text-white/60 text-xs">Design</div>
                  <div className="text-white font-semibold">Race Ready</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6 pt-4">
                <Button
                  size="xlarge"
                  className="bg-white text-black hover:bg-gray-100 transition-all hover:scale-105 text-xl font-bold px-12 py-6 shadow-2xl"
                >
                  Learn More
                </Button>

                <Button
                  size="xlarge"
                  className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-105 border-2 border-white/40 text-xl font-bold px-12 py-6 shadow-2xl"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero