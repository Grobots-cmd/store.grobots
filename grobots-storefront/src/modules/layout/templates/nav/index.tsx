import { Suspense } from "react"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-24 mx-auto duration-200 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <nav className="content-container flex items-center justify-between w-full h-full px-6 md:px-8">
          {/* Left Section - Menu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} />
            </div>
          </div>

          {/* Center Section - Logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-3xl md:text-4xl font-bold transition-all uppercase tracking-tighter text-gray-900"
              data-testid="nav-store-link"
            >
              Medusa Store
            </LocalizedClientLink>
          </div>

          {/* Right Section - Actions */}
          <div className="flex items-center gap-x-8 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-8 h-full">
              <LocalizedClientLink
                className="text-gray-900 transition-all text-lg font-semibold relative group"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-gray-600 hover:text-gray-900 transition-all flex gap-2 text-lg font-semibold relative group"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
