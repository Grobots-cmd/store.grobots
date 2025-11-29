import PillNav from "@modules/layout/components/pill-nav"

export default async function Nav() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Store", href: "/store" },
    { label: "About", href: "/about" },
    { label: "Account", href: "/account" },
    { label: "Cart", href: "/cart" },
  ]

  return (
    <PillNav
      logo={
        <span className="text-white text-xl font-bold tracking-tighter">G</span>
      }
      items={navItems}
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      ease="power3.easeOut"
    />
  )
}
