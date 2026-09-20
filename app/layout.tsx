import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nova Studio | Web, Mobile App, AI & Digital Solutions",
  description: "Nova Studio creates professional websites, mobile apps, AI solutions, software, games, UI/UX designs, and digital products for businesses and brands.",
  metadataBase: new URL("https://novastudio1.online"),
  openGraph: { title: "Nova Studio | Digital products, built brilliantly", description: "A technology studio for ambitious digital products.", type: "website", url: "https://novastudio1.online" },
  icons: { icon: "/favicon.svg" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
