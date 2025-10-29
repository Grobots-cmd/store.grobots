import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region?: HttpTypes.StoreRegion | null
}) {
  // guard: return early when required data is missing
  if (!collection?.id || !region?.id) return null

  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  // ...rest of component rendering pricedProducts
  return (
    <div>
      {/* render products */}
    </div>
  )
}
