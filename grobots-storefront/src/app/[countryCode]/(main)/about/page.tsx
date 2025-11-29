import { Metadata } from "next"
import AboutContent from "@modules/about/templates/about-content"

export const metadata: Metadata = {
  title: "About Us - Grobots",
  description: "Learn about Grobots - Engineering the future of robotics and 3D printing technology.",
}

export default function AboutPage() {
  return <AboutContent />
}
