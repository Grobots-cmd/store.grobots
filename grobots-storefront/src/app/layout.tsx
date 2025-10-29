import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import localFont from "next/font/local"

const clashDisplay = localFont({
  src: [
    { path: "../../public/fonts/ClashDisplay/ClashDisplay-Extralight.woff2", weight: "200", style: "normal" },
    { path: "../../public/fonts/ClashDisplay/ClashDisplay-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/ClashDisplay/ClashDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/ClashDisplay/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/ClashDisplay/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/ClashDisplay/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-clash",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={clashDisplay.className}>
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
