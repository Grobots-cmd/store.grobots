"use client";
import { Button , Heading} from "@medusajs/ui";
import Image from "next/image";
import { useState, Suspense } from "react";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";
import PaginatedProducts from "@modules/store/templates/paginated-products";

const productSpecs = [
  { label: "Current", value: "160A / 1200A" },
  { label: "Battery", value: "2-3S LiPo" },
  { label: "BEC", value: "6V/7.4V @ 4A" },
  { label: "Profiles", value: "10 Programs" },
  { label: "Connect", value: "WiFi Enabled" },
  { label: "Design", value: "Race Ready" },
];

const StoreTemplate = ({
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const pageNumber = page ? parseInt(page) : 1;

  return (
    <>
      {pageNumber === 1 && (
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
              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 lg:p-16 pointer-events-none">
                <div className="flex-1 flex items-center">
                  <span
                    className={`text-[clamp(2rem,10vw,8rem)] md:text-[clamp(3rem,12vw,10rem)] font-bold text-white z-[2] leading-[0.9] tracking-tighter transition-all duration-1000 ${
                      imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreTemplate;