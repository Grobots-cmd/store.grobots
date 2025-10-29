import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-ui-border-base w-full bg-gradient-to-b from-ui-bg-base to-ui-bg-subtle">
      <div className="content-container flex flex-col w-full">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-y-12 xsmall:flex-row items-start justify-between py-24 md:py-32">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <LocalizedClientLink
              href="/"
              className="text-5xl md:text-6xl font-bold text-ui-fg-base hover:text-ui-fg-interactive transition-all hover:scale-105 uppercase tracking-tighter"
            >
              Medusa<br/>Store
            </LocalizedClientLink>
            <p className="text-ui-fg-subtle text-lg max-w-xs leading-relaxed">
              Your premium destination for quality products and exceptional service.
            </p>
          </div>

          {/* Links Grid */}
          <div className="text-base gap-12 md:gap-x-20 grid grid-cols-2 sm:grid-cols-3">
            {/* Categories */}
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-6">
                <span className="text-2xl font-bold text-ui-fg-base uppercase tracking-tight">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-4"
                  data-testid="footer-categories"
                >
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null

                    return (
                      <li
                        className="flex flex-col gap-3"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "text-ui-fg-subtle hover:text-ui-fg-base transition-all hover:translate-x-1 text-lg font-medium",
                            children && "font-semibold"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-4 gap-3">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="text-ui-fg-subtle hover:text-ui-fg-base transition-all hover:translate-x-1 text-base"
                                    href={`/categories/${child.handle}`}
                                    data-testid="category-link"
                                  >
                                    {child.name}
                                  </LocalizedClientLink>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {/* Collections */}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-6">
                <span className="text-2xl font-bold text-ui-fg-base uppercase tracking-tight">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-4 text-ui-fg-subtle text-lg",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-ui-fg-base transition-all hover:translate-x-1 font-medium"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Company Links */}
            <div className="flex flex-col gap-y-6">
              <span className="text-2xl font-bold text-ui-fg-base uppercase tracking-tight">Medusa</span>
              <ul className="grid grid-cols-1 gap-4 text-ui-fg-subtle text-lg">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base transition-all hover:translate-x-1 font-medium inline-block"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base transition-all hover:translate-x-1 font-medium inline-block"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-ui-fg-base transition-all hover:translate-x-1 font-medium inline-block"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row w-full gap-6 py-8 mb-8 justify-between items-center text-ui-fg-muted border-t border-ui-border-base">
          <Text className="text-base font-medium">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}