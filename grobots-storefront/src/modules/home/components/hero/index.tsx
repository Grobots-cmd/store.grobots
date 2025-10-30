"use client";
import { Button, Heading } from "@medusajs/ui";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const productSpecs = [
  { label: "Current", value: "160A / 1200A" },
  { label: "Battery", value: "2-3S LiPo" },
  { label: "BEC", value: "6V/7.4V @ 4A" },
  { label: "Profiles", value: "10 Programs" },
  { label: "Connect", value: "WiFi Enabled" },
  { label: "Design", value: "Race Ready" },
];

const slideshowImages = [
  { url: "/download.png", alt: "XeRun XR10 Pro - Front View" },
  { url: "/download-Photoroom.png", alt: "XeRun XR10 Pro - Side View" },
  { url: "/11.jpg", alt: "XeRun XR10 Pro - Detail Shot" },
  { url: "/action.jpg", alt: "XeRun XR10 Pro - In Action" },
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const totalSlides = slideshowImages.length;

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  useEffect(() => {
    if (!isModalOpen && isAutoPlaying) {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [isModalOpen, isAutoPlaying, nextSlide]);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      else if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, nextSlide, prevSlide]);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="h-screen w-full border-b border-ui-border-base relative bg-ui-bg-subtle p-4">
        <div className="w-full h-full flex items-center justify-center bg-black rounded-t-3xl">
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-t-xl">
            <div className="w-full h-full">
              <div className="h-full w-full z-[1] relative">
                <Image
                  src="/download.png"
                  alt="Hero Image"
                  fill
                  className="object-cover"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none z-[1]" />
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 lg:p-16 pointer-events-none">
              <div className="flex-1 flex items-center">
                <span
                  className={`text-[clamp(2rem,10vw,8rem)] md:text-[clamp(3rem,12vw,10rem)] font-bold text-white z-[2] leading-[0.9] tracking-tighter transition-all duration-1000 ${
                    imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ textShadow: "0 8px 32px rgba(0,0,0,0.8)" }}
                >
                  XeRun<br />XR10 Pro
                </span>
              </div>
              <div
                className={`z-[3] pointer-events-auto space-y-6 max-w-4xl transition-all duration-1000 delay-300 ${
                  imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <p className="text-lg md:text-xl text-white/90 font-medium drop-shadow-lg">
                  Professional-grade 1/10-scale sensored brushless ESC engineered for competitive RC racing
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm md:text-base">
                  {productSpecs.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-white/60 text-xs">{spec.label}</div>
                      <div className="text-white font-semibold">{spec.value}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-6 pt-4">
                  <Button
                    size="xlarge"
                    className="bg-white text-black hover:bg-gray-100 text-xl font-bold px-12 py-6 shadow-2xl rounded-lg"
                  >
                    Learn More
                  </Button>
                  <Button
                    size="xlarge"
                    className="bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border-2 border-white/40 text-xl font-bold px-12 py-6 shadow-2xl rounded-lg"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="w-[28vw] h-[30vh] min-w-[280px] min-h-[200px] bg-white absolute bottom-0 right-0 rounded-tl-3xl group cursor-pointer transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-white/20 z-[4]"
                aria-label="Open product gallery"
              >
                <div className="w-full h-full p-6 flex flex-col justify-between relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>
                  <div className="relative z-10 flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <div
                          key={index}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === activeSlide
                              ? 'bg-black w-12 group-hover:w-16'
                              : 'bg-gray-300 w-2'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        {activeSlide + 1}/{totalSlides}
                      </span>
                    </div>
                    <span className="text-2xl text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-xl overflow-hidden">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white text-3xl z-50"
            >
              &times;
            </button>
            <Image
              src={slideshowImages[activeSlide].url}
              alt={slideshowImages[activeSlide].alt}
              fill
              className="object-contain"
            />
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl z-50"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
