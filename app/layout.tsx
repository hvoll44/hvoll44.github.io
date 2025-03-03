import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import "./globals.css"
import ThemeProvider from './components/theme-provider'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Hans Voll - Software Developer',
  description: 'Professional portfolio for Hans Voll, an experienced Software Developer with expertise in full-stack development, cloud architecture, and identity platforms.',
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
