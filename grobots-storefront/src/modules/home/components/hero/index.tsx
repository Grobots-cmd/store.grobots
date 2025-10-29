import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-screen w-full border-b border-ui-border-base relative bg-ui-bg-subtle p-4">
      <div className="w-full h-full flex items-center justify-center bg-black rounded-t-3xl p-2">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-full h-full">
            <Image
              src="/11.jpg"
              alt="Hero Image"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              />
              <div className="w-full h-full ">

              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
