"use client"

import dynamic from 'next/dynamic'

const GridScan = dynamic(() => import('@modules/about/components/grid-scan').then(mod => ({ default: mod.GridScan })), { ssr: false })
const DomeGallery = dynamic(() => import('@modules/about/components/dome-gallery'), { ssr: false })

export default function AboutContent() {
  const stat = [
    { number: "10K+", label: "Happy Customers", desc: "Across 50+ countries" },
    { number: "1000+", label: "Products", desc: "Premium quality" },
    { number: "50+", label: "Partner Brands", desc: "Global leaders" },
    { number: "24/7", label: "Support", desc: "Expert assistance" },
  ]

  return (
    <div className="w-full bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* GridScan Background */}
        <div className="absolute inset-0">
          <GridScan
            linesColor="#ffffff"
            scanColor="#ffffff"
            scanOpacity={0.3}
            lineThickness={1}
            scanDirection="pingpong"
            scanDuration={8000}
            enablePost={true}
            bloomIntensity={0.3}
            className="w-full h-full"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-center space-y-8">
          <div className="inline-block mb-4">
            <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-semibold">
              About Grobots
            </span>
          </div>
          
          <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.95] tracking-tighter text-white">
            Engineering<br />Without<br />Limits
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            Empowering innovators worldwide with cutting-edge robotics equipment and 3D printing solutions since 2020.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stat.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-base md:text-lg text-black font-semibold">
                  {stat.label}
                </div>
                <div className="text-sm text-black/50">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full bg-black py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
              Our Story
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-white/70 leading-relaxed">
              <p>
                Founded in 2012, Grobots emerged from a simple belief: advanced robotics and 3D printing 
                technology should be accessible to everyone, from students building their first robot to 
                professionals pushing the boundaries of innovation.
              </p>
              
              <p>
                What started as a small team of passionate engineers has grown into a global community 
                of makers, educators, and innovators. We've helped thousands of projects come to life, 
                from classroom experiments to industrial applications.
              </p>
              
              <p>
                Today, we partner with leading brands worldwide to bring you the best equipment, backed 
                by expert knowledge and unwavering support. Every product we offer is tested and vetted 
                by our team to ensure it meets our rigorous standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-black">
                Our Mission
              </h2>
              
              <div className="space-y-4 text-lg text-black/70 leading-relaxed">
                <p>
                  At Grobots, we're committed to democratizing access to cutting-edge technology. 
                  We believe that the next breakthrough could come from anyone, anywhere.
                </p>
                
                <p>
                  Whether you're a student taking your first steps into robotics, an educator 
                  inspiring the next generation, or a professional pushing the boundaries of 
                  innovation, we're here to support your journey with premium equipment and 
                  expert guidance.
                </p>
                
                <p>
                  Our curated selection of products, combined with comprehensive support and 
                  fast global shipping, ensures you have everything you need to bring your 
                  ideas to life.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] lg:h-[500px] bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-8xl">🤖</div>
                  <p className="text-white/40 text-sm uppercase tracking-wider">Innovation In Motion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with DomeGallery */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <DomeGallery
            images={[
              { src: 'https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?q=80&w=2071&auto=format&fit=crop', alt: 'Robotics Equipment' },
              { src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop', alt: '3D Printing' },
              { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop', alt: 'Technology Innovation' },
              { src: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2070&auto=format&fit=crop', alt: 'Engineering' },
              { src: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=2187&auto=format&fit=crop', alt: 'Automation' },
              { src: 'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?q=80&w=2070&auto=format&fit=crop', alt: 'Robotics Lab' },
            ]}
            overlayBlurColor="#000000"
            imageBorderRadius="0px"
            openedImageBorderRadius="0px"
            grayscale={true}
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Our Work
            </h2>
            <p className="text-xl text-white/60">
              Drag to explore our projects
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative w-full bg-black py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Quality First",
                description: "Every product is rigorously tested and vetted by our team. We only stock equipment that meets our exacting standards for reliability, performance, and value.",
              },
              {
                icon: "🎯",
                title: "Innovation Driven",
                description: "We stay at the forefront of technology, constantly updating our catalog with the latest innovations in robotics and 3D printing from leading global brands.",
              },
              {
                icon: "🤝",
                title: "Customer Focused",
                description: "Your success is our success. Our expert team provides personalized support, from product selection to troubleshooting, ensuring you get the most from your investment.",
              },
              {
                icon: "📚",
                title: "Education & Growth",
                description: "We believe in empowering through knowledge. Access tutorials, guides, and community support to help you master new skills and push your boundaries.",
              },
              {
                icon: "🌍",
                title: "Global Reach",
                description: "Fast, reliable shipping to 50+ countries. No matter where you are, we deliver premium equipment to your doorstep in 15 days or less.",
              },
              {
                icon: "💡",
                title: "Community Building",
                description: "Join a thriving community of makers, innovators, and creators. Share projects, get inspired, and collaborate with like-minded individuals worldwide.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-white hover:bg-white/95 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-black/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="relative w-full bg-white py-20 md:py-32 flex items-center justify-center gap-x-10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-4 gap-20">
            {[
              {
                title: "Robotics Equipment",
                items: [
                  "Microcontrollers & Development Boards",
                  "Sensors & Actuators",
                  "Motors & Motor Controllers",
                  "Robot Kits & Components",
                  "Industrial Automation Parts"
                ]
              },
              {
                title: "3D Printing Solutions",
                items: [
                  "Professional 3D Printers",
                  "High-Quality Filaments",
                  "Printing Accessories",
                  "Post-Processing Tools",
                  "Design Software & Support"
                ]
              },
              {
                title: "Learning Resources",
                items: [
                  "Step-by-Step Tutorials",
                  "Video Guides & Workshops",
                  "Project Ideas & Inspiration",
                  "Technical Documentation",
                  "Community Forum Access"
                ]
              },
              {
                title: "Professional Services",
                items: [
                  "Technical Consultation",
                  "Custom Project Support",
                  "Bulk Order Discounts",
                  "Priority Shipping Options",
                  "Dedicated Account Management"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="space-y-6 border p-6 flex items-center justify-center flex-col">
                <h3 className="text-2xl font-bold text-black">
                  {category.title}
                </h3>
                <ul className="space-y-3 list-disc list-inside">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-black/70">
                      <span className="text-black mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full bg-black text-white py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">
              Built by Innovators,<br />For Innovators
            </h2>
            
            <p className="text-xl text-white/70 leading-relaxed">
              Our team consists of engineers, makers, and technology enthusiasts who understand 
              your needs because we share your passion. We're not just selling products—we're 
              part of the same community, pushing boundaries and exploring what's possible.
            </p>

            <div className="pt-8 space-y-6">
              <p className="text-white/60">
                From hobbyists to professionals, from classrooms to research labs, 
                we serve a diverse community united by curiosity and creativity.
              </p>
              
              <div className="pt-4">
                <a 
                  href="mailto:grobotsclub@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 cursor-pointer"
                >
                  <span>Join Our Team</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-black/60">
              Explore our catalog of premium robotics and 3D printing solutions. 
              Get started today with expert support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="/store"
                className="inline-flex items-center justify-center px-10 py-4 bg-black text-white font-semibold hover:bg-black/80 transition-all duration-300"
              >
                Browse Products
              </a>
              <a 
                href="mailto:support@grobots.com"
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-black border-2 border-black font-semibold hover:bg-black hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
