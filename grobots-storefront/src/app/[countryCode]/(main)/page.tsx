import { Metadata } from "next";
import Hero from "@modules/home/components/hero";
import MissionSection from "@modules/home/components/mission-section";
import ServicesSection from "@modules/home/components/services-section";
import AnimatedWordsSection from "@modules/home/components/animated-words-section";
import FeaturedProductsGrid from "@modules/home/components/featured-products-grid";
import TechnologySection from "@modules/home/components/technology-section";
import PromotionalSection from "@modules/home/components/promotional-section";
import CTASection from "@modules/home/components/cta-section";
import { listProducts } from "@lib/data/products";
import { getRegion } from "@lib/data/regions";

interface HomeProps {
  params: Promise<{ countryCode: string }>;
}

export const metadata: Metadata = {
  title: "Grobots - Advanced Robotics & 3D Printing Solutions",
  description:
    "Discover cutting-edge robotics equipment, 3D printing solutions, and expert training. Global delivery in 15 days. Empower your innovation with Grobots.",
};

export default async function Home({ params }: HomeProps) {
  const { countryCode } = await params;

  let region, products;
  try {
    region = await getRegion(countryCode);
    
    // Fetch featured products
    const productsData = await listProducts({
      regionId: region.id,
      queryParams: {
        limit: 8,
        fields: "*variants.calculated_price,+images,+thumbnail",
      },
    });
    products = productsData.response.products;
  } catch (error) {
    console.error("Failed to fetch region or products:", error);
    return <div>Failed to load data. Please try again later.</div>;
  }

  if (!region) {
    return <div>No data available.</div>;
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />
      
      
      {/* Mission Statement */}
      <MissionSection />
      
      {/* Services Overview */}
      <ServicesSection />
      
      {/* Animated Words */}
      <AnimatedWordsSection />
      
      {/* Featured Products */}
      {products && products.length > 0 && (
        <FeaturedProductsGrid products={products} region={region} />
      )}
      
      {/* Technology Highlight */}
      <TechnologySection />
      
      {/* Promotional Banners */}
      <PromotionalSection />
      
      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
