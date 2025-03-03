import RootLayout from './layout'
import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // ... rest of the existing code ...
} 