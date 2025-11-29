import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-black/10 w-full bg-white">
      <div className="content-container flex flex-col w-full">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-y-12 xsmall:flex-row items-start justify-between py-20 md:py-24">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <LocalizedClientLink
              href="/"
              className="text-3xl md:text-4xl font-semibold text-black hover:opacity-70 transition-opacity uppercase tracking-tighter"
            >
              GROBOTS
            </LocalizedClientLink>
            <p className="text-black/60 text-sm max-w-xs leading-relaxed font-light tracking-tight">
              Premium robotics equipment and 3D printing solutions.
            </p>
          </div>

          {/* Links Grid */}
          <div className="text-sm gap-12 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {/* Categories */}
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-4">
                <span className="text-base font-semibold text-black uppercase tracking-tight">
                  Categories
                </span>
                <ul
                  className="grid grid-cols-1 gap-3"
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
                        className="flex flex-col gap-2"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "text-black/60 hover:text-black transition-colors text-sm font-medium tracking-tight",
                            children && "font-semibold"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children &&
                              children.map((child) => (
                                <li key={child.id}>
                                  <LocalizedClientLink
                                    className="text-black/60 hover:text-black transition-colors text-sm font-light tracking-tight"
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
              <div className="flex flex-col gap-y-4">
                <span className="text-base font-semibold text-black uppercase tracking-tight">
                  Collections
                </span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-3 text-black/60 text-sm",
                    {
                      "grid-cols-2": (collections?.length || 0) > 3,
                    }
                  )}
                >
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-black transition-colors font-medium tracking-tight"
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
            <div className="flex flex-col gap-y-4">
              <span className="text-base font-semibold text-black uppercase tracking-tight">About</span>
              <ul className="grid grid-cols-1 gap-3 text-black/60 text-sm">
                <li>
                  <a
                    href="https://github.com/medusajs"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black transition-colors font-medium tracking-tight inline-block"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.medusajs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black transition-colors font-medium tracking-tight inline-block"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/medusajs/nextjs-starter-medusa"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-black transition-colors font-medium tracking-tight inline-block"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row w-full gap-4 py-6 justify-between items-center text-black/50 border-t border-black/10">
          <Text className="text-xs font-medium tracking-tight">
            © {new Date().getFullYear()} Grobots. All rights reserved.
          </Text>
          <div className="flex gap-6 text-xs font-medium tracking-tight">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
