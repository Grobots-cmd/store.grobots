import { HttpTypes } from "@medusajs/types"
import ProductPreview from "@modules/products/components/product-preview"
import { Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface FeaturedProductsGridProps {
  products: HttpTypes.StoreProduct[]
  region: HttpTypes.StoreRegion
}

export default function FeaturedProductsGrid({
  products,
  region,
}: FeaturedProductsGridProps) {
  if (!products || products.length === 0) {
    return null
  }

  // Take first 4 products for featured display
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-20  px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="font-semibold text-4xl md:text-5xl text-black mb-4 tracking-tighter">
            Featured Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group"
            >
              <ProductPreview product={product} region={region} isFeatured />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <LocalizedClientLink href="/store">
            <Button
              size="xlarge"
              className="bg-black text-white hover:bg-black/80 font-medium px-12 py-6 text-base rounded-none transition-all duration-300"
            >
              View All Products
            </Button>
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}
