import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

const myFont = localFont({ src: "../public/font/DovreSocial-Light.woff2"})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lyng Landskap AS',
  description: 'Lyng Landskap AS tilbyr innovative og bærekraftige landskapsdesigntjenester i Gjøvik. Våre erfarne landskapsarkitekter hjelper deg med å skape vakre og funksjonelle uteområder. Kontakt oss for profesjonell landskapsplanlegging og -design.',
  keywords: ["Landskapsarkitekter Gjøvik", "landskapsdesign Gjøvik", "Gjøvik landskapsarkitekt", "bærekraftig landskapsdesign", "uteområder design Gjøvik", "landskapsplanlegging Gjøvik", "profesjonelle landskapsarkitekter", "lokale landskapsarkitekter Gjøvik", "Lyng Landskap AS"],
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
