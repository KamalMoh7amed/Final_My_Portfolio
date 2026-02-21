import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Kamal Mohamed Saber | .NET Backend Engineer",
  description:
    "Portfolio of Kamal Mohamed Saber — .NET Backend Engineer specializing in building clean, scalable, and maintainable backend systems using ASP.NET Core, Entity Framework Core, and SQL Server.",
  keywords: [
    "Kamal Mohamed Saber",
    ".NET",
    "Backend Engineer",
    "ASP.NET Core",
    "C#",
    "SQL Server",
    "Entity Framework Core",
    "Web API",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Kamal Mohamed Saber" }],
  openGraph: {
    title: "Kamal Mohamed Saber | .NET Backend Engineer",
    description:
      "Portfolio of Kamal Mohamed Saber — .NET Backend Engineer specializing in building clean, scalable, and maintainable backend systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Mohamed Saber | .NET Backend Engineer",
    description:
      "Portfolio of Kamal Mohamed Saber — .NET Backend Engineer.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_inter.variable} ${_spaceGrotesk.variable}`}>
      <body className="noise-overlay font-sans antialiased">{children}</body>
    </html>
  )
}
