import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  if (!product) {
    return null
  }

  // Debug: Log product image data
  console.log('Product:', product.title, 'Thumbnail:', product.thumbnail, 'Images:', product.images?.length)

  const { cheapestPrice } = getProductPrice({
    product,
  })

  // Determine badge based on product metadata or creation date
  const createdAt = new Date(product.created_at || '')
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  const isNew = createdAt > thirtyDaysAgo
  const isBestSeller = product.metadata?.best_seller === true

  // Get available colors from variants
  const colors = product.variants
    ?.map((variant) => variant.metadata?.color as string)
    .filter((color, index, self) => color && self.indexOf(color) === index)
    .slice(0, 4) || []

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="flex flex-col">
        {/* Image Container with Badge */}
        <div className="relative mb-4">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
            className="rounded-2xl overflow-hidden group-hover:opacity-90 transition-opacity duration-300"
          />
          
          {/* Badge */}
          {(isNew || isBestSeller) && (
            <div className="absolute top-4 left-4 z-10">
              {isBestSeller && (
                <span className="inline-block px-3 py-1.5 bg-[#1a5c4a] text-white text-xs font-semibold rounded-md">
                  Best Seller
                </span>
              )}
              {isNew && !isBestSeller && (
                <span className="inline-block px-3 py-1.5 bg-[#d44b3c] text-white text-xs font-semibold rounded-md">
                  New
                </span>
              )}
            </div>
          )}

          {/* Shop Now Button - appears on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
              Shop Now
              <span>→</span>
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <Text className="text-black font-semibold text-base mb-0.5 truncate" data-testid="product-title">
              {product.title}
            </Text>
            <Text className="text-black/50 text-sm">
              {product.subtitle || product.collection?.title || 'Product'}
            </Text>
          </div>
          
          <div className="flex-shrink-0">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>

        {/* Color Variants */}
        {colors.length > 0 && (
          <div className="flex items-center gap-2 mt-3">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full border border-black/20"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        )}
      </div>
    </LocalizedClientLink>
  )
}
