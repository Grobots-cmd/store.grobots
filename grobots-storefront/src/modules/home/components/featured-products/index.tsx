import { HttpTypes } from "@medusajs/types"
import ProductRail from "@modules/home/components/featured-products/product-rail"

export default function FeaturedProducts({
  collections = [],
  region,
}: {
  collections?: HttpTypes.StoreCollection[]
  region?: HttpTypes.StoreRegion | null
}) {
  if (!Array.isArray(collections) || collections.length === 0) return null

  return (
    <>
      {collections.map((collection) => (
        <li key={collection.id}>
          <ProductRail collection={collection} region={region} />
        </li>
      ))}
    </>
  )
}