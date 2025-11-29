"use client"

import ScrollVelocity from "@modules/common/components/scroll-velocity"

export default function AnimatedWordsSection() {
  const texts = [
    "Innovate . Engineer . Automate . Transform . ",
  ]

  return (
    <section className="py-8 bg-white overflow-hidden">
      <ScrollVelocity
        texts={texts}
        velocity={80}
        className="text-black"
        parallaxClassName="py-4"
        scrollerClassName="text-6xl md:text-8xl lg:text-9xl font-bold"
      />
    </section>
  )
}
